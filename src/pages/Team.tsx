import PageLayout from "../components/layout/PageLayout";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";
import FlipCard from "../components/ui/FlipCard";
import { useScrollReveal, useStaggerReveal } from "../hooks/useScrollReveal";
import { faculty, coreTeam } from "../data/members";

export default function Team() {
  const titleRef = useScrollReveal("fade-up");
  const facultyRef = useScrollReveal("fade-scale");
  const gridRef = useStaggerReveal();

  return (
    <PageLayout>
      <ScrollProgress />
      <main className="container" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
        <div ref={titleRef} style={{ textAlign: "center", marginBottom: "var(--stack-xl)" }}>
          <h1 className="display-lg" style={{ marginBottom: "var(--stack-md)" }}>Our Team</h1>
          <p className="body-lg" style={{ color: "var(--on-surface-variant)", maxWidth: "640px", margin: "0 auto" }}>
            Meet the passionate student leaders and faculty mentors driving Engineering India RBU forward.
          </p>
        </div>

        {/* Faculty */}
        {faculty.length > 0 && (
          <div ref={facultyRef} style={{ marginBottom: "var(--stack-xl)" }}>
            <h2 className="headline-lg" style={{ textAlign: "center", marginBottom: "var(--stack-lg)" }}>Faculty Coordinator</h2>
            <div style={{ maxWidth: "500px", margin: "0 auto" }}>
              {faculty.map((member) => (
                <FlipCard key={member.name} {...member} />
              ))}
            </div>
          </div>
        )}

        {/* Core Team */}
        <h2 className="headline-lg" style={{ textAlign: "center", marginBottom: "var(--stack-lg)" }}>Core Team</h2>
        <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--gutter)" }}>
          {coreTeam.map((member) => (
            <FlipCard key={member.name} {...member} />
          ))}
        </div>
      </main>
      <BackToTop />
    </PageLayout>
  );
}
