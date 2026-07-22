import PageLayout from "../components/layout/PageLayout";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const titleRef = useScrollReveal("fade-up");
  const descRef = useScrollReveal("fade-up");

  return (
    <PageLayout>
      <ScrollProgress />
      <main className="container" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
        <div ref={titleRef} style={{ textAlign: "center", marginBottom: "var(--stack-md)" }}>
          <h1 className="display-lg" style={{ marginBottom: "var(--stack-md)" }}>About Us</h1>
          <p className="body-lg" style={{ color: "var(--on-surface-variant)", maxWidth: "640px", margin: "0 auto" }}>
            Engineering India RBU is a student-led organization committed to bridging engineering theory with real-world social impact through innovation, collaboration, and technical excellence.
          </p>
        </div>

        <div ref={descRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--gutter)", marginTop: "var(--stack-xl)" }}>
          <div className="hover-lift" style={{ background: "var(--surface-container-lowest)", padding: "var(--stack-lg)", borderRadius: "var(--radius-xl)", border: "1px solid color-mix(in srgb, var(--outline-variant) 10%, transparent)" }}>
            <span className="material-symbols-outlined" style={{ fontSize: "40px", color: "var(--primary)", marginBottom: "var(--stack-md)" }}>flag</span>
            <h3 className="headline-md" style={{ marginBottom: "var(--stack-sm)" }}>Our Mission</h3>
            <p className="body-md" style={{ color: "var(--on-surface-variant)" }}>To empower engineering students with the skills, mentorship, and opportunities to create meaningful social impact through technology.</p>
          </div>
          <div className="hover-lift" style={{ background: "var(--surface-container-lowest)", padding: "var(--stack-lg)", borderRadius: "var(--radius-xl)", border: "1px solid color-mix(in srgb, var(--outline-variant) 10%, transparent)" }}>
            <span className="material-symbols-outlined" style={{ fontSize: "40px", color: "var(--primary)", marginBottom: "var(--stack-md)" }}>visibility</span>
            <h3 className="headline-md" style={{ marginBottom: "var(--stack-sm)" }}>Our Vision</h3>
            <p className="body-md" style={{ color: "var(--on-surface-variant)" }}>A future where every engineering student contributes to sustainable development and community transformation.</p>
          </div>
          <div className="hover-lift" style={{ background: "var(--surface-container-lowest)", padding: "var(--stack-lg)", borderRadius: "var(--radius-xl)", border: "1px solid color-mix(in srgb, var(--outline-variant) 10%, transparent)" }}>
            <span className="material-symbols-outlined" style={{ fontSize: "40px", color: "var(--primary)", marginBottom: "var(--stack-md)" }}>handshake</span>
            <h3 className="headline-md" style={{ marginBottom: "var(--stack-sm)" }}>Our Values</h3>
            <p className="body-md" style={{ color: "var(--on-surface-variant)" }}>Collaboration, integrity, innovation, and a deep commitment to serving communities through engineering excellence.</p>
          </div>
        </div>
      </main>
      <BackToTop />
    </PageLayout>
  );
}
