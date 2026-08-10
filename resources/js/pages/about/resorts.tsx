import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Stay Options',
        description:
            'Pulilan and nearby areas offer practical places to stay, from simple guest accommodations to leisure-focused resorts.',
    },
    {
        title: 'Relaxing Getaways',
        items: ['Poolside resorts', 'Family stays', 'Weekend retreats'],
    },
    {
        title: 'Trip Planning',
        description:
            'Whether you are in town for an event or a quiet visit, these options help make Pulilan an easy base for exploring Bulacan.',
    },
];

export default function Resorts() {
    return (
        <PublicTopicPage
            headTitle="Resorts"
            title="Pulilan Resorts"
            imageSubHeader={{ src: '/images/carousel-images/Resorts.jpg', alt: 'resorts' }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: 'Resorts' },
            ]}
        >
            <section>
                
            </section>

        </PublicTopicPage>
    );
}