export const HERO_CONTENT = {
  eyebrow: 'Engineering India RBU',
  title: 'Think Nationally, Act Locally.',
  description:
    'A student-driven community building ideas, initiatives, and experiences that create meaningful impact.',
  primaryAction: 'Join Community',
  secondaryAction: 'Explore More',
} as const

export const INTRO_CONTENT = {
  eyebrow: 'Who We Are',
  title: 'Building a community that thinks beyond the classroom.',
  description:
    'Engineering India — RBU is a student-driven community that brings together ideas, people, and initiatives to create meaningful experiences and impact.',
  action: 'Discover Our Story',
} as const

export const FEATURED_INITIATIVE = {
  eyebrow: 'What We Do',
  title: 'Ideas that turn into action.',
  description:
    'From conversations and competitions to community-driven initiatives, Engineering India creates platforms where students can learn, collaborate, and make an impact.',
  action: 'Explore Initiatives',
  image: '/images/featured-initiative.jpg',
} as const

export const OUR_EVENTS = [
  {
    category: 'Flagship Event',
    title: 'Abhyudaya',
    description:
      'A platform that brings students together through meaningful conversations, challenges, and experiences.',
    image: '/images/events/abhyudaya.jpg',
    href: '/events/abhyudaya',
  },
  {
    category: 'Hackathon',
    title: 'Ultimate Socio-Technocrat',
    description:
      'A space where technology meets social thinking to solve problems that matter.',
    image: '/images/events/ust.jpg',
    href: '/events/ultimate-socio-technocrat',
  },
  {
    category: 'Lecture Series',
    title: 'PRAGYAN',
    description:
      'Ideas, perspectives, and conversations that encourage students to think beyond the obvious.',
    image: '/images/events/pragyan.jpg',
    href: '/events/pragyan',
  },
] as const

export const TEAM_PREVIEW = [
  {
    role: 'President',
    name: 'Team Member',
    year: '3rd Year',
    branch: 'CSE',
    image: '/images/team/member-1.jpg',
    description:
      'Leading the team, shaping our vision, and creating opportunities for students to learn, collaborate, and grow.',
    socials: {
      instagram: '',
      linkedin: '',
      whatsapp: '',
    },
  },
  {
    role: 'Vice President',
    name: 'Team Member',
    year: '3rd Year',
    branch: 'CSE',
    image: '/images/team/member-2.jpg',
    description:
      'Supporting the team, coordinating initiatives, and helping turn ideas into meaningful experiences.',
    socials: {
      instagram: '',
      linkedin: '',
      whatsapp: '',
    },
  },
  {
    role: 'Technical Lead',
    name: 'Team Member',
    year: '3rd Year',
    branch: 'CSE',
    image: '/images/team/member-3.jpg',
    description:
      'Building technical initiatives and helping the community explore technology through practical experiences.',
    socials: {
      instagram: '',
      linkedin: '',
      whatsapp: '',
    },
  },
  {
    role: 'Creative Lead',
    name: 'Team Member',
    year: '3rd Year',
    branch: 'CSE',
    image: '/images/team/member-4.jpg',
    description:
      'Shaping the creative direction of our initiatives, events, and the way we connect with our community.',
    socials: {
      instagram: '',
      linkedin: '',
      whatsapp: '',
    },
  },
] as const

export const FINAL_CTA = {
  eyebrow: 'Want to Make a Difference?',
  title: 'Turn Ideas Into Social Impact.',
  description:
    'Bring your ideas, skills, and perspective to a community that believes meaningful change begins with action.',
  action: 'Join Us',
} as const

export const FOOTER_CONTENT = {
  description:
    'A student-driven community creating meaningful experiences through ideas, collaboration, and action.',

  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Our Events', href: '/events' },
    { label: 'Our Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ],

  exploreLinks: [
    { label: 'Initiatives', href: '/initiatives' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Projects', href: '/projects' },
    { label: 'Join Us', href: '/join' },
  ],

  socials: {
    instagram: '',
    linkedin: '',
    whatsapp: '',
    youtube: '',
  },

  copyright: '© 2026 Engineering India RBU. All rights reserved.',
} as const