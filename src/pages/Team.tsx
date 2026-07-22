import PageLayout from "../components/layout/PageLayout";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";
import FlipCard from "../components/ui/FlipCard";
import { useScrollReveal, useStaggerReveal } from "../hooks/useScrollReveal";

const team = [
  {
    name: "Dr. S. S. Butoliya",
    role: "Faculty Coordinator",
    description: "Dedicated mentor fostering innovation and guiding technical initiatives within the Engineering India ecosystem.",
    email: "ssbutoliya@rbu.ac.in",
    icon: "school",
    iconBg: "var(--tertiary-container)",
    iconColor: "var(--on-tertiary-container)",
  },
  {
    name: "Anjali Sharma",
    role: "President",
    description: "Strategic visionary leading organizational direction, team coordination, and external partnerships for EI-RBU.",
    email: "anjali.sharma@ei-rbu.org",
    icon: "account_circle",
    iconBg: "var(--secondary-container)",
    iconColor: "var(--on-secondary-container)",
    photo: "/gallery-1.jpeg",
  },
  {
    name: "Rahul Verma",
    role: "Technical Head",
    description: "Leading product development, technical workshops, and open-source project architecture and execution.",
    email: "rahul.verma@ei-rbu.org",
    icon: "engineering",
    iconBg: "var(--primary-container)",
    iconColor: "var(--on-primary-container)",
    photo: "/gallery-2.jpeg",
  },
  {
    name: "Priya Das",
    role: "Community Outreach",
    description: "Managing social partnerships, member engagement programs, and community-driven impact initiatives.",
    email: "priya.das@ei-rbu.org",
    icon: "group_add",
    iconBg: "var(--secondary-fixed)",
    iconColor: "var(--on-secondary-fixed)",
    photo: "/gallery-3.jpeg",
  },
  {
    name: "Amit Kumar",
    role: "Event Coordinator",
    description: "Organizing hackathons, workshops, and technical events that bring together students and industry experts.",
    email: "amit.kumar@ei-rbu.org",
    icon: "event",
    iconBg: "var(--surface-container-high)",
    iconColor: "var(--primary)",
  },
  {
    name: "Sneha Patel",
    role: "Design Lead",
    description: "Crafting visual identity, UI/UX designs, and brand presence across all Engineering India platforms.",
    email: "sneha.patel@ei-rbu.org",
    icon: "palette",
    iconBg: "var(--secondary-container)",
    iconColor: "var(--on-secondary-container)",
  },
];

export default function Team() {
  const titleRef = useScrollReveal("fade-up");
  const gridRef = useStaggerReveal();

  return (
    <PageLayout>
      <ScrollProgress />
      <main className="container" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
        <div ref={titleRef} style={{ textAlign: "center", marginBottom: "var(--stack-xl)" }}>
          <h1 className="display-lg" style={{ marginBottom: "var(--stack-md)" }}>Our Team</h1>
          <p className="body-lg" style={{ color: "var(--on-surface-variant)", maxWidth: "640px", margin: "0 auto" }}>
            Meet the passionate student leaders and faculty mentors driving Engineering India RBU forward. Hover over cards to flip and see more.
          </p>
        </div>

        <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--gutter)" }}>
          {team.map((member) => (
            <FlipCard key={member.name} {...member} />
          ))}
        </div>
      </main>
      <BackToTop />
    </PageLayout>
  );
}
