process.env.TF_CPP_MIN_LOG_LEVEL = '3'
const fs = require('node:fs')
const path = require('node:path')
const sharp = require('sharp')

const REPO = path.resolve(__dirname, '..', '..')
const SRC = path.join(REPO, 'public', 'events')

const MAX_W = 1600
const QUALITY = 82

const EXTS = new Set(['.jpg', '.jpeg', '.jpe', '.png', '.webp'])

async function main() {
  if (!fs.existsSync(SRC)) {
    console.error(`Create ${SRC}/ and drop the raw event photos there first.`)
    process.exit(1)
  }

  const files = fs
    .readdirSync(SRC)
    .filter((f) => !f.startsWith('.'))
    .filter((f) => EXTS.has(path.extname(f).toLowerCase()))

  if (files.length === 0) {
    console.log('Nothing to convert in public/events/.')
    return
  }

  let converted = 0
  let deleted = 0

  for (const f of files) {
    const ext = path.extname(f).toLowerCase()
    const srcPath = path.join(SRC, f)
    const dest = path.join(SRC, path.parse(f).name + '.webp')

    if (ext === '.webp') {
      const meta = await sharp(srcPath, { failOn: 'none' }).metadata()
      if ((meta.width || 0) > MAX_W) {
        await sharp(srcPath, { failOn: 'none' })
          .autoOrient()
          .resize({ width: MAX_W })
          .webp({ quality: QUALITY })
          .toFile(dest + '.tmp')
        fs.renameSync(dest + '.tmp', dest)
        console.log(`OPT ${f}`)
      } else {
        console.log(`SKIP ${f} (already webp, ${meta.width}px)`)
      }
      continue
    }

    await sharp(srcPath, { failOn: 'none' })
      .autoOrient()
      .resize({ width: MAX_W, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(dest)

    try {
      fs.unlinkSync(srcPath)
      console.log(`OK  ${f} -> ${path.parse(f).name}.webp  (original deleted)`)
      deleted += 1
    } catch (err) {
      console.log(
        `OK  ${f} -> ${path.parse(f).name}.webp  (WARNING: could not delete original — ${err.message})`,
      )
    }
    converted += 1
  }

  console.log(
    `\nDone. Converted ${converted} photo(s), deleted ${deleted} original(s) in public/events/.`,
  )
  console.log('Tip: point an event in src/pages/events/constants.ts to /events/<name>.webp.')
}

main()