import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';

const facts = [
    { label: 'Land Area', value: '40.73', unit: 'km² / 4,073 hectares' },
    { label: 'Population', value: '111,384', unit: '2024 POPCEN · July 1, 2024' },
    { label: 'Barangays', value: '19', unit: 'communities' },
    { label: 'Founded', value: '1796', unit: 'January 20 · Fray Vicente Villamanzo' },
];

const officials = [
    { name: 'Hon. John Dela Cruz', role: 'Mayor' },
    { name: 'Hon. Maria Santos', role: 'Vice Mayor' },
    { name: 'Engr. Roberto Reyes', role: 'Municipal Administrator' },
    { name: 'Dr. Luz Macaraeg', role: 'Municipal Health Officer' },
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

            <div className="text-scale min-h-screen bg-[#f3ede2]" style={{ fontSize: '16px' }}>
                <section className="relative h-80 overflow-hidden">
                   
                    <img
                    src="/images/municipal_officials.jpg"
                    alt="Pulilan landscape"
                    className="h-full w-full object-cover object-[50%_30%] transition-all duration-300 hover:scale-105"
                    />
                    

                    <div className="absolute inset-0 bg-gradient-to-b from-[#4169E1]/70 via-[#4169E1]/50 to-[#4169E1]" />
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

                <section className="border-y border-[#4169E1]/5 border-bt-[#4169E1] bg-[#4169E1]">
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
                    {/* OVERVIEW */}
                    <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
                        <div>
                            <div className="mb-4 flex items-center gap-2">
                                <div className="h-px w-6 bg-[#d4a853]" />
                                <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Overview</span>
                            </div>
                            <h2 className="font-display mb-6 text-4xl leading-tight font-semibold text-[#000080]">
                                A Community Rooted
                                <br />
                                <em className="text-[#d4a853]">in Faith and Culture</em>
                            </h2>
                            <div className="space-y-4 text-sm leading-relaxed text-[#000080]">
                                <p>
                                    Pulilan is a first-class municipality in Bulacan, Central Luzon. It covers approximately 40.73 square
                                    kilometers and is divided into 19 barangays. The town is known for its Kneeling Carabao Festival, held in
                                    connection with the feast of San Isidro Labrador.
                                </p>
                                <p>
                                    Pulilan is bounded by Apalit, Pampanga to the north, Baliwag to the east, Plaridel to the south, and Calumpit
                                    to the west. Its generally flat terrain and fertile soil have supported agricultural communities and continue
                                    to shape local life.
                                </p>
                                <p>
                                    Its identity brings together agriculture, Catholic traditions, local heritage, and the carabao. Historic houses,
                                    Museo de San Isidro, religious sites, riverside areas, resorts, restaurants, and community festivals give visitors
                                    many ways to experience Pulilan.
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
                                    Promote science and technology innovations; promote solid waste management programs; educate, conserve, and
                                    promote cultural heritage; encourage investments and create job opportunities; provide health and allied-social
                                    services; empower Pulileños to become self-reliant in managing hazards; comply with existing laws and
                                    ordinances; provide basic utilities and facilities; promote organic and natural farming technologies; and
                                    promote gender-responsive governance.
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
                                    “Pulilan, nangungunang bayan na may pamayanang maka-Diyos, maka-bayan, maka-tao, at maka-kalikasan, na handang
                                    tumugon sa hamon ng makabagong panahon.”
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* MUNICIPAL OFFICIALS */}
                    <section className="mt-20">
                        <div className="mb-7     flex items-center gap-2">
                            <div className="h-px w-6 bg-[#d4a853]" />
                            <span className="text-xs font-medium tracking-widest text-[#d4a853] uppercase">Leadership</span>
                        </div>
                        <h2 className="font-display text-3xl font-semibold text-[#000080]">Municipal Officials
                        <br/>
                        <em className="font-dsiplay text-[#d4a853]">Meet the People Behind Pulilan</em>
                        </h2>
                        <img src="/images/municipal-officials3.png" alt="Pulilan municipal officials" className="mt-8 mb-8 h-full lg:h-100 w-full rounded-xl border object-cover transition-all duration-300 hover:scale-105" />
                        <p className="text-sm leading-relaxed text-[#000080]">
                            Get to know the elected officials who lead and serve the Municipality of Pulilan. Working together with the local government, they help guide the municipality’s programs, services, and development for the community.
                        </p>
                        <div className="flex flex-col items-start justify-start gap-4 sm:gap-4 lg:flex-row lg:items-center lg:justify-center">
                            <Link href="https://pulilan.gov.ph/government/elected-officials/"
                                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#d4a853] px-7 py-3.5 text-[1em] font-semibold text-[#0d1b2a] shadow-xl shadow-[#d4a853]/25 transition-all hover:-translate-y-0.5 hover:bg-[#e8b96a] sm:px-7 sm:py-3.5 sm:text-[1em]"
                            > View All Officials
                                
                            </Link>
                        </div>
                    </section>
                    {/* BARANGAYS */}
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
