export default function LatestNewsEvents() {
    const newsItems = [
        {
            label: 'News',
            title: 'New community market opens this week',
            description: 'Discover local products, food vendors, and crafts supporting Pulilan residents.',
        },
        {
            label: 'Event',
            title: 'Festival preview: Heritage Parade',
            description: 'Get a sneak peek at the festival lineup, parade route, and special exhibits.',
        },
        {
            label: 'Travel tip',
            title: 'Best time to visit Pulilan',
            description: 'Learn which months are ideal for food, festivals, and quieter sightseeing.',
        },
        {
            label: 'Discover',
            title: 'Top heritage stops',
            description: 'Explore churches, monuments, and cultural sites that define Pulilan’s story.',
        },
    ];

    return (
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="space-y-4">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Latest News & Events</h2>
                <p className="text-base leading-7 text-slate-600">
                    Stay updated with the latest announcements, calendar highlights, and featured local stories from Pulilan.
                </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
                {newsItems.map((item) => (
                    <article key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-0.5">
                        <p className="text-sm uppercase tracking-[0.35em] text-emerald-800">{item.label}</p>
                        <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}
