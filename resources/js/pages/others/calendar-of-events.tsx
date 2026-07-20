import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Upcoming Activities',
        description: 'Track festivals, civic programs, and community events planned throughout the year in Pulilan.',
    },
    {
        title: 'Event Types',
        items: ['Cultural celebrations', 'Municipal events', 'Public gatherings'],
    },
    {
        title: 'Scheduling Tips',
        description: 'Review dates ahead of time so you can align your visits with the activities you want to experience.',
    },
];

export default function OthersCalendarOfEvents() {
    return (
        <PublicTopicPage
            headTitle="Calendar of Events"
            eyebrow="Others"
            title="Event schedules and celebration dates."
            intro="Plan your visit around Pulilan’s annual and seasonal activities with this events-focused overview page."
            sections={sections}
        />
    );
}