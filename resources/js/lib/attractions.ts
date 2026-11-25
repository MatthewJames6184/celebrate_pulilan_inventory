export type AttractionCategory = 'religious' | 'heritage' | 'festivals' | 'local-products';

export type Attraction = {
    category: AttractionCategory;
    name: string;
    location: string;
    desc: string;
    img: string;
    highlight: string;
};

export function slugifyAttraction(name: string): string {
    return name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

export const attractions: Attraction[] = [
    {
        category: 'religious',
        name: 'San Isidro Labrador Parish',
        location: 'Poblacion, Pulilan',
        desc: 'Pulilan’s principal parish and the church associated with the Kneeling Carabao Festival and devotion to San Isidro Labrador.',
        img: '/images/carousel-images/Religious.jpg',
        highlight: 'Faith & tradition',
    },
    {
        category: 'religious',
        name: 'Mahal na Birhen ng Biglang Awa',
        location: 'Pulilan, Bulacan',
        desc: 'A venerated icon described by the municipality as dating back to the Spanish period and about 300 years old.',
        img: '/images/carousel-images/Religious.jpg',
        highlight: 'Religious site',
    },
    {
        category: 'religious',
        name: 'Mahal na Senyor Jesus Nazareno',
        location: 'Pulilan, Bulacan',
        desc: 'One of the six religious sites currently listed by the official Pulilan tourism program.',
        img: '/images/carousel-images/Religious.jpg',
        highlight: 'Religious site',
    },
    {
        category: 'religious',
        name: 'Our Lady of the Miraculous Medal Parish',
        location: 'Pulilan, Bulacan',
        desc: 'One of Pulilan’s officially listed parish communities and places of worship.',
        img: '/images/carousel-images/Religious.jpg',
        highlight: 'Religious site',
    },
    {
        category: 'religious',
        name: 'Ascension Parish',
        location: 'Pulilan, Bulacan',
        desc: 'One of the six religious sites currently listed by the official Pulilan tourism program.',
        img: '/images/carousel-images/Religious.jpg',
        highlight: 'Religious site',
    },
    {
        category: 'religious',
        name: 'St. Peter Chapel, Tibag, Pulilan',
        location: 'Tibag, Pulilan',
        desc: 'A chapel in Tibag included in the municipality’s current list of religious sites.',
        img: '/images/carousel-images/Religious.jpg',
        highlight: 'Religious site',
    },
    ...[
        ['Adriano Salvador House', 'Historic house in Pulilan’s official heritage listings.'],
        ['Casa Filomena', 'Historic house in Pulilan’s official heritage listings.'],
        ['Dr. Pacifico Cruz House', 'Historic house in Pulilan’s official heritage listings.'],
        ['Gabaldon Building / Museo de Pulilan / Trial Court', 'A heritage civic building and museum site in Pulilan.'],
        ['Kneeling Carabao Monument', 'A landmark honoring Pulilan’s iconic kneeling carabao tradition.'],
        ['Kristong Hari Monument', 'A monument included in Pulilan’s official heritage listings.'],
        ['Marcelo H. del Pilar Monument', 'A monument included in Pulilan’s official heritage listings.'],
        ['Museo de San Isidro', 'A museum site included in Pulilan’s official heritage listings.'],
        ['Bahay na Puti', 'Historic house in Pulilan’s official heritage listings.'],
        ['Casa Balbina', 'Historic house in Pulilan’s official heritage listings.'],
        ['Casa Fransisco – The Laxamana House', 'Historic house in Pulilan’s official heritage listings.'],
        ['Casanova-Aguirre House', 'Historic house in Pulilan’s official heritage listings.'],
        ['Old Town Hall', 'A historic civic structure in Pulilan’s heritage listings.'],
        ['Posong Malaki', 'A heritage site included in Pulilan’s official listings.'],
        ['Pulilan Cemetery', 'A heritage site included in Pulilan’s official listings.'],
        ['Pulilan: The Blessed Land', 'A heritage entry included in Pulilan’s official listings.'],
        ['Rizal Monument', 'A monument included in Pulilan’s official heritage listings.'],
        ['Rizal Park', 'A public heritage landmark included in Pulilan’s official listings.'],
    ].map(([name, desc]) => ({
        category: 'heritage' as const,
        name,
        location: 'Pulilan, Bulacan',
        desc,
        img: '/images/carousel-images/Heritage.jpg',
        highlight: 'Heritage site',
    })),
    ...[
        ['Kneeling Carabao Festival', 'Pulilan’s recognizable tradition associated with San Isidro Labrador and the famous kneeling carabaos.'],
        ['Gintong Palay Harvest Festival', 'A celebration connected with Pulilan’s agricultural and rice-growing heritage.'],
        ['Pista sa Ilog / Libad sa Tibag', 'A local river-related celebration associated with Tibag.'],
        ['Salakot Festival', 'A cultural celebration associated with the traditional salakot and Pulilan’s agricultural heritage.'],
        ['Mandalá Art Festival', 'A cultural and art event worth documenting alongside Pulilan’s official festival listings.'],
    ].map(([name, desc]) => ({
        category: 'festivals' as const,
        name,
        location: 'Pulilan, Bulacan',
        desc,
        img: '/images/carousel-images/Festival.jpg',
        highlight: 'Festival & culture',
    })),
    ...[
        ['Chamet’s Inipit de Pulilan', 'A Pulilan local product listed by the municipality.'],
        ['Puto Pao de Pulilan', 'A rice delicacy specifically listed by the Pulilan Tourism Office as a local product.'],
        ['Salted Duck Eggs / Itlog na Maalat', 'A popular local product specifically noted by the municipal tourism site.'],
        ['TJN Pasalubong', 'A local pasalubong product listed by the municipality.'],
        ['Organic Farm Produce', 'Fresh produce from Pulilan’s local farms.'],
        ['Fisherfarms / Bangus Products', 'Bangus products highlighted by the municipal government as a Pulilan product.'],
        ['Jedidiah Turmeric Products', 'Turmeric-based products listed on the municipality’s newer local products page.'],
        ['Turmeric', 'A local product listed by the official Pulilan Tourism site.'],
        ['Mulberry Heals – Mulberry Leaf Tea', 'An emerging Pulilan product available in classic and dark-roast leaf tea varieties.'],
        ['Mulberry Jam', 'A mulberry product associated with the locally developed Mulberry Heals range.'],
        ['Sardines', 'A local product listed by the official Pulilan Tourism site.'],
        ['Elvie’s Authentic Halo-Halo', 'A local product and store listed by the municipality.'],
    ].map(([name, desc]) => ({
        category: 'local-products' as const,
        name,
        location: 'Pulilan, Bulacan',
        desc,
        img: '/images/carousel-images/Cuisine.jpg',
        highlight: 'Local product',
    })),
];
