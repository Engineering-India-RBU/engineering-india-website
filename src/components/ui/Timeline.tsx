import "./Timeline.css";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon?: string;
  color?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
}

export default function Timeline({ events, title, subtitle }: TimelineProps) {
  return (
    <section className="timeline-section">
      {title && <h2 className="headline-lg timeline-heading">{title}</h2>}
      {subtitle && <p className="body-md timeline-subtitle">{subtitle}</p>}

      <div className="timeline">
        <div className="timeline-line" />
        {events.map((event, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`} key={index}>
            <div className="timeline-node" style={{ background: event.color || "var(--primary)" }}>
              <span className="material-symbols-outlined timeline-node-icon">{event.icon || "event"}</span>
            </div>
            <div className="timeline-card">
              <span className="timeline-date">{event.date}</span>
              <h3 className="headline-sm timeline-card-title">{event.title}</h3>
              <p className="body-md timeline-card-desc">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
