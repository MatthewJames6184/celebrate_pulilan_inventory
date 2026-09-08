import { Head, usePage } from '@inertiajs/react';

import PublicLayout from '@/layouts/public-layout';
import StayDineDetail from '@/components/stay-dine-detail';

const accommodationDetails = {
    'makahoy-private-resort': {
        name: 'Makahoy Private Resort',
        category: 'Resort',
        area: 'Poblacion',
        image: 'https://images.unsplash.com/photo-1594099462046-1df31fd4a66c?w=1600&h=900&fit=crop&auto=format',
        price: '₱2,500/night',
        rating: 4.7,
        reviews: 38,
        summary: 'A resort-style stay for weekend breaks, family gatherings, and relaxed poolside visits.',
        description: 'Makahoy Private Resort offers a serene escape from the city with beautifully landscaped grounds and crystal-clear pools. Perfect for family reunions, team buildings, and overnight getaways, it provides an authentic Bulacan countryside experience.',
        highlights: ['Poolside', 'Family-friendly', 'Events venue'],
        amenities: ['Swimming Pool', 'Function Hall', 'Parking', 'WiFi', 'BBQ Area', 'Kids Play'],
        hours: 'Open daily · 8AM–10PM',
        phone: '+63 917 000 0001',
    },
};

const restaurantDetails = {
    'sujeo-restaurant': {
        name: 'Sujeo Restaurant',
        category: 'Restaurant',
        area: 'Sto. Cristo',
        image: 'https://images.unsplash.com/photo-1618890512438-19730450f731?w=1600&h=900&fit=crop&auto=format',
        price: '₱150–450/meal',
        rating: 4.6,
        reviews: 73,
        summary: 'Comfort food and casual dining for daily meals, family outings, and quick lunch stops.',
        description: 'Sujeo Restaurant brings a relaxed local dining experience to Pulilan with hearty Filipino plates, warm service, and generous portions. It is a comfortable stop for family meals, casual celebrations, and visitors exploring the town.',
        highlights: ['Dine-in', 'Takeout', 'Family-friendly'],
        amenities: ['Dine-in', 'Private function', 'Catering', 'WiFi', 'Parking'],
        hours: 'Tue–Sun · 10AM–9PM',
        phone: '+63 917 000 0011',
    },
};

const relatedAccommodation = [
    { name: 'Garden Court Inn', category: 'Inn', area: 'Balatong A', image: 'https://images.unsplash.com/photo-1676089775678-f81f7253103e?w=700&h=480&fit=crop&auto=format', price: '₱1,200/night' },
    { name: 'Event Traveler Suites', category: 'Service Apartment', area: 'Sto. Cristo', image: 'https://images.unsplash.com/photo-1561811358-21aef14f0551?w=700&h=480&fit=crop&auto=format', price: '₱1,800/night' },
    { name: 'Riverside Villa', category: 'Villa', area: 'Longos', image: 'https://images.unsplash.com/photo-1637851522639-2d54fec9125e?w=700&h=480&fit=crop&auto=format', price: '₱3,200/night' },
];

const relatedRestaurants = [
    { name: "Aling Nena's Carinderia", category: 'Filipino Carinderia', area: 'Poblacion', image: 'https://images.unsplash.com/photo-1537495988501-f9cd94a78f3e?w=700&h=480&fit=crop&auto=format', price: '₱80–200/meal' },
    { name: 'Bulakeño Kitchen', category: 'Traditional Filipino', area: 'Longos', image: 'https://images.unsplash.com/photo-1578366687181-5f90a617ca7a?w=700&h=480&fit=crop&auto=format', price: '₱150–450/meal' },
    { name: 'Heritage Café Pulilan', category: 'Café', area: 'Poblacion', image: 'https://images.unsplash.com/photo-1774896037166-a120b1433866?w=700&h=480&fit=crop&auto=format', price: '₱60–250/item' },
];

export default function StayDineListingDetail() {
    const { props } = usePage<{ type: 'accommodations' | 'restaurants'; slug: string }>();
    const type = props.type;
    const source = type === 'restaurants' ? restaurantDetails : accommodationDetails;
    const fallback = type === 'restaurants' ? restaurantDetails['sujeo-restaurant'] : accommodationDetails['makahoy-private-resort'];
    const detail = source[props.slug as keyof typeof source] ?? fallback;

    return (
        <PublicLayout>
            <Head title={`${detail.name} — Details`} />
            <StayDineDetail
                {...detail}
                type={type}
                location="Pulilan, Bulacan"
                related={type === 'restaurants' ? relatedRestaurants : relatedAccommodation}
            />
        </PublicLayout>
    );
}
