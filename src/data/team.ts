export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  introduction?: string;
  linkedin?: string;
}

export const facultyCoordinator: TeamMember = {
  id: 1,
  name: "Dr. S. S. Butoliya",
  role: "Faculty Coordinator",
  image: "/images/team/faculty/dr-butoliya.jpg",
  introduction:
    "Faculty Coordinator of Engineering India – RBU, dedicated to mentoring students, fostering innovation, and guiding technical initiatives that promote learning, leadership, and collaborative growth.",
};

export const coreTeam: TeamMember[] = [
  // Add all 38 members in this format

  {
    id: 2,
    name: "Saidhiraj",
    role: "President",
    image: "/images/team/core/member1.jpg",
    linkedin: "",
  },

  {
    id: 3,
    name: "Krish",
    role: "Secretary",
    image: "/images/team/core/member2.jpg",
  },

  {
    id: 4,
    name: "Riddhi",
    role: "Secretary",
    image: "/images/team/core/member3.jpg",
  },
];