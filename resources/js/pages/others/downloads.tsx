import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Visitor Materials',
        description: 'Download helpful guides, tourism brochures, and orientation resources before your Pulilan visit.',
    },
    {
        title: 'Public Forms',
        items: ['Inquiry forms', 'Request templates', 'Community info sheets'],
    },
    {
        title: 'Quick Access',
        description: 'Use this section to find the most requested files and practical references in one place.',
    },
];

export default function OthersDownloads() {
    return (
        <PublicTopicPage
            headTitle="Downloads"
            eyebrow="Others"
            title="Guides, forms, and useful files."
            intro="Access downloadable content that supports visitors, residents, and partners who need municipal information."
            sections={sections}
        />
    );
}