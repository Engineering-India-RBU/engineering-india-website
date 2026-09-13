import { useEffect, useState } from 'react'
import Container from '../../../components/ui/Container'
import { HERO_CONTENT } from '../constants'
import './Hero.css'

function useTypewriter(text: string, speed = 120) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let index = 0
    let timeoutId: ReturnType<typeof setTimeout>

    setDisplayed('')

    const tick = () => {
      index += 1
      setDisplayed(text.slice(0, index))

      if (index < text.length) {
        timeoutId = setTimeout(tick, speed)
      }
    }

    timeoutId = setTimeout(tick, speed)

    return () => clearTimeout(timeoutId)
  }, [text, speed])

  return displayed
}

function Hero() {
  const typedTitle = useTypewriter(HERO_CONTENT.eyebrow)

  return (
    <section className="hero">
      <img
        className="hero__image"
        src="/homepage/cover2.JPG"
        alt=""
      />

      <div className="hero__overlay" aria-hidden="true" />

      <Container>
        <div className="hero__content">
          <h1>
            {typedTitle}
            {typedTitle.length < HERO_CONTENT.eyebrow.length && (
              <span className="hero__cursor" aria-hidden="true">
                |
              </span>
            )}
          </h1>

          <p className="hero__subtitle">
            {HERO_CONTENT.title}
          </p>

          <p className="hero__description">
            {HERO_CONTENT.description}
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Hero