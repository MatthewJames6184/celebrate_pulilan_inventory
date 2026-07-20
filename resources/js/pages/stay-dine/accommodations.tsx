import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Resort Stays',
        description: 'Enjoy relaxing poolside options and leisure-focused stays ideal for weekend breaks or family events.',
    },
    {
        title: 'Guesthouse Choices',
        items: ['Budget-friendly rooms', 'Family spaces', 'Short-stay options'],
    },
    {
        title: 'Booking Advice',
        description: 'Check availability early during peak festival dates and weekend travel periods for better choices.',
    },
];

export default function StayDineAccommodations() {
    return (
        <PublicTopicPage
            headTitle="Accommodations in Pulilan"
            eyebrow="Where to Stay and Dine"
            title="Resorts, guesthouses, and practical stays."
            intro="Find accommodation options that suit your itinerary, whether for a quick visit, event travel, or relaxed weekend stay."
            sections={sections}
        />
    );
}