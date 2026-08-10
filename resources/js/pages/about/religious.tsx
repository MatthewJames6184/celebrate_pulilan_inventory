import PublicTopicPage from '@/components/public-topic-page';
import TopicCardGrid from '@/components/topic-card-grid';
import { whatToSeePages } from '@/lib/what-to-see';

export default function Religious() {
    const page = whatToSeePages.religious;

    return (
        <PublicTopicPage
            headTitle={page.title}
            title={page.title}
            imageSubHeader={{ src: page.detailImage, alt: 'religious' }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: page.title },
            ]}
        >
            <TopicCardGrid topic="religious" eyebrow={page.eyebrow} title={page.title} summary={page.summary} cards={page.cards} />
        </PublicTopicPage>
    );
}