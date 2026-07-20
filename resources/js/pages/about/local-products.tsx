import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Farm and Food Products',
        description:
            'Pulilan produces goods that reflect its agricultural roots, from fresh ingredients to packaged snacks and native treats.',
    },
    {
        title: 'Craft and Trade',
        items: ['Local packaging', 'Market goods', 'Community-made items'],
    },
    {
        title: 'Take-Home Favorites',
        description:
            'These products make it easy for visitors to bring home a taste of Pulilan and support small local sellers at the same time.',
    },
];

export default function LocalProducts() {
    return (
        <PublicTopicPage
            headTitle="Local Products in Pulilan"
            eyebrow="What to See"
            title="Homegrown products and community-made goods."
            intro="Browse the local products that reflect the town’s agricultural base, market culture, and small-business creativity."
            sections={sections}
        />
    );
}