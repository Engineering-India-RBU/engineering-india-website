import { useRef } from "react";
import PageLayout from "../components/layout/PageLayout";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";
import TiltCard from "../components/ui/TiltCard";
import MagneticButton from "../components/ui/MagneticButton";
import Timeline from "../components/ui/Timeline";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Events.css";

function RippleButton({ children, className = "", ...props }: { children: React.ReactNode; className?: string; [key: string]: unknown }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.className = "ripple-effect";
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };
  return (
    <button ref={btnRef} className={`ripple-btn ${className}`} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

export default function Events() {
  const heroRef = useScrollReveal("fade-up");
  const featureRef = useScrollReveal("fade-up");
  const socialRef = useScrollReveal("fade-scale");
  const eventsRef = useScrollReveal("fade-scale");
  const visionRef = useScrollReveal("fade-right");
  const leadershipRef = useScrollReveal("fade-up");
  const ctaRef = useScrollReveal("fade-up");

  return (
    <PageLayout>
      <ScrollProgress />
      <main className="events-page">
        {/* Hero Header */}
        <div className="events-hero" ref={heroRef}>
          <h1 className="display-lg events-hero-title">Our Initiatives</h1>
          <p className="body-lg events-hero-desc">
            We empower communities through organic growth, sustainable technology, and collaborative leadership. Explore our core focus areas below.
          </p>
        </div>

        {/* Bento Grid */}
        <section className="bento-grid">
          {/* Main Feature */}
          <div className="bento-feature card-elevation" ref={featureRef}>
            <div className="bento-feature-content">
              <span className="bento-badge">Flagship Program</span>
              <h2 className="headline-lg">Sustainable Agri-Tech</h2>
              <p className="body-md bento-feature-text">
                Bridging the gap between traditional organic farming and modern engineering. We develop open-source IoT solutions for small-scale sustainable farms.
              </p>
              <MagneticButton>
                <RippleButton className="bento-feature-btn">
                  Explore Tech <span className="material-symbols-outlined">arrow_forward</span>
                </RippleButton>
              </MagneticButton>
            </div>
            <div className="bento-feature-image">
              <div className="bento-img-placeholder">
                <span className="material-symbols-outlined bento-img-icon">agriculture</span>
              </div>
            </div>
          </div>

          {/* Social Impact */}
          <TiltCard maxTilt={5} className="bento-card bento-card-social" ref={socialRef}>
            <span className="material-symbols-outlined bento-card-icon">groups</span>
            <h3 className="headline-md">Social Impact</h3>
            <p className="body-md bento-card-text">
              Our leadership program has mentored over 500+ students in social entrepreneurship and ethical engineering practices.
            </p>
            <a className="bento-card-link" href="#">
              View Impact Report <span className="material-symbols-outlined">launch</span>
            </a>
          </TiltCard>

          {/* Upcoming Events */}
          <TiltCard maxTilt={5} className="bento-card bento-card-events" ref={eventsRef}>
            <h3 className="headline-md">Upcoming Events</h3>
            <div className="event-list">
              <div className="event-item">
                <div className="event-date-box" style={{ background: "var(--primary-container)" }}>
                  <span className="event-date-month">OCT</span>
                  <span className="event-date-day">12</span>
                </div>
                <div>
                  <p className="event-item-title">Design Sprint 2024</p>
                  <p className="event-item-sub">Social Innovation Lab</p>
                </div>
              </div>
              <div className="event-item">
                <div className="event-date-box" style={{ background: "var(--secondary)" }}>
                  <span className="event-date-month">NOV</span>
                  <span className="event-date-day">05</span>
                </div>
                <div>
                  <p className="event-item-title">Organic Systems Talk</p>
                  <p className="event-item-sub">Global Webinar</p>
                </div>
              </div>
            </div>
            <RippleButton className="bento-card-btn">All Events</RippleButton>
          </TiltCard>

          {/* Vision */}
          <div className="bento-vision card-elevation" ref={visionRef}>
            <div className="bento-vision-content">
              <h3 className="headline-lg">Modernizing Heritage</h3>
              <p className="body-md bento-vision-text">
                We revitalize traditional craft communities by providing access to global digital markets and sustainable logistics frameworks.
              </p>
              <div className="bento-vision-stats">
                <div>
                  <span className="bento-stat-num">12k+</span>
                  <span className="bento-stat-label">Artisans</span>
                </div>
                <div className="stat-divider-v" />
                <div>
                  <span className="bento-stat-num">24</span>
                  <span className="bento-stat-label">Regions</span>
                </div>
              </div>
            </div>
            <div className="bento-vision-image">
              <div className="bento-img-placeholder vision-placeholder">
                <span className="material-symbols-outlined bento-img-icon">handyman</span>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <Timeline
          title="Event Roadmap"
          subtitle="Our planned events and milestones throughout the year."
          events={[
            { date: "Oct 12, 2024", title: "Design Sprint 2024", description: "A collaborative design thinking workshop to solve real-world engineering challenges.", icon: "palette", color: "var(--primary)" },
            { date: "Nov 5, 2024", title: "Organic Systems Talk", description: "Global webinar on sustainable engineering systems and organic farming technologies.", icon: "public", color: "var(--secondary)" },
            { date: "Jan 18, 2025", title: "Hackathon", description: "24-hour coding challenge focused on building solutions for community impact.", icon: "code", color: "var(--tertiary)" },
            { date: "Mar 10, 2025", title: "Industry Conclave", description: "Bringing together industry leaders and students for networking and mentorship.", icon: "groups", color: "var(--primary)" },
            { date: "May 22, 2025", title: "Annual Summit", description: "Showcasing projects, celebrating achievements, and setting the vision for the next year.", icon: "emoji_events", color: "var(--secondary)" },
          ]}
        />

        {/* Leadership */}
        <section className="events-leadership" ref={leadershipRef}>
          <h2 className="headline-lg">Our Leadership</h2>
          <p className="body-md leadership-desc">
            ModernOrganic is guided by experienced faculty and driven by passionate student leaders committed to innovation, collaboration and technical excellence.
          </p>

          <TiltCard maxTilt={4} className="leadership-card-h">
            <div className="leader-avatar">
              <span className="material-symbols-outlined leader-avatar-icon">school</span>
            </div>
            <div className="leader-info">
              <h3 className="headline-md">Dr. S. S. Butoliya</h3>
              <span className="leader-role">Faculty Coordinator</span>
              <p className="body-md leader-bio">
                Faculty Coordinator of Engineering India – dedicated to mentoring students, fostering innovation, and guiding technical initiatives.
              </p>
              <div className="leader-links">
                <a href="#" className="leader-link"><span className="material-symbols-outlined">link</span></a>
                <a href="#" className="leader-link"><span className="material-symbols-outlined">mail</span></a>
              </div>
            </div>
          </TiltCard>
        </section>

        {/* Newsletter */}
        <section className="newsletter-cta" ref={ctaRef}>
          <div className="newsletter-circles" />
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2 className="headline-lg">Stay updated with our progress</h2>
              <p className="body-md newsletter-desc">
                Join our monthly newsletter for insights on sustainable development, leadership opportunities, and social impact stories.
              </p>
            </div>
            <div className="newsletter-form">
              <input type="email" className="newsletter-input" placeholder="Your email address" />
              <MagneticButton>
                <RippleButton className="newsletter-btn">Subscribe</RippleButton>
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* FAB */}
        <button className="fab-btn">
          <span className="material-symbols-outlined">message</span>
          <span className="fab-label">Contact Support</span>
        </button>
      </main>
      <BackToTop />
    </PageLayout>
  );
}
