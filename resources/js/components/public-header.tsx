import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Link, usePage } from '@inertiajs/react';
import { Menu, ChevronDown } from 'lucide-react';
import { type SharedData } from '@/types';
import { cn } from '@/lib/utils';

const navItems = [
    { title: 'Home', url: route('home') },
    {
        title: 'About Pulilan',
        url: route('about'),
        submenu: [
            { title: 'History', url: route('about.history') },
            {
                title: 'What to see',
                url: route('about'),
                submenu: [
                    { title: 'Cuisine', url: route('about.cuisine') },
                    { title: 'Festivals', url: route('about.festivals') },
                    { title: 'Heritage', url: route('about.heritage') },
                    { title: 'Historical', url: route('about.historical') },
                    { title: 'Local Products', url: route('about.local-products') },
                    { title: 'Map Location', url: route('about.map-location') },
                    { title: 'Religious', url: route('about.religious') },
                    { title: 'Resorts', url: route('about.resorts') },
                    { title: 'Shopping', url: route('about.shopping') },
                ],
            },
        ],
    },
    {
        title: 'Where to Stay and Dine',
        url: route('stay.dine'),
        submenu: [
            { title: 'Accommodation', url: route('stay.dine.accommodations') },
            { title: 'Restaurants', url: route('stay.dine.restaurants') },
        ],
    },
    { title: 'Contact Us', url: route('contact') },
    {
        title: 'Others',
        url: route('others'),
        submenu: [
            { title: 'Downloads', url: route('others.downloads') },
            { title: 'FAQ', url: route('others.faq') },
            { title: 'News', url: route('others.news') },
            { title: 'Site Map', url: route('others.site-map') },
            { title: 'Announcements', url: route('others.announcements') },
            { title: 'Calendar of Events', url: route('others.calendar-of-events') },
            { title: 'Photo Gallery', url: route('others.photo-gallery') },
        ],
    },
];

const authItems = [
    { title: 'Register', url: route('register') },
    { title: 'Login', url: route('login') },
];

interface PublicHeaderProps {
    // Removed transparent prop - header is now consistently dark
}

