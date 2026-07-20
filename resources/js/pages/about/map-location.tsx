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
            headTitle="Map Location of Pulilan"
            eyebrow="What to See"
            title="Where Pulilan sits and how to explore it."
            intro="Use this page as a simple guide to Pulilan’s location, access routes, and nearby areas worth including in your trip."
            sections={sections}
        />
    );
}