import PublicLayout from '@/layouts/public-layout';

const timeline = [
    {
        year: '1572',
        era: 'Spanish Colonial',
        event: 'Founding by Augustinians',
        desc: 'Augustinian missionaries establish a parish in Pulilan, converting the indigenous Kapampangan and Tagalog communities to Catholicism. The settlement grows around the church.',
        color: '#d4a853',
    },
    {
        year: '1600s',
        era: 'Early Colonial',
        event: 'Construction of the Parish Church',
        desc: 'The stone church of San Isidro Labrador is built, becoming the spiritual and civic center of the growing municipality. The Carabao Festival tradition begins.',
        color: '#d4a853',
    },
    {
        year: '1762',
        era: 'British Occupation',
        event: 'Resistance Against British Forces',
        desc: "During the British occupation of Manila, Pulilan's residents played a role in local resistance efforts, defending their community and sacred places from foreign occupation.",
        color: '#3d8b67',
    },
    {
        year: '1850s',
        era: '19th Century',
        event: 'Economic Prosperity',
        desc: "Pulilan flourishes as an agricultural center. Wealthy ilustrado families build the ancestral stone houses (bahay na bato) that still stand today, reflecting the town's prosperity.",
        color: '#d4a853',
    },
    {
        year: '1896',
        era: 'Philippine Revolution',
        event: 'The Katipunan Reaches Pulilan',
        desc: 'The revolutionary spirit sweeps through Bulacan. Pulileños join the Katipunan in the struggle against Spanish colonial rule, contributing to the Philippine Revolution.',
        color: '#3d8b67',
    },
    {
        year: '1898',
        era: 'American Period',
        event: 'Transition to American Rule',
        desc: 'Following the Spanish-American War, Pulilan transitions to American administration. Public schools are established, bringing widespread literacy to the municipality.',
        color: '#d4a853',
    },
    {
        year: '1941–45',
        era: 'World War II',
        event: 'Occupation and Liberation',
        desc: 'Japanese forces occupy Pulilan during World War II. Guerrilla resistance operates in the area. The town suffers damage but is liberated in 1945 as Allied forces advance northward.',
        color: '#3d8b67',
    },
    {
        year: '1972',
        era: 'Modern Era',
        event: '400th Anniversary Celebrations',
        desc: 'Pulilan marks its 400th founding anniversary with major celebrations, historic preservation efforts, and renewed pride in its colonial heritage and cultural traditions.',
        color: '#d4a853',
    },
    {
        year: '2000s',
        era: 'Contemporary',
        event: 'Carabao Festival — UNESCO Recognition',
        desc: 'The Carabao Festival of Pulilan is included in the UNESCO Intangible Cultural Heritage of Humanity list, recognizing its global cultural significance.',
        color: '#d4a853',
    },
    {
        year: 'Present',
        era: '21st Century',
        event: 'Heritage Preservation & Growth',
        desc: 'Today Pulilan balances modern development with heritage preservation, growing as a first-class municipality while honoring its identity as the Carabao Capital of the Philippines.',
        color: '#3d8b67',
    },
];

