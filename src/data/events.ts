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
    id: "example-1",
    title: "Title",
    description: "Description",
    image: "https://placehold.co/800x450?text=Image",
    date: "March 2025",
    category: "Summit",
  },
  {
    id: "example-2",
    title: "Title",
    description: "Description",
    image: "https://placehold.co/800x450?text=Image",
    date: "August 2025",
    category: "Hackathon",
  },
  {
    id: "example-3",
    title: "Title",
    description: "Description",
    image: "https://placehold.co/800x450?text=Image",
    date: "November 2025",
    category: "Expo",
  },
];

export const otherEvents: Event[] = [
  {
    id: "example-4",
    title: "Title",
    description: "Description",
    image: "https://placehold.co/600x400?text=Image",
    category: "Workshop",
  },
  {
    id: "example-5",
    title: "Title",
    description: "Description",
    image: "https://placehold.co/600x400?text=Image",
    category: "Outreach",
  },
  {
    id: "example-6",
    title: "Title",
    description: "Description",
    image: "https://placehold.co/600x400?text=Image",
    category: "Talk",
  },
  {
    id: "example-7",
    title: "Title",
    description: "Description",
    image: "https://placehold.co/600x400?text=Image",
    category: "Career",
  },
  {
    id: "example-8",
    title: "Title",
    description: "Description",
    image: "https://placehold.co/600x400?text=Image",
    category: "Competition",
  },
  {
    id: "example-9",
    title: "Title",
    description: "Description",
    image: "https://placehold.co/600x400?text=Image",
    category: "Bootcamp",
  },
];
