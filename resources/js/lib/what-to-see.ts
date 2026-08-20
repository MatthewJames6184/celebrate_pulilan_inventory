export type WhatToSeeTopic =
    | 'attraction'
    | 'cuisine'
    | 'education'
    | 'festivals'
    | 'health'
    | 'heritage'
    | 'historical'
    | 'local-products'
    | 'mission-vision'
    | 'religious'
    | 'resorts'
    | 'shopping';

export type WhatToSeeCard = {
    slug: string;
    title: string;
    category: string;
    location: string;
    description: string;
    image: string;
};

export type WhatToSeePage = {
    title: string;
    eyebrow: string;
    summary: string;
    highlightLabel: string;
    highlights: string[];
    detailImage: string;
    cards: WhatToSeeCard[];
};

export const whatToSeePages: Record<WhatToSeeTopic, WhatToSeePage> = {
    attraction: {
        title: 'Pulilan Attractions',
        eyebrow: 'What to See',
        summary: 'A quick set of temporary highlight cards for places and stops around Pulilan.',
        highlightLabel: 'Attraction focus',
        highlights: ['Community destinations', 'Easy day-trip stops', 'Local places worth visiting'],
        detailImage: '/images/carousel-images/Attraction.jpg',
        cards: [
            {
                slug: 'community-destinations',
                title: 'Community Destinations',
                description: 'Public spaces and small-town stops that show daily life in Pulilan.',
                image: '/images/carousel-images/Attraction.jpg',
            },
            {
                slug: 'day-trip-spots',
                title: 'Day Trip Spots',
                description: 'Easy places to visit when you want a short tour around town.',
                image: '/images/carousel-images/cp-10.jpg',
            },
        ],
    },
    cuisine: {
        title: 'Pulilan Cuisines',
        eyebrow: 'What to See',
        summary: 'Temporary cards for local food and delicacies that visitors can explore in Pulilan.',
        highlightLabel: 'Food focus',
        highlights: ['Native rice delicacies', 'Savory local dishes', 'Simple Pulilan favorites'],
        detailImage: '/images/carousel-images/Cuisine.jpg',
        cards: [
            {
                slug: 'sumang-bulagta',
                title: 'Sumang Bulagta',
                description: 'A classic sticky rice delicacy wrapped in banana leaf and sold locally.',
                image: '/images/carousel-images/Cuisine.jpg',
            },
            {
                slug: 'fried-duck',
                title: 'Fried Duck (Pritong Itik)',
                description: 'A savory Pulilan dish that fits the town’s everyday food stops.',
                image: '/images/carousel-images/cp-11.jpg',
            },
        ],
    },
    education: {
        title: 'Education in Pulilan',
        eyebrow: 'What to See',
        summary: 'A simple temporary overview of learning places and education-related stops.',
        highlightLabel: 'Education focus',
        highlights: ['Public schools', 'Private schools', 'Student support spaces'],
        detailImage: '/images/carousel-images/Education.jpg',
        cards: [
            {
                slug: 'public-schools',
                title: 'Public Schools',
                description: 'Schools that help serve families and students across the municipality.',
                image: '/images/carousel-images/Education.jpg',
            },
            {
                slug: 'learning-spaces',
                title: 'Learning Spaces',
                description: 'Training and study areas that support young people in Pulilan.',
                image: '/images/carousel-images/cp-6.jpg',
            },
        ],
    },
    festivals: {
        title: 'Pulilan Festivals',
        eyebrow: 'What to See',
        summary: 'Temporary cards for the celebrations and events that shape Pulilan’s identity.',
        highlightLabel: 'Festival focus',
        highlights: ['Street programs', 'Parades', 'Community showcases'],
        detailImage: '/images/carousel-images/Festival.jpg',
        cards: [
            {
                slug: 'carabao-festival',
                title: 'Pulilan Carabao Festival',
                description: 'A signature celebration that reflects the town’s pride and tradition.',
                image: '/images/carousel-images/Festival.jpg',
            },
            {
                slug: 'street-parades',
                title: 'Street Parades',
                description: 'Colorful processions and public programs that draw local crowds together.',
                image: '/images/carousel-images/cp-5.jpg',
            },
        ],
    },
    health: {
        title: 'Pulilan Health',
        eyebrow: 'What to See',
        summary: 'A temporary card view for healthcare-related places and support in town.',
        highlightLabel: 'Health focus',
        highlights: ['Primary care access', 'Community health programs', 'Care support'],
        detailImage: '/images/carousel-images/Health.jpg',
        cards: [
            {
                slug: 'municipal-health-services',
                title: 'Municipal Health Services',
                description: 'Public health services that support residents and visitors.',
                image: '/images/carousel-images/Health.jpg',
            },
            {
                slug: 'local-clinics',
                title: 'Local Clinics',
                description: 'Nearby care options for everyday wellness needs.',
                image: '/images/carousel-images/cp-7.jpg',
            },
        ],
    },
    heritage: {
        title: 'Pulilan Heritages',
        eyebrow: 'What to See',
        summary: 'Temporary cards for heritage sites and old places that reflect Pulilan’s roots.',
        highlightLabel: 'Heritage focus',
        highlights: ['Historic structures', 'Older homes', 'Town memory'],
        detailImage: '/images/carousel-images/Heritage.jpg',
        cards: [
            {
                slug: 'historic-structures',
                title: 'Historic Structures',
                category: 'Heritage Site',
                location: 'Pulilan Town Proper',
                description: 'Churches and older buildings that preserve the town’s story.',
                image: '/images/carousel-images/Heritage.jpg',
            },
            {
                slug: 'civic-landmarks',
                title: 'Civic Landmarks',
                category: 'Heritage Site',
                location: 'Pulilan Center',
                description: 'Public landmarks that still shape how Pulilan is remembered today.',
                image: '/images/carousel-images/cp-8.jpg',
            },
        ],
    },
    historical: {
        title: 'Pulilan Historicals',
        eyebrow: 'What to See',
        summary: 'Temporary cards for historic places and local memory spots in Pulilan.',
        highlightLabel: 'Historical focus',
        highlights: ['Old town stories', 'Local heritage spots', 'Community memory'],
        detailImage: '/images/carousel-images/Historical.jpg',
        cards: [
            {
                slug: 'museo-de-pulilan',
                title: 'Museo de Pulilan',
                category: 'Museum',
                location: 'Poblacion',
                description: 'A simple temporary museum-style highlight for Pulilan’s local history.',
                image: '/images/carousel-images/Historical.jpg',
            },
            {
                slug: 'historic-town-core',
                title: 'Historic Town Core',
                category: 'Heritage Walk',
                location: 'Poblacion',
                description: 'A placeholder stop for the older part of town and nearby landmarks.',
                image: '/images/carousel-images/cp-8.jpg',
            },
        ],
    },
    'local-products': {
        title: 'Pulilan Local Products',
        eyebrow: 'What to See',
        summary: 'Temporary cards for local goods, snacks, and homegrown items from Pulilan.',
        highlightLabel: 'Product focus',
        highlights: ['Native treats', 'Market goods', 'Pulilan-made items'],
        detailImage: '/images/carousel-images/Local-Products.jpg',
        cards: [
            {
                slug: 'native-delicacies',
                title: 'Native Delicacies',
                category: 'Local Product',
                location: 'Pulilan Market Area',
                description: 'Packaged foods and treats that are easy to bring home.',
                image: '/images/carousel-images/Local-Products.jpg',
            },
            {
                slug: 'salabat-tea',
                title: 'Salabat Tea',
                category: 'Local Product',
                location: 'Pulilan Market Area',
                description: 'A local herbal product that fits the town’s market culture.',
                image: '/images/carousel-images/cp-11.jpg',
            },
        ],
    },
    'mission-vision': {
        title: 'Pulilan Mission Vision',
        eyebrow: 'What to See',
        summary: 'A temporary card view for the town’s service direction and development goals.',
        highlightLabel: 'Service focus',
        highlights: ['Inclusive progress', 'Sustainable growth', 'Public service direction'],
        detailImage: '/images/carousel-images/Mission-and-Vision.jpg',
        cards: [
            {
                slug: 'municipal-mission',
                title: 'Municipal Mission',
                category: 'Government Goal',
                location: 'Municipal Hall',
                description: 'The public service goal that guides local programs and planning.',
                image: '/images/carousel-images/Mission-and-Vision.jpg',
            },
            {
                slug: 'long-term-vision',
                title: 'Long-Term Vision',
                category: 'Government Goal',
                location: 'Municipal Hall',
                description: 'The municipality’s wider growth target for future development.',
                image: '/images/carousel-images/cp-2.jpg',
            },
        ],
    },
    religious: {
        title: 'Religions in Pulilan',
        eyebrow: 'What to See',
        summary: 'Temporary cards for religious places and faith-centered traditions in Pulilan.',
        highlightLabel: 'Religious focus',
        highlights: ['Church life', 'Devotional traditions', 'Feast-day gatherings'],
        detailImage: '/images/carousel-images/Religious.jpg',
        cards: [
            {
                slug: 'church-life',
                title: 'Church Life',
                category: 'Religious Place',
                location: 'Pulilan Parish Area',
                description: 'Faith spaces and parish activities that remain active in town.',
                image: '/images/carousel-images/Religious.jpg',
            },
            {
                slug: 'devotional-traditions',
                title: 'Devotional Traditions',
                category: 'Religious Place',
                location: 'Pulilan Parish Area',
                description: 'Community practices that shape local celebrations and gatherings.',
                image: '/images/carousel-images/cp-9.jpg',
            },
        ],
    },
    resorts: {
        title: 'Pulilan Resorts',
        eyebrow: 'What to See',
        summary: 'Temporary cards for stays and resort-style spots around Pulilan.',
        highlightLabel: 'Resort focus',
        highlights: ['Poolside stays', 'Family getaways', 'Weekend retreats'],
        detailImage: '/images/carousel-images/Resorts.jpg',
        cards: [
            {
                slug: 'makahoy-private-resort',
                title: 'Makahoy Private Resort',
                category: 'Resort',
                location: 'Pulilan, Bulacan',
                description: 'A resort-style stop already used in the site’s tourism content.',
                image: '/images/carousel-images/cp-10.jpg',
            },
            {
                slug: 'pulilan-stay-options',
                title: 'Pulilan Stay Options',
                category: 'Stay',
                location: 'Near Town Proper',
                description: 'Simple accommodation choices for visitors and event travelers.',
                image: '/images/carousel-images/Resorts.jpg',
            },
        ],
    },
    shopping: {
        title: 'Pulilan Shopping',
        eyebrow: 'What to See',
        summary: 'Temporary cards for the main shopping stops and practical retail places in Pulilan.',
        highlightLabel: 'Shopping focus',
        highlights: ['Everyday essentials', 'Retail stops', 'Easy access'],
        detailImage: '/images/carousel-images/Shopping.jpg',
        cards: [
            {
                slug: 'robinson-pulilan',
                title: 'Robinson Pulilan',
                category: 'Shopping Mall',
                location: 'Pulilan, Bulacan',
                description: 'A familiar shopping stop for everyday errands and quick trips.',
                image: '/images/carousel-images/Shopping.jpg',
            },
            {
                slug: 'sm-center-pulilan',
                title: 'SM Center Pulilan',
                category: 'Shopping Mall',
                location: 'Pulilan, Bulacan',
                description: 'A major retail stop already featured in the site’s tourism content.',
                image: '/images/carousel-images/cp-5.jpg',
            },
        ],
    },
};
