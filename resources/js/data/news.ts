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
        slug: 'carabao-festival-2025',
        title: 'Carabao Festival 2025: A Record-Breaking Celebration of Culture',
        date: 'May 12, 2025',
        image: 'https://images.unsplash.com/photo-1630192226649-1934968dca48?w=900&h=500&fit=crop&auto=format',
        category: 'Festival',
        excerpt: "Pulilan’s annual Carabao Festival brought communities together in a celebration of faith, agriculture, and local tradition.",
        content: [
            "The 2025 Carabao Festival of Pulilan honored San Isidro Labrador through its familiar parade and kneeling-carabao tradition.",
            'Decorated carabaos and community groups joined the celebration. Exact attendance and participation figures should be confirmed through the municipality’s official event report.',
            'The municipal government has announced plans to further develop infrastructure around the festival route, ensuring a safer and more comfortable experience for visitors in future years.',
        ],
    },
    {
        slug: 'tree-planting-2025',
        title: 'Municipal Tree Planting Activity Greens Pulilan’s Riverbanks',
        date: 'March 18, 2025',
        image: 'https://images.unsplash.com/photo-1708464437185-3a2f6765bf92?w=900&h=500&fit=crop&auto=format',
        category: 'Environment',
        excerpt: 'The Municipal Government of Pulilan partnered with local stakeholders to strengthen environmental awareness through a community tree planting drive.',
        content: ['The Municipal Government of Pulilan launched a large-scale tree planting initiative along the banks of the Pampanga River.', 'Over 5,000 native tree seedlings were planted across 12 kilometers of riverbank, involving more than 800 volunteers.', 'The initiative is part of Pulilan’s broader environmental program.'],
    },
    {
        slug: 'heritage-restoration-2025',
        title: 'San Isidro Parish Church Restoration Project Completed',
        date: 'April 28, 2025',
        image: 'https://images.unsplash.com/photo-1760549310131-b09d86c601e3?w=900&h=500&fit=crop&auto=format',
        category: 'Heritage',
        excerpt: 'After 18 months of careful restoration work, the historic 17th-century San Isidro Labrador Parish Church has been fully rehabilitated.',
        content: ['After nearly 18 months of meticulous restoration work, the San Isidro Labrador Parish Church has been fully rehabilitated and blessed.', 'The project involved repair of the original stone facade, restoration of colonial-era interior murals, and structural reinforcement of the bell tower.', 'The church will serve as the focal point of the 2025 Carabao Festival procession and will be open for heritage tours beginning June 1.'],
    },
    {
        slug: 'heritage-trail-2025',
        title: 'New Heritage Walking Trail Opens Across Pulilan’s Historic District',
        date: 'April 15, 2025',
        image: 'https://images.unsplash.com/photo-1771868454902-4fe2477fa64c?w=900&h=500&fit=crop&auto=format',
        category: 'Tourism',
        excerpt: 'A newly designed self-guided walking trail connects Pulilan’s key historical landmarks, churches, and cultural sites starting this summer.',
        content: ['The Municipality of Pulilan has officially launched a new Heritage Walking Trail through the town’s most historically significant sites.', 'The trail is marked by 24 informational heritage plaques in both Filipino and English.', 'The trail covers approximately 2.5 kilometers and can be completed in 1.5 to 2 hours.'],
    },
    {
        slug: 'education-drive-2024',
        title: 'Education Drive and Scholarship Support Reaches 500 Students',
        date: 'June 7, 2024',
        image: 'https://images.unsplash.com/photo-1601000234047-d9308ea1ed51?w=900&h=500&fit=crop&auto=format',
        category: 'Education',
        excerpt: 'Pulilan’s local education initiatives expand access to learning through scholarship opportunities, learning support, and youth empowerment programs.',
        content: ['The Municipal Government of Pulilan has extended its scholarship support program to cover 500 students.', 'The program provides monthly stipends, school supplies, and supplementary tutorial sessions.', 'Applications for the next cycle open in July at the Municipal Social Welfare and Development Office.'],
    },
    {
        slug: 'community-health-2024',
        title: 'Community Health and Wellness Program Expands to All 18 Barangays',
        date: 'August 20, 2024',
        image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=900&h=500&fit=crop&auto=format',
        category: 'Health',
        excerpt: 'Pulilan’s municipal health services support residents through consultations, public-health programs, and community care.',
        content: ['Pulilan’s health services are delivered through the Municipal Health Office and community programs.', 'Residents should consult official municipal announcements for current schedules and available services.', 'Program coverage and schedules may change as local needs and government programs develop.'],
    },
];

export const featuredNews = newsItems[0];

export const getNewsBySlug = (slug: string): NewsItem => newsItems.find((item) => item.slug === slug) ?? newsItems[0];

export const getRelatedNews = (slug: string, count = 3): NewsItem[] => {
    const currentIndex = newsItems.findIndex((item) => item.slug === slug);
    const safeIndex = currentIndex >= 0 ? currentIndex : 0;

    return [...newsItems.slice(safeIndex + 1), ...newsItems.slice(0, safeIndex)]
        .filter((item) => item.slug !== slug)
        .slice(0, count);
};
