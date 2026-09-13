import Container from '../../../components/ui/Container'
import { ABOUT_HERO } from '../constants'
import './AboutHero.css'

function AboutHero() {
  return (
    <section className="about-hero">
      <Container>
        <div className="about-hero__content">
          <p className="about-hero__eyebrow">{ABOUT_HERO.eyebrow}</p>

          <h1 className="about-hero__title">{ABOUT_HERO.title}</h1>

          <p className="about-hero__description">
            {ABOUT_HERO.description}
          </p>

          <div className="about-hero__meta">
            <span className="about-hero__meta-line" aria-hidden="true" />
            <span className="about-hero__timeline">
              {ABOUT_HERO.timeline}
            </span>
          </div>
        </div>
      </Container>

      <div className="about-hero__emblem" aria-hidden="true">
        <span className="about-hero__emblem-ring" />
        <span className="about-hero__emblem-core" />
      </div>
    </section>
  )
}

export default AboutHero