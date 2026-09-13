import Container from '../../../components/ui/Container'
import { EVENTS_HERO } from '../constants'
import './EventsHero.css'

function EventsHero() {
  return (
    <section className="events-hero">
      <Container>
        <div className="events-hero__content">
          <p className="events-hero__eyebrow">
            {EVENTS_HERO.eyebrow}
          </p>

          <h1 className="events-hero__title">
            {EVENTS_HERO.title}{' '}
            <span className="events-hero__accent">
              {EVENTS_HERO.accent}
            </span>
          </h1>

          <p className="events-hero__description">
            {EVENTS_HERO.description}
          </p>
        </div>
      </Container>

      <div className="events-hero__scroll" aria-hidden="true">
        <span className="events-hero__scroll-track">
          <span className="events-hero__scroll-dot" />
        </span>
      </div>
    </section>
  )
}

export default EventsHero