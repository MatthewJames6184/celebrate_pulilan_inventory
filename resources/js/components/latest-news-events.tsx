export default function LatestNewsEvents() {
    const latestNewsItems = [
        {
            label: 'News',
            title: 'New community market opens this week',
            description: 'Discover local products, food vendors, and crafts supporting Pulilan residents.',
        },
        {
            label: 'Event',
            title: 'Festival preview: Heritage Parade',
            description: 'Get a sneak peek at the festival lineup, parade route, and special exhibits.',
        }
    ];
    const otherNewsItems = [
        {
            label:"News",
            title: 'New community market opens this week',
            description: 'Discover local products, food vendors, and crafts supporting Pulilan residents.',
        }
    ];

    return (
        
        <div className="p-4 border  border-black flex shrink basis-[1200px] justify-center gap-4 bg-white">
           
            <div className="flex-[2]">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Latest News & Events</h2>
                {latestNewsItems.map((item) => (
                    <article key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 mt-5 shadow-sm transition hover:-translate-y-0.5">
                        <p className="text-sm uppercase tracking-[0.35em] text-emerald-800">{item.label}</p>
                        <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                    </article>
                ))}
            </div>
            <div className="flex-[1]">
                <h2 className="text-3xl font-base tracking-tight text-slate-950">
                    Other News
                </h2>
                {otherNewsItems.map((item) => (
                    <article key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 mt-5 shadow-sm transition hover:-translate-y-0.5">
                        <p className="text-sm uppercase tracking-[0.35em] text-emerald-800">{item.label}</p>
                        <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}
