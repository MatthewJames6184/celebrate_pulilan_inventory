import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Town Geography',
        description:
            'Pulilan sits in Bulacan with easy access to nearby towns and regional routes, making it a practical stop for day trips and short visits.',
    },
    {
        title: 'Getting Around',
        items: ['Main roads', 'Public transport', 'Town landmarks'],
    },
    {
        title: 'Nearby Stops',
        description:
            'Visitors can combine Pulilan with surrounding Bulacan destinations for food, history, and nature in one trip.',
    },
];

export default function MapLocation() {
    return (
        <PublicTopicPage
            headTitle="Map Location"
            title="Pulilan Map Locations"
            imageSubHeader={{ src: '/images/carousel-images/Map-Location.jpg', alt: 'Map Location' }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: 'Festivals' },
            ]}
        >
            <section>
                
            </section>

        </PublicTopicPage>
    );
}