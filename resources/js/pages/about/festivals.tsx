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
            <div className="text-scale min-h-screen bg-[#fffdf8] text-[#1f2937]" style={{ fontSize: '16px' }}>
                {/* Hero - full cinematic */}
                <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
                    <img
                        src="/images/background-img/home-Pulilan-Carabao-Festival-Float.jpg"
                        alt="Carabao Festival in Pulilan"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f4d]/75 via-[#0b1f4d]/45 to-[#0b1f4d]/10" />
                    <div className="absolute inset-0 mx-auto flex w-full max-w-7xl items-end px-6 pb-20 lg:px-10">
                        <div className="w-full min-w-0">
                            <div className="mb-4 flex items-center gap-2">
                                <div className="h-px w-6 bg-[#f1c75b]" />
                                <span className="text-xs font-semibold tracking-widest text-[#f1c75b] uppercase">Cultural Heritage</span>
                            </div>
                            <h1 className="font-display mb-4 text-5xl leading-tight font-semibold text-white lg:text-7xl">
                                Festivals &<br />
                                <em className="text-[#f1c75b]">Celebrations</em>
                            </h1>
                            <p className="max-w-lg text-base leading-relaxed text-white/85">
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
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#a27620]/25 bg-[#e8b84b]/15 px-3 py-1.5">
                                <div className="h-2 w-2 animate-pulse rounded-full bg-[#a27620]" />
                                <span className="text-xs font-semibold tracking-widest text-[#8b671e] uppercase">Signature Festival</span>
                            </div>
                            <h2 className="font-display mb-6 text-4xl leading-tight font-semibold text-[#123b8f] lg:text-5xl">
                                The Carabao Festival
                                <br />
                                <span className="block max-w-full text-lg font-normal text-slate-500 italic sm:text-2xl">
                                    "Pagdiriwang ng Kabayo"
                                </span>
                            </h2>
                            <div className="space-y-4 text-sm leading-relaxed text-slate-700">
                                <p>
                                    Every <strong className="text-[#8b671e]">May 15</strong>, the municipality of Pulilan comes alive for the Carabao
                                    Festival — one of the most spectacular and culturally significant celebrations in the Philippines. The festival
                                    honors <strong className="text-[#123b8f]">San Isidro Labrador</strong>, the patron saint of farmers.
                                </p>
                                <p>
                                    Decorated carabaos are paraded through the streets and brought before San Isidro Labrador Parish. The kneeling of
                                    the animals is a thanksgiving and tribute to the patron saint of farmers.
                                </p>
                                <p>
                                    Provincial tourism information places the celebration around May 14–15. Dates and activities may vary each year,
                                    so visitors should check the municipality’s current announcements before planning a trip.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                                {[
                                    ['May 15', 'Festival Date'],
                                    ['1796', 'Town foundation'],
                                    ['19', 'Barangays'],
                                ].map(([val, label]) => (
                                    <div key={label} className="rounded-xl border border-[#123b8f]/10 bg-white p-4 text-center shadow-sm">
                                        <div className="font-display text-xl font-semibold text-[#123b8f]">{val}</div>
                                        <div className="mt-1 text-xs text-slate-500">{label}</div>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href={route('contact')}
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e8b84b] px-7 py-3 text-sm font-semibold text-[#17233d] shadow-lg transition-all hover:bg-[#f2c85e]"
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
                                    src="/images/carabao-festival-kneeling.jpg"
                                    alt="Festival parade"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-36 overflow-hidden rounded-xl">
                                    <img
                                        src="/images/carabao-kneel-2.jpg"
                                        alt="Farmer riding a carabao during the Pulilan festival"
                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="flex h-36 items-center justify-center overflow-hidden rounded-xl border border-[#123b8f]/10 bg-[#123b8f]">
                                    <div className="px-4 text-center">
                                        <p className="font-display text-3xl font-semibold text-[#d4a853]">100K+</p>
                                        <p className="mt-1 text-xs text-white/70">Annual attendees</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Annual Calendar */}
                    <div className="mt-24">
                        <div className="mb-4 flex items-center gap-2">
                            <div className="h-px w-6 bg-[#a27620]" />
                            <span className="text-xs font-semibold tracking-widest text-[#a27620] uppercase">Year Round</span>
                        </div>
                        <h2 className="font-display mb-10 text-3xl font-semibold text-[#123b8f]">Festival Calendar</h2>

                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                            {schedule.map((item, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center gap-4 rounded-xl border p-4 transition-all ${
                                        item.highlight ? 'border-[#c89b33]/40 bg-[#fff8e6]' : 'border-[#123b8f]/10 bg-white hover:border-[#123b8f]/25'
                                    }`}
                                >
                                    <div
                                        className={`min-w-[64px] rounded-lg px-2 py-2 text-center ${
                                            item.highlight ? 'bg-[#e8b84b] text-[#17233d]' : 'bg-[#f1eee7] text-[#123b8f]'
                                        }`}
                                    >
                                        <span className="font-mono text-xs font-bold">{item.month}</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className={`text-sm font-medium ${item.highlight ? 'text-[#8b671e]' : 'text-[#123b8f]'}`}>{item.event}</p>
                                        <p className="mt-0.5 text-xs text-slate-500">{item.barangay}</p>
                                    </div>
                                    {item.highlight && (
                                        <span className="rounded-full bg-[#e8b84b] px-2 py-0.5 text-xs font-bold text-[#17233d]">Main</span>
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
