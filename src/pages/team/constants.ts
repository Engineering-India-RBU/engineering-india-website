export type TeamMember = {
  name: string
  role: string
  year: string
  branch: string
  image: string
  description?: string
  affiliation?: string
  socials: {
    instagram?: string
    linkedin?: string
    email?: string
  }
}

// Placeholder entries — replace with real team details.
// Leave `image` as '' when a photo is not available; the card
// will automatically show the member's initials instead.
export const FACULTY: TeamMember[] = [
  {
    name: 'Dr. Suraj Butoliya',
    role: 'Faculty Coordinator',
    year: '',
    branch: '',
    affiliation: 'Engineering India, Ramdeobaba University Nagpur',
    image: '/team/butoliya-sir.webp',
    socials: {
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/in/suraj-butoliya-59456112/',
      email: 'butoliyass@rbunagpur.in ',
    },
  },
]

// Photos: public/team/*.webp (converted from the raw HEIC/JPG files).
// Roles are placeholders — assign the actual role for each member.
export const PRESENT_TEAM: TeamMember[] = [

    {
    name: 'Saidhiraj Kadwajiwar',
    role: 'President',
    year: '4th Year',
    branch: 'CSE',
    image: '/team/saidhiraj.webp',
    socials: {
      instagram: 'https://www.instagram.com/saidhirajkadwajiwar09/',
      linkedin: 'https://www.linkedin.com/in/saidhiraj-kadwajiwar',
      email: 'saidhiraj.eirbu@gmail.com',
    },
  },
  
  {
    name: 'Vaishnavi Bobade',
    role: 'Vice President',
    year: '4th Year',
    branch: 'ECE',
    image: '/team/vaishnavi-bobade.webp',
    socials: {
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      email: 'https://mail.google.com/',
    },
  },

  {
    name: 'Riddhi Somani',
    role: 'General Secretary',
    year: '4th Year',
    branch: 'AIML',
    image: '/team/riddhi-somani.webp',
    socials: {
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      email: 'https://mail.google.com/',
    },
  },

  {
    name: 'Rasika Itankar',
    role: 'Secretary',
    year: '4th Year',
    branch: 'CSE',
    image: '/team/rasika-itankar.webp',
    socials: {
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      email: 'https://mail.google.com/',
    },
  },
 
  {
    name: 'Krish Agrawal',
    role: 'Joint Secretary',
    year: '4th Year',
    branch: 'AIML',
    image: '/team/krish-agrawal.webp',
    socials: {
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      email: 'https://mail.google.com/',
    },
  },
  {
    name: 'Pranil Bankar',
    role: 'Coordinator',
    year: '4th Year',
    branch: 'AIML',
    image: '/team/pranil-bankar.webp',
    socials: {
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      email: 'https://mail.google.com/',
    },
  },
  {
  name: 'Mansi Jumde',
  role: 'Literature & Content',
  year: '3rd Year',
  branch: 'CSE',
  image: '/team/mansi-jumde.webp',
  socials: {
    instagram: 'https://www.instagram.com/masni.jumde/?utm_source=ig_web_button_share_sheet',
    linkedin: 'https://www.linkedin.com/in/mansi-jumde-55525a321/',
    email: 'mansi.eirbu@gmail.com',
  },
},
{
  name: 'Harshita Agrawal',
  role: 'Event Management',
  year: '3rd Year',
  branch: 'CSE',
  image: '/team/harshita-agrawal.webp',
  socials: {
    instagram: 'https://www.instagram.com/har.shu28007?stkn=aTZscTRsMWljY2di',
    linkedin: 'https://www.linkedin.com/in/harshita-agrawal-aab0b5378/',
    email: 'harshita.eirbu@gmail.com',
  },
},

{
  name: 'Uday Kasare',
  role: 'Videography & Photography',
  year: '3rd Year',
  branch: 'ELEC',
  image: '/team/uday-pawar.webp',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    email: 'https://mail.google.com/',
  },
},
{
  name: 'Aliasgher Husain',
  role: 'Database Management',
  year: '3rd Year',
  branch: 'ENCS',
  image: '/team/ali-hussain.webp',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/in/aliasgher-h-04469333a/',
    email: 'https://mail.google.com/',
  },
},

