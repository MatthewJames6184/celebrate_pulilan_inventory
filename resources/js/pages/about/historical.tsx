import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Historic Landmarks',
        description:
            'The town includes locations tied to local memory, public life, and long-running traditions that have shaped its identity.',
    },
    {
        title: 'Local Stories',
        items: ['Old town narratives', 'Generational stories', 'Shared civic history'],
    },
    {
        title: 'Walking Through Time',
        description:
            'A historical visit in Pulilan can be simple and local, from churches and public spaces to community corners with stories behind them.',
    },
];

export default function Historical() {
    return (
        <PublicTopicPage
            headTitle="Historical Places in Pulilan"
            eyebrow="What to See"
            title="Historical landmarks and local stories."
            intro="Explore the places and memories that helped shape Pulilan’s civic life, public spaces, and sense of place."
            sections={sections}
        />
    );
}