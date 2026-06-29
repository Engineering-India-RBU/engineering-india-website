export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date?: string;
  category?: string;
}

export const flagshipEvents: Event[] = [
  {
    id: "example",
    title: "example",
    description:
      "Our flagship annual summit bringing together student innovators, industry leaders, and policymakers to showcase breakthrough engineering solutions addressing India's most pressing challenges.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    date: "March 2025",
    category: "Summit",
  },
  {
    id: "hackathon",
    title: "EI National Hackathon",
    description:
      "A 36-hour intensive hackathon where teams of students compete to build tech-driven solutions for real-world social and engineering problems, mentored by top professionals.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    date: "August 2025",
    category: "Hackathon",
  },
  {
    id: "techfest",
    title: "TechFest Engineering Expo",
    description:
      "A grand exhibition of student-built projects, live demonstrations, and workshops. The expo connects aspiring engineers with industry mentors and research institutions across India.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    date: "November 2025",
    category: "Expo",
  },
];

export const otherEvents: Event[] = [
  {
    id: "workshop-ai",
    title: "AI for Engineers Workshop",
    description:
      "Hands-on sessions covering machine learning fundamentals and their practical applications in core engineering disciplines.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    category: "Workshop",
  },
  {
    id: "campus-connect",
    title: "Campus Connect Drive",
    description:
      "Outreach program visiting engineering colleges across India to onboard new members and share the EI vision.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    category: "Outreach",
  },
  {
    id: "sustainability-talk",
    title: "Sustainable Engineering Talk",
    description:
      "Expert-led panel discussion on green engineering practices, renewable energy adoption, and building a sustainable future.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80",
    category: "Talk",
  },
  {
    id: "career-fair",
    title: "Engineering Career Fair",
    description:
      "Connect with top companies, startups, and research labs actively looking for engineering talent and student collaborators.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
    category: "Career",
  },
  {
    id: "robotics-challenge",
    title: "Robotics Challenge Cup",
    description:
      "Inter-college robotics competition showcasing autonomous systems, IoT-based bots, and creative mechatronics design.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    category: "Competition",
  },
  {
    id: "leadership-bootcamp",
    title: "Student Leadership Bootcamp",
    description:
      "A weekend bootcamp cultivating leadership, communication, and project management skills in the next generation of engineering leaders.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80",
    category: "Bootcamp",
  },
];
