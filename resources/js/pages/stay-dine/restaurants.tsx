import StayDineDirectoryPage, { type DirectoryItem } from '@/components/stay-dine-directory';

const listedRestaurants = [
    'Tsaad Enterprise', 'Sujeo Restaurant', 'Sarangyupsal Korean Restaurant', 'San Andres Fried Chicken House',
    'Restaurant Entree Food-House', 'PERF Restaurant Inc.', 'Old Folks Restaurant', 'Nikder Six Foods',
    'Nagusame Ramenba Japanese Restaurant', "Lydia's Food Haus", 'Lee Foo Panciteria – Franchisee', 'Lay Cate Food Corporation',
    'La-Vill Restaurant', 'K-Castle Korean Restaurant', 'Jollibee Foods Corporation – Pulilan Branch',
    'JMJ Three Sixteen Catering and General Merchandise', "Jen's Seafood Restaurant", 'JDN Foods',
    'Golden Arches Development Corporation', 'Golda L. De Guzman Enterprises – Canteen',
    'Funnside Ningnangan San Matias Company', 'Fresh N Famous Foods Inc. (Greenwich)', "Enteng's Grill and Restaurant",
    'Elvies Restaurant', "Ellen Allen's Food House", 'El Ranchero Eatery', 'Double 8 Food Corp. / Samgyup199 Food',
    'DMC Delectable Food Masters Inc.', 'Dejabrew Cafe', 'Decalo Food Corp.', 'Centrale Plains Ventures Inc.',
    'All Tasty, Inc.', '5Joys Corporation', '3J Foods and Cafe OPC', 'River of Life Resort and Restaurant',
];

const restaurants: DirectoryItem[] = listedRestaurants.map((name, index) => ({
    name,
    category: /cafe/i.test(name) ? 'Café' : /korean|samgyup/i.test(name) ? 'Korean' : /ramen|japanese/i.test(name) ? 'Japanese' : /jollibee|greenwich|fried chicken/i.test(name) ? 'Fast Food' : 'Restaurant',
    area: index % 3 === 0 ? 'Poblacion' : 'Pulilan',
    address: 'Pulilan, Bulacan',
    summary: 'A food establishment listed in the municipal business directory. Confirm current hours and availability before visiting.',
    highlights: ['Directory listing', 'Check opening hours', 'Local dining'],
    featured: index === 1,
}));

export default function StayDineRestaurants() {
    return (
        <StayDineDirectoryPage
            headTitle="Restaurants in Pulilan"
            eyebrow="Where to Stay and Dine"
            title="Restaurants in Pulilan"
            intro="Search by name, narrow by food type, and browse the alphabet when you already know the restaurant you want."
            imageSubHeader={{ src: '/images/carousel-images/Cuisine.jpg', alt: 'Pulilan restaurant and food stops' }}
            breadcrumbs={[
                { label: 'Where to Stay and Dine' },
                { label: 'Restaurants' },
            ]}
            stats={[
                { value: '35', label: 'Directory listings' },
                { value: '5', label: 'Dining categories' },
                { value: '19', label: 'Barangays in Pulilan' },
            ]}
            items={restaurants}
            type="restaurants"
            defaultView="grid"
            focusLabel="Food guide"
            focusNote="This layout keeps the archive easy to scan while still giving visitors the search, category, and alphabet tools they need to find a place fast."
        />
    );
}