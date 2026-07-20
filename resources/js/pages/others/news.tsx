import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Latest Updates',
        description: 'Stay informed with local announcements, civic updates, and current community developments.',
    },
    {
        title: 'News Categories',
        items: ['Programs and events', 'Public advisories', 'Community highlights'],
    },
    {
        title: 'Why Follow',
        description: 'Regular updates help residents and visitors stay aligned with schedules and official notices.',
    },
];

export default function OthersNews() {
    return (
        <PublicTopicPage
            headTitle="News"
            eyebrow="Others"
            title="Current announcements and updates."
            intro="Catch the latest municipal and community news to stay updated on events, advisories, and local developments."
            sections={sections}
        />
    );
}