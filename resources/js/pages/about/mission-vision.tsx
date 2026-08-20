import PublicTopicPage from '@/components/public-topic-page';
import TopicCardGrid from '@/components/topic-card-grid';
import { whatToSeePages } from '@/lib/what-to-see';

export default function MissionVision() {
    const page = whatToSeePages['mission-vision'];

    return (
        <PublicTopicPage
            headTitle={page.title}
            title={page.title}
            imageSubHeader={{ src: page.detailImage, alt: 'mission vision' }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: page.title },
            ]}
        >
            <TopicCardGrid topic="mission-vision" eyebrow={page.eyebrow} title={page.title} summary={page.summary} cards={page.cards} />
        </PublicTopicPage>
    );
}