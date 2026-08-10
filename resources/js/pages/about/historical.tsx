import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Historic Landmarks',
        description:
            'The town includes locations tied to local memory, public life, and long-running traditions that have shaped its identity.',
    },
    {
        title: 'Local Stories',
        items: ['Old town narratives', 'Generational stories', 'Shared civic history'],
    },
    {
        title: 'Walking Through Time',
        description:
            'A historical visit in Pulilan can be simple and local, from churches and public spaces to community corners with stories behind them.',
    },
];

export default function Historical() {
    return (
        <PublicTopicPage
            headTitle="Historical"
            title="Pulilan Historicals"
            imageSubHeader={{ src: '/images/carousel-images/Historical.jpg', alt: 'historicals' }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: 'Historicals' },
            ]}
        >
            <section>
                
            </section>

        </PublicTopicPage>
    );
}