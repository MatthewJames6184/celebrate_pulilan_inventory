export default function LatestNewsEvents() {
    const featuredStory = {
        title: 'Tree Planting Activity',
        date: 'September 25, 2023',
        location: 'Pulilan, Bulacan',
        image: '/images/placeholder-img/wat-da-dog-doin.jpg',
        excerpt:
            'The Municipal Government of Pulilan partnered with local stakeholders to strengthen environmental awareness through a community tree planting drive that promoted greener public spaces and stronger civic engagement.',
        body:
            'In coordination with the Municipal Tourism Office and the Department of Environment and Natural Resources, residents, local officials, and volunteers worked together to plant native trees and restore key community areas across Pulilan. The activity highlighted the town’s commitment to environmental stewardship, public participation, and sustainable growth for future generations.',
    };

    const otherNewsItems = [
        {
            title: 'Tree Planting Activity',
            date: 'September 25, 2023',
            image: '/images/placeholder-img/wat-da-dog-doin.jpg',
        },
        {
            title: 'PAGYABONG: A BCAC Event',
            date: 'July 7, 2023',
            image: '/images/placeholder-img/wat-da-dog-doin.jpg',
        },
        {
            title: 'Pulilan Traditional Craft Workshop',
            date: 'February 7, 2023',
            image: '/images/placeholder-img/wat-da-dog-doin.jpg',
        },
    ];

    return (
        <div className="w-full rounded-[28px] border border-slate-200 bg-white/90 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-7">
            <div className="flex items-center justify-between gap-3 border-slate-200 pb-4">
                <h2 className="text-2xl font-black uppercase tracking-[0.12em] text-slate-900 sm:text-3xl">
                    Latest News
                </h2>
                <span className="hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700 sm:inline-flex">
                    Updates
                </span>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.7fr_0.9fr]">
                <article className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900">{featuredStory.title}</h3>
                        <p className="text-sm font-medium text-slate-500">{featuredStory.date}</p>
                    </div>

                    <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-slate-100">
                        <img
                            src={featuredStory.image}
                            alt={featuredStory.title}
                            className="h-[260px] w-full object-cover sm:h-[320px]"
                        />
                    </div>

                    <p className="text-sm font-medium text-slate-700">{featuredStory.location}</p>
                    <p className="text-base leading-7 text-slate-700">{featuredStory.excerpt}</p>
                    <p className="text-base leading-7 text-slate-700">{featuredStory.body}</p>

                    <button
                        type="button"
                        className="inline-flex items-center gap-2 border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                        Read more
                    </button>
                </article>

                <aside className="space-y-4 border-l border-slate-200 pl-0 lg:pl-6">
                    <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
                        <h3 className="text-xl font-black uppercase tracking-[0.12em] text-slate-900">Other News</h3>
                        <button type="button" className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                            More
                        </button>
                    </div>

                    <div className="space-y-4">
                        {otherNewsItems.map((item) => (
                            <article key={item.title} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-0.5 hover:shadow-sm">
                                <img src={item.image} alt={item.title} className="h-20 w-20 rounded-xl object-cover" />
                                <div className="min-w-0 flex-1">
                                    <h4 className="text-base font-bold leading-snug text-slate-900">{item.title}</h4>
                                    <p className="mt-2 text-xs font-medium text-slate-500">{item.date}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
}
