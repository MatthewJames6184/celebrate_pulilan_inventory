import StayDineDirectoryPage, { type DirectoryItem } from '@/components/stay-dine-directory';

const accommodations: DirectoryItem[] = [
    {
        name: 'Makahoy Private Resort',
        category: 'Resort',
        area: 'Poblacion',
        address: 'Pulilan, Bulacan',
        summary: 'A resort-style stay for weekend breaks, family gatherings, and relaxed poolside visits.',
        highlights: ['Pool access', 'Family stays', 'Events-friendly'],
        featured: true,
    },
    {
        name: 'Pulilan Stay Options',
        category: 'Guesthouse',
        area: 'Near Town Proper',
        address: 'Pulilan, Bulacan',
        summary: 'Simple overnight rooms for event travelers and visitors who want a central base.',
        highlights: ['Short stays', 'Budget friendly', 'Central access'],
    },
    {
        name: 'Riverside Villa',
        category: 'Villa',
        area: 'Longos',
        address: 'Pulilan, Bulacan',
        summary: 'A quiet stay option for guests who want a slower pace and more privacy.',
        highlights: ['Quiet setting', 'Private hire', 'Scenic views'],
    },
    {
        name: 'Event Traveler Suites',
        category: 'Service Apartment',
        area: 'Sto. Cristo',
        address: 'Pulilan, Bulacan',
        summary: 'Practical rooms for festival guests, business travelers, and longer visits.',
        highlights: ['Flexible stays', 'Parking nearby', 'Longer visits'],
    },
    {
        name: 'Garden Court Inn',
        category: 'Inn',
        area: 'Balatong A',
        address: 'Pulilan, Bulacan',
        summary: 'A compact inn with a calm neighborhood feel and easy access to town routes.',
        highlights: ['Easy check-in', 'Compact rooms', 'Good for groups'],
    },
    {
        name: 'Family Rest House',
        category: 'Guesthouse',
        area: 'Dampol',
        address: 'Pulilan, Bulacan',
        summary: 'A simple base for family visits, local gatherings, and overnight stays.',
        highlights: ['Group-ready', 'Home-like', 'Local access'],
    },
];

export default function StayDineAccommodations() {
    return (
        <StayDineDirectoryPage
            headTitle="Accommodations in Pulilan"
            eyebrow="Where to Stay and Dine"
            title="Accommodations, resorts, and practical overnight stays."
            intro="Use the directory tools to search by name, filter by area, and compare the best stay options for festival trips, family visits, and weekend breaks."
            imageSubHeader={{ src: '/images/carousel-images/Resorts.jpg', alt: 'Pulilan resort stays' }}
            breadcrumbs={[
                { label: 'Where to Stay and Dine', href: route('stay.dine') },
                { label: 'Accommodations' },
            ]}
            stats={[
                { value: '6', label: 'Stay options shown' },
                { value: '5', label: 'Categories available' },
                { value: '6', label: 'Areas represented' },
            ]}
            items={accommodations}
            focusLabel="Stay guide"
            focusNote="This page is designed like a directory first: start with search, narrow by category or area, then browse the alphabetical index if you already know the name."
        />
    );
}