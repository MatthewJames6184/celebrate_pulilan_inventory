import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

import { type SharedData } from '@/types';

type Tab = 'overview' | 'saved' | 'itinerary' | 'settings';

const activity = [
    ['🔖', 'Saved Riverside Villa to your itinerary', '2 hours ago'],
    ['▤', 'Read: Carabao Festival 2025 Recap', 'Yesterday'],
    ['📍', 'Viewed: Heritage Walking Trail map', '2 days ago'],
    ['💬', "Submitted a review for Aling Nena's", '3 days ago'],
    ['🏷', 'Added Heritage Café to saved places', '5 days ago'],
];

export default function Dashboard() {
    const { auth } = usePage<SharedData>().props;
    const [tab, setTab] = useState<Tab>('overview');
    const firstName = auth.user.name.split(' ')[0];

    return (
        <>
            <Head title="Dashboard" />
            <div className="min-h-screen bg-[#0b1640] text-white">
                <aside className="fixed inset-y-0 left-0 z-20 hidden w-48 border-r border-white/5 bg-[#04091f] lg:flex lg:flex-col">
                    <div className="flex h-16 items-center gap-2 border-b border-white/5 px-3"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d4a853] text-xs font-bold text-[#0b1640]">P</span><span className="font-display text-xs font-semibold">Discover <i className="block text-[8px] text-[#d4a853]">Pulilan</i></span></div>
                    <div className="border-b border-white/5 p-3"><div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2e54e8] text-xs font-bold">{auth.user.name.charAt(0)}</span><div><p className="text-[10px] font-semibold">{auth.user.name}</p><p className="text-[9px] text-white/35">Visitor Account</p></div></div></div>
                    <nav className="flex-1 space-y-1 p-2">{[['overview', '⌂  Overview'], ['saved', '♡  Saved Places'], ['itinerary', '▢  My Itinerary'], ['settings', '⚙  Settings']].map(([id, label]) => <button key={id} onClick={() => setTab(id as Tab)} className={`w-full rounded-lg px-3 py-2 text-left text-xs ${tab === id ? 'bg-[#d4a853]/15 text-[#d4a853]' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>{label}</button>)}</nav>
                    <Link href={route('home')} className="border-t border-white/5 p-3 text-[10px] text-white/35 hover:text-white">← &nbsp; Back to Portal</Link>
                </aside>
                <main className="lg:ml-48">
                    <header className="flex h-12 items-center justify-between border-b border-white/5 bg-[#10245f] px-5"><h1 className="font-display text-lg font-semibold">{tab === 'overview' ? 'My Dashboard' : tab === 'saved' ? 'Saved Places' : tab === 'itinerary' ? 'My Itinerary' : 'Settings'}</h1><div className="flex items-center gap-4 text-white/45"><span>♧</span><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2e54e8] text-[10px] font-bold">{auth.user.name.charAt(0)}</span></div></header>
                    <div className="mx-auto max-w-[1280px] space-y-6 px-5 py-6 lg:px-6">
                        {tab === 'overview' && <><section className="rounded-xl bg-gradient-to-r from-[#1e3b91] to-[#20327d] p-6"><p className="text-[10px] font-semibold tracking-[0.2em] text-[#d4a853] uppercase">— &nbsp; Welcome back</p><h2 className="font-display mt-2 text-2xl font-semibold">Good morning, {firstName}! ✦</h2><p className="mt-1 text-xs text-white/55">The Carabao Festival is in <b className="text-[#d4a853]">37 days</b>. Start planning your itinerary!</p><button className="mt-4 rounded-full bg-[#d4a853] px-4 py-2 text-xs font-bold text-[#0b1640]">Plan Festival Visit</button></section><section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{[['🎟', '4', 'Saved Places', '+1 this week'], ['📅', '7', 'Itinerary Items', '2 upcoming'], ['▤', '12', 'Articles Read', 'Since joining'], ['★', '1', 'Reviews Given', '1 pending']].map(([icon, value, label, note]) => <div key={label} className="rounded-xl border border-white/5 bg-[#10245f] p-4"><span className="text-lg">{icon}</span><p className="font-display mt-3 text-xl font-semibold">{value}</p><p className="text-[10px] text-white/45">{label}</p><p className="mt-2 text-[10px] text-[#d4a853]">{note}</p></div>)}</section><div className="grid gap-4 xl:grid-cols-[1fr_390px]"><section className="rounded-xl border border-white/5 bg-[#10245f] p-5"><h2 className="font-display mb-5 text-base font-semibold">Recent Activity</h2><div className="divide-y divide-white/5">{activity.map(([icon, text, when]) => <div key={text} className="flex items-center gap-3 py-3 first:pt-0"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a2f88] text-[10px]">{icon}</span><div className="flex-1"><p className="text-xs text-white/70">{text}</p><p className="text-[10px] text-white/30">{when}</p></div></div>)}</div></section><section className="rounded-xl border border-white/5 bg-[#10245f] p-5"><h2 className="font-display mb-5 text-base font-semibold">Upcoming Events</h2>{[['MAY', '15', 'Carabao Festival', 'Festival'], ['JUN', '01', 'Heritage Trail Opening', 'Tourism'], ['JUN', '24', 'Feast of San Juan', 'Religious']].map(([month, day, title, type]) => <div key={title} className="mb-2 flex items-center gap-3 rounded-lg bg-[#0b1640] p-3"><span className="rounded-lg border border-[#d4a853]/30 px-2 py-1 text-center text-[9px] text-[#d4a853]">{month}<b className="block text-sm text-white">{day}</b></span><div><p className="text-xs text-white/75">{title}</p><p className="text-[10px] text-white/35">{type}</p></div></div>)}<button className="mt-2 w-full rounded-lg border border-white/10 py-2 text-[10px] text-white/35">View full calendar →</button></section></div></>}
                        {tab !== 'overview' && <section className="rounded-xl border border-white/5 bg-[#10245f] p-6"><h2 className="font-display text-xl font-semibold">{tab === 'saved' ? 'Saved Places' : tab === 'itinerary' ? 'My Itinerary' : 'Settings'}</h2><p className="mt-2 text-sm text-white/45">This portal section is ready for your saved Pulilan experiences.</p>{tab === 'settings' && <Link href={route('profile.edit')} className="mt-5 inline-block rounded-full bg-[#d4a853] px-4 py-2 text-xs font-bold text-[#0b1640]">Open Profile Settings</Link>}</section>}
                    </div>
                </main>
            </div>
        </>
    );
}
