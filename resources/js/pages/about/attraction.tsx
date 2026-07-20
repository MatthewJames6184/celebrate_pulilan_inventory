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
            headTitle="Attractions in Pulilan"
            eyebrow="What to See"
            title="Featured places around Pulilan."
            intro="Discover points of interest that reflect Pulilan’s community life, heritage, and welcoming local character."
            sections={sections}
        />
    );
}