export default function PublicHeader({}: PublicHeaderProps) {
    const page = usePage<SharedData>();
    const currentUrl = page.url;
    const sectionMatchMap: Record<string, string> = {
        [route('about')]: '/about/',
        [route('stay.dine')]: '/stay-dine/',
        [route('others')]: '/others/',
    };

    const isItemActive = (url: string): boolean => {
        const sectionPrefix = sectionMatchMap[url];

        if (sectionPrefix) {
            return currentUrl === url || currentUrl.startsWith(sectionPrefix);
        }

        return currentUrl === url;
    };

    return (
        <header className="sticky top-0 z-50 border-b border-amber-400 bg-emerald-800 text-white">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 md:px-6">
                <Link href={route('home')} className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    <div className="flex h-11 w-11 items-center justify-center rounded border border-white/20 bg-white/10 text-lg font-black">P</div>
                    <div>
                        <p className="text-xs text-amber-200">Municipality of</p>
                        <p className="text-lg">Pulilan</p>
                    </div>
                </Link>

                <div className="hidden items-center gap-6 md:flex">
                    {navItems.map((item) => (
                        <div key={item.title} className="relative group">
                            {/* Item has submenu - render as dropdown */}
                            {'submenu' in item && item.submenu ? (
                                <>
                                    <div className="flex items-center gap-1">
                                        <Link
                                            href={item.url}
                                            className={cn(
                                                'text-sm transition duration-150 hover:text-amber-200',
                                                isItemActive(item.url) ? 'font-semibold text-amber-100' : 'text-white/90',
                                            )}
                                        >
                                            {item.title}
                                        </Link>
                                        <ChevronDown className="h-4 w-4 text-white/80" />
                                    </div>

                                    {/* Dropdown Menu */}
                                    <div className="absolute left-0 top-full pt-2 hidden group-hover:block bg-emerald-700 border border-emerald-600 rounded-md shadow-lg min-w-max">
                                        {item.submenu.map((subitem) => (
                                            <div key={subitem.title} className="relative group/sub">
                                                {/* Submenu item has nested submenu */}
                                                {'submenu' in subitem && subitem.submenu ? (
                                                    <>
                                                        <button className="w-full text-left px-4 py-2 text-white/90 hover:text-amber-200 hover:bg-emerald-600 transition flex items-center justify-between whitespace-nowrap">
                                                            <span>{subitem.title}</span>
                                                            <ChevronDown className="h-4 w-4 rotate-180" />
                                                        </button>

                                                        {/* Nested Dropdown */}
                                                        <div className="absolute left-full top-0 pt-0 pl-1 hidden group-hover/sub:block bg-emerald-700 border border-emerald-600 rounded-md shadow-lg min-w-max">
                                                            {subitem.submenu.map((nestedItem) => (
                                                                <Link
                                                                    key={nestedItem.title}
                                                                    href={nestedItem.url}
                                                                    className={cn(
                                                                        'block px-4 py-2 transition whitespace-nowrap hover:bg-emerald-600 hover:text-amber-200',
                                                                        isItemActive(nestedItem.url) ? 'font-semibold text-amber-100' : 'text-white/90',
                                                                    )}
                                                                >
                                                                    {nestedItem.title}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </>
                                                ) : (
                                                    /* Regular submenu item without nested menu */
                                                    <Link
                                                        href={subitem.url}
                                                            className={cn(
                                                                'block px-4 py-2 transition whitespace-nowrap hover:bg-emerald-600 hover:text-amber-200',
                                                                isItemActive(subitem.url) ? 'font-semibold text-amber-100' : 'text-white/90',
                                                            )}
                                                    >
                                                        {subitem.title}
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                /* Regular link without submenu */
                                <Link
                                    href={item.url}
                                    className={cn(
                                        'text-sm transition duration-150 hover:text-amber-200',
                                            isItemActive(item.url) ? 'font-semibold text-amber-100' : 'text-white/90',
                                    )}
                                >
                                    {item.title}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                <div className="hidden items-center gap-3 md:flex">
                    {authItems.map((item) => (
                        <Link key={item.title} href={item.url} className="rounded border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20">
                            {item.title}
                        </Link>
                    ))}
                </div>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="md:hidden rounded-full border border-white/20 bg-white/10 text-white">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-emerald-900 text-white w-64">
                        <SheetHeader>
                            <SheetTitle className="text-lg font-semibold text-white">Menu</SheetTitle>
                        </SheetHeader>
                        <nav className="mt-6 flex flex-col gap-3">
                            {navItems.map((item) => (
                                <div key={item.title}>
                                    {/* Item has submenu - render as expandable section */}
                                    {'submenu' in item && item.submenu ? (
                                        <details className="group">
                                            <summary
                                                className={cn(
                                                    'rounded-md px-4 py-3 text-base transition hover:bg-white/10 cursor-pointer flex items-center justify-between',
                                                    isItemActive(item.url) ? 'bg-white/10 font-semibold' : 'bg-transparent',
                                                )}
                                            >
                                                <span>{item.title}</span>
                                                <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                                            </summary>
                                            <div className="ml-4 mt-2 flex flex-col gap-2 border-l border-white/10 pl-3">
                                                <Link
                                                    href={item.url}
                                                    className={cn(
                                                        'rounded-md px-3 py-2 text-sm transition hover:bg-white/10',
                                                        isItemActive(item.url) ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white',
                                                    )}
                                                >
                                                    Overview
                                                </Link>
                                                {item.submenu.map((subitem) => (
                                                    <div key={subitem.title}>
                                                        {/* Submenu item with nested items */}
                                                        {'submenu' in subitem && subitem.submenu ? (
                                                            <details className="group/sub">
                                                                <summary className="rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition cursor-pointer flex items-center justify-between">
                                                                    <span>{subitem.title}</span>
                                                                    <ChevronDown className="h-3 w-3 transition group-open/sub:rotate-180" />
                                                                </summary>
                                                                <div className="ml-3 mt-2 flex flex-col gap-2 border-l border-white/10 pl-2">
                                                                    {subitem.submenu.map((nestedItem) => (
                                                                        <Link
                                                                            key={nestedItem.title}
                                                                            href={nestedItem.url}
                                                                            className={cn(
                                                                                'rounded-md px-2 py-1.5 text-xs transition hover:bg-white/10 hover:text-white',
                                                                                isItemActive(nestedItem.url) ? 'bg-white/10 text-white' : 'text-white/70',
                                                                            )}
                                                                        >
                                                                            {nestedItem.title}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </details>
                                                        ) : (
                                                            /* Regular submenu item */
                                                            <Link
                                                                href={subitem.url}
                                                                className={cn(
                                                                    'rounded-md px-3 py-2 text-sm transition hover:bg-white/10 hover:text-white',
                                                                    isItemActive(subitem.url) ? 'bg-white/10 text-white' : 'text-white/80',
                                                                )}
                                                            >
                                                                {subitem.title}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </details>
                                    ) : (
                                        /* Regular link without submenu */
                                        <Link
                                            href={item.url}
                                            className={cn(
                                                'rounded-md px-4 py-3 text-base transition hover:bg-white/10',
                                                isItemActive(item.url) ? 'bg-white/10 font-semibold' : 'bg-transparent',
                                            )}
                                        >
                                            {item.title}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5">
                            {authItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className="rounded-md border border-white/20 bg-white/10 px-4 py-3 text-base text-white transition hover:bg-white/20"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
