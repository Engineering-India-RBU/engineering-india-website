import { useEffect, useRef, useState } from 'react'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Container from '../../../components/ui/Container'
import type { ClubEvent } from '../constants'
import { formatShortDate } from '../utils'
import './EventsGrid.css'

function initialsFor(title: string) {
  return title
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function EventCard({ event, index }: { event: ClubEvent; index: number }) {
  return (
    <article
      className="events-grid__card"
      style={
        {
          '--card-delay': `${index * 90}ms`,
        } as React.CSSProperties
      }
    >
      <div className="events-grid__media">
        <img
          src={event.image}
          alt=""
          loading="lazy"
          onError={(imageEvent) => {
            imageEvent.currentTarget.style.display = 'none'
          }}
        />
        <span className="events-grid__monogram" aria-hidden="true">
          {initialsFor(event.title)}
        </span>

        <span className="events-grid__stamp">
          {formatShortDate(event.date)}
        </span>
      </div>

      <div className="events-grid__body">
        <h3>{event.title}</h3>

        {event.tagline && (
          <p className="events-grid__tagline">{event.tagline}</p>
        )}

        <p className="events-grid__description">{event.description}</p>

        <ul className="events-grid__meta">
          <li>
            <FaCalendarAlt aria-hidden="true" />
            {event.date || 'Date TBA'}
          </li>
          {event.location && (
            <li>
              <FaMapMarkerAlt aria-hidden="true" />
              {event.location}
            </li>
          )}
        </ul>

        <a className="events-grid__link" href={event.href}>
          Explore event <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}

function EventsGrid({ events }: { events: readonly ClubEvent[] }) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0,
      },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  if (events.length === 0) {
    return null
  }

  return (
    <section
      ref={sectionRef}
      className={`events-grid ${
        isVisible ? 'events-grid--visible' : ''
      }`}
    >
      <Container>
        <div className="events-grid__header">
          <p className="events-grid__eyebrow">The Lineup</p>

          <h2>Every event, an experience.</h2>
        </div>

        <div className="events-grid__track">
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default EventsGrid