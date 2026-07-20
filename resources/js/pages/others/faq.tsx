import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Visitor Questions',
        description: 'Find quick answers to common travel and destination questions about Pulilan.',
    },
    {
        title: 'Service Questions',
        items: ['Office hours', 'Permit concerns', 'Contact channels'],
    },
    {
        title: 'Planning Support',
        description: 'This section is designed to reduce guesswork and help you prepare before your visit.',
    },
];

export default function OthersFaq() {
    return (
        <PublicTopicPage
            headTitle="Frequently Asked Questions"
            eyebrow="Others"
            title="Answers to common concerns."
            intro="Browse frequently asked questions related to travel, local services, and basic municipal information in Pulilan."
            sections={sections}
        />
    );
}