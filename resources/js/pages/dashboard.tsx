import InputError from '@/components/input-error';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Building2, CheckCircle2, Clock3 } from 'lucide-react';
import { type FormEventHandler, useEffect, useState } from 'react';

import { type SharedData } from '@/types';

type Tab = 'overview' | 'saved' | 'itinerary' | 'settings';

type BusinessApplication = {
    id: number;
    business_name: string;
    category: string;
    email: string;
    status: 'pending' | 'approved' | 'rejected';
    created_at: string;
} | null;

type DashboardPageProps = SharedData & {
    isBusiness: boolean;
    businessApplication: BusinessApplication;
};

const activity = [
    ['🔖', 'Saved Riverside Villa to your itinerary', '2 hours ago'],
    ['▤', 'Read: Carabao Festival 2025 Recap', 'Yesterday'],
    ['📍', 'Viewed: Heritage Walking Trail map', '2 days ago'],
    ['💬', "Submitted a review for Aling Nena's", '3 days ago'],
    ['🏷', 'Added Heritage Café to saved places', '5 days ago'],
];

const tabs: { id: Tab; label: string }[] = [
    { id: 'overview', label: '⌂  Overview' },
    { id: 'saved', label: '♡  Saved Places' },
    { id: 'itinerary', label: '▢  My Itinerary' },
    { id: 'settings', label: '⚙  Settings' },
];

