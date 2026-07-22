import { useEffect, useRef, useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";
import TiltCard from "../components/ui/TiltCard";
import MagneticButton from "../components/ui/MagneticButton";
import { useScrollReveal, useStaggerReveal } from "../hooks/useScrollReveal";
import "./Home.css";

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

function Counter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const badgeRef = useScrollReveal("fade-up");
  const titleRef = useScrollReveal("fade-up");
  const descRef = useScrollReveal("fade-up");
  const buttonsRef = useScrollReveal("fade-up");
  const statsRef = useScrollReveal("fade-up");
  const leadershipHeaderRef = useScrollReveal("fade-up");
  const facultyRef = useScrollReveal("fade-scale");
  const councilHeadingRef = useScrollReveal("fade-up");
  const councilGridRef = useStaggerReveal();
  const ctaRef = useScrollReveal("fade-up");

  return (
    <main className="home">
      <ScrollProgress />
      <PageLayout>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge" ref={badgeRef}>
              <span className="material-symbols-outlined">eco</span>
              ROOTED IN INNOVATION
            </div>

            <h1 className="display-lg hero-title" ref={titleRef}>
              Cultivating the Future of <span className="text-primary">Engineering India</span> Through Organic Collaboration.
            </h1>

            <p className="body-lg hero-desc" ref={descRef}>
              Guided by experienced faculty and driven by passionate student leaders, we are committed to fostering technical excellence and sustainable social impact.
            </p>

            <div className="hero-buttons" ref={buttonsRef}>
              <MagneticButton>
                <RippleButton className="btn-primary">Our Mission</RippleButton>
              </MagneticButton>
              <MagneticButton>
                <RippleButton className="btn-outline">View Projects</RippleButton>
              </MagneticButton>
            </div>

            <div className="hero-stats" ref={statsRef}>
              <div className="stat-item">
                <span className="stat-number"><Counter end={50} suffix="+" /></span>
                <span className="stat-label">Active Members</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number"><Counter end={12} suffix="+" /></span>
                <span className="stat-label">Events Held</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number"><Counter end={5} suffix="+" /></span>
                <span className="stat-label">Projects</span>
              </div>
            </div>
          </div>

          <div className="hero-shape" />
        </section>

        {/* Leadership Section */}
        <section className="leadership-section">
          <div className="leadership-header" ref={leadershipHeaderRef}>
            <h2 className="headline-lg">Our Leadership</h2>
            <p className="body-md leadership-sub">
              Engineering India RBU is guided by experienced faculty and driven by passionate student leaders committed to innovation, collaboration, and technical excellence.
            </p>
          </div>

          <TiltCard maxTilt={5} className="faculty-card" ref={facultyRef}>
            <div className="faculty-avatar">
              <span className="material-symbols-outlined avatar-icon">school</span>
            </div>
            <div className="faculty-info">
              <h3 className="headline-md">Dr. S. S. Butoliya</h3>
              <span className="faculty-role">Faculty Coordinator</span>
              <p className="body-md faculty-bio">
                Dedicated to mentoring students, fostering innovation, and guiding technical initiatives that promote learning, leadership, and collaborative growth within the Engineering India - RBU ecosystem.
              </p>
            </div>
          </TiltCard>

          <h3 className="headline-md council-heading" ref={councilHeadingRef}>Student Council</h3>

          <div className="council-grid" ref={councilGridRef}>
            <TiltCard maxTilt={6} className="council-card">
              <div className="council-icon" style={{ background: "var(--secondary-container)" }}>
                <span className="material-symbols-outlined" style={{ color: "var(--on-secondary-container)" }}>account_circle</span>
              </div>
              <h4 className="headline-sm">President</h4>
              <p className="body-md council-desc">Strategic vision and organizational oversight for EI-RBU initiatives.</p>
              <span className="council-tag">Anjali Sharma</span>
            </TiltCard>

            <TiltCard maxTilt={6} className="council-card">
              <div className="council-icon" style={{ background: "var(--primary-container)" }}>
                <span className="material-symbols-outlined" style={{ color: "var(--on-primary-container)" }}>engineering</span>
              </div>
              <h4 className="headline-sm">Technical Head</h4>
              <p className="body-md council-desc">Leading product development and technical workshop execution.</p>
              <span className="council-tag">Rahul Verma</span>
            </TiltCard>

            <TiltCard maxTilt={6} className="council-card">
              <div className="council-icon" style={{ background: "var(--secondary-fixed)" }}>
                <span className="material-symbols-outlined" style={{ color: "var(--on-secondary-fixed)" }}>group_add</span>
              </div>
              <h4 className="headline-sm">Community Outreach</h4>
              <p className="body-md council-desc">Managing social partnerships and member engagement programs.</p>
              <span className="council-tag">Priya Das</span>
            </TiltCard>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" ref={ctaRef}>
          <div className="cta-pattern" />
          <div className="cta-content">
            <h2 className="display-lg cta-title">Join the Movement</h2>
            <p className="body-lg cta-desc">
              Become part of a community that bridges the gap between engineering theory and social impact.
            </p>
            <div className="cta-buttons">
              <MagneticButton>
                <RippleButton className="btn-cta-primary">Apply Now</RippleButton>
              </MagneticButton>
              <MagneticButton>
                <RippleButton className="btn-cta-secondary">Learn More</RippleButton>
              </MagneticButton>
            </div>
          </div>
        </section>
      </PageLayout>
      <BackToTop />
    </main>
  );
}