{
  name: 'Swanandi  Kayarkar',
  role: 'Public Relations',
  year: '3rd Year',
  branch: 'ENCS',
  image: '/team/swanandi-kayarkar.webp',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    email: 'swanandi.eirbu@gmail.com',
  },
},

{
  name: 'Arpit Gupta',
  role: 'Technical & Web Development',
  year: '3rd Year',
  branch: 'CYBER',
  image: '/team/arpit-gupta.webp',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    email: 'arpit.eirbu@gmail.com',
  },
},
{
  name: 'Krish Asnani',
  role: 'Graphics & Design',
  year: '3rd Year',
  branch: 'ENCS',
  image: '/team/krish-asnani.webp',
  socials: {
    instagram: 'https://www.instagram.com/krrish_asnani?stkn=ZWVoaDJoMml4cHR0&utm_source=qr',
    linkedin: 'https://www.linkedin.com/in/krish-asnani',
    email: 'krishasnani918@gmail.com',
  },
},

{
  name: 'Siddhi Wankhede',
  role: 'Graphics & Design',
  year: '3rd Year',
  branch: 'BIOMED',
  image: '/team/siddhi-wankhede.webp',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    email: 'https://mail.google.com/',
  },
},

{
  name: 'Ishan Manekar',
  role: 'Videography & Photography',
  year: '3rd Year',
  branch: 'AIML',
  image: '/team/ishan-manekar.webp',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    email: 'https://mail.google.com/',
  },
},
{
  name: 'Alishba Khan',
  role: 'Graphics & Design',
  year: '3rd Year',
  branch: 'DSA',
  image: '/team/alishba-khan.webp',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    email: 'https://mail.google.com/',
  },
},

{
  name: 'Hardeep Ghotra',
  role: 'Event Management',
  year: '3rd Year',
  branch: 'BIOMED',
  image: '/team/hardeep-ghotra.webp',
  socials: {
    instagram: 'https://www.instagram.com/hardeepghotra1106?stkn=N2w3emUxMmd6enNl',
    linkedin: 'https://www.linkedin.com/in/hardeep-ghotra/',
    email: 'hardeepsghotra8181@gmail.com',
  },
},
{
  name: 'Tanvir Kanoje',
  role: 'Literature & Content',
  year: '3rd Year',
  branch: 'CSE',
  image: '/team/tanvir-kanoje.webp',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    email: 'tanvir.eirbu@gmail.com',
  },
},

{
  name: 'Yashvi Thakkar',
  role: 'Public Relations',
  year: '3rd Year',
  branch: 'AIDS',
  image: '/team/yashvi-thakkar.webp',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    email: 'yashvi.eirbu@gmail.com',
  },
},

{
  name: 'Jigisha Mandavkar',
  role: 'Videography & Photography',
  year: '3rd Year',
  branch: 'CSE',
  image: '/team/jigisha-mandavkar.webp',
  socials: {
    instagram: 'https://www.instagram.com/jigisha21_06?stkn=YXlleWNwNWprNjFj',
    linkedin: 'https://www.linkedin.com/in/jigisha-mandavkar-b2b238372/',
    email: 'jigisha.eirbu@gmail.com',
  },
},

{
  name: 'Samiksha Shukla',
  role: 'Videography & Photography',
  year: '3rd Year',
  branch: 'AIDS',
  image: '/team/samiksha-shukla.webp',
  socials: {
    instagram: 'https://www.instagram.com/samikshashukla777/',
    linkedin: 'https://www.linkedin.com/in/samiksha-shukla-0136a8387/',
    email: '24shuklas_2@rbunagpur.in',
  },
},
{
  name: 'Shrutik Bhawsar',
  role: 'Coordinator',
  year: '3rd Year',
  branch: 'CSE',
  image: '/team/shrutik-bhawsar.webp',
  socials: {
    instagram: 'https://www.instagram.com/bhawsar.shrutik',
    linkedin: 'https://www.linkedin.com/in/shrutik-bhawsar-86b7b9215/',
    email: 'shrutik.eirbu@gmail.com',
  },
},

