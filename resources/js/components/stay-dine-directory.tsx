import { useMemo, useState } from 'react';
import { Grid2x2, List, MapPin, Search, SlidersHorizontal } from 'lucide-react';

import PublicTopicPage from '@/components/public-topic-page';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

export type DirectoryItem = {
    name: string;
    category: string;
    area: string;
    address: string;
    summary: string;
    highlights: string[];
    featured?: boolean;
    image?: string;
};

type Breadcrumb = {
    label: string;
    href?: string;
};

type StayDineDirectoryPageProps = {
    headTitle: string;
    eyebrow: string;
    title: string;
    intro: string;
    imageSubHeader: {
        src: string;
        alt: string;
    };
    breadcrumbs: Breadcrumb[];
    // new prop: type of listing used to build the detail route (e.g. 'accommodations' or 'restaurants')
    type?: string;
    items: DirectoryItem[];
    // default view for this listing: 'grid' or 'list'
    defaultView?: 'grid' | 'list';
};

const alphabet = ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

import { Link } from '@inertiajs/react';

export default function StayDineDirectoryPage({
    headTitle,
    eyebrow,
    title,
    intro,
    imageSubHeader,
    breadcrumbs,
    type = 'list',
    items,
    defaultView = 'list',
}: StayDineDirectoryPageProps) {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('all');
    const [area, setArea] = useState('all');
    const [letter, setLetter] = useState('all');
    const [sortBy, setSortBy] = useState('name-asc');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>(defaultView);

    const categories = useMemo(() => ['all', ...new Set(items.map((item) => item.category))], [items]);
    const areas = useMemo(() => ['all', ...new Set(items.map((item) => item.area))], [items]);

    const filteredItems = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        const results = items.filter((item) => {
            const matchesQuery =
                normalizedQuery.length === 0 ||
                [item.name, item.category, item.area, item.address, item.summary, ...item.highlights].some((field) =>
                    field.toLowerCase().includes(normalizedQuery),
                );
            const matchesCategory = category === 'all' || item.category === category;
            const matchesArea = area === 'all' || item.area === area;
            const firstLetter = item.name.trim().charAt(0).toUpperCase();
            const matchesLetter =
                letter === 'all' ||
                (letter === '#' ? !/[A-Z]/.test(firstLetter) : firstLetter === letter);

            return matchesQuery && matchesCategory && matchesArea && matchesLetter;
        });

        return results.sort((left, right) => {
            switch (sortBy) {
                case 'name-desc':
                    return right.name.localeCompare(left.name);
                case 'category':
                    return left.category.localeCompare(right.category) || left.name.localeCompare(right.name);
                case 'area':
                    return left.area.localeCompare(right.area) || left.name.localeCompare(right.name);
                case 'name-asc':
                default:
                    return left.name.localeCompare(right.name);
            }
        });
    }, [area, category, items, letter, query, sortBy]);

    return (
        <PublicTopicPage headTitle={headTitle} title={title} imageSubHeader={imageSubHeader} breadcrumbs={breadcrumbs}>
            <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <section className="border border-emerald-700 bg-emerald-900 px-6 py-7 shadow-sm md:px-8">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">
                        {eyebrow}
                    </p>

                    <p className="max-w-4xl text-base leading-8 text-emerald-100 md:text-lg">
                        {intro}
                    </p>
                </div>
            </section>

                <section className="mt-8 border border-slate-200 px-5 pb-5">
                    <div className="bg-white p-5 shadow-sm shadow-slate-200/60">
                        <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">{filteredItems.length} results</p>
                                <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                                    {category === 'all' ? 'All listings' : category}
                                    {area === 'all' ? '' : ` in ${area}`}
                                </h3>
                            </div>

                            <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
                                <button
                                    type="button"
                                    onClick={() => setViewMode('list')}
                                    className={cn(
                                        'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition',
                                        viewMode === 'list' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-950',
                                    )}
                                >
                                    <List className="h-4 w-4" />
                                    List
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setViewMode('grid')}
                                    className={cn(
                                        'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition',
                                        viewMode === 'grid' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-600 hover:text-slate-950',
                                    )}
                                >
                                    <Grid2x2 className="h-4 w-4" />
                                    Grid
                                </button>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col gap-3 xl:flex-row xl:items-center">
                            <div className="relative flex-1">
                                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                                <Input
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                    placeholder="Search businesses, services, or areas"
                                    aria-label="Search directory"
                                    className="w-full rounded-full border-slate-200 bg-slate-50 pl-11 pr-4"
                                />
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap xl:flex-nowrap">
                                <div className="min-w-[160px]">
                                    <Select value={category} onValueChange={setCategory}>
                                        <SelectTrigger className="rounded-full border-slate-200 bg-slate-50">
                                            <SelectValue placeholder="All categories" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((option) => (
                                                <SelectItem key={option} value={option}>
                                                    {option === 'all' ? 'All categories' : option}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="min-w-[140px]">
                                    <Select value={area} onValueChange={setArea}>
                                        <SelectTrigger className="rounded-full border-slate-200 bg-slate-50">
                                            <SelectValue placeholder="All areas" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {areas.map((option) => (
                                                <SelectItem key={option} value={option}>
                                                    {option === 'all' ? 'All areas' : option}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="min-w-[140px]">
                                    <Select value={sortBy} onValueChange={setSortBy}>
                                        <SelectTrigger className="rounded-full border-slate-200 bg-slate-50">
                                            <SelectValue placeholder="Sort results" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="name-asc">Name A-Z</SelectItem>
                                            <SelectItem value="name-desc">Name Z-A</SelectItem>
                                            <SelectItem value="category">Category</SelectItem>
                                            <SelectItem value="area">Area</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 xl:max-h-[70vh] xl:overflow-y-auto xl:pr-1">
                            {filteredItems.length > 0 ? (
                                <div
                                    className={cn(
                                        'gap-5',
                                        viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'space-y-4',
                                    )}
                                >
                        {filteredItems.map((item) => {
                            const slug = item.name
                                .toLowerCase()
                                .trim()
                                .replace(/\s+/g, '-')
                                .replace(/[^a-z0-9-]/g, '');

                            if (viewMode === 'grid') {
                                return (
                                    <Link
                                        key={item.name}
                                        href={route('stay.dine.detail', { type, slug })}
                                        className="block rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                    >
                                        <div className="overflow-hidden rounded-md bg-slate-100">
                                            <img src={'/images/placeholder-img/wat-da-dog-doin.jpg'} alt={item.name} className="h-36 w-full object-cover object-center" />
                                        </div>

                                        <div className="mt-3">
                                            <h4 className="text-sm font-semibold text-slate-900 truncate">{item.name}</h4>
                                            <p className="mt-1 text-xs text-slate-600 truncate">{item.category} • {item.area}</p>
                                            <p className="mt-2 text-sm text-slate-700 line-clamp-3">{item.summary}</p>
                                        </div>

                                        <div className="mt-3 flex items-center justify-between">
                                            <span className="text-xs font-medium text-slate-600">{item.address}</span>
                                            <span className="text-xs font-semibold text-emerald-700">View details →</span>
                                        </div>
                                    </Link>
                                );
                            }

                            return (
                                <Link
                                    key={item.name}
                                    href={route('stay.dine.detail', { type, slug })}
                                    className={cn(
                                        'block rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60 transition hover:-translate-y-0.5 hover:shadow-md',
                                        viewMode === 'list' && 'md:grid md:grid-cols-[1.25fr_0.95fr] md:items-start',
                                    )}
                                >
                                    <div className="md:flex md:items-start md:gap-4">
                                        <div className="hidden md:block md:w-48 h-36 overflow-hidden rounded-md bg-slate-100">
                                            <img src={item.image ?? '/images/placeholder-img/wat-da-dog-doin.jpg'} alt={item.name} className="h-full w-full object-cover object-center" />
                                        </div>

                                        <div className="flex-1 space-y-4">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">{item.category}</span>
                                                {item.featured ? (
                                                    <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">Featured</span>
                                                ) : null}
                                            </div>

                                            <div>
                                                <h4 className="text-xl font-semibold text-slate-950">{item.name}</h4>
                                                <div className="mt-2 flex items-start gap-2 text-sm text-slate-600">
                                                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                                                    <span>{item.address}</span>
                                                </div>
                                            </div>

                                            <p className="text-sm leading-7 text-slate-600">{item.summary}</p>
                                        </div>
                                    </div>

                                    <div className={cn('mt-5 space-y-4 md:mt-0', viewMode === 'grid' && 'border-t border-slate-200 pt-4')}>
                                        <div>
                                            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Location</div>
                                            <p className="mt-2 text-sm font-medium text-slate-800">{item.area}</p>
                                        </div>

                                        <div>
                                            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Highlights</div>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {item.highlights.map((highlight) => (
                                                    <span key={highlight} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{highlight}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                                </div>
                            ) : (
                                <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm shadow-slate-200/60">
                                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">No matches</p>
                                    <h4 className="mt-3 text-2xl font-semibold text-slate-950">Try a broader search</h4>
                                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">Clear one of the filters or search for a different category, area, or starting letter to continue browsing.</p>
                                </div>
                            )}
                        </div>
                </section>
                </div>
        </PublicTopicPage>
    );
}
