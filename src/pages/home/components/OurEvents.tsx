import Container from '../../../components/ui/Container'
import Button from '../../../components/ui/Button'
import { EVENTS } from '../../events/constants'
import { eventTimestamp, formatShortDate } from '../../events/utils'
import type { ClubEvent } from '../../events/constants'
import './OurEvents.css'

const HOME_EVENTS = [...EVENTS]
  .sort((a, b) => eventTimestamp(b.date) - eventTimestamp(a.date))
  .slice(0, 6)

function EventCard({ event }: { event: ClubEvent }) {
  return (
    <a href={event.href} className="our-events__card">
      <div className="our-events__image-wrapper">
        <img src={event.image} alt="" className="our-events__image" />
      </div>

      <div className="our-events__content">
        <p className="our-events__category">{formatShortDate(event.date)}</p>

        <h3>{event.title}</h3>

        <p className="our-events__description">{event.description}</p>

        <span className="our-events__link">
          Explore event <span aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  )
}

function OurEvents() {
  return (
    <section className="our-events">
      <Container>
        <div className="our-events__header">
          <div>
            <h2>Our Events</h2>

            <p className="our-events__subtitle">
              Experiences that bring ideas to life.
            </p>
          </div>
        </div>

        <div className="our-events__track">
          <div className="our-events__group">
            {HOME_EVENTS.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="our-events__group" aria-hidden="true">
            {HOME_EVENTS.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        <div className="our-events__footer">
          <Button href="/events" variant="light">
            Explore Initiatives
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default OurEvents