{
  name: 'Paras Tijare',
  role: 'Coordinator',
  year: '3rd Year',
  branch: 'ECE',
  image: '/team/paras-tijare.webp',
  socials: {
    instagram: 'https://www.instagram.com/parastijare/',
    linkedin: 'https://www.linkedin.com/in/paras-tijare-b4075828a/',
    email: 'paras.eirbu@gmail.com',
  },
},

{
  name: 'Richa Chandak',
  role: 'Coordinator',
  year: '3rd Year',
  branch: 'CSE',
  image: '/team/richa-chandak.webp',
  socials: {
    instagram: 'https://www.instagram.com/richaxchandak?stkn=MWp4YmpvMWw2dXlueA==',
    linkedin: 'https://www.linkedin.com/in/richa-chandak-b3b892318/',
    email: 'richa.eirbu@gmail.com',
  },
},

// =============== 2nd Year Team Members ===============
{
  name: 'Aishwarya Soni',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/aishwarya-soni.webp',
  socials: {
    instagram: 'https://www.instagram.com/aishwaryasoni425?stkn=MTNqNWR1dzJ4cGF6NQ==',
    linkedin: 'https://www.linkedin.com/in/aishwarya-soni-a8a4a3372/',
    email: 'aishwarya.eirbu@gmail.com',
  },
},

{
  name: 'Janvi Jangid',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/janvi-jangid.webp',
  socials: {
    instagram: 'https://www.instagram.com/jan_vi.15/',
    linkedin: 'https://www.linkedin.com/in/janvi-jangid-54a5043b7/',
    email: 'janvi.eirbu@gmail.com',
  },
},

{
  name: 'Jay Waylalwar',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/jay-waylalwar.webp',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    email: 'jay.eirbu@gmail.com',
  },
},

{
  name: 'Prasiddhi Tawani',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/prasiddhi-tawani.webp',
  socials: {
    instagram: 'https://www.instagram.com/prasiddhitawani?igsi=Z2hjdzFmam5jejhy',
    linkedin: 'http://www.linkedin.com/in/prasiddhi-tawani-375bbb376',
    email: 'prasiddhi.eirbu@gmail.com',
  },
},

{
  name: 'Pruthwa Kothekar',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/pruthwa-kothekar.webp',
  socials: {
    instagram: 'https://www.instagram.com/pruthwa2197?stkn=MWFoZG1ncXp5MnBzbg==',
    linkedin: 'https://www.linkedin.com/in/pruthwa-kothekar-241714378/',
    email: 'pruthwa.eirbu@gmail.com',
  },
},

{
  name: 'Trisha Thepale',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/trisha-thepale.webp',
  socials: {
    instagram: 'https://www.instagram.com/trisha__1006?igsh=N20yNmp1aWozZHBy',
    linkedin: 'https://www.linkedin.com/in/trisha-anil-thepale-a8a668300/',
    email: 'trisha.eirbu@gmail.com',
  },
},

{
  name: 'Rohit Khubalkar',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'Robotics & AI',
  image: '/team/rohit-khubalkar.webp',
  socials: {
    instagram: 'https://www.instagram.com/rohit_khubalkar?stkn=MWY2N2JqZHFtMThsNQ==',
    linkedin: 'https://www.linkedin.com/in/rohit-khubalkar-385a43389/',
    email: 'rohit.eirbu@gmail.com',
  },
},

{
  name: 'Swanandi Palsokar',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/swanandi-palsokar.webp',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/in/swanandi-palsokar-78b790436/',
    email: 'swanandi2.eirbu@gmail.com',
  },
},

