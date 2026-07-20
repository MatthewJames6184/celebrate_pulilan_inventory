import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Community Highlights',
        description: 'Browse visual highlights from festivals, heritage landmarks, and everyday scenes in Pulilan.',
    },
    {
        title: 'Gallery Themes',
        items: ['Festivals and events', 'Landmarks', 'Local life and culture'],
    },
    {
        title: 'Visual Storytelling',
        description: 'The gallery captures moments that show Pulilan’s identity, warmth, and community spirit.',
    },
];

export default function OthersPhotoGallery() {
    return (
        <PublicTopicPage
            headTitle="Photo Gallery"
            eyebrow="Others"
            title="Images from around Pulilan."
            intro="Explore a curated gallery of photos that showcase festivals, traditions, and places across the municipality."
            sections={sections}
        />
    );
}