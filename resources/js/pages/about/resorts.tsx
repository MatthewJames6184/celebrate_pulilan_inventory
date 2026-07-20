import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Stay Options',
        description:
            'Pulilan and nearby areas offer practical places to stay, from simple guest accommodations to leisure-focused resorts.',
    },
    {
        title: 'Relaxing Getaways',
        items: ['Poolside resorts', 'Family stays', 'Weekend retreats'],
    },
    {
        title: 'Trip Planning',
        description:
            'Whether you are in town for an event or a quiet visit, these options help make Pulilan an easy base for exploring Bulacan.',
    },
];

export default function Resorts() {
    return (
        <PublicTopicPage
            headTitle="Resorts in Pulilan"
            eyebrow="What to See"
            title="Where to stay and unwind."
            intro="Explore resort-style stays and nearby lodging choices that fit family trips, weekend breaks, and event travel."
            sections={sections}
        />
    );
}