export default function VisitorQuickLinks() {
    const links = [
        'Festival calendar',
        'Local products',
        'Accommodation guide',
        'Contact municipal hall',
    ];

    return (
        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Visitor quick links</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {links.map((link) => (
                    <li key={link}>• {link}</li>
                ))}
            </ul>
        </div>
    );
}
