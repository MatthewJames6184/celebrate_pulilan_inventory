import PublicTopicPage from '@/components/public-topic-page';

const sections = [
    {
        title: 'Main Sections',
        description: 'Use this guide to navigate the major pages of the Celebrate Pulilan website quickly.',
    },
    {
        title: 'Quick Paths',
        items: ['About and attractions', 'Stay and dine', 'Contact and resources'],
    },
    {
        title: 'Navigation Help',
        description: 'The site map helps first-time visitors locate content and sections without extra searching.',
    },
];

export default function OthersSiteMap() {
    return (
        <PublicTopicPage
            headTitle="Site Map"
            eyebrow="Others"
            title="A quick map of website content."
            intro="Use this page as a simple navigation reference for finding pages, resources, and information categories."
            sections={sections}
        />
    );
}