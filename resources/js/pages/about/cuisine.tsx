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
            headTitle="Cuisine"
            title="Pulilan Cuisines"
            imageSubHeader={{ src: '/images/carousel-images/Cuisine.jpg', alt: 'cuisine' }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: 'Cuisines' },
            ]}
        >
            <section>

            </section>

        </PublicTopicPage>
    );
}