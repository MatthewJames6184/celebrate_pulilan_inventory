import PublicTopicPage from '@/components/public-topic-page';
import TopicCardGrid from '@/components/topic-card-grid';
import { whatToSeePages } from '@/lib/what-to-see';

export default function Historical() {
    const page = whatToSeePages.historical;

    return (
        <PublicTopicPage
            headTitle={page.title}
            title={page.title}
            imageSubHeader={{ src: page.detailImage, alt: 'historicals' }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: page.title },
            ]}
        >
            <TopicCardGrid topic="historical" eyebrow={page.eyebrow} title={page.title} summary={page.summary} cards={page.cards} />
        </PublicTopicPage>
    );
}