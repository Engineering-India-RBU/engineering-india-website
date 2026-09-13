import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import './GaneshGreetingModal.css'

const FESTIVAL_DATES = ['2026-09-13','2026-09-14']

const TITLE_ARIA = 'Happy Ganesh Chaturthi'
const TITLE_LINES = ['Happy Ganesh', 'Chaturthi']
const HINDI_GREETING = 'गणेश चतुर्थी की हार्दिक शुभकामनाएं'
const SHLOKA = [
  'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ',
  'निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा',
]
const BLESSING =
  'Engineering India RBU wishes you and your loved ones a very Happy Ganesh Chaturthi. ' +
  'May Lord Ganesha bless you with wisdom, prosperity, happiness, and success, ' +
  'and may every new beginning bring you closer to your dreams.'

const PETALS = [
  { left: '6%', size: 14, drift: 150, opacity: 0.5, delay: 0, duration: 14 },
  { left: '14%', size: 20, drift: -120, opacity: 0.42, delay: 3, duration: 17 },
  { left: '38%', size: 15, drift: 170, opacity: 0.5, delay: 7, duration: 13 },
  { left: '62%', size: 17, drift: -150, opacity: 0.46, delay: 2, duration: 16 },
  { left: '84%', size: 16, drift: 130, opacity: 0.5, delay: 5, duration: 15 },
  { left: '92%', size: 12, drift: -90, opacity: 0.4, delay: 8.5, duration: 12 },
  { left: '50%', size: 22, drift: -70, opacity: 0.35, delay: 11, duration: 18 },
]

const SPARKS = [
  { top: '22%', left: '10%', delay: 0, duration: 5 },
  { top: '30%', left: '88%', delay: 1.2, duration: 6 },
  { top: '58%', left: '6%', delay: 2, duration: 5.5 },
  { top: '70%', left: '90%', delay: 0.8, duration: 6 },
  { top: '84%', left: '24%', delay: 3, duration: 5 },
]

function toDateKey(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function storageKey(): string {
  return `gc-greeting-seen-${toDateKey(new Date())}`
}

function GaneshGreetingModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!FESTIVAL_DATES.includes(toDateKey(new Date()))) return
    if (sessionStorage.getItem(storageKey())) return

    const timer = window.setTimeout(() => setIsOpen(true), 1100)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    closeButtonRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeGreeting()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [isOpen])

  const closeGreeting = () => {
    if (isLeaving || !isOpen) return
    setIsLeaving(true)
    sessionStorage.setItem(storageKey(), '1')
    window.setTimeout(() => {
      setIsOpen(false)
      setIsLeaving(false)
    }, 440)
  }

  if (!isOpen) return null

  return (
    <div
      className={`gc-overlay${isLeaving ? ' gc-overlay--leaving' : ''}`}
      onClick={(event) => {
        if (event.currentTarget === event.target) closeGreeting()
      }}
    >
      {PETALS.map((petal, index) => (
        <span
          key={`petal-${index}`}
          className="gc-petal"
          style={
            {
              left: petal.left,
              width: petal.size,
              height: petal.size * 1.8,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
              '--drift': `${petal.drift}px`,
              '--petal-opacity': petal.opacity,
            } as CSSProperties
          }
        />
      ))}

      {SPARKS.map((spark, index) => (
        <span
          key={`spark-${index}`}
          className="gc-spark"
          style={{
            top: spark.top,
            left: spark.left,
            animationDuration: `${spark.duration}s`,
            animationDelay: `${spark.delay}s`,
          }}
        />
      ))}

      <div className="gc-card" role="dialog" aria-modal="true" aria-labelledby="gc-title">
        <span className="gc-corner gc-corner--tl" aria-hidden="true" />
        <span className="gc-corner gc-corner--bl" aria-hidden="true" />
        <span className="gc-corner gc-corner--br" aria-hidden="true" />

        <button
          ref={closeButtonRef}
          className="gc-card__close"
          type="button"
          aria-label="Close greeting"
          onClick={closeGreeting}
        >
          ×
        </button>

        <div className="gc-card__body">
          <div className="gc-ganesha">
            <span className="gc-ganesha__halo" aria-hidden="true" />
            <img
              className="gc-ganesha__img"
              src="/homepage/ganesha.png"
              alt="Lord Ganesha"
            />
          </div>

          <img
            className="gc-card__logo"
            src="/homepage/Engineering India logo.png"
            alt="Engineering India"
          />

          <h2 className="gc-card__title" id="gc-title" aria-label={TITLE_ARIA}>
            {TITLE_LINES.map((line) => (
              <span key={line} className="gc-card__title-line">
                {line}
              </span>
            ))}
          </h2>

          <p className="gc-card__hindi">{HINDI_GREETING}</p>

          <div className="gc-divider" aria-hidden="true">
            <span className="gc-divider__line" />
            <span className="gc-divider__rosette" />
            <span className="gc-divider__om">ॐ</span>
            <span className="gc-divider__rosette" />
            <span className="gc-divider__line" />
          </div>

          <p className="gc-card__shloka">
            {SHLOKA.map((line) => (
              <span key={line} className="gc-card__shloka-line">
                {line}
              </span>
            ))}
          </p>

          <p className="gc-card__message">{BLESSING}</p>
        </div>

        <div className="gc-card__base" aria-hidden="true">
          {[0, 1, 2].map((index) => (
            <div className="gc-diya" key={index}>
              <span
                className="gc-diya__glow"
                style={{ animationDelay: `${0.9 + index * 0.35}s` }}
              />
              <span
                className="gc-diya__flame"
                style={{ animationDelay: `${0.9 + index * 0.35}s` }}
              />
              <span className="gc-diya__bowl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GaneshGreetingModal