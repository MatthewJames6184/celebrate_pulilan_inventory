import PublicTopicPage from '@/components/public-topic-page';

const sections = [

    {
        title: 'Town Roots',
        description:
            'Pulilan grew from an agricultural community shaped by fertile land, river systems, and long-standing local traditions passed through generations.',
    },
    
];

const images = [
    {
        image: '/images/image-3.jpg',
        alt: 'geography map of pulilan',
    },
];
export default function History() {
    return (
        <PublicTopicPage
            headTitle="History of Pulilan"
            title="History of Pulilan"
            intro="Learn how Pulilan developed from its early settlement into a lively municipality with a strong sense of heritage and civic pride."
            sections={sections}
            imageSection={images}
            imageSubHeader = {
            
                {src:'/images/carousel-images/Historical.jpg', alt:"history"}
                
                
            }
            breadcrumbs={
                [
                    {label:"Home",href:route("home")},
                    {label:"About Pulilan", href:route("about")},
                    {label:"History"}
                ]
            }
            
        />
    

    );
}