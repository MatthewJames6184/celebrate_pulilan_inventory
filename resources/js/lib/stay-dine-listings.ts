import type { DirectoryItem } from '@/components/stay-dine-directory';

export function slugifyStayDineName(name: string): string {
    return name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

export const accommodationsSeed: DirectoryItem[] = [
    {
        name: 'Villa Lorenzo Resort',
        category: 'Resort',
        area: 'Poblacion',
        address: 'Pulilan, Bulacan',
        summary: 'A resort establishment listed in the municipal tourism directory.',
        highlights: ['Pool access', 'Family stays', 'Events-friendly'],
        featured: true,
    },
    {
        name: 'ACI Garden Resort',
        category: 'Resort',
        area: 'Pulilan',
        address: 'Pulilan, Bulacan',
        summary: 'A garden resort establishment listed in the municipal tourism directory.',
        highlights: ['Short stays', 'Budget friendly', 'Central access'],
    },
    {
        name: 'River of Life Resort and Restaurant',
        category: 'Resort & Restaurant',
        area: 'Pulilan',
        address: 'Pulilan, Bulacan',
        summary: 'A resort and dining establishment listed in the municipal tourism directory.',
        highlights: ['Quiet setting', 'Private hire', 'Scenic views'],
    },
    {
        name: 'MRC Resort',
        category: 'Resort',
        area: 'Pulilan',
        address: 'Pulilan, Bulacan',
        summary: 'A resort establishment listed in the municipal tourism directory.',
        highlights: ['Flexible stays', 'Parking nearby', 'Longer visits'],
    },
    {
        name: 'Marahuyo Private Resort',
        category: 'Private Resort',
        area: 'Pulilan',
        address: 'Pulilan, Bulacan',
        summary: 'A private resort establishment listed in the municipal tourism directory.',
        highlights: ['Easy check-in', 'Compact rooms', 'Good for groups'],
    },
    {
        name: 'Sta. Peregrina Swimming Pool (Pugpog Resort)',
        category: 'Resort',
        area: 'Sta. Peregrina',
        address: 'Pulilan, Bulacan',
        summary: 'A swimming pool and resort establishment listed in the municipal business directory.',
        highlights: ['Group-ready', 'Home-like', 'Local access'],
    },
    ...['Nature Care Resort and Farm', 'Green Haven Apartelle', 'Green Garden Court'].map((name) => ({
        name,
        category: name.includes('Apartelle') ? 'Apartelle' : name.includes('Court') ? 'Hotel / Inn' : 'Resort & Farm',
        area: 'Pulilan',
        address: 'Pulilan, Bulacan',
        summary: 'An accommodation establishment listed in the municipal tourism or business directory.',
        highlights: ['Directory listing', 'Check availability', 'Local stay'],
    })),
];

const listedRestaurants = [
    'Tsaad Enterprise',
    'Sujeo Restaurant',
    'Sarangyupsal Korean Restaurant',
    'San Andres Fried Chicken House',
    'Restaurant Entree Food-House',
    'PERF Restaurant Inc.',
    'Old Folks Restaurant',
    'Nikder Six Foods',
    'Nagusame Ramenba Japanese Restaurant',
    "Lydia's Food Haus",
    'Lee Foo Panciteria – Franchisee',
    'Lay Cate Food Corporation',
    'La-Vill Restaurant',
    'K-Castle Korean Restaurant',
    'Jollibee Foods Corporation – Pulilan Branch',
    'JMJ Three Sixteen Catering and General Merchandise',
    "Jen's Seafood Restaurant",
    'JDN Foods',
    'Golden Arches Development Corporation',
    'Golda L. De Guzman Enterprises – Canteen',
    'Funnside Ningnangan San Matias Company',
    'Fresh N Famous Foods Inc. (Greenwich)',
    "Enteng's Grill and Restaurant",
    'Elvies Restaurant',
    "Ellen Allen's Food House",
    'El Ranchero Eatery',
    'Double 8 Food Corp. / Samgyup199 Food',
    'DMC Delectable Food Masters Inc.',
    'Dejabrew Cafe',
    'Decalo Food Corp.',
    'Centrale Plains Ventures Inc.',
    'All Tasty, Inc.',
    '5Joys Corporation',
    '3J Foods and Cafe OPC',
    'River of Life Resort and Restaurant',
];

export const restaurantsSeed: DirectoryItem[] = listedRestaurants.map((name, index) => ({
    name,
    category: /cafe/i.test(name)
        ? 'Café'
        : /korean|samgyup/i.test(name)
          ? 'Korean'
          : /ramen|japanese/i.test(name)
            ? 'Japanese'
            : /jollibee|greenwich|fried chicken/i.test(name)
              ? 'Fast Food'
              : 'Restaurant',
    area: index % 3 === 0 ? 'Poblacion' : 'Pulilan',
    address: 'Pulilan, Bulacan',
    summary: 'A food establishment listed in the municipal business directory. Confirm current hours and availability before visiting.',
    highlights: ['Directory listing', 'Check opening hours', 'Local dining'],
    featured: index === 1,
}));
