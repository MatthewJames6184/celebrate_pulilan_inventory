import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Healthcare Access',
        description: 'Residents and visitors can access public health services and private care providers across and near Pulilan.',
    },
    {
        title: 'Health Services',
        items: ['Primary care support', 'Preventive services', 'Community health programs'],
    },
    {
        title: 'Wellness Focus',
        description: 'Local health programs help families maintain preventive care and improve overall community well-being.',
    },
];

export default function Health() {
    return (
        <PublicTopicPage
            headTitle="Health"
            title="Pulilan Health"
            imageSubHeader={{ src: '/images/carousel-images/Health.jpg', alt: 'health' }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: 'Health' },
            ]}
        >
            <section>
                
            </section>

        </PublicTopicPage>
    );
}