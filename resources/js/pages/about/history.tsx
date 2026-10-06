import ScrollReveal from '@/components/scroll-reveal';
import PublicLayout from '@/layouts/public-layout';
import { useEffect, useRef, useState } from 'react';

const timeline = [
    {
        year: 'Before 1600s',
        era: 'Early settlement',
        event: 'Communities grow around rivers',
        desc: 'The exact date of the first settlement is unknown. Municipal history suggests communities developed around rivers and fertile agricultural land by the early 17th century.',
        color: '#d4a853',
    },
    {
        year: '1575',
        era: 'Regional context',
        event: 'Calumpit is established',
        desc: 'Calumpit was already recognized as a neighboring town in 1575. This provides regional context, but does not establish Pulilan as a municipality at that time.',
        color: '#d4a853',
    },
    {
        year: '1700s',
        era: 'Spanish period',
        event: 'The settlement becomes organized',
        desc: 'The area became increasingly organized under Spanish colonial administration and Augustinian missionary influence. It became associated with San Isidro Labrador, patron saint of farmers.',
        color: '#3d8b67',
    },
    {
        year: 'Jan. 20, 1796',
        era: 'Municipal foundation',
        event: 'Pulilan is formally established',
        desc: 'Augustinian friar Fray Vicente Villamanzo declared the settlement a town and assigned San Isidro Labrador as its patron saint. The name Pulilan eventually prevailed.',
        color: '#d4a853',
    },
    {
        year: '1800s',
        era: 'Agricultural town',
        event: 'Pulilan develops under Spanish rule',
        desc: 'Pulilan developed as an agricultural community whose identity became closely connected with farming, Catholicism, San Isidro Labrador, and its river-based environment.',
        color: '#3d8b67',
    },
    {
        year: '1898',
        era: 'Political transition',
        event: 'End of Spanish colonial rule',
        desc: 'The Philippine Revolution and the First Philippine Republic brought major political changes throughout Bulacan. Pulileños participated and made sacrifices during the revolutionary and subsequent periods.',
        color: '#d4a853',
    },
    {
        year: '1909',
        era: 'American period',
        event: 'Pulilan separates from Quingua',
        desc: 'After a period when the settlement was attached to Quingua (now Plaridel), local leaders petitioned for separation. The request was granted and Pulilan again functioned as its own town.',
        color: '#3d8b67',
    },
    {
        year: '1941–45',
        era: 'Japanese occupation',
        event: 'Pulileños endure wartime hardship',
        desc: 'Residents experienced the Japanese occupation and the hardships of World War II. Municipal history remembers the sacrifices of Pulileños across the Spanish, American, and Japanese periods.',
        color: '#d4a853',
    },
    {
        year: '1946',
        era: 'Postwar Philippines',
        event: 'Reconstruction and development',
        desc: 'Following Philippine independence, Pulilan began postwar reconstruction and continued developing as a municipality.',
        color: '#3d8b67',
    },
    {
        year: '2007',
        era: 'Contemporary',
        event: 'First-class municipality',
        desc: 'A municipal government document records Pulilan’s classification as a first-class municipality in 2007.',
        color: '#d4a853',
    },
    {
        year: '2026',
        era: 'Present',
        event: '230th founding anniversary',
        desc: 'Pulilan commemorated its 230th founding anniversary in January 2026, based on the January 20, 1796 foundation date.',
        color: '#d4a853',
    },
];

