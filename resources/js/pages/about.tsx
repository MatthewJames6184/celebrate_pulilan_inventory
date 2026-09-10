import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';

const officials = [
    { name: 'Hon. John Dela Cruz', role: 'Mayor' },
    { name: 'Hon. Maria Santos', role: 'Vice Mayor' },
    { name: 'Engr. Roberto Reyes', role: 'Municipal Administrator' },
    { name: 'Dr. Luz Macaraeg', role: 'Municipal Health Officer' },
];

const facts = [
    { label: 'Land Area', value: '75.46', unit: 'km²' },
    { label: 'Population', value: '101,756', unit: '2020 Census' },
    { label: 'Barangays', value: '18', unit: 'communities' },
    { label: 'Founded', value: '1572', unit: 'by Augustinians' },
];

const barangays = [
    'Balatong A',
    'Balatong B',
    'Cutcot',
    'Dampol 1st',
    'Dampol 2nd A',
    'Dampol 2nd B',
    'Dulong Malabon',
    'Inaon',
    'Longos',
    'Lumbang',
    'Paltao',
    'Penabatan',
    'Poblacion',
    'Sta. Peregrina',
    'Sto. Cristo',
    'Taal',
    'Tabon',
    'Tibag',
    'Tinejero',
];

export default function About() {
    return (
        <PublicLayout>
            <Head title="About Pulilan" />

            <div className="text-scale min-h-screen bg-[#123b8f]" style={{ fontSize: '16px' }}>
                <section className="relative h-80 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1601000234047-d9308ea1ed51?w=1600&h=600&fit=crop&auto=format"
                        alt="Pulilan landscape"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#123b8f]/70 via-[#123b8f]/50 to-[#123b8f]" />
                    <div className="absolute inset-0 flex items-end justify-center px-6 pb-16 text-center">
                        <div>
                            <div className="mb-3 flex items-center justify-center gap-2">
                                <div className="h-px w-6 bg-[#d4a853]" />
                                <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Municipality</span>
                                <div className="h-px w-6 bg-[#d4a853]" />
                            </div>
                            <h1 className="font-display text-5xl font-semibold text-[#f5f0e8] lg:text-6xl">About Pulilan</h1>
                        </div>
                    </div>
                </section>

                <section className="border-y border-white/5 bg-[#173f82]">
                    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px px-6 py-10 md:grid-cols-4">
                        {facts.map((fact) => (
                            <div key={fact.label} className="px-6 text-center">
                                <div className="font-display text-3xl font-semibold text-[#d4a853]">{fact.value}</div>
                                <div className="mt-1 text-xs text-[#f5f0e8]/60">{fact.unit}</div>
                                <div className="mt-0.5 text-xs font-medium text-[#f5f0e8]">{fact.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
                    <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
                        <div>
                            <div className="mb-4 flex items-center gap-2">
                                <div className="h-px w-6 bg-[#d4a853]" />
                                <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Overview</span>
                            </div>
                            <h2 className="font-display mb-6 text-4xl leading-tight font-semibold text-[#f5f0e8]">
                                A Community Rooted
                                <br />
                                <em className="text-[#d4a853]">in Faith and Culture</em>
                            </h2>
                            <div className="space-y-4 text-sm leading-relaxed text-[#f5f0e8]">
                                <p>
                                    Pulilan is a first-class municipality in the province of Bulacan, Philippines. It is known as the{' '}
                                    <strong className="text-[#d4a853]">Carabao Capital of the Philippines</strong>, celebrated through its
                                    centuries-old Carabao Festival held every May 15 in honor of San Isidro Labrador.
                                </p>
                                <p>
                                    Located in the fertile plains of Central Luzon, Pulilan is bounded by Calumpit and Bulacan to the west, Plaridel
                                    and Norzagaray to the east, and Santa Maria to the south. Its rich agricultural heritage and proximity to Manila
                                    make it a vibrant hub of commerce and culture.
                                </p>
                                <p>
                                    The municipality is home to some of Bulacan&apos;s most significant colonial churches, ancestral houses, and
                                    heritage sites — preserving centuries of Spanish colonial history alongside living Filipino traditions.
                                </p>
                            </div>
                            <Link
                                href={route('about.history')}
                                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#d4a853]/40 px-7 py-3 text-sm font-medium text-[#d4a853] transition-all hover:bg-[#d4a853]/10"
                            >
                                Read Full History <span aria-hidden="true">›</span>
                            </Link>
                        </div>

                        <div className="space-y-5">
                            <div className="rounded-2xl border border-white/5 bg-[#173f82] p-7">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d4a853]/15">
                                        <span className="text-sm text-[#d4a853]">🎯</span>
                                    </div>
                                    <h3 className="font-display text-lg font-semibold text-[#f5f0e8]">Mission</h3>
                                </div>
                                <p className="text-sm leading-relaxed text-[#f5f0e8]">
                                    We are committed to delivering efficient, responsive, and transparent local governance that upholds the dignity
                                    and welfare of every Pulileño. We strive to foster sustainable development, preserve our cultural heritage, and
                                    build a progressive community grounded in integrity and service.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/5 bg-[#173f82] p-7">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3d8b67]/15">
                                        <span className="text-sm text-[#3d8b67]">👁</span>
                                    </div>
                                    <h3 className="font-display text-lg font-semibold text-[#f5f0e8]">Vision</h3>
                                </div>
                                <p className="text-sm leading-relaxed text-[#f5f0e8]">
                                    Pulilan — a prosperous, culturally vibrant, and environmentally sustainable municipality where every citizen
                                    enjoys a high quality of life, equitable access to services, and pride in their heritage as the Carabao Capital of
                                    the Philippines.
                                </p>
                            </div>
                        </div>
                    </div>

                    <section className="mt-20">
                        <div className="mb-10 flex items-center gap-2">
                            <div className="h-px w-6 bg-[#d4a853]" />
                            <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Leadership</span>
                        </div>
                        <h2 className="font-display mb-8 text-3xl font-semibold text-[#f5f0e8]">Municipal Officials</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                            {officials.map((official) => (
                                <div
                                    key={official.name}
                                    className="rounded-2xl border border-white/5 bg-[#173f82] p-6 transition-all hover:border-[#d4a853]/20"
                                >
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#2859a5] to-[#173f82]">
                                        <span className="text-xl">👤</span>
                                    </div>
                                    <h4 className="font-display text-sm font-semibold text-[#f5f0e8]">{official.name}</h4>
                                    <p className="mt-1 text-xs text-[#d4a853]">{official.role}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mt-20 rounded-3xl border border-white/5 bg-[#173f82] p-6 sm:p-10">
                        <div className="mb-2 flex items-center gap-2">
                            <div className="h-px w-6 bg-[#d4a853]" />
                            <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Communities</span>
                        </div>
                        <h2 className="font-display mb-8 text-3xl font-semibold text-[#f5f0e8]">19 Barangays of Pulilan</h2>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                            {barangays.map((barangay) => (
                                <div
                                    key={barangay}
                                    className="b flex min-h-11 items-center justify-center rounded-xl border border-white/5 bg-[#123b8f]/60 px-3 py-2.5 text-center"
                                >
                                    <span className="text-xs text-[#f5f0e8]/80">{barangay}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </PublicLayout>
    );
}
