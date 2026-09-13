import { useEffect, useRef, useState } from 'react'
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import Container from '../../../components/ui/Container'
import Button from '../../../components/ui/Button'
import type { ClubEvent } from '../constants'
import './FeaturedEvent.css'

function initialsFor(title: string) {
  return title
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function FeaturedEvent({ event }: { event: ClubEvent }) {
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

  const highlights = event.highlights.slice(0, 5)

  return (
    <section
      ref={sectionRef}
      className={`events-featured events-featured--reveal ${
        isVisible ? 'events-featured--visible' : ''
      }`}
    >
      <Container>
        <div className="events-featured__grid">
          <div className="events-featured__media">
            <img
              src={event.image}
              alt=""
              loading="lazy"
              onError={(imageEvent) => {
                imageEvent.currentTarget.style.display = 'none'
              }}
            />
            <span className="events-featured__monogram" aria-hidden="true">
              {initialsFor(event.title)}
            </span>
          </div>

          <div className="events-featured__content">
            <p className="events-featured__eyebrow">
              Featured
            </p>

            <span className="events-featured__index" aria-hidden="true">
              01
            </span>

            <h2>{event.title}</h2>

            {event.tagline && (
              <p className="events-featured__tagline">
                {event.tagline}
              </p>
            )}

            <ul className="events-featured__meta">
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

            <p className="events-featured__description">
              {event.description}
            </p>

            {highlights.length > 0 && (
              <>
                <h3 className="events-featured__highlights-title">
                  What to Expect
                </h3>

                <ul className="events-featured__highlights">
                  {highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="events-featured__actions">
              <Button href={event.href} variant="light">
                Discover {event.title}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedEvent