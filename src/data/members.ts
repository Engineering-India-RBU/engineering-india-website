export interface Member {
  name: string;
  role: string;
  description: string;
  email?: string;
  photo?: string;
  linkedin?: string;
  github?: string;
  icon?: string;
  iconBg?: string;
  iconColor?: string;
}

export const faculty: Member[] = [
  {
    name: "Dr. S. S. Butoliya",
    role: "Faculty Coordinator",
    description: "Dedicated mentor fostering innovation and guiding technical initiatives within the Engineering India ecosystem.",
    email: "ssbutoliya@rbu.ac.in",
    icon: "school",
    iconBg: "var(--tertiary-container)",
    iconColor: "var(--on-tertiary-container)",
  },
];

export const coreTeam: Member[] = [
  {
    name: "Anjali Sharma",
    role: "President",
    description: "Strategic visionary leading organizational direction, team coordination, and external partnerships for EI-RBU.",
    email: "anjali.sharma@ei-rbu.org",
    icon: "account_circle",
    iconBg: "var(--secondary-container)",
    iconColor: "var(--on-secondary-container)",
    photo: "/gallery-1.jpeg",
    linkedin: "#",
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
    github: "#",
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
    linkedin: "#",
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
