import Container from '../../../components/ui/Container'
import Button from '../../../components/ui/Button'
import { EVENTS_CTA } from '../constants'
import './EventsCTA.css'

function EventsCTA() {
  return (
    <section className="events-cta">
      <Container>
        <div className="events-cta__box">
          <p className="events-cta__eyebrow">
            {EVENTS_CTA.eyebrow}
          </p>

          <h2>{EVENTS_CTA.title}</h2>

          <p className="events-cta__description">
            {EVENTS_CTA.description}
          </p>

          <div className="events-cta__actions">
            <Button variant="light" href="/join">
              {EVENTS_CTA.primaryAction}
            </Button>

            <Button variant="ghost" href="/contact">
              {EVENTS_CTA.secondaryAction}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default EventsCTA