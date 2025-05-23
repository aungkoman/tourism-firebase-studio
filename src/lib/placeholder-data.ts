import type { Destination, Experience, Promotion, BlogPost, Region } from '@/lib/types';

export const regions: Region[] = [
  { id: 'north', name: 'Northern Myanmar', description: 'Ancient kingdoms and Himalayan foothills.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'myanmar mountains' },
  { id: 'central', name: 'Central Myanmar', description: 'The cultural heartland, home to Bagan and Mandalay.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'myanmar temples' },
  { id: 'south', name: 'Southern Myanmar', description: 'Golden Rock, colonial history, and emerging coastlines.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'myanmar coast' },
  { id: 'east', name: 'Eastern Myanmar', description: 'Scenic Inle Lake and diverse ethnic cultures.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'myanmar lake' },
  { id: 'west', name: 'Western Myanmar', description: 'Pristine beaches of Ngapali and ancient Mrauk U.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'myanmar beach' },
];


export const destinations: Destination[] = [
  {
    id: 'bagan',
    name: 'Bagan',
    description: 'Ancient city with thousands of Buddhist temples and pagodas.',
    longDescription: 'Bagan, located on the banks of the Irrawaddy River, is home to the largest and densest concentration of Buddhist temples, pagodas, stupas and ruins in the world with many dating from the 11th and 12th centuries. The shape and construction of each building is highly significant in Buddhism with each component part taking on spiritual meaning.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'bagan temples',
    region: 'Central Myanmar',
    highlights: ['Sunrise Hot Air Balloon Ride', 'Temple Exploration by E-bike', 'Local Lacquerware Workshops'],
    travelTips: ['Best time to visit: October to February.', 'Rent an e-bike for easy exploration.', 'Respect local customs when visiting temples.'],
    gallery: [
      { url: 'https://placehold.co/800x600.png', dataAiHint: 'bagan hot air balloon' },
      { url: 'https://placehold.co/800x600.png', dataAiHint: 'bagan pagoda detail' },
      { url: 'https://placehold.co/800x600.png', dataAiHint: 'bagan landscape' },
    ]
  },
  {
    id: 'inle-lake',
    name: 'Inle Lake',
    description: 'Serene freshwater lake known for its floating villages and leg-rowing fishermen.',
    longDescription: 'Inle Lake is a freshwater lake located in the Nyaungshwe Township of Taunggyi District of Shan State, part of Shan Hills in Myanmar. It is the second largest lake in Myanmar with an estimated surface area of 44.9 square miles, and one of the highest at an elevation of 2,900 feet. During the dry season, the average water depth is 7 feet, with the deepest point being 12 feet.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'inle lake boat',
    region: 'Eastern Myanmar',
    highlights: ['Boat trips to floating markets', 'Visit Phaung Daw Oo Pagoda', 'Explore In Dein village'],
    travelTips: ['Stay in a stilt hotel on the lake.', 'Try local Shan cuisine.', 'Visit during the Phaung Daw Oo Pagoda Festival if possible.'],
    gallery: [
      { url: 'https://placehold.co/800x600.png', dataAiHint: 'inle lake fisherman' },
      { url: 'https://placehold.co/800x600.png', dataAiHint: 'inle lake village' },
      { url: 'https://placehold.co/800x600.png', dataAiHint: 'inle lake market' },
    ]
  },
  {
    id: 'mandalay',
    name: 'Mandalay',
    description: 'The last royal capital of Myanmar, rich in culture and history.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'mandalay palace',
    region: 'Central Myanmar',
    highlights: ['Mandalay Hill sunset', 'U Bein Bridge', 'Kuthodaw Pagoda (world\'s largest book)'],
    travelTips: ['Explore surrounding ancient cities like Amarapura and Sagaing.', 'Visit a gold leaf workshop.'],
  },
  {
    id: 'ngapali-beach',
    name: 'Ngapali Beach',
    description: 'Pristine white sand beaches and clear turquoise waters.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'ngapali beach sunset',
    region: 'Western Myanmar',
    highlights: ['Relaxing on the beach', 'Fresh seafood dining', 'Snorkeling and boat trips'],
    travelTips: ['Best season is from November to April.', 'Quieter alternative to some Southeast Asian beaches.'],
  },
];

export const experiences: Experience[] = [
  {
    id: 'hot-air-balloon-bagan',
    name: 'Hot Air Ballooning in Bagan',
    description: 'Experience a breathtaking sunrise over Bagan\'s ancient temples from a hot air balloon.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'hot air balloon',
    category: 'Nature & Adventure',
  },
  {
    id: 'trekking-kalaw',
    name: 'Trekking from Kalaw to Inle Lake',
    description: 'A multi-day trek through scenic Shan hills, villages, and tea plantations.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'myanmar trekking',
    category: 'Nature & Adventure',
  },
  {
    id: 'shan-cooking-class',
    name: 'Shan Cooking Class',
    description: 'Learn to prepare delicious local Shan cuisine with fresh ingredients.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'myanmar food',
    category: 'Local Cuisine & Markets',
  },
  {
    id: 'meditation-retreat',
    name: 'Meditation Retreat',
    description: 'Find peace and tranquility at one of Myanmar\'s renowned meditation centers.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'meditation monk',
    category: 'Wellness & Spiritual',
  },
];

export const promotions: Promotion[] = [
  {
    id: 'monsoon-deal',
    title: 'Monsoon Season Special: 30% Off Hotels',
    description: 'Enjoy discounted stays at select hotels across Myanmar during the green season.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'myanmar rain',
    discountInfo: '30% Off',
    validUntil: '2024-09-30',
  },
  {
    id: 'family-package',
    title: 'Family Adventure Package in Bagan',
    description: 'Includes e-bike rentals, a guided temple tour, and a traditional puppet show.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'family travel',
    discountInfo: 'Special Package Price',
  },
  {
    id: 'last-minute-ngapali',
    title: 'Last Minute Ngapali Beach Escape',
    description: 'Get 20% off your stay if you book within 7 days of arrival.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'beach resort',
    discountInfo: '20% Off',
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'myanmar-first-timers-guide',
    slug: 'myanmar-first-timers-guide',
    title: 'A First-Timer\'s Guide to Myanmar: Everything You Need to Know',
    author: 'Travel Expert',
    date: '2024-07-15',
    excerpt: 'Planning your first trip to the Golden Land? This guide covers essentials like visas, currency, culture, and top sights.',
    content: 'Myanmar, the Golden Land, is a country of breathtaking beauty and rich culture. This guide will help you plan your first adventure...\n\n## Visa Requirements\n...\n\n## Currency\n...\n\n## Top Sights\n...',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'myanmar map',
    category: 'Travel Tips',
  },
  {
    id: 'hidden-gems-of-mandalay',
    slug: 'hidden-gems-of-mandalay',
    title: 'Beyond the Palace: Discovering Mandalay\'s Hidden Gems',
    author: 'Local Explorer',
    date: '2024-06-28',
    excerpt: 'Mandalay is more than just its famous palace. Join us as we explore lesser-known temples, vibrant markets, and local artisan workshops.',
    content: 'While Mandalay Palace and U Bein Bridge are must-sees, the city offers so much more for the curious traveler...\n\n### Shwenandaw Monastery\n...\n\n### Zegyo Market\n...',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'mandalay street',
    category: 'Destinations',
  },
  {
    id: 'flavors-of-myanmar',
    slug: 'flavors-of-myanmar',
    title: 'A Culinary Journey: Tasting the Flavors of Myanmar',
    author: 'Foodie Adventures',
    date: '2024-05-10',
    excerpt: 'From savory Mohinga to refreshing Laphet Thoke, dive into the diverse and delicious world of Burmese cuisine.',
    content: 'Myanmar\'s cuisine is a delightful fusion of Southeast Asian flavors. Here are some dishes you must try...\n\n#### Mohinga\n...\n\n#### Laphet Thoke (Tea Leaf Salad)\n...',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'myanmar cuisine',
    category: 'Food & Drink',
  },
];
