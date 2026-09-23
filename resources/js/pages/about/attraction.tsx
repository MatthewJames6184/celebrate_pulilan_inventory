import PublicLayout from '@/layouts/public-layout';

import { usePage } from '@inertiajs/react';
import { useState } from 'react';

type Category = 'all' | 'religious' | 'heritage' | 'festivals' | 'local-products';

const categories: { id: Category; label: string; emoji: string }[] = [
    { id: 'all', label: 'All', emoji: '✦' },
    { id: 'religious', label: 'Religious Sites', emoji: '⛪' },
    { id: 'heritage', label: 'Heritage', emoji: '🏛' },
    { id: 'festivals', label: 'Festivals', emoji: '🎉' },
    { id: 'local-products', label: 'Local Products', emoji: '🛍' },
];

const attractions = [
    {
        category: 'religious' as Category,
        name: 'San Isidro Labrador Parish',
        location: 'Poblacion, Pulilan',
        desc: 'Pulilan’s principal parish and the church associated with the Kneeling Carabao Festival and devotion to San Isidro Labrador.',
        img: '/images/carousel-images/Religious.jpg',
        highlight: 'Faith & tradition',
    },
    {
        category: 'religious' as Category,
        name: 'Mahal na Birhen ng Biglang Awa',
        location: 'Pulilan, Bulacan',
        desc: 'A venerated icon described by the municipality as dating back to the Spanish period and about 300 years old.',
        img: '/images/carousel-images/Religious.jpg',
        highlight: 'Religious site',
    },
    {
        category: 'religious' as Category,
        name: 'Mahal na Senyor Jesus Nazareno',
        location: 'Pulilan, Bulacan',
        desc: 'One of the six religious sites currently listed by the official Pulilan tourism program.',
        img: '/images/carousel-images/Religious.jpg',
        highlight: 'Religious site',
    },
    {
        category: 'religious' as Category,
        name: 'Our Lady of the Miraculous Medal Parish',
        location: 'Pulilan, Bulacan',
        desc: 'One of Pulilan’s officially listed parish communities and places of worship.',
        img: '/images/carousel-images/Religious.jpg',
        highlight: 'Religious site',
    },
    {
        category: 'religious' as Category,
        name: 'Ascension Parish',
        location: 'Pulilan, Bulacan',
        desc: 'One of the six religious sites currently listed by the official Pulilan tourism program.',
        img: '/images/carousel-images/Religious.jpg',
        highlight: 'Religious site',
    },
    {
        category: 'religious' as Category,
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
        category: 'heritage' as Category,
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
        category: 'festivals' as Category,
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
        category: 'local-products' as Category,
        name,
        location: 'Pulilan, Bulacan',
        desc,
        img: '/images/carousel-images/Cuisine.jpg',
        highlight: 'Local product',
    })),
];

export default function Attractions() {
    const { url } = usePage();
    const requestedCategory = new URLSearchParams(url.split('?')[1] ?? '').get('category') as Category | null;
    const initialCategory = categories.find((category) => category.id === requestedCategory)?.id ?? 'all';
    const [active, setActive] = useState<Category>(initialCategory);

    const filtered = active === 'all' ? attractions : attractions.filter((a) => a.category === active);

    return (
        <PublicLayout>
            <div className="text-scale min-h-screen bg-[#4169E1]" style={{ fontSize: '16px' }}>
                {/* Hero */}
                <div className="relative h-72 overflow-hidden">
                    <img src="/images/carousel-images/Attraction.jpg" alt="Pulilan attractions" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#4169E1]/60 to-[#4169E1]" />
                    <div className="absolute inset-0 flex items-end justify-center pb-14 text-center">
                        <div>
                            <div className="mb-3 flex items-center justify-center gap-2">
                                <div className="h-px w-6 bg-[#d4a853]" />
                                <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Things to See & Do</span>
                                <div className="h-px w-6 bg-[#d4a853]" />
                            </div>
                            <h1 className="font-display text-5xl font-semibold text-[#f5f0e8] lg:text-6xl">Attractions</h1>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="sticky top-20 z-30 border-b border-white/10 bg-[#4169E1]/95 backdrop-blur-md">
                    <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
                        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActive(cat.id)}
                                    className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                        active === cat.id
                                            ? 'bg-[#d4a853] text-[#0d1b2a]'
                                            : 'bg-white/5 text-[#f5f0e8]/60 hover:bg-white/10 hover:text-[#f5f0e8]'
                                    }`}
                                >
                                    <span>{cat.emoji}</span>
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Attractions grid */}
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((item, i) => (
                            <article
                                key={i}
                                className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#f3ede2] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a853]/50"
                            >
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/90 to-transparent" />
                                    <span className="absolute top-3 left-3 rounded-full border border-[#d4a853]/50 bg-[#172554]/85 px-2.5 py-1 text-xs font-semibold text-[#f8d477] backdrop-blur-sm">
                                        {item.highlight}
                                    </span>
                                </div>
                                <div className="p-5">
                                    <div className="mb-2 flex items-start justify-between gap-2">
                                        <h3 className="font-display text-base leading-snug font-semibold text-[#000080] transition-colors group-hover:text-[#4169E1]">
                                            {item.name}
                                        </h3>
                                    </div>
                                    <div className="mb-3 flex items-center gap-1.5">
                                        <svg className="h-3 w-3 shrink-0 text-[#1e3a8a]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                        </svg>
                                        <span className="text-xs text-[#000080]/35">{item.location}</span>
                                    </div>
                                    <p className="line-clamp-3 text-xs leading-relaxed text-[#000080]/50">{item.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="font-display py-20 text-center text-xl text-[#000080]/30">No attractions found in this category.</div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
