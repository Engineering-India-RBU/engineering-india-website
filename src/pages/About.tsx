import PageLayout from "../components/layout/PageLayout";
import { aboutData, visionMission } from "../data/about";
import "./About.css";

export default function About() {
  return (
    <PageLayout>
      <main className="about">
        <section className="about-section">
          <p className="section-tag">About Engineering India</p>

          <h1>{aboutData.title}</h1>

          <p className="about-description">
            {aboutData.description}
          </p>

          <div className="highlights-grid">
            {aboutData.highlights.map((highlight) => (
              <div key={highlight.title} className="highlight-card">
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="vision-mission-section">
          <div className="vm-card">
            <h2>Our Vision</h2>
            <p>{visionMission.vision}</p>
          </div>

          <div className="vm-card">
            <h2>Our Mission</h2>
            <p>{visionMission.mission}</p>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}