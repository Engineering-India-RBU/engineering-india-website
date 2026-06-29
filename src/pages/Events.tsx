import PageLayout from "../components/layout/PageLayout";
import { flagshipEvents, otherEvents } from "../data/events";
import type { Event } from "../data/events";
import "./Events.css";

// ─── Reusable EventCard ───────────────────────────────────────────────────────

interface EventCardProps {
  event: Event;
  variant: "flagship" | "other";
}

function EventCard({ event, variant }: EventCardProps) {
  const isFlagship = variant === "flagship";

  return (
    <article
      className={`event-card ${isFlagship ? "flagship-card" : "other-card"}`}
    >
      {/* Image */}
      <div className="event-card-image-wrap">
        <img src={event.image} alt={event.title} loading="lazy" />
        {event.category && (
          <span className="event-badge">{event.category}</span>
        )}
      </div>

      {/* Body */}
      <div className="event-card-body">
        {event.date && (
          <p className="event-card-meta">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {event.date}
          </p>
        )}

        <h3>{event.title}</h3>
        <p>{event.description}</p>

        {isFlagship && (
          <div className="event-card-footer">
            <button className="event-learn-btn">
              Learn more
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

// ─── Events page ──────────────────────────────────────────────────────────────

export default function Events() {
  return (
    <PageLayout>
      <div className="events-page">
        {/* Hero */}
        <header className="events-hero">
          <span className="events-tag">Engineering India</span>
          <h1>
            Our <span>Events</span>
          </h1>
          <p>
            Info about Flagship Events and other events will be updated here
          </p>
        </header>

        {/* Flagship Events */}
        <section className="events-section" aria-labelledby="flagship-heading">
          <div className="section-header">
            <h2 id="flagship-heading">Flagship Events</h2>
            <p>Our signature programmes that define the EI experience</p>
            <div className="section-divider" />
          </div>
          <div className="flagship-grid">
            {flagshipEvents.map((event: Event) => (
              <EventCard key={event.id} event={event} variant="flagship" />
            ))}
          </div>
        </section>

        {/* Other Events */}
        <section className="events-section" aria-labelledby="other-heading">
          <div className="section-header">
            <h2 id="other-heading">Other Events</h2>
            <p>Additional programmes, workshops, and community initiatives</p>
            <div className="section-divider" />
          </div>
          <div className="other-grid">
            {otherEvents.map((event: Event) => (
              <EventCard key={event.id} event={event} variant="other" />
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}