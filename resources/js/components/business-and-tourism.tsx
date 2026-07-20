export default function BusinessAndTourism() {
    const items = [
        {
            title: 'Local Product',
            subtitle: "Charmes native to Pulilan",
            image: '/images/carousel-images/cp-11.jpg',
        },
        {
            title: 'Tourist Attraction',
            subtitle: 'Makahoy Private Resort',
            image: '/images/carousel-images/cp-10.jpg',
        },
        {
            title: 'Top Businesses',
            subtitle: 'SM Center Pulilan & more',
            image: '/images/carousel-images/cp-5.jpg',
        },
    ];

    return (
        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Business & Tourism</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {items.map((it) => (
                    <div key={it.title} className="rounded-2xl overflow-hidden bg-white shadow-sm">
                        <div className="h-28 overflow-hidden bg-slate-100">
                            <img src={it.image} alt={it.title} className="h-full w-full object-cover" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-sm font-semibold text-slate-900">{it.title}</h3>
                            <p className="mt-1 text-xs text-slate-600">{it.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
