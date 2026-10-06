export type NewsItem = {
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    image: string;
    href: string;
};

export const newsItems: NewsItem[] = [
    {
        slug: 'municipal-news-1',
        title: 'Pulilan marks another vibrant celebration of culture and community',
        date: 'April 12, 2026',
        category: 'Community',
        excerpt: 'The municipality continues to celebrate local heritage, public service, and the strong spirit of Pulilan.',
        image: '/images/carousel-images/Festival.jpg',
        href: 'https://pulilan.gov.ph',
    },
    {
        slug: 'municipal-news-2',
        title: 'Local programs and tourism updates for visitors in Pulilan',
        date: 'March 29, 2026',
        category: 'Tourism',
        excerpt: 'Fresh updates from Pulilan highlight municipal initiatives, visitor experiences, and community-led tourism efforts.',
        image: '/images/carousel-images/Attraction.jpg',
        href: 'https://pulilan.gov.ph',
    },
    {
        slug: 'municipal-news-3',
        title: 'Pulilan’s heritage, food, and destination highlights continue to attract visitors',
        date: 'March 10, 2026',
        category: 'Heritage',
        excerpt: 'Discover the town’s best-loved destinations, local flavors, and everyday experiences shared with the public.',
        image: '/images/carousel-images/Cuisine.jpg',
        href: 'https://pulilan.gov.ph',
    },
];

export const featuredNews = newsItems[0];
