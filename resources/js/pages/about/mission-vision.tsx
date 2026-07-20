import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Municipal Mission',
        description:
            'Pulilan is committed to responsive governance, public service improvement, and community-centered development.',
    },
    {
        title: 'Long-Term Vision',
        items: ['Inclusive progress', 'Sustainable growth', 'Stronger local identity'],
    },
    {
        title: 'Service Direction',
        description: 'These guiding principles shape planning, programs, and public initiatives across the municipality.',
    },
];

export default function MissionVision() {
    return (
        <PublicTopicPage
            headTitle="Mission and Vision of Pulilan"
            eyebrow="What to See"
            title="Public service goals and direction."
            intro="Read the mission and vision highlights that guide Pulilan’s programs, governance priorities, and service delivery."
            sections={sections}
        />
    );
}