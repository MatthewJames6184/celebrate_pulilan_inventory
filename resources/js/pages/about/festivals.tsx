import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Town Celebrations',
        description:
            'Pulilan is known for community events that bring together residents, schools, businesses, and local leaders in a shared celebration of culture.',
    },
    {
        title: 'Festival Highlights',
        items: ['Street programs', 'Parades', 'Cultural showcases'],
    },
    {
        title: 'Why It Matters',
        description:
            'These gatherings help preserve traditions, support local pride, and give visitors a memorable look at Pulilan’s character.',
    },
];

export default function Festivals() {
    return (
        <PublicTopicPage
            headTitle="Festival"
            title="Pulilan Festivals"
            imageSubHeader={{ src: '/images/carousel-images/Festival.jpg', alt: 'festivals' }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: 'Festivals' },
            ]}
        >
            <section>
                
            </section>

        </PublicTopicPage>
    );
}