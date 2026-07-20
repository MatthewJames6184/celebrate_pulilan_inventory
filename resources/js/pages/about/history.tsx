import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Town Roots',
        description:
            'Pulilan grew from an agricultural community shaped by fertile land, river systems, and long-standing local traditions passed through generations.',
    },
    {
        title: 'Community Growth',
        description:
            'As Pulilan expanded, it developed stronger public services, schools, businesses, and cultural programs that helped define modern town life.',
    },
    {
        title: 'Legacy Today',
        items: ['Local heritage', 'Family traditions', 'Community events'],
    },
];

export default function History() {
    return (
        <PublicTopicPage
            headTitle="History of Pulilan"
            eyebrow="About Pulilan"
            title="History, roots, and community identity."
            intro="Learn how Pulilan developed from its early settlement into a lively municipality with a strong sense of heritage and civic pride."
            sections={sections}
        />
    );
}