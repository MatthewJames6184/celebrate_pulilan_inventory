import PublicTopicPage from '@/components/public-topic-page';
import TopicCardGrid from '@/components/topic-card-grid';
import { whatToSeePages } from '@/lib/what-to-see';

export default function Attraction() {
    const page = whatToSeePages.attraction;

    return (
        <PublicTopicPage
            headTitle={page.title}
            title={page.title}
            imageSubHeader={{ src: page.detailImage, alt: 'attraction' }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: page.title },
            ]}
        >
            <TopicCardGrid topic="attraction" eyebrow={page.eyebrow} title={page.title} summary={page.summary} cards={page.cards} />
        </PublicTopicPage>
    );
}