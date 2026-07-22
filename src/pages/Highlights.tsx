import PageLayout from "../components/layout/PageLayout";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";
import { useScrollReveal } from "../hooks/useScrollReveal";

const highlights = [
  { number: "500+", label: "Students Mentored", icon: "school" },
  { number: "12+", label: "Events Organized", icon: "event" },
  { number: "8+", label: "Workshops Conducted", icon: "build" },
  { number: "5+", label: "Community Projects", icon: "handyman" },
  { number: "100%", label: "Positive Feedback", icon: "thumb_up" },
  { number: "3+", label: "Industry Partners", icon: "handshake" },
];

export default function Highlights() {
  const titleRef = useScrollReveal("fade-up");
  const gridRef = useScrollReveal("fade-up");

  return (
    <PageLayout>
      <ScrollProgress />
      <main className="container" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
        <div ref={titleRef} style={{ textAlign: "center", marginBottom: "var(--stack-xl)" }}>
          <h1 className="display-lg" style={{ marginBottom: "var(--stack-md)" }}>Highlights</h1>
          <p className="body-lg" style={{ color: "var(--on-surface-variant)", maxWidth: "640px", margin: "0 auto" }}>
            Key achievements, milestones, and success stories from Engineering India RBU.
          </p>
        </div>

        <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--gutter)" }}>
          {highlights.map((item) => (
            <div className="hover-lift" key={item.label} style={{ background: "var(--surface-container-lowest)", padding: "var(--stack-lg)", borderRadius: "var(--radius-xl)", border: "1px solid color-mix(in srgb, var(--outline-variant) 10%, transparent)", textAlign: "center" }}>
              <span className="material-symbols-outlined" style={{ fontSize: "40px", color: "var(--primary)", marginBottom: "var(--stack-sm)" }}>{item.icon}</span>
              <div style={{ fontSize: "36px", lineHeight: "44px", fontWeight: "700", color: "var(--primary)", marginBottom: "4px" }}>{item.number}</div>
              <p className="body-md" style={{ color: "var(--on-surface-variant)" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </main>
      <BackToTop />
    </PageLayout>
  );
}
