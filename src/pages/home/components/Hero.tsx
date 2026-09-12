import Container from '../../../components/ui/Container'
import Button from '../../../components/ui/Button'
import { HERO_CONTENT } from '../constants'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__image"
        src="/images/team-hero.jpg"
        alt=""
      />

      <div className="hero__overlay" aria-hidden="true" />

      <Container>
        <div className="hero__content">
          <p className="hero__eyebrow">{HERO_CONTENT.eyebrow}</p>

          <h1>{HERO_CONTENT.title}</h1>

          <p className="hero__description">
            {HERO_CONTENT.description}
          </p>

          <div className="hero__actions">
            <Button>{HERO_CONTENT.primaryAction}</Button>
            <Button variant="light">
              {HERO_CONTENT.secondaryAction}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero