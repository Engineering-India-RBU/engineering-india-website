import "./FlipCard.css";

interface FlipCardProps {
  name: string;
  role: string;
  description?: string;
  email?: string;
  photo?: string;
  icon?: string;
  iconBg?: string;
  iconColor?: string;
}

export default function FlipCard({ name, role, description, email, photo, icon = "account_circle", iconBg = "var(--secondary-container)", iconColor = "var(--on-secondary-container)" }: FlipCardProps) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front">
          <div className="flip-card-img">
            {photo ? (
              <img src={photo} alt={name} className="flip-card-photo" />
            ) : (
              <div className="flip-card-avatar" style={{ background: iconBg }}>
                <span className="material-symbols-outlined" style={{ fontSize: "48px", color: iconColor }}>{icon}</span>
              </div>
            )}
          </div>
          <h3 className="headline-sm">{name}</h3>
          <span className="flip-card-role">{role}</span>
          <span className="flip-card-hint">Hover to flip</span>
        </div>

        {/* Back */}
        <div className="flip-card-back">
          <div className="flip-card-back-content">
            <h3 className="headline-sm" style={{ marginBottom: "8px" }}>{name}</h3>
            <span className="flip-card-role" style={{ display: "block", marginBottom: "12px" }}>{role}</span>
            {description && <p className="body-md flip-card-desc">{description}</p>}
            {email && (
              <a href={`mailto:${email}`} className="flip-card-email">
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>mail</span>
                {email}
              </a>
            )}
            <div className="flip-card-social">
              <a href="#" className="flip-card-social-link"><span className="material-symbols-outlined">link</span></a>
              <a href="#" className="flip-card-social-link"><span className="material-symbols-outlined">mail</span></a>
              <a href="#" className="flip-card-social-link"><span className="material-symbols-outlined">badge</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
