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
        color: '#123b8f',
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
        color: '#123b8f',
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
        color: '#123b8f',
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
        color: '#123b8f',
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
            <div className="text-scale min-h-screen bg-[#fffdf8] text-[#1f2937]" style={{ fontSize: '16px' }}>
                {/* Hero */}
                <div className="relative h-80 overflow-hidden">
                    <img src="/images/carousel-images/Historical.jpg" alt="Pulilan heritage" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f4d]/75 via-[#0b1f4d]/45 to-transparent" />
                    <div className="absolute inset-0 mx-auto flex max-w-7xl items-end px-6 pb-16 lg:px-10">
                        <div>
                            <div className="mb-3 flex items-center gap-2">
                                <div className="h-px w-6 bg-[#f1c75b]" />
                                <span className="text-xs font-semibold tracking-widest text-[#f1c75b] uppercase">Since January 20, 1796</span>
                            </div>
                            <h1 className="font-display text-5xl font-semibold text-white lg:text-6xl">
                                History of
                                <br />
                                <em className="text-[#f1c75b]">Pulilan</em>
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Intro */}
                <div className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
                    <div className="rounded-3xl border border-[#123b8f]/10 bg-[#f7f3eb] p-8 shadow-sm sm:p-10">
                        <p className="font-display text-center text-lg leading-relaxed text-[#123b8f] italic">
                            "Pulilan’s history is a story of agriculture, faith, resilience, and living cultural traditions. Its earliest settlement
                            date is unknown; January 20, 1796 is the municipality’s recorded foundation date."
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
                    <div className="mb-12 flex items-center gap-2">
                        <div className="h-px w-6 bg-[#a27620]" />
                        <span className="text-xs font-semibold tracking-widest text-[#a27620] uppercase">Historical Timeline</span>
                    </div>

                    <div ref={timelineRef} className="relative">
                        {/* Vertical line */}
                        <div className="absolute top-0 bottom-0 left-[calc(theme(spacing.16)-1px)] w-px bg-[#123b8f]/15" />
                        <div
                            className="absolute top-0 left-[calc(theme(spacing.16)-1px)] w-px origin-top bg-gradient-to-b from-[#e1b64f] via-[#123b8f]/70 to-[#123b8f]"
                            style={{ height: '100%', transform: `scaleY(${timelineProgress})` }}
                        />

                        <div className="space-y-10">
                            {timeline.map((item, i) => (
                                <ScrollReveal key={i} delay={i * 80} className="group relative flex gap-8">
                                    {/* Year node */}
                                    <div className="w-16 shrink-0 text-right">
                                        <span className="font-mono text-xs text-slate-500 transition-colors group-hover:text-[#a27620]">
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
                                        <h3 className="font-display mb-2 text-lg font-semibold text-[#123b8f] transition-colors group-hover:text-[#a27620]">
                                            {item.event}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Heritage Structures */}
                <div className="border-t border-[#123b8f]/10 bg-[#f7f3eb]">
                    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
                        <div className="mb-10 flex items-center gap-2">
                            <div className="h-px w-6 bg-[#a27620]" />
                            <span className="text-xs font-semibold tracking-widest text-[#a27620] uppercase">Preserved Heritage</span>
                        </div>
                        <h2 className="font-display mb-8 text-3xl font-semibold text-[#123b8f]">Historic Structures</h2>
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
                                    <div className="group overflow-hidden rounded-2xl border border-[#123b8f]/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                        <div className="h-44 overflow-hidden">
                                            <img
                                                src={s.img}
                                                alt={s.name}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <span className="font-mono text-xs text-[#a27620]">{s.period}</span>
                                            <h4 className="font-display mt-1 mb-2 font-semibold text-[#123b8f]">{s.name}</h4>
                                            <p className="text-xs leading-relaxed text-slate-600">{s.desc}</p>
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
