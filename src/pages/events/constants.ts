export const EVENTS_HERO = {
  eyebrow: 'Events & Experiences',
  title: 'Where Ideas',
  accent: 'Come Alive.',
  description:
    'From social initiatives to technical challenges, every event is an opportunity to learn, connect, contribute, and turn ideas into action.',
} as const

export type ClubEvent = {
  id: string
  title: string
  date: string
  location: string
  description: string
  highlights: string[]
  tagline: string
  image: string
  href: string
}

const RAW_EVENTS: Omit<ClubEvent, 'href'>[] = [
  {
    id: 'friendship-day-celebration',
    title: 'Friendship Day Celebration',
    date: '4 August 2025',
    location: 'Kasturchand Park, Nagpur',
    description:
      'Celebrating the spirit of friendship and compassion with underprivileged children, fostering love, laughter, and togetherness.',
    highlights: [
      'Creative Expressions through Art — painting & drawing sessions',
      'Handprint Activity symbolizing unity and lasting memories',
      'Friendship Day cake cutting ceremony with the children',
      'Chocolates & sweet moments shared with everyone',
      'Joyful interactions — listening to the children’s stories',
    ],
    tagline: 'Sharing Joy, Building Bonds.',
    image: '/events/friendship-day.webp',
  },

  {
    id: 'balsadan-visit',
    title: 'Independence Day-Balsadan Visit',
    date: '15 August 2025',
    location: 'Vidarbha Sahayata Samiti’s Balsadan, Nagpur',
    description:
      'Marking the 79th Independence Day by spreading smiles and joy at Balsadan — true independence means sharing happiness and building bonds.',
    highlights: [
      'Tree Plantation Drive — saplings for hope & a greener tomorrow',
      'Origami & Paper Planes flown together in celebration',
      'Balloon-blowing contest full of laughter and energy',
      'Talent Showcase & jamming with songs, dance and music',
      'Interactive Q&A, gifts and chocolate distribution',
    ],
    tagline: 'Sharing Joy, Building Bonds.',
    image: '/events/independence-day.webp',
  },

  {
    id: 'central-orientation',
    title: 'Central Orientation',
    date: '24 August 2025',
    location:
      'Sevasadan Shikshan Sanstha, Jhansi Rani Metro Station, Sitabuldi, Nagpur',
    description:
      'New coordinators from different colleges gathered, interacted, learned about the club, and received new roles and responsibilities.',
    highlights: [
      'Welcomed new coordinators from different colleges',
      'Interacted with coordinators and built new connections',
      'Introduced the club’s history, structure, and activities',
      'Conducted college-level and central-level introductions',
      'Assigned new positions and responsibilities to coordinators',
      'Shared an informal breakfast and networking experience',
    ],
    tagline: 'Connecting Coordinators, Building a Stronger Community.',
    image: '/events/central-orientation.webp',
  },

  {
    id: 'national-engineers-day',
    title: 'National Engineer’s Day',
    date: '15 September 2025',
    location: 'Nagpur Madhyamik Vidyalaya, Katol Road, Nagpur',
    description:
      'A Career Guidance Session for Classes 9th & 10th, helping young minds plan early and align their passions with career goals.',
    highlights: [
      'Career Talk on the importance of early planning',
      'Streams explained: Science, Commerce, Arts and beyond',
      'Flowchart guide distributed mapping career routes',
      'Interactive discussion on students’ dream careers',
      '“Dream Behind the Flowchart” activity + doubt-solving session',
    ],
    tagline: 'Inspiring Dreams, Guiding Futures.',
    image: '/events/engineers-day.webp',
  },

  {
    id: 'seva-sankalp-2',
    title: 'Seva Sankalp 2.0',
    date: '14 October 2025',
    location: 'Nalanda Vastistar & Sai Savali Vridhashram, Nagpur',
    description:
      'Coordinators visited two old age homes to spread warmth and compassion — bridging generations through music, games and conversation.',
    highlights: [
      'Jamming session — Bollywood songs & Bhajans sung together',
      'Interactive quiz games and a heartfelt wisdom exchange',
      'Elders mentored coordinators with life advice',
      'Cake cutting and a joyful sunglasses photoshoot',
      'In collaboration with EI KDK, EI Cummins & EI Raisoni College',
    ],
    tagline: 'Sharing Joy, Gaining Wisdom.',
    image: '/events/seva-sankalp2.webp',
  },

  {
    id: 'national-youth-day',
    title: 'National Youth Day',
    date: '12 January 2026',
    location: 'Ramdeobaba University, Nagpur',
    description:
      'Celebrated National Youth Day through the Viksit Bharat Young Leaders Dialogue, gaining insights on leadership, nation-building, responsibility, and youth-driven change.',
    highlights: [
      'Celebrated National Youth Day with the Viksit Bharat Young Leaders',
      'Learned about the role of youth in nation building and development',
      'Interacted with distinguished guests and gained valuable insights',
      'Participated in an engaging session with Dr. Paliwal Sir',
      'Explored real-world problems and brainstormed potential solutions',
      'Witnessed the inspiring Viksit Bharat address by the Prime Minister',
    ],
    tagline: 'Youth Today, Leaders of a Viksit Bharat Tomorrow.',
    image: '/events/youth-day.webp',
  },

  {
    id: 'sitabuldi-fort-visit',
    title: 'Sitabuldi Fort Visit',
    date: '26 January 2026',
    location: 'Sitabuldi Fort, Nagpur',
    description:
      'A memorable day exploring the historic Sitabuldi Fort and learning about its significance. We also interacted with Army officers, gaining valuable insights into their experiences, discipline, and service.',
    highlights: [
      'Visit to the historic Sitabuldi Fort',
      'Interaction with Army officers and an insightful exchange',
      'Learned about their experiences, discipline, and service',
      'Explored the historic surroundings and heritage',
      'Shared memorable moments with the team',
      'Strengthened team bonding through a fun day out',
    ],
    tagline: 'Exploring, Connecting & Creating Memories.',
    image: '/events/republic-day.webp',
  },

  {
    id: 'bhajan-clubbing',
    title: 'Bhajan Clubbing',
    date: '06 February 2026',
    location: 'Gorakshan, Nagpur',
    description:
      'A joyful gathering filled with music, devotion, and positive energy. The Bhajan Clubbing session brought everyone together and created memorable moments of connection and togetherness.',
    highlights: [
      'Participated in a joyful Bhajan Clubbing session',
      'Came together to enjoy music and devotional melodies',
      'Created a lively and positive atmosphere',
      'Shared moments of joy, enthusiasm, and togetherness',
      'Strengthened team connections through a unique cultural experience',
      'Made memorable moments beyond regular club activities',
    ],
    tagline: 'Music, Togetherness & Positive Vibes.',
    image: '/events/bhajan-clubbing.webp',
  },

  {
    id: 'abhyudaya',
    title: 'Abhyudaya',
    date: '08 February 2026',
    location: 'Reshambagh, Nagpur',
    description:
      'An engaging event where we took responsibility for handling and coordinating the Group Discussion rounds. It helped us strengthen our communication, leadership, teamwork, and event-management skills.',
    highlights: [
      'Handled and coordinated Group Discussion rounds',
      'Facilitated meaningful discussions on diverse topics',
      'Managed participants and ensured smooth participation',
      'Encouraged exchange of ideas and perspectives',
      'Coordinated with the team for seamless event execution',
      'Strengthened communication, leadership, and coordination skills',
    ],
    tagline: 'Where Ideas Meet, Voices Matter.',
    image: '/events/abhyudaya-25.webp',
  },

  {
    id: 'felicitation-vedamurti',
    title:
      'Interaction with Dr.Prathosh at Felicitation Ceremony ',
    date: '21 March 2026',
    location: 'The Grand Airport Banquet Hall, Nagpur',
    description:
      'As part of the organising team, we managed the event right from the initial preparations to its successful execution. The event included a felicitation ceremony and an insightful speech on the Vedas by Dr. Prathosh AP.',
    highlights: [
      'Worked as part of the organising team',
      'Managed the event from planning to execution',
      'Coordinated the felicitation ceremony',
      'Facilitated an insightful session on the Vedas by Dr. Prathosh AP, Professor, IISc Bengaluru',
      'Coordinated with guests, speakers, and team members',
      'Ensured smooth execution and seamless flow of the event',
    ],
    tagline: '',
    image: '/events/airport-event.webp',
  },

  {
    id: 'neurosync',
    title: 'NeuroSync',
    date: '1 April 2026',
    location: 'Ramdeobaba University, Nagpur',
    description:
      'A socio-tech competition combining logical thinking, teamwork, problem-solving and mental health awareness.',
    highlights: [
      'Three interactive rounds challenged participants’ skills',
      'Rapid-fire questions tested logical and analytical thinking',
      'Mental health cases encouraged understanding and interpretation',
      'Video analysis tested observation and presentation skills',
      'Organized by Engineering India RBU and Counselling Cell RBU',
    ],
    tagline: 'Think Nationally, Act Locally.',
    image: '/events/neurosync.webp',
  },

  {
    id: 'chatbot-rag-workshop',
    title: 'Chatbot & RAG Workshop',
    date: '28 May 2026',
    location: 'Dharampeth Polytechnic, Nagpur',
    description:
      'A hands-on learning experience focused on chatbot development, AI tools, and practical applications. The workshop brought coordinators together to explore how chatbots can be designed, connected with real tools, and used to build useful AI solutions.',
    highlights: [
      'Explored chatbot development and different chatbot-building tools',
      'Learned how Voiceflow can be used to design conversations and chatbot logic',
      'Explored Make for connecting APIs and automating actions',
      'Gained practical exposure to building AI solutions with minimal coding',
      'Interacted with Prabodh Mahajan Ji through an online session from London',
    ],
    tagline: '',
    image: '/events/chatbot.webp',
  },

  {
    id: 'infocept-industrial-visit',
    title: 'InfoCept Industrial Visit',
    date: '28 August 2026',
    location: 'InfoCept Mihan, Nagpur',
    description:
      'Visited Infocepts to gain industry exposure, interact with professionals, understand data-driven technologies, and explore real-world career opportunities and workplace culture.',
    highlights: [
      'Gained practical exposure to the IT and data industry',
      'Learned about Infocepts’ work, projects, and technologies',
      'Interacted with industry professionals and experienced team',
      'Understood real-world applications of data and analytics',
      'Explored career opportunities and industry expectations',
      'Gained insights into corporate culture and professional growth',
      'Connected classroom concepts with real-world industry practices',
    ],
tagline: 'Learning, Connecting & Growing.',
    image: '/events/infocepts.webp',
  },
]

export const EVENTS: ClubEvent[] = RAW_EVENTS.map((event) => ({
  ...event,
  href: `/events/${event.id}`,
}))

export const EVENTS_CTA = {
  eyebrow: 'Be Part of the Next Experience',
  title: 'Your idea could be the next event.',
  description:
    'Volunteer, collaborate, or bring an idea to the table — every experience at Engineering India begins with people willing to act.',
  primaryAction: 'Join the Community',
  secondaryAction: 'Talk to Us',
} as const