import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Native Flavors',
        description:
            'Pulilan’s food culture includes classic Bulacan dishes, rice-based snacks, and homemade delicacies shared at gatherings and celebrations.',
    },
    {
        title: 'Local Dining',
        items: ['Family eateries', 'Comfort food', 'Seasonal specialties'],
    },
    {
        title: 'Tasting Notes',
        description:
            'Visitors can explore savory meals, sweet treats, and small-town culinary stops that reflect everyday life in Pulilan.',
    },
];

export default function Cuisine() {
    return (
        <PublicTopicPage
            headTitle="Cuisine in Pulilan"
            eyebrow="What to See"
            title="Local flavors and everyday favorites."
            intro="Discover the dishes, snacks, and food experiences that make Pulilan a comfortable stop for visitors who want to eat like a local."
            sections={sections}
        />
    );
}