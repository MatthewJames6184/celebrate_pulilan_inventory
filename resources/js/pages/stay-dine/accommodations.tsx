import StayDineDirectoryPage, { type DirectoryItem } from '@/components/stay-dine-directory';

const accommodations: DirectoryItem[] = [
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

export default function StayDineAccommodations() {
    return (
        <StayDineDirectoryPage
            headTitle="Pulilan Accommodations"
            eyebrow="Where to Stay and Dine"
            // title="Accommodations, resorts, and practical overnight stays."
            title="Accommodations in Pulilan"
            intro="Accommodations, resorts, and practical overnight stays."
            imageSubHeader={{ src: '/images/carousel-images/Resorts.jpg', alt: 'Pulilan resort stays' }}
            breadcrumbs={[{ label: 'Where to Stay and Dine' }, { label: 'Accommodations' }]}
            stats={[
                { value: '9', label: 'Directory listings' },
                { value: '5', label: 'Stay categories' },
                { value: '19', label: 'Barangays in Pulilan' },
            ]}
            items={accommodations}
            type="accommodations"
            defaultView="grid"
            focusLabel="Stay guide"
            focusNote="This page is designed like a directory first: start with search, narrow by category or area, then browse the alphabetical index if you already know the name."
        />
    );
}
