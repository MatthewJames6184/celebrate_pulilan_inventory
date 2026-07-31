import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Town Destinations',
        description:
            'Pulilan offers community destinations where visitors can explore local culture, public spaces, and day-trip highlights.',
    },
    {
        title: 'Visitor Favorites',
        items: ['Heritage stops', 'Community centers', 'Nature-side views'],
    },
    {
        title: 'Planning Tips',
        description: 'Start with nearby landmarks, then combine food, history, and local products in one easy itinerary.',
    },
];

export default function Attraction() {
    return (
        <PublicTopicPage
            headTitle="Attraction"
            title="Pulilan Attractions"
            imageSubHeader={{ src: '/images/carousel-images/Attraction.jpg', alt: 'attraction' }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: 'Attraction' },
            ]}
        >
            <section>
                
            </section>

        </PublicTopicPage>
    );
}