export default function Dashboard() {
    const page = usePage<DashboardPageProps>();
    const { auth, isBusiness, businessApplication } = page.props;
    const [tab, setTab] = useState<Tab>('overview');
    const [applicationOpen, setApplicationOpen] = useState(false);
    const firstName = auth.user.name.split(' ')[0];
    const form = useForm({
        business_name: '',
        category: '',
        area: '',
        address: '',
        email: auth.user.email,
        phone: '',
        website: '',
        description: '',
    });

    useEffect(() => {
        if (page.url.includes('apply-business=1') && !businessApplication && !isBusiness) {
            setApplicationOpen(true);
        }
    }, [page.url, businessApplication, isBusiness]);

    const submitApplication: FormEventHandler = (event) => {
        event.preventDefault();
        form.post(route('business-applications.store'), {
            preserveScroll: true,
            onSuccess: () => setApplicationOpen(false),
        });
    };

    const accountLabel = isBusiness ? 'Approved Business Account' : 'Visitor Account';

    return (
        <>
            <Head title="Dashboard" />
            <div className="min-h-screen bg-[#0b1640] text-white">
                <aside className="fixed inset-y-0 left-0 z-20 hidden w-48 border-r border-white/5 bg-[#04091f] lg:flex lg:flex-col">
                    <div className="flex h-16 items-center gap-2 border-b border-white/5 px-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d4a853] text-xs font-bold text-[#0b1640]">P</span>
                        <span className="font-display text-xs font-semibold">
                            Discover <i className="block text-[8px] text-[#d4a853]">Pulilan</i>
                        </span>
                    </div>
                    <div className="border-b border-white/5 p-3">
                        <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2e54e8] text-xs font-bold">
                                {auth.user.name.charAt(0)}
                            </span>
                            <div>
                                <p className="text-[10px] font-semibold">{auth.user.name}</p>
                                <p className="text-[9px] text-white/35">{accountLabel}</p>
                            </div>
                        </div>
                    </div>
                    <nav className="flex-1 space-y-1 p-2">
                        {tabs.map(({ id, label }) => (
                            <button
                                key={id}
                                onClick={() => setTab(id)}
                                className={`w-full rounded-lg px-3 py-2 text-left text-xs ${tab === id ? 'bg-[#d4a853]/15 text-[#d4a853]' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}
                            >
                                {label}
                            </button>
                        ))}
                    </nav>
                    <Link href={route('home')} className="border-t border-white/5 p-3 text-[10px] text-white/35 hover:text-white">
                        ← &nbsp; Back to Portal
                    </Link>
                </aside>

                <main className="lg:ml-48">
                    <header className="flex h-12 items-center justify-between border-b border-white/5 bg-[#10245f] px-5">
                        <h1 className="font-display text-lg font-semibold">
                            {tab === 'overview'
                                ? 'My Dashboard'
                                : tab === 'saved'
                                  ? 'Saved Places'
                                  : tab === 'itinerary'
                                    ? 'My Itinerary'
                                    : 'Settings'}
                        </h1>
                        <div className="flex items-center gap-4 text-white/45">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2e54e8] text-[10px] font-bold">
                                {auth.user.name.charAt(0)}
                            </span>
                        </div>
                    </header>

                    <div className="mx-auto max-w-[1280px] space-y-6 px-5 py-6 lg:px-6">
                        {tab === 'overview' && (
                            <>
                                <section className="rounded-xl bg-gradient-to-r from-[#1e3b91] to-[#20327d] p-6">
                                    <p className="text-[10px] font-semibold tracking-[0.2em] text-[#d4a853] uppercase">— &nbsp; Welcome back</p>
                                    <h2 className="font-display mt-2 text-2xl font-semibold">Good morning, {firstName}! ✦</h2>
                                    <p className="mt-1 text-xs text-white/55">
                                        The Carabao Festival is in <b className="text-[#d4a853]">37 days</b>. Start planning your itinerary!
                                    </p>
                                    <button className="mt-4 rounded-full bg-[#d4a853] px-4 py-2 text-xs font-bold text-[#0b1640]">
                                        Plan Festival Visit
                                    </button>
                                </section>

                                {isBusiness && (
                                    <section className="flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                                        <div>
                                            <h2 className="text-sm font-semibold text-emerald-200">Business account approved</h2>
                                            <p className="mt-1 text-xs text-white/60">
                                                {businessApplication?.business_name} is verified for {businessApplication?.email}.
                                            </p>
                                        </div>
                                    </section>
                                )}

                                {!isBusiness && businessApplication && (
                                    <section className="flex items-start gap-3 rounded-xl border border-[#d4a853]/20 bg-[#d4a853]/10 p-4">
                                        {businessApplication.status === 'pending' ? (
                                            <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#d4a853]" />
                                        ) : (
                                            <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d4a853]" />
                                        )}
                                        <div>
                                            <h2 className="text-sm font-semibold text-[#f4d27b]">
                                                {businessApplication.status === 'pending'
                                                    ? 'Business application under review'
                                                    : 'Business application not approved'}
                                            </h2>
                                            <p className="mt-1 text-xs text-white/60">
                                                {businessApplication.business_name} · {businessApplication.status} · {businessApplication.email}
                                            </p>
                                            {businessApplication.status === 'rejected' && (
                                                <button
                                                    onClick={() => setApplicationOpen(true)}
                                                    className="mt-3 text-xs font-semibold text-[#f4d27b] hover:text-white"
                                                >
                                                    Submit a new application
                                                </button>
                                            )}
                                        </div>
                                    </section>
                                )}

                                {!isBusiness && !businessApplication && (
                                    <section className="flex flex-col gap-4 rounded-xl border border-white/5 bg-[#10245f] p-5 sm:flex-row sm:items-center sm:justify-between">
                                        <div className="flex items-start gap-3">
                                            <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d4a853]" />
                                            <div>
                                                <h2 className="text-sm font-semibold">Own a local business?</h2>
                                                <p className="mt-1 text-xs text-white/50">
                                                    Apply for a verified business account. Our team will review your details.
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setApplicationOpen((open) => !open)}
                                            className="shrink-0 rounded-full bg-[#d4a853] px-4 py-2 text-xs font-bold text-[#0b1640] hover:bg-[#e5bc6b]"
                                        >
                                            Apply for business access
                                        </button>
                                    </section>
                                )}

                                {applicationOpen && !isBusiness && businessApplication?.status !== 'pending' && (
                                    <form
                                        onSubmit={submitApplication}
                                        className="grid gap-4 rounded-xl border border-white/10 bg-[#10245f] p-5 sm:grid-cols-2"
                                    >
                                        <div className="sm:col-span-2">
                                            <h2 className="text-lg font-semibold">Business verification application</h2>
                                            <p className="mt-1 text-xs text-white/50">
                                                Fill in your business details. The application email must match your account email.
                                            </p>
                                        </div>
                                        <label className="grid gap-2 text-xs font-medium text-white/65">
                                            Business name
                                            <input
                                                required
                                                value={form.data.business_name}
                                                onChange={(event) => form.setData('business_name', event.target.value)}
                                                className="rounded-lg border border-white/10 bg-[#0b1640] px-3 py-2.5 text-sm text-white outline-none focus:border-[#d4a853]"
                                            />
                                            <InputError message={form.errors.business_name} />
                                        </label>
                                        <label className="grid gap-2 text-xs font-medium text-white/65">
                                            Business type
                                            <input
                                                required
                                                value={form.data.category}
                                                onChange={(event) => form.setData('category', event.target.value)}
                                                placeholder="Restaurant, resort, shop..."
                                                className="rounded-lg border border-white/10 bg-[#0b1640] px-3 py-2.5 text-sm text-white outline-none focus:border-[#d4a853]"
                                            />
                                            <InputError message={form.errors.category} />
                                        </label>
                                        <label className="grid gap-2 text-xs font-medium text-white/65">
                                            Application email
                                            <input
                                                type="email"
                                                required
                                                readOnly
                                                value={form.data.email}
                                                className="rounded-lg border border-white/10 bg-[#0b1640] px-3 py-2.5 text-sm text-white/70 outline-none"
                                            />
                                            <InputError message={form.errors.email} />
                                        </label>
                                        <label className="grid gap-2 text-xs font-medium text-white/65">
                                            Barangay / area
                                            <input
                                                value={form.data.area}
                                                onChange={(event) => form.setData('area', event.target.value)}
                                                className="rounded-lg border border-white/10 bg-[#0b1640] px-3 py-2.5 text-sm text-white outline-none focus:border-[#d4a853]"
                                            />
                                            <InputError message={form.errors.area} />
                                        </label>
                                        <label className="grid gap-2 text-xs font-medium text-white/65 sm:col-span-2">
                                            Business address
                                            <input
                                                required
                                                value={form.data.address}
                                                onChange={(event) => form.setData('address', event.target.value)}
                                                className="rounded-lg border border-white/10 bg-[#0b1640] px-3 py-2.5 text-sm text-white outline-none focus:border-[#d4a853]"
                                            />
                                            <InputError message={form.errors.address} />
                                        </label>
                                        <label className="grid gap-2 text-xs font-medium text-white/65">
                                            Phone
                                            <input
                                                value={form.data.phone}
                                                onChange={(event) => form.setData('phone', event.target.value)}
                                                className="rounded-lg border border-white/10 bg-[#0b1640] px-3 py-2.5 text-sm text-white outline-none focus:border-[#d4a853]"
                                            />
                                            <InputError message={form.errors.phone} />
                                        </label>
                                        <label className="grid gap-2 text-xs font-medium text-white/65">
                                            Website (optional)
                                            <input
                                                type="url"
                                                value={form.data.website}
                                                onChange={(event) => form.setData('website', event.target.value)}
                                                placeholder="https://example.com"
                                                className="rounded-lg border border-white/10 bg-[#0b1640] px-3 py-2.5 text-sm text-white outline-none focus:border-[#d4a853]"
                                            />
                                            <InputError message={form.errors.website} />
                                        </label>
                                        <label className="grid gap-2 text-xs font-medium text-white/65 sm:col-span-2">
                                            About the business
                                            <textarea
                                                required
                                                rows={4}
                                                value={form.data.description}
                                                onChange={(event) => form.setData('description', event.target.value)}
                                                className="rounded-lg border border-white/10 bg-[#0b1640] px-3 py-2.5 text-sm text-white outline-none focus:border-[#d4a853]"
                                            />
                                            <InputError message={form.errors.description} />
                                        </label>
                                        <div className="flex gap-3 sm:col-span-2">
                                            <button
                                                type="submit"
                                                disabled={form.processing}
                                                className="rounded-full bg-[#d4a853] px-5 py-2.5 text-xs font-bold text-[#0b1640] disabled:opacity-60"
                                            >
                                                {form.processing ? 'Submitting...' : 'Submit application'}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setApplicationOpen(false)}
                                                className="rounded-full border border-white/15 px-5 py-2.5 text-xs text-white/65"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                )}

                                <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                                    {[
                                        ['🎟', '4', 'Saved Places', '+1 this week'],
                                        ['📅', '7', 'Itinerary Items', '2 upcoming'],
                                        ['▤', '12', 'Articles Read', 'Since joining'],
                                        ['★', '1', 'Reviews Given', '1 pending'],
                                    ].map(([icon, value, label, note]) => (
                                        <div key={label} className="rounded-xl border border-white/5 bg-[#10245f] p-4">
                                            <span className="text-lg">{icon}</span>
                                            <p className="font-display mt-3 text-xl font-semibold">{value}</p>
                                            <p className="text-[10px] text-white/45">{label}</p>
                                            <p className="mt-2 text-[10px] text-[#d4a853]">{note}</p>
                                        </div>
                                    ))}
                                </section>

                                <div className="grid gap-4 xl:grid-cols-[1fr_390px]">
                                    <section className="rounded-xl border border-white/5 bg-[#10245f] p-5">
                                        <h2 className="font-display mb-5 text-base font-semibold">Recent Activity</h2>
                                        <div className="divide-y divide-white/5">
                                            {activity.map(([icon, text, when]) => (
                                                <div key={text} className="flex items-center gap-3 py-3 first:pt-0">
                                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a2f88] text-[10px]">
                                                        {icon}
                                                    </span>
                                                    <div className="flex-1">
                                                        <p className="text-xs text-white/70">{text}</p>
                                                        <p className="text-[10px] text-white/30">{when}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                    <section className="rounded-xl border border-white/5 bg-[#10245f] p-5">
                                        <h2 className="font-display mb-5 text-base font-semibold">Upcoming Events</h2>
                                        {[
                                            ['MAY', '15', 'Carabao Festival', 'Festival'],
                                            ['JUN', '01', 'Heritage Trail Opening', 'Tourism'],
                                            ['JUN', '24', 'Feast of San Juan', 'Religious'],
                                        ].map(([month, day, title, type]) => (
                                            <div key={title} className="mb-2 flex items-center gap-3 rounded-lg bg-[#0b1640] p-3">
                                                <span className="rounded-lg border border-[#d4a853]/30 px-2 py-1 text-center text-[9px] text-[#d4a853]">
                                                    {month}
                                                    <b className="block text-sm text-white">{day}</b>
                                                </span>
                                                <div>
                                                    <p className="text-xs text-white/75">{title}</p>
                                                    <p className="text-[10px] text-white/35">{type}</p>
                                                </div>
                                            </div>
                                        ))}
                                        <button className="mt-2 w-full rounded-lg border border-white/10 py-2 text-[10px] text-white/35">
                                            View full calendar →
                                        </button>
                                    </section>
                                </div>
                            </>
                        )}

                        {tab !== 'overview' && (
                            <section className="rounded-xl border border-white/5 bg-[#10245f] p-6">
                                <h2 className="font-display text-xl font-semibold">
                                    {tab === 'saved' ? 'Saved Places' : tab === 'itinerary' ? 'My Itinerary' : 'Settings'}
                                </h2>
                                <p className="mt-2 text-sm text-white/45">This portal section is ready for your saved Pulilan experiences.</p>
                                {tab === 'settings' && (
                                    <Link
                                        href={route('profile.edit')}
                                        className="mt-5 inline-block rounded-full bg-[#d4a853] px-4 py-2 text-xs font-bold text-[#0b1640]"
                                    >
                                        Open Profile Settings
                                    </Link>
                                )}
                            </section>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}