export default function History() {
    return (
        <PublicLayout>
            <div className="min-h-screen bg-[#0d1b2a]">
                {/* Hero */}
                <div className="relative h-80 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1771868454902-4fe2477fa64c?w=1600&h=600&fit=crop&auto=format"
                        alt="Pulilan heritage"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/50 via-[#0d1b2a]/60 to-[#0d1b2a]" />
                    <div className="absolute inset-0 mx-auto flex max-w-7xl items-end px-6 pb-16 lg:px-10">
                        <div>
                            <div className="mb-3 flex items-center gap-2">
                                <div className="h-px w-6 bg-[#d4a853]" />
                                <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Since 1572</span>
                            </div>
                            <h1 className="font-display text-5xl font-semibold text-[#f5f0e8] lg:text-6xl">
                                History of
                                <br />
                                <em className="text-[#d4a853]">Pulilan</em>
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Intro */}
                <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
                    <div className="rounded-3xl border border-white/5 bg-[#122236] p-10">
                        <p className="font-display text-center text-lg leading-relaxed text-[#f5f0e8]/70 italic">
                            "From a humble Augustinian mission in 1572 to the Carabao Capital of the Philippines — Pulilan's history is a story of
                            faith, resilience, and enduring cultural pride."
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
                    <div className="mb-12 flex items-center gap-2">
                        <div className="h-px w-6 bg-[#d4a853]" />
                        <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Historical Timeline</span>
                    </div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute top-0 bottom-0 left-[calc(theme(spacing.16)-1px)] w-px bg-gradient-to-b from-[#d4a853]/60 via-[#d4a853]/20 to-transparent" />

                        <div className="space-y-10">
                            {timeline.map((item, i) => (
                                <div key={i} className="group relative flex gap-8">
                                    {/* Year node */}
                                    <div className="w-16 shrink-0 text-right">
                                        <span className="font-mono text-xs text-[#f5f0e8]/30 transition-colors group-hover:text-[#d4a853]">
                                            {item.year}
                                        </span>
                                    </div>

                                    {/* Dot */}
                                    <div className="relative mt-1 shrink-0">
                                        <div
                                            className="relative z-10 h-3 w-3 rounded-full border-2 transition-transform group-hover:scale-125"
                                            style={{
                                                borderColor: item.color,
                                                backgroundColor: item.color + '30',
                                            }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="pb-2 transition-transform group-hover:-translate-y-0.5">
                                        <div className="mb-1 flex items-center gap-2">
                                            <span
                                                className="rounded-full px-2 py-0.5 text-xs font-medium"
                                                style={{ backgroundColor: item.color + '15', color: item.color }}
                                            >
                                                {item.era}
                                            </span>
                                        </div>
                                        <h3 className="font-display mb-2 text-lg font-semibold text-[#f5f0e8] transition-colors group-hover:text-[#d4a853]">
                                            {item.event}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-[#f5f0e8]/50">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Heritage Structures */}
                <div className="border-t border-white/5 bg-[#122236]">
                    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
                        <div className="mb-10 flex items-center gap-2">
                            <div className="h-px w-6 bg-[#d4a853]" />
                            <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Preserved Heritage</span>
                        </div>
                        <h2 className="font-display mb-8 text-3xl font-semibold text-[#f5f0e8]">Historic Structures</h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {[
                                {
                                    name: 'San Isidro Parish Church',
                                    period: '17th Century',
                                    img: 'https://images.unsplash.com/photo-1760549310131-b09d86c601e3?w=600&h=400&fit=crop&auto=format',
                                    desc: 'Baroque stone church, the oldest structure in Pulilan.',
                                },
                                {
                                    name: 'Longos Church',
                                    period: '18th Century',
                                    img: 'https://images.unsplash.com/photo-1708464437185-3a2f6765bf92?w=600&h=400&fit=crop&auto=format',
                                    desc: 'Colonial church with original stone belltower intact.',
                                },
                                {
                                    name: 'Ancestral Houses',
                                    period: '19th Century',
                                    img: 'https://images.unsplash.com/photo-1771868454902-4fe2477fa64c?w=600&h=400&fit=crop&auto=format',
                                    desc: 'Bahay na bato scattered across the historic town center.',
                                },
                            ].map((s) => (
                                <div
                                    key={s.name}
                                    className="group overflow-hidden rounded-2xl border border-white/5 bg-[#0d1b2a] transition-all hover:border-[#d4a853]/20"
                                >
                                    <div className="h-44 overflow-hidden">
                                        <img
                                            src={s.img}
                                            alt={s.name}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <span className="font-mono text-xs text-[#d4a853]">{s.period}</span>
                                        <h4 className="font-display mt-1 mb-2 font-semibold text-[#f5f0e8]">{s.name}</h4>
                                        <p className="text-xs leading-relaxed text-[#f5f0e8]/40">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