{
  name: 'Divya Patki',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'Robotics & AI',
  image: '/team/divya-patki.webp',
  socials: {
    instagram: 'https://www.instagram.com/divya.patki?stkn=dmRoY2xnZWMwdzhz',
    linkedin: 'https://www.linkedin.com/in/divya-patki-1303883ab/',
    email: 'divya.eirbu@gmail.com',
  },
},

{
  name: 'Nishtha Chandeliya',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'ENCS',
  image: '/team/nishtha-chandeliya.webp',
  socials: {
    instagram: 'https://www.instagram.com/nish.tha6686?stkn=MWZmNjk4ZDN2OHY1Nw==',
    linkedin: 'https://www.linkedin.com/in/nishtha-chandeliya-6b4985291/',
    email: 'nishtha.eirbu@gmail.com',
  },
},

{
  name: 'Anshul Dhote',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'Robotics & AI',
  image: '/team/anshul-dhote.webp',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/in/anshul-d-02b05a339/',
    email: 'anshul.eirbu@gmail.com',
  },
},

{
  name: 'Aniruddha Kakde',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'Robotics & AI',
  image: '/team/aniruddha-kakde.webp',
  socials: {
    instagram: 'https://www.instagram.com/aniruddhakakde07/',
    linkedin: 'https://www.linkedin.com/in/aniruddha-kakde-47b493340/',
    email: 'aniruddha.eirbu@gmail.com',
  },
},

{
  name: 'Agastya Katrojwar',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/agastya-katrojwar.webp',
  socials: {
    instagram: 'https://www.instagram.com/agastya0034?stkn=eHppNmY4OG4wbGRj',
    linkedin: 'https://www.linkedin.com/',
    email: 'agastya.eirbu@gmail.com',
  },
},


{
  name: 'Arya Kulkarni',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/arya-kulkarni.webp',
  socials: {
    instagram: 'https://www.instagram.com/arya.kulkarni27/',
    linkedin: 'https://www.linkedin.com/in/arya-kulkarni-aaa8ab430/',
    email: 'arya.eirbu@gmail.com',
  },
},

{
  name: 'Harendra Tomar',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'ELEC',
  image: '/team/harendra-tomar.webp',
  socials: {
    instagram: 'https://www.instagram.com/harrysingh_2007',
    linkedin: 'https://www.linkedin.com/in/harendra-singh-tomar',
    email: 'harendra.eirbu@gmail.com',
  },
},

{
  name: 'Arnav Mangde',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/arnav-mangde.webp',
  socials: {
    instagram: 'https://www.instagram.com/arnav_mangde?stkn=MXA0Nm9kcTBodWdiMw==',
    linkedin: 'https://www.linkedin.com/in/arnav-mangde-809726436/',
    email: 'arnav.eirbu@gmail.com',
  },
},
{
  name: 'Hrudesh Jamdar',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'ENCS',
  image: '/team/hrudesh-jamdar.webp',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/in/hrudesh-vinod-jamdar-89045a383/',
    email: 'hrudesh.eirbu@gmail.com',
  },
},


{
  name: 'Chhavi Kanoje',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/chhavi-kanoje.webp',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    email: 'chhavi.eirbu@gmail.com',
  },
},

{
  name: 'Rashmi Yadav',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/rashmi-yadav.webp',
  socials: {
    instagram: 'https://www.instagram.com/_rash__23/',
    linkedin: 'https://www.linkedin.com/in/rashmi-yadav-3302b837a',
    email: 'rashmi.eirbu@gmail.com',
  },
},

{
  name: 'Sakshi Rahangdale',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/sakshi-rahangdale.webp',
  socials: {
    instagram: 'https://www.instagram.com/sakshi_.rahangdale?stkn=MWJodW5xdjlnZGtkbg==',
    linkedin: 'https://www.linkedin.com/',
    email: 'sakshi.eirbu@gmail.com',
  },
},

{
  name: 'Shifa Akbani',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/shifa-akbani.webp',
  socials: {
    instagram: 'https://www.instagram.com/shifaakbani_07/',
    linkedin: 'https://www.linkedin.com/in/shifa-akbani-a4b2423b2',
    email: 'shifa.eirbu@gmail.com',
  },
},

