import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Learning Hubs',
        description: 'Pulilan supports education through public and private schools, training spaces, and student-centered programs.',
    },
    {
        title: 'Community Learning',
        items: ['Primary and secondary schools', 'Youth activities', 'Skills programs'],
    },
    {
        title: 'Why It Matters',
        description: 'Education helps shape local progress and prepares families for long-term growth in the municipality.',
    },
];

export default function Education() {
    return (
        <PublicTopicPage
            headTitle="Education"
            title="Education in Pulilan"
            imageSubHeader={{ src: '/images/carousel-images/Education.jpg', alt: 'education' }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: 'Education' },
            ]}
        >
            <section>
                
            </section>

        </PublicTopicPage>
    );
}