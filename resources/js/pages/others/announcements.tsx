import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Official Notices',
        description: 'Review timely advisories and municipal announcements that affect residents and visitors.',
    },
    {
        title: 'Common Topics',
        items: ['Public schedules', 'Service updates', 'Program notices'],
    },
    {
        title: 'Community Awareness',
        description: 'This section supports better planning by publishing reminders and official information updates.',
    },
];

export default function OthersAnnouncements() {
    return (
        <PublicTopicPage
            headTitle="Announcements"
            eyebrow="Others"
            title="Official municipal advisories."
            intro="Check this page for official notices and schedule updates from Pulilan municipal offices and programs."
            sections={sections}
        />
    );
}