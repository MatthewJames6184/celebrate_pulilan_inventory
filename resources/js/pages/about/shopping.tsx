import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Markets and Stores',
        description:
            'Shoppers can look for local markets, small stores, and neighborhood sellers that offer useful goods and Pulilan-made items.',
    },
    {
        title: 'Common Finds',
        items: ['Pasalubong items', 'Daily essentials', 'Local snacks'],
    },
    {
        title: 'Practical Stops',
        description:
            'Shopping in Pulilan is often simple, local, and community-driven, which makes it easy to pick up what you need while supporting residents.',
    },
];

export default function Shopping() {
    return (
        <PublicTopicPage
            headTitle="Shopping"
            title="Pulilan Shopping"
            imageSubHeader={{ src: '/images/carousel-images/Shopping.jpg', alt: 'shopping' }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: 'Shopping' },
            ]}
        >
            <section>
                
            </section>

        </PublicTopicPage>
    );
}