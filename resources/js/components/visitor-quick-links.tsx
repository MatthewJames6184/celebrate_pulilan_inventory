import { ArrowUpRight, CalendarDays, MapPinned, Store } from 'lucide-react';

export default function VisitorQuickLinks() {
    const links = [
        { label: 'Festival calendar', icon: CalendarDays },
        { label: 'Local products', icon: Store },
        { label: 'Accommodation guide', icon: MapPinned },
        { label: 'Contact municipal hall', icon: ArrowUpRight },
    ];

    return (
        <div className="flex-[1] rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Visitor quick links</p>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-700">Explore</span>
            </div>

            <ul className="space-y-3">
                {links.map(({ label, icon: Icon }) => (
                    <li key={label}>
                        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 transition hover:border-emerald-200 hover:bg-emerald-50/60">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-emerald-700 shadow-sm ring-1 ring-slate-200">
                                <Icon className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-medium text-slate-700">{label}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
