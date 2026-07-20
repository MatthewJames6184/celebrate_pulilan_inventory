import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Healthcare Access',
        description: 'Residents and visitors can access public health services and private care providers across and near Pulilan.',
    },
    {
        title: 'Health Services',
        items: ['Primary care support', 'Preventive services', 'Community health programs'],
    },
    {
        title: 'Wellness Focus',
        description: 'Local health programs help families maintain preventive care and improve overall community well-being.',
    },
];

export default function Health() {
    return (
        <PublicTopicPage
            headTitle="Health Services in Pulilan"
            eyebrow="What to See"
            title="Healthcare and wellness services."
            intro="Find a quick overview of healthcare support and wellness resources available to Pulilan residents and visitors."
            sections={sections}
        />
    );
}