{
  name: 'Shounak Joshi',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/shounak-joshi.webp',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/in/shounak-samirkumar-joshi-08646a393/',
    email: 'shounak.eirbu@gmail.com',
  },
},

{
  name: 'Shrunvat Pendke',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'ECE',
  image: '/team/shrunvat-pendke.webp',
  socials: {
    instagram: 'https://www.instagram.com/shrunvat.pendke_',
    linkedin: 'https://www.linkedin.com/',
    email: 'shrunvat.eirbu@gmail.com',
  },
},


{
  name: 'Tanishq Kale',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    email: 'tanishq.eirbu@gmail.com',
  },
},

{
  name: 'Khudaija Harmain',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/khudaija-harmain.webp',
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/in/khudaija-harmain-4661a9383/',
    email: 'khudaija.eirbu@gmail.com',
  },
},

{
  name: 'Utkarsha Gosavi',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/utkarsha-gosavi.webp',
  socials: {
    instagram: 'https://www.instagram.com/utkarsha.gosavi04/',
    linkedin: 'https://www.linkedin.com/in/utkarsha-gosavi-a28732380',
    email: 'utkarsha.eirbu@gmail.com',
  },
},
{
  name: 'Ashmira Mirza',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/ashmira-mirza.webp',
  socials: {
    instagram: 'https://www.instagram.com/mirzaashmira394',
    linkedin: 'https://www.linkedin.com/in/ashmira-mirza-059055222/',
    email: 'ashmira.eirbu@gmail.com',
  },
},
{
  name: 'Khushi Samanta',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/khushi-samanta.webp',
  socials: {
    instagram: 'https://www.instagram.com/_khushhii.s?stkn=MTg1MmdoZWxwM3hoaw==',
    linkedin: 'https://www.linkedin.com/in/khushi-samanta-945475385/',
    email: 'khushi.eirbu@gmail.com',
  },
},


{
  name: 'Suryam Suneja',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/suryam-suneja.webp',
  socials: {
    instagram: 'https://www.instagram.com/_suryam_suneja_/',
    linkedin: 'https://www.linkedin.com/in/suryam-suneja-4086aa425/',
    email: 'suryam.eirbu@gmail.com',
  },
},

{
  name: 'Tanya Adaliya',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/tanya-adaliya.webp',
  socials: {
    instagram: 'https://www.instagram.com/tanyaa777',
    linkedin: 'https://www.linkedin.com/in/tanya-a-7a97b1398?trk=contact-info',
    email: 'tanya.eirbu@gmail.com',
  },
},

{
  name: 'Abhay',
  role: 'Coordinator',
  year: '2nd Year',
  branch: '',
  image: '',
   socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    email: 'https://mail.google.com/',
  },
},

{
  name: 'Kamakshi Palekar',
  role: 'Coordinator',
  year: '2nd Year',
  branch: 'CSE',
  image: '/team/kamakshi-palekar.webp',
   socials: {
    instagram: 'https://www.instagram.com/palekarkamakshi?stkn=YTVzZ3NzYTZsZGh5',
    linkedin: 'https://www.linkedin.com/in/kamakshi-palekar-676945369/',
    email: 'kamakshi.eirbu@gmail.com',
  },
},

{
  name: 'Parth Gawande',
  role: 'Coordinator',
  year: '2nd Year',
  branch: '',
  image: '',
   socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    email: 'https://mail.google.com/',
  },
},


]

export const ALUMNI: TeamMember[] = [
  {
  name: 'Bhushan Madankar',
  role: 'Coordinator',
  year: '2026 Batch',
  branch: 'CYBER',
  image: '/team/bhushan-madankar.webp',
  socials: {
    instagram: 'https://www.instagram.com/_bhushan_madankar_?stkn=MW9wcnE4a2hsbDR1Mw==',
    linkedin: 'https://in.linkedin.com/in/bhushan-madankar/',
    email: 'bmadankar0@gmail.com',
  },
},

]