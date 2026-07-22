import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";
import { useScrollReveal, useStaggerReveal } from "../hooks/useScrollReveal";
import "./Alumni.css";

const batches = ["All", "2024", "2023", "2022", "2021"];

const alumni = [
  { name: "Arun Kumar", batch: "2024", role: "Former Technical Head", message: "Engineering India gave me the platform to build real-world skills and lead impactful projects. The mentorship here shaped my career.", icon: "engineering", color: "var(--primary-container)" },
  { name: "Neha Singh", batch: "2024", role: "Former President", message: "Leading EI was the most rewarding experience of my college life. I learned more about teamwork and leadership here than anywhere else.", icon: "account_circle", color: "var(--secondary-container)" },
  { name: "Vikram Patel", batch: "2023", role: "Former Community Lead", message: "The community outreach programs taught me the true meaning of engineering for social good. Proud to be an EI alumni.", icon: "group_add", color: "var(--secondary-fixed)" },
  { name: "Priya Sharma", batch: "2023", role: "Former Event Coordinator", message: "From organizing hackathons to leading workshops — EI taught me how to turn ideas into reality. Forever grateful.", icon: "event", color: "var(--tertiary-container)" },
  { name: "Rohit Joshi", batch: "2022", role: "Former Technical Lead", message: "The projects I worked on at EI directly translated to my work in the industry. It's the best hands-on learning community on campus.", icon: "code", color: "var(--primary-container)" },
  { name: "Ananya Gupta", batch: "2022", role: "Former Design Lead", message: "EI was my creative playground. I grew from a junior designer to leading the brand identity of a student organization.", icon: "palette", color: "var(--surface-container-high)" },
  { name: "Siddharth Rao", batch: "2021", role: "Founding Member", message: "Being part of the founding team and watching EI grow into what it is today has been incredible. The legacy continues.", icon: "emoji_events", color: "var(--tertiary-fixed)" },
  { name: "Kavita Deshmukh", batch: "2021", role: "Former Outreach Head", message: "EI connected me with a network of mentors and peers who continue to inspire me. It's more than a club — it's a family.", icon: "diversity_3", color: "var(--secondary-container)" },
];

export default function Alumni() {
  const [activeBatch, setActiveBatch] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const titleRef = useScrollReveal("fade-up");
  const gridRef = useStaggerReveal();

  const filtered = activeBatch === "All" ? alumni : alumni.filter((a) => a.batch === activeBatch);

  return (
    <PageLayout>
      <ScrollProgress />
      <main className="alumni-page">
        <div ref={titleRef} className="alumni-header">
          <h1 className="display-lg">Our Alumni</h1>
          <p className="body-lg alumni-desc">
            The leaders, innovators, and changemakers who shaped Engineering India — and the words they left behind.
          </p>
        </div>

        {/* Batch Filter */}
        <div className="alumni-tabs">
          {batches.map((b) => (
            <button
              key={b}
              className={`alumni-tab ${activeBatch === b ? "alumni-tab-active" : ""}`}
              onClick={() => setActiveBatch(b)}
            >
              {b}
            </button>
          ))}
        </div>

        {/* Alumni Grid */}
        <div ref={gridRef} className="alumni-grid">
          {filtered.map((member, index) => (
            <div
              key={member.name}
              className={`alumni-card ${expanded === index ? "alumni-card-expanded" : ""}`}
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              <div className="alumni-avatar-wrap" style={{ background: member.color }}>
                <span className="material-symbols-outlined alumni-avatar-icon">{member.icon}</span>
                <div className="alumni-batch-badge">{member.batch}</div>
              </div>
              <div className="alumni-info">
                <h3 className="headline-sm">{member.name}</h3>
                <span className="alumni-role">{member.role}</span>
              </div>

              {/* Expandable message */}
              <div className={`alumni-message-wrap ${expanded === index ? "alumni-message-open" : ""}`}>
                <div className="alumni-message">
                  <span className="material-symbols-outlined alumni-quote">format_quote</span>
                  <p className="body-md">{member.message}</p>
                </div>
              </div>

              <div className="alumni-expand-hint">
                <span className="material-symbols-outlined alumni-expand-icon">
                  {expanded === index ? "expand_less" : "expand_more"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="alumni-empty">
            <span className="material-symbols-outlined" style={{ fontSize: "48px", color: "var(--on-surface-variant)", opacity: 0.5 }}>search_off</span>
            <p>No alumni found for this batch.</p>
          </div>
        )}
      </main>
      <BackToTop />
    </PageLayout>
  );
}
