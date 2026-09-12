import Container from '../../../components/ui/Container'
import { OUR_EVENTS } from '../constants'
import './OurEvents.css'

function OurEvents() {
  return (
    <section className="our-events">
      <Container>
        <div className="our-events__header">
          <div>
            <p className="our-events__eyebrow">Our Events</p>

            <h2>
              Experiences that bring
              <br />
              ideas to life.
            </h2>
          </div>
        </div>

        <div className="our-events__track">
          {OUR_EVENTS.map((event) => (
            <a
              key={event.title}
              href={event.href}
              className="our-events__card"
            >
              <div className="our-events__image-wrapper">
                <img
                  src={event.image}
                  alt=""
                  className="our-events__image"
                />
              </div>

              <div className="our-events__content">
                <p className="our-events__category">
                  {event.category}
                </p>

                <h3>{event.title}</h3>

                <p className="our-events__description">
                  {event.description}
                </p>

                <span className="our-events__link">
                  Explore event <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default OurEvents