export default function History() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const [timelineProgress, setTimelineProgress] = useState(0);

    useEffect(() => {
        const updateTimelineProgress = () => {
            const element = timelineRef.current;

            if (!element) {
                return;
            }

            const bounds = element.getBoundingClientRect();
            const viewportProgress = (window.innerHeight * 0.68 - bounds.top) / bounds.height;
            setTimelineProgress(Math.min(1, Math.max(0, viewportProgress)));
        };

        updateTimelineProgress();
        window.addEventListener('scroll', updateTimelineProgress, { passive: true });
        window.addEventListener('resize', updateTimelineProgress);

        return () => {
            window.removeEventListener('scroll', updateTimelineProgress);
            window.removeEventListener('resize', updateTimelineProgress);
        };
    }, []);

    return (
        <PublicLayout>
            <div
                className="text-scale min-h-screen bg-gradient-to-b from-[#E0C9A6] via-[#E0C9A6] to-[#E0C9A6]"
                style={{ fontSize: 'clamp(12px, 1.25vw + 10px, 16px)' }}
            >
                {/* Hero */}
                <div className="relative h-80 overflow-hidden sm:h-96 lg:h-[27rem]">
                    <img
                    src="/images/carousel-images/Historical.jpg"
                        alt="Pulilan heritage"
                        className="h-full w-full object-cover object-[100%_20%] transition-all duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#E0C9A6]/55 via-[#E0C9A6]/20 to-[#E0C9A6]" />
                    <div className="absolute inset-0 flex items-end justify-center px-6 pb-16 text-center">
                        <div>
                            <div className="mb-3 flex items-center justify-center gap-2">
                                <div className="h-px w-6 bg-[#d4a853]" />
                                <span className="text-xs font-bold tracking-widest text-[#d4a853] [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)] uppercase drop-shadow-md">Since January 20, 1796</span>
                                <div className="h-px w-6 bg-[#d4a853]" />
                            </div>
                            <h1 className="font-display text-5xl font-semibold text-[#f5f0e8] [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)] lg:text-6xl">
                                History of
                                <em className="text-[#d4a853]"> Pulilan</em>
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Intro */}
                <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
                    <div className="rounded-3xl border border-white/5 bg-[#173f82] p-5 sm:p-10">
                        <p className="font-display text-center text-lg leading-relaxed text-[#f5f0e8]/70 italic">
                            "Pulilan’s history is a story of agriculture, faith, resilience, and living cultural traditions. Its earliest settlement date
                            is unknown; January 20, 1796 is the municipality’s recorded foundation date."
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-10" style={{ fontSize: '20px' }}>
                    <div className="mb-12 flex items-center gap-2">
                        <div className="h-px w-6 bg-[#d4a853]" />
                        <span className="text-sm font-medium tracking-widest text-[#d4a853] uppercase ">Historical Timeline</span>
                    </div>

                    <div ref={timelineRef} className="relative">
                        {/* Vertical line */}
                        <div className="absolute top-0 bottom-0 left-[calc(theme(spacing.20)-1px)] w-px bg-white" />
                        <div
                            className="absolute top-0 left-[calc(theme(spacing.20)-1px)] w-px origin-top bg-gradient-to-b from-[#4169E1] via-[#4169E1]/70 to-[#123b8f]"
                            style={{ height: '100%', transform: `scaleY(${timelineProgress})` }}
                        />

                        <div className="space-y-10">
                            {timeline.map((item, i) => (
                                <ScrollReveal key={i} delay={i * 80} className="group relative flex min-w-0 gap-3 sm:gap-8">
                                    {/* Year node */}
                                    <div className="w-14 shrink-0 text-right sm:w-16">
                                        <span className="font-mono text-xs text-[#000080] transition-colors group-hover:text-[#d4a853]">
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
                                    <div className="min-w-0 pb-2 transition-transform group-hover:-translate-y-0.5">
                                        <div className="mb-1 flex flex-wrap items-center gap-2">
                                            <span
                                                className="rounded-full px-2 py-0.5 text-xs font-medium"
                                                style={{ backgroundColor: item.color + '15', color: item.color }}
                                            >
                                                {item.era}
                                            </span>
                                        </div>
                                        <h3 className="font-display mb-2 text-lg font-semibold text-[#123b8f]/80 transition-colors group-hover:text-[#d4a853] ">
                                            {item.event}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-[#f5f0e8]/90">{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Heritage Structures */}
                <div className="border-t border-white/5 bg-[#173f82]">
                    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
                        <div className="mb-10 flex items-center gap-2">
                            <div className="h-px w-6 bg-[#d4a853]" />
                            <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Preserved Heritage</span>
                        </div>
                        <h2 className="font-display mb-8 text-3xl font-semibold text-[#f5f0e8]">Historic Structures</h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {[
                                {
                                    name: 'Museo de San Isidro',
                                    period: 'Heritage museum',
                                    img: '/images/carousel-images/Heritage.jpg',
                                    desc: 'A heritage destination included in Pulilan’s official tourism listings.',
                                },
                                {
                                    name: 'Historic houses',
                                    period: 'Heritage attraction',
                                    img: '/images/image-3.jpg',
                                    desc: 'Historic homes such as Casa Filomena and Adriano Salvador House reflect Pulilan’s built heritage.',
                                },
                                {
                                    name: 'Kneeling Carabao Monument',
                                    period: 'Public heritage',
                                    img: '/images/carousel-images/Festival.jpg',
                                    desc: 'A public monument celebrating Pulilan’s best-known cultural tradition.',
                                },
                            ].map((s, i) => (
                                <ScrollReveal key={s.name} delay={i * 100}>
                                    <div className="group overflow-hidden rounded-2xl border border-white/5 bg-[#123b8f] transition-all hover:border-[#d4a853]/20">
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
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
