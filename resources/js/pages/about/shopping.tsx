import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Markets and Stores',
        description:
            'Shoppers can look for local markets, small stores, and neighborhood sellers that offer useful goods and Pulilan-made items.',
    },
    {
        title: 'Common Finds',
        items: ['Pasalubong items', 'Daily essentials', 'Local snacks'],
    },
    {
        title: 'Practical Stops',
        description:
            'Shopping in Pulilan is often simple, local, and community-driven, which makes it easy to pick up what you need while supporting residents.',
    },
];

export default function Shopping() {
    return (
        <PublicTopicPage
            headTitle="Shopping in Pulilan"
            eyebrow="What to See"
            title="Local markets and everyday shopping stops."
            intro="Find practical shopping spots and local goods that give visitors a small but useful glimpse of daily life in Pulilan."
            sections={sections}
        />
    );
}