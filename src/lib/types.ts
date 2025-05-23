
export interface Destination {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  dataAiHint: string;
  region: string;
  highlights: string[];
  travelTips: string[];
  gallery?: { url: string; dataAiHint: string }[];
}

export interface Experience {
  id: string;
  name:string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
  category: 'Nature & Adventure' | 'Culture & Heritage' | 'Beaches & Islands' | 'Festivals & Events' | 'Local Cuisine & Markets' | 'Wellness & Spiritual';
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
  discountInfo?: string;
  validUntil?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string; // Store as ISO string, format on display
  excerpt: string;
  content: string; // Markdown or HTML content
  imageUrl: string;
  dataAiHint: string;
  category?: string;
}

export interface Region {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
}
