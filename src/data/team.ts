import krishImage from "./photos/krish.jpg";
import sirimg from "./photos/butoliya_sir.png";
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
  image: sirimg,
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
    image: krishImage,
  },

  {
    id: 4,
    name: "Riddhi",
    role: "Secretary",
    image: "/images/team/core/member3.jpg",
  },
];