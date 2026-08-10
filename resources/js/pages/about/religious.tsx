import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Church Life',
        description:
            'Pulilan’s religious identity is visible in churches, devotional traditions, and community gatherings centered on faith and service.',
    },
    {
        title: 'Shared Traditions',
        items: ['Processions', 'Feast days', 'Prayer gatherings'],
    },
    {
        title: 'Community Role',
        description:
            'These spaces and practices continue to shape local culture, especially during town celebrations and family milestones.',
    },
];

export default function Religious() {
    return (
        <PublicTopicPage
            headTitle="Religious"
            title="Religions in Pulilan"
            imageSubHeader={{ src: '/images/carousel-images/Religious.jpg', alt: 'religious' }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: 'Religious' },
            ]}
        >
            <section>
                
            </section>

        </PublicTopicPage>
    );
}