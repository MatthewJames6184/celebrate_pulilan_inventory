import PublicLayout from '@/layouts/public-layout';
import { Link } from '@inertiajs/react';

const schedule = [
    { month: 'January', event: 'Feast of the Holy Child (Sto. Niño)', barangay: 'Sto. Niño' },
    { month: 'March', event: 'Town Foundation Day', barangay: 'Poblacion' },
    { month: 'May 15', event: 'Carabao Festival (Pahiyas ng Kabayo)', barangay: 'All Barangays', highlight: true },
    { month: 'June', event: 'Feast of San Isidro Labrador', barangay: 'Poblacion' },
    { month: 'August', event: 'Buwan ng Wika Celebrations', barangay: 'Municipal-wide' },
    { month: 'September', event: 'Feast of Our Lady of Peregrina', barangay: 'Sta. Peregrina' },
    { month: 'October', event: 'Pulilan Arts & Culture Month', barangay: 'Municipal-wide' },
    { month: 'December', event: 'Christmas Lantern Festival', barangay: 'All Barangays' },
];

export default function Festivals() {
    return (
        <PublicLayout>
            <div className="min-h-screen bg-[#123b8f]">
                {/* Hero - full cinematic */}
                <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1630192226649-1934968dca48?w=1600&h=900&fit=crop&auto=format"
                        alt="Carabao Festival in Pulilan"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#123b8f]/30 via-[#123b8f]/40 to-[#123b8f]" />
                    <div className="absolute inset-0 mx-auto flex max-w-7xl items-end px-6 pb-20 lg:px-10">
                        <div>
                            <div className="mb-4 flex items-center gap-2">
                                <div className="h-px w-6 bg-[#d4a853]" />
                                <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Cultural Heritage</span>
                            </div>
                            <h1 className="font-display mb-4 text-5xl leading-tight font-semibold text-[#f5f0e8] lg:text-7xl">
                                Festivals &<br />
                                <em className="text-[#d4a853]">Celebrations</em>
                            </h1>
                            <p className="max-w-lg text-base leading-relaxed text-[#f5f0e8]/60">
                                A calendar rich with faith, tradition, and community — from the world-famous Carabao Festival to intimate barangay
                                feasts.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Carabao Festival */}
                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
                    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
                        <div className="lg:col-span-3">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4a853]/30 bg-[#d4a853]/15 px-3 py-1.5">
                                <div className="h-2 w-2 animate-pulse rounded-full bg-[#d4a853]" />
                                <span className="text-xs font-semibold tracking-widest text-[#d4a853] uppercase">Signature Festival</span>
                            </div>
                            <h2 className="font-display mb-6 text-4xl leading-tight font-semibold text-[#f5f0e8] lg:text-5xl">
                                The Carabao Festival
                                <br />
                                <span className="text-2xl font-normal text-[#f5f0e8]/40 italic">"Pagdiriwang ng Kabayo"</span>
                            </h2>
                            <div className="space-y-4 text-sm leading-relaxed text-[#f5f0e8]/60">
                                <p>
                                    Every <strong className="text-[#d4a853]">May 15</strong>, the municipality of Pulilan comes alive for the Carabao
                                    Festival — one of the most spectacular and culturally significant celebrations in the Philippines. The festival
                                    honors <strong className="text-[#f5f0e8]/80">San Isidro Labrador</strong>, the patron saint of farmers.
                                </p>
                                <p>
                                    Hundreds of carabaos (water buffaloes) from all 18 barangays are adorned with colorful flowers, garlands, ribbons,
                                    and traditional decorations. Their owners parade them through the streets to the Parish Church of San Isidro
                                    Labrador.
                                </p>
                                <p>
                                    The most remarkable moment comes when the carabaos approach the church steps — in a tradition passed down for over
                                    three centuries, the animals <strong className="text-[#f5f0e8]/80">kneel before the image of San Isidro</strong>,
                                    a gesture of gratitude for the year's harvest and a blessing for the year ahead.
                                </p>
                                <p>
                                    This tradition was recognized by UNESCO as an{' '}
                                    <strong className="text-[#d4a853]">Intangible Cultural Heritage</strong>, cementing its importance not just to
                                    Pulilan, but to Filipino cultural identity worldwide.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                                {[
                                    ['May 15', 'Festival Date'],
                                    ['300+', 'Years of History'],
                                    ['UNESCO', 'Heritage Status'],
                                    ['18', 'Barangays Join'],
                                ].map(([val, label]) => (
                                    <div key={label} className="rounded-xl border border-white/5 bg-[#173f82] p-4 text-center">
                                        <div className="font-display text-xl font-semibold text-[#d4a853]">{val}</div>
                                        <div className="mt-1 text-xs text-[#f5f0e8]/40">{label}</div>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href={route('contact')}
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d4a853] px-7 py-3 text-sm font-semibold text-[#0d1b2a] shadow-lg shadow-[#d4a853]/20 transition-all hover:bg-[#e8b96a]"
                            >
                                Plan Your Festival Visit
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Side images */}
                        <div className="space-y-4 lg:col-span-2">
                            <div className="h-56 overflow-hidden rounded-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1581513118044-696c147c1a66?w=600&h=400&fit=crop&auto=format"
                                    alt="Festival parade"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-36 overflow-hidden rounded-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1617026474324-cd50000d4fc1?w=400&h=300&fit=crop&auto=format"
                                        alt="Decorated carabao"
                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="flex h-36 items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-[#173f82]">
                                    <div className="px-4 text-center">
                                        <p className="font-display text-3xl font-semibold text-[#d4a853]">100K+</p>
                                        <p className="mt-1 text-xs text-[#f5f0e8]/40">Annual attendees</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Annual Calendar */}
                    <div className="mt-24">
                        <div className="mb-4 flex items-center gap-2">
                            <div className="h-px w-6 bg-[#d4a853]" />
                            <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Year Round</span>
                        </div>
                        <h2 className="font-display mb-10 text-3xl font-semibold text-[#f5f0e8]">Festival Calendar</h2>

                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                            {schedule.map((item, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center gap-4 rounded-xl border p-4 transition-all ${
                                        item.highlight ? 'border-[#d4a853]/40 bg-[#d4a853]/10' : 'border-white/5 bg-[#173f82] hover:border-white/10'
                                    }`}
                                >
                                    <div
                                        className={`min-w-[64px] rounded-lg px-2 py-2 text-center ${
                                            item.highlight ? 'bg-[#d4a853] text-[#0d1b2a]' : 'bg-[#123b8f] text-[#f5f0e8]/50'
                                        }`}
                                    >
                                        <span className="font-mono text-xs font-bold">{item.month}</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className={`text-sm font-medium ${item.highlight ? 'text-[#d4a853]' : 'text-[#f5f0e8]/80'}`}>
                                            {item.event}
                                        </p>
                                        <p className="mt-0.5 text-xs text-[#f5f0e8]/30">{item.barangay}</p>
                                    </div>
                                    {item.highlight && (
                                        <span className="rounded-full bg-[#d4a853] px-2 py-0.5 text-xs font-bold text-[#0d1b2a]">Main</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
