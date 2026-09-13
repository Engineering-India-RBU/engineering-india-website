process.env.TF_CPP_MIN_LOG_LEVEL = '3'
const fs = require('node:fs')
const path = require('node:path')
const sharp = require('sharp')
const tf = require('@tensorflow/tfjs-node')
const faceapi = require('@vladmandic/face-api')
const heicConvert = require('heic-convert')

const REPO = path.resolve(__dirname, '..', '..')
const SRC = path.join(REPO, 'public', 'team')
const MODEL = path.join(__dirname, 'node_modules', '@vladmandic', 'face-api', 'model')

const OUT_W = 640
const OUT_H = 800
const FACE_FRAC = 0.42   // target: face box ~42% of the crop height
const HEAD_FRAC = 0.47   // crop top sits 47% of crop height above the face centre

// Only image formats get converted — .webp files are already final.
const RAW_EXTS = new Set(['.jpg', '.jpeg', '.jpe', '.png', '.heic', '.heif'])

// Drop in a photo and run `pnpm photos`: the raw file becomes a
// headshot-cropped .webp and the original is deleted.

// Compute a 4:5 crop around the (largest) face that NEVER cuts the head:
// the crop is shrunk (zoom-out) whenever the source photo is framed too
// tightly to fit the preferred headroom above the eyebrows.
function faceCrop(face, info) {
  const faceH = face.box.height
  const faceW = face.box.width
  const fx = face.box.x + faceW / 2
  const fy = face.box.y + faceH / 2

  const baseScale = faceH / (OUT_H * FACE_FRAC)
  const floorScale = faceH / OUT_H // always keeps the full face box

  // Scale limits that keep the crop inside the source image
  // (top >= 0, bottom <= info.height, crop centered horizontally).
  const maxForHead = fy / (HEAD_FRAC * OUT_H)
  const maxForBottom = (info.height - fy) / ((1 - HEAD_FRAC) * OUT_H)
  const maxForWidth = info.width / OUT_W
  const maxForHoriz = Math.min(2 * fx, 2 * (info.width - fx)) / OUT_W

  let scale = baseScale
  for (const limit of [maxForHead, maxForBottom, maxForWidth, maxForHoriz]) {
    if (!(limit > 0)) return null
    scale = Math.min(scale, limit)
  }
  if (scale < floorScale) return null

  const Wc = parseInt(OUT_W * scale)
  const Hc = parseInt(OUT_H * scale)
  const left = Math.max(0, Math.min(Math.round(fx - Wc / 2), info.width - Wc))

  // Vertical: target 15% of the crop as headroom above the eyebrows, but
  // step the crop up as high as possible (best headroom) preferring to
  // keep the chin inside over headroom.
  const headroom = Math.round(0.15 * Hc)
  let top = Math.round(face.box.y - headroom)
  top = Math.max(top, face.box.y + faceH - Hc) // chin must stay inside
  top = Math.max(top, 0) // within the image
  top = Math.min(top, info.height - Hc) // within the image
  top = Math.max(top, face.box.y + faceH - Hc) // re-check chin after clamps
  if (top < 0) return null

  if (Wc <= 0 || Hc <= 0 || left + Wc > info.width || top + Hc > info.height) return null
  return { left, top, width: Wc, height: Hc }
}

function loadBuffer(file) {
  const ext = path.extname(file).toLowerCase()
  if (ext === '.heic' || ext === '.heif') {
    return heicConvert({ buffer: fs.readFileSync(file), format: 'JPEG', quality: 1 })
  }
  return fs.readFileSync(file)
}

async function detectFaces(buf) {
  // Flatten/convert to 3-channel sRGB — face-api (tfjs) can't handle
  // RGBA or greyscale tensors.
  const { data, info } = await sharp(buf, { failOn: 'none' })
    .autoOrient()
    .toColorspace('srgb')
    .flatten({ background: '#fff' })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })
  const tensor = tf.tensor(Buffer.from(data), [info.height, info.width, 3])
  const options = new faceapi.TinyFaceDetectorOptions({ inputSize: 416, scoreThreshold: 0.3 })
  const det = await faceapi.detectAllFaces(tensor, options)
  tensor.dispose()
  return { info, det }
}

function largestFace(det) {
  return det.reduce((best, d) => {
    const area = d.box.width * d.box.height
    return !best || area > best.area ? { box: d.box, area } : best
  }, null)
}

function normalizeStem(name) {
  return name
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase()
}

function removeSource(file) {
  try {
    fs.unlinkSync(file)
    return true
  } catch (err) {
    console.log(
      `  (WARNING: could not delete original ${path.basename(file)} — ${err.message})`,
    )
    return false
  }
}

async function processFile(file) {
  const buf = await loadBuffer(file)
  let info, face = null
  try {
    const res = await detectFaces(buf)
    info = res.info
    face = largestFace(res.det)
  } catch (err) {
    console.log(`  (face detection failed for ${path.basename(file)} — ${err.message})`)
    try {
      const meta = await sharp(buf, { failOn: 'none' }).autoOrient().metadata()
      info = { width: meta.width, height: meta.height }
    } catch {
      console.log(`  (SKIP: cannot decode ${path.basename(file)} — not a real JPG/PNG/HEIC)`)
      return false
    }
  }

  const dest = path.join(SRC, normalizeStem(path.parse(file).name) + '.webp')
  const pipeline = sharp(buf, { failOn: 'none' }).autoOrient()

  if (face) {
    const rect = faceCrop(face, info)
    if (rect) {
      await pipeline
        .extract(rect)
        .resize(OUT_W, OUT_H, { fit: 'contain', background: { r: 255, g: 255, b: 255 } })
        .webp({ quality: 80 })
        .toFile(dest)
      console.log(`OK  ${path.basename(file)} -> ${path.basename(dest)}  face=${Math.round(face.box.width)}x${Math.round(face.box.height)}`)
      return removeSource(file)
    }
  }

  await pipeline
    .resize(OUT_W, OUT_H, { fit: 'contain', background: { r: 255, g: 255, b: 255 } })
    .webp({ quality: 80 })
    .toFile(dest)
  console.log(`OK  ${path.basename(file)} -> ${path.basename(dest)}  NO FACE -> full photo on white`)
  return removeSource(file)
}

async function main() {
  if (!fs.existsSync(SRC)) {
    console.error(`Create ${SRC}/ and drop the raw photos (HEIC/JPG/PNG) there first.`)
    process.exit(1)
  }

  await tf.setBackend('tensorflow')
  await tf.ready()
  await faceapi.nets.tinyFaceDetector.loadFromDisk(MODEL)

  const files = fs
    .readdirSync(SRC)
    .filter((f) => !f.startsWith('.') && RAW_EXTS.has(path.extname(f).toLowerCase()))

  if (files.length === 0) {
    console.log('Nothing to convert in public/team/.')
    return
  }

  let converted = 0
  let deleted = 0
  let skipped = 0
  for (const f of files) {
    const ok = await processFile(path.join(SRC, f))
    if (ok) {
      converted += 1
      deleted += 1
    } else {
      skipped += 1
    }
  }
  console.log(
    `\nDone. Converted ${converted} photo(s) to webp, deleted ${deleted} original(s) in public/team/.`,
  )
  if (skipped > 0) {
    console.log(`Skipped ${skipped} file(s) that couldn't be decoded — replace them with a real JPG/PNG/HEIC.`)
  }
  console.log('Tip: reference them as /team/<name>.webp in src/pages/team/constants.ts.')
}

main()