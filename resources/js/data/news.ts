export type NewsItem = {
    slug: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
    content: string[];
    category: string;
};

export const newsItems: NewsItem[] = [
    {
        slug: 'tree-planting-activity',
        title: 'Tree Planting Activity',
        date: 'September 25, 2023',
        image: '/images/carousel-images/Religious.jpg',
        category: 'Environment',
        excerpt:
            'The Municipal Government of Pulilan partnered with local stakeholders to strengthen environmental awareness through a community tree planting drive that promoted greener public spaces and stronger civic engagement.',
        content: [
            'The Municipal Government of Pulilan, in coordination with local stakeholders and volunteers, successfully conducted a tree planting activity designed to promote environmental stewardship and active civic participation across the municipality.',
            'Residents, local leaders, and partner agencies joined the effort to plant native trees in community spaces, public roadsides, and selected green areas that need long-term care and protection. The initiative is part of the town’s broader push to improve urban biodiversity and strengthen climate resilience.',
            'Community members expressed hope that projects like this will encourage future collaborations between the local government and residents to preserve Pulilan’s natural beauty while creating greener and healthier public spaces for generations to come.',
        ],
    },
    {
        slug: 'carabao-festival-celebration',
        title: 'Carabao Festival Celebration',
        date: 'April 16, 2024',
        image: '/images/carousel-images/Festival.jpg',
        category: 'Festival',
        excerpt:
            'Pulilan celebrated its annual Carabao Festival with colorful festivities, cultural presentations, and community gatherings that highlighted the town’s agricultural identity.',
        content: [
            'The Municipality of Pulilan welcomed residents and visitors for the annual Carabao Festival, a lively showcase of local culture, farming heritage, and community pride. The celebration brought together families, traders, and cultural groups for a vibrant day of music, food, and festive activities.',
            'Highlights of the event included community performances, agricultural showcases, and a display of the craftsmanship and traditions that continue to shape Pulilan as a town deeply rooted in rural heritage. The festival also served as a platform to honor local workers, farmers, and contributors to the community.',
            'By bringing together residents and visitors in a joyful and meaningful celebration, the Carabao Festival reminded everyone of Pulilan’s strong sense of identity, unity, and appreciation for the land and the people who cultivate it.',
        ],
    },
    {
        slug: 'education-drive-and-scholarship-support',
        title: 'Education Drive and Scholarship Support',
        date: 'June 7, 2024',
        image: '/images/carousel-images/Education.jpg',
        category: 'Education',
        excerpt:
            'Pulilan’s local education initiatives continue to expand access to learning through scholarship opportunities, learning support, and youth empowerment programs.',
        content: [
            'The local government and education partners launched another round of support for students across Pulilan with a focus on making learning more accessible, inclusive, and empowering for young residents. The initiative covered scholarship assistance, classroom support, and youth engagement efforts.',
            'The campaign promotes stronger educational outcomes by encouraging active participation from students, families, and community stakeholders. Officials reiterated their commitment to investing in the next generation and creating pathways for academic growth and civic responsibility.',
            'As more students benefit from these initiatives, Pulilan continues to strengthen its foundation for long-term development through education and skills-building opportunities aligned with the needs of the community.',
        ],
    },
    {
        slug: 'community-health-and-wellness-program',
        title: 'Community Health and Wellness Program',
        date: 'August 12, 2024',
        image: '/images/carousel-images/Health.jpg',
        category: 'Health',
        excerpt:
            'A community health and wellness drive provided basic services, health education, and screenings that benefited residents across multiple barangays.',
        content: [
            'Municipal health teams conducted a community wellness program that offered health screening, consultation, and public education designed to improve awareness and support preventive care among families in Pulilan.',
            'The initiative focused on health services that are easily accessible to residents while promoting stronger habits around nutrition, disease prevention, and regular checkups. Health workers also guided participants on the importance of early consultation and healthy living.',
            'The success of the activity reflects Pulilan’s ongoing commitment to improving public health outcomes and ensuring that residents have access to practical, community-centered care and wellness support.',
        ],
    },
    {
        slug: 'heritage-house-and-cultural-tour',
        title: 'Heritage House and Cultural Tour',
        date: 'October 2, 2024',
        image: '/images/carousel-images/Heritage.jpg',
        category: 'Heritage',
        excerpt:
            'A heritage-focused community tour showcased Pulilan’s historical houses and cultural landmarks, allowing residents and visitors to appreciate the town’s rich legacy.',
        content: [
            'Pulilan highlighted its historical legacy through a heritage house tour that invited residents and visitors to learn more about the town’s architectural and cultural heritage. The guided experience featured notable sites and ancestral structures that reflect the municipality’s story and identity.',
            'The activity emphasized the value of preserving local traditions, architecture, and community memory while encouraging a deeper appreciation for Pulilan’s roots. Participants were able to reconnect with the town’s past through visual storytelling, local history, and community narratives.',
            'As cultural tourism continues to grow, initiatives like this help strengthen local pride and create opportunities for heritage education, appreciation, and sustainable community engagement.',
        ],
    },
];

export const featuredNews = newsItems[0];

export const getNewsBySlug = (slug: string) => newsItems.find((item) => item.slug === slug) ?? newsItems[0];

export const getRelatedNews = (slug: string, count = 3) => {
    const currentIndex = newsItems.findIndex((item) => item.slug === slug);
    const safeIndex = currentIndex >= 0 ? currentIndex : 0;

    return [...newsItems.slice(safeIndex + 1), ...newsItems.slice(0, safeIndex)]
        .filter((item) => item.slug !== slug)
        .slice(0, count);
};
