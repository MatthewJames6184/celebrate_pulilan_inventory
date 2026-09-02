import { Link } from '@inertiajs/react';
import { whatToSeePages } from '@/lib/what-to-see';

export default function BusinessAndTourism() {
    // use the existing whatToSeePages to pull featured content for each column
    const local = whatToSeePages['local-products'];
    const attraction = whatToSeePages['attraction'];
    const shopping = whatToSeePages['shopping'];

    const columns = [
        {
            key: 'local-products',
            eyebrow: 'LOCAL PRODUCT',
            title: local.title,
            moreHref: route('about.local-products'),
            item: local.cards[0],
        },
        {
            key: 'attraction',
            eyebrow: 'TOURIST ATTRACTION',
            title: attraction.title,
            moreHref: route('about.attraction'),
            item: attraction.cards[0],
        },
        {
            key: 'shopping',
            eyebrow: 'TOP BUSINESSES',
            title: shopping.title,
            moreHref: route('about.shopping'),
            item: shopping.cards[0],
        },
    ];

    return (
        <div className="w-full max-w-[980px] mx-auto bg-white  overflow-hidden">
            <div className="bg-emerald-700 px-6 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Business &amp; Tourism</p>
            </div>

            <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {columns.map((col) => (
                                            <div key={col.key} className="min-w-0">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-sm font-bold text-slate-900 truncate">{col.eyebrow}</h4>
                                                    <Link href={col.moreHref} className="text-xs font-semibold text-emerald-700 inline-flex items-center">
                                                        EXPLORE
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 h-3 w-3 text-emerald-700">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </Link>
                                                </div>

                                                <div className="mt-3 overflow-hidden rounded border border-slate-200 bg-slate-50">
                                                    <img src={col.item.image} alt={col.item.title} className="h-28 sm:h-36 w-full object-cover object-center" />
                                                </div>

                                                <div className="mt-3">
                                                    <Link href={route('about.detail', { topic: col.key, slug: col.item.slug })} className="text-sm font-semibold text-emerald-700 block truncate">{col.item.title}</Link>
                                                    <p className="mt-2 text-sm leading-6 text-slate-600">{col.item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                </div>
            </div>
        </div>
    );
}
