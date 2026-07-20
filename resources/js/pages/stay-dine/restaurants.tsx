import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Local Food Stops',
        description: 'Pulilan offers dining spots with everyday comfort food, local favorites, and quick service options.',
    },
    {
        title: 'Dining Types',
        items: ['Family dining', 'Cafe choices', 'Street food corners'],
    },
    {
        title: 'Food Trip Tips',
        description: 'Pair your meal plans with nearby attractions for a simple and enjoyable day around town.',
    },
];

export default function StayDineRestaurants() {
    return (
        <PublicTopicPage
            headTitle="Restaurants in Pulilan"
            eyebrow="Where to Stay and Dine"
            title="Local dining and food experiences."
            intro="Explore restaurant options and food stops that highlight Pulilan flavors and warm local hospitality."
            sections={sections}
        />
    );
}