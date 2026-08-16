import StayDineDirectoryPage, { type DirectoryItem } from '@/components/stay-dine-directory';

const restaurants: DirectoryItem[] = [
    {
        name: 'Sujeo Restaurant',
        category: 'Restaurant',
        area: 'Sto. Cristo',
        address: 'Pulilan, Bulacan',
        summary: 'Comfort food and casual dining for daily meals, family outings, and quick lunch stops.',
        highlights: ['Dine-in', 'Takeout', 'Family-friendly'],
        featured: true,
    },
    {
        name: 'Pulilan Cafe Corner',
        category: 'Cafe',
        area: 'Poblacion',
        address: 'Pulilan, Bulacan',
        summary: 'Coffee and light plates for meetups, slow mornings, and casual afternoon breaks.',
        highlights: ['Coffee', 'Snacks', 'Working brunch'],
    },
    {
        name: 'Carabao Grill House',
        category: 'Restaurant',
        area: 'Taal',
        address: 'Pulilan, Bulacan',
        summary: 'Grilled dishes and hearty plates for lunch and dinner with a relaxed local feel.',
        highlights: ['Grill specialties', 'Shared meals', 'Quick service'],
    },
    {
        name: 'Market Rice Meals',
        category: 'Quick Bites',
        area: 'Longos',
        address: 'Pulilan, Bulacan',
        summary: 'Affordable rice meals and fast lunch options near busy errands and market visits.',
        highlights: ['Budget meals', 'Fast service', 'Grab and go'],
    },
    {
        name: 'Barrio Table Diner',
        category: 'Family Dining',
        area: 'Dampol',
        address: 'Pulilan, Bulacan',
        summary: 'Everyday family dishes and group platters with easy access for local diners.',
        highlights: ['Group dining', 'Daily specials', 'Relaxed setting'],
    },
    {
        name: 'Halo-Halo Corner',
        category: 'Desserts',
        area: 'Balatong A',
        address: 'Pulilan, Bulacan',
        summary: 'Cold treats and sweet snacks for afternoon breaks and quick dessert stops.',
        highlights: ['Desserts', 'Refreshments', 'Quick stop'],
    },
];

export default function StayDineRestaurants() {
    return (
        <StayDineDirectoryPage
            headTitle="Restaurants in Pulilan"
            eyebrow="Where to Stay and Dine"
            title="Restaurants in Pulilan"
            intro="Search by name, narrow by food type, and browse the alphabet when you already know the restaurant you want."
            imageSubHeader={{ src: '/images/carousel-images/Cuisine.jpg', alt: 'Pulilan restaurant and food stops' }}
            breadcrumbs={[
                { label: 'Where to Stay and Dine', href: route('stay.dine') },
                { label: 'Restaurants' },
            ]}
            stats={[
                { value: '6', label: 'Food stops shown' },
                { value: '6', label: 'Dining categories' },
                { value: '6', label: 'Areas represented' },
            ]}
            items={restaurants}
            focusLabel="Food guide"
            focusNote="This layout keeps the archive easy to scan while still giving visitors the search, category, and alphabet tools they need to find a place fast."
        />
    );
}