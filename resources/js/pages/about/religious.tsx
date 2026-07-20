import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Church Life',
        description:
            'Pulilan’s religious identity is visible in churches, devotional traditions, and community gatherings centered on faith and service.',
    },
    {
        title: 'Shared Traditions',
        items: ['Processions', 'Feast days', 'Prayer gatherings'],
    },
    {
        title: 'Community Role',
        description:
            'These spaces and practices continue to shape local culture, especially during town celebrations and family milestones.',
    },
];

export default function Religious() {
    return (
        <PublicTopicPage
            headTitle="Religious Sites in Pulilan"
            eyebrow="What to See"
            title="Faith, tradition, and community devotion."
            intro="Find the places and traditions that reflect Pulilan’s long-standing religious life and the role of faith in daily community culture."
            sections={sections}
        />
    );
}