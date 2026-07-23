export type MediaType = 'image' | 'video';

export interface GalleryItem {
  id: string;
  type: MediaType;
  url: string;
  thumbnailUrl?: string; // Prepared for future video support
  title: string;
  date: string;
  description?: string;
  width?: number; // Aspect ratio hints
  height?: number;
}

export const galleryData: GalleryItem[] = [
  {
    id: 'g1',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1583391733975-6979435b54a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Sankranti Celebration',
    date: '15 JAN 2025',
    description: 'A colorful start to the year with traditions and dance.',
  },
  {
    id: 'g2',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Heritage Talk Series',
    date: '28 FEB 2025',
    description: 'Exploring India\'s rich heritage and history.',
  },
  {
    id: 'g3',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Rangoli Competition',
    date: '21 MAR 2025',
    description: 'Creativity, colors and culture come together.',
  },
  {
    id: 'g4',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Swar Utsav',
    date: '10 APR 2025',
    description: 'An evening of music that touched hearts.',
  },
  {
    id: 'g5',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Clean India Drive',
    date: '05 MAY 2025',
    description: 'Small steps towards a cleaner tomorrow.',
  },
  {
    id: 'g6',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Eco-Friendly Ganesh Chaturthi',
    date: '02 SEP 2025',
    description: 'Celebrating responsibly with eco-friendly idols.',
  }
];
