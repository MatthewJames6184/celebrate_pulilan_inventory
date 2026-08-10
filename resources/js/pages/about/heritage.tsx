import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Heritage Sites',
        description:
            'Pulilan’s heritage includes churches, older homes, civic buildings, and landmarks that tell the story of the town’s past.',
    },
    {
        title: 'Cultural Preservation',
        items: ['Historic structures', 'Traditional arts', 'Community memory'],
    },
    {
        title: 'Visitor Value',
        description:
            'Exploring heritage places helps visitors understand how Pulilan balances growth with respect for its roots.',
    },
];

export default function Heritage() {
    return (
        <PublicTopicPage
            headTitle="Heritage"
            title="Pulilan Heritages"
            imageSubHeader={{ src: '/images/carousel-images/Heritage.jpg', alt: 'Heritage' }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: 'Heritage' },
            ]}
        >
            <section>
                
            </section>

        </PublicTopicPage>
    );
}