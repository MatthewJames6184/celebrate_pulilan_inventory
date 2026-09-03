import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, ChevronLeft, LogOut, Menu, User } from 'lucide-react';
const navItems = [
    { title: 'Home', url: route('home') },
    {
        title: 'About Pulilan',
        // top-level overview intentionally present in data but will be rendered as non-clickable label
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

export default function PublicHeader() {
    const page = usePage<SharedData>();
    const currentUrl = page.url;
    const { auth } = page.props;
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
        <header className="sticky top-0 z-50 border-b-4 border-blue-500/40 bg-blue-950 text-white shadow-lg shadow-blue-950/10">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 md:px-6">
                <Link href={route('home')} className="flex items-center gap-3 text-white">
                    <span
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-300 bg-blue-800 text-xl shadow-inner shadow-blue-950/40"
                        aria-hidden="true"
                    >
                        P
                    </span>
                    <span className="leading-none">
                        <span className="block text-lg font-black tracking-tight">Discover Pulilan</span>
                        <span className="mt-1 block text-[9px] font-bold tracking-[0.2em] text-amber-300 uppercase">Municipal tourism portal</span>
                    </span>
                </Link>

                <div className="hidden items-center gap-6 md:flex">
                    {navItems.map((item) => (
                        <div key={item.title} className="group relative">
                            {/* Item has submenu - render as dropdown */}
                            {'submenu' in item && item.submenu ? (
                                <>
                                    <Link
                                        href={item.url}
                                        className={cn(
                                            'flex items-center gap-1 rounded-full px-3 py-1.5 transition hover:bg-white/10 active:scale-95',
                                            isItemActive(item.url) ? 'bg-white/10' : '',
                                        )}
                                    >
                                        <span
                                            className={cn(
                                                'relative py-1.5 text-sm transition duration-200 group-hover:-translate-y-0.5 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-sky-300 after:transition-transform after:duration-300 group-hover:after:scale-x-100',
                                                isItemActive(item.url) ? 'font-bold text-amber-100' : 'text-white/90',
                                            )}
                                        >
                                            {item.title}
                                        </span>
                                        <ChevronDown className="h-4 w-4 text-white/70 transition group-hover:rotate-180 group-hover:text-amber-200" />
                                    </Link>

                                    {/* Dropdown Menu */}
                                    <div className="absolute top-full left-0 hidden min-w-max rounded-md border border-blue-700 bg-blue-900 pt-2 shadow-lg group-hover:block">
                                        {item.submenu.map((subitem) => (
                                            <div key={subitem.title} className="group/sub relative">
                                                {/* Submenu item has nested submenu */}
                                                {'submenu' in subitem && subitem.submenu ? (
                                                    <>
                                                        <button className="flex w-full items-center justify-between px-4 py-2 text-left whitespace-nowrap text-white/90 transition hover:bg-blue-800 hover:text-amber-200">
                                                            <span>{subitem.title}</span>
                                                            <ChevronLeft className="h-4 w-4 rotate-180" />
                                                        </button>

                                                        {/* Nested Dropdown */}
                                                        <div className="absolute top-0 left-full hidden min-w-max rounded-md border border-blue-700 bg-blue-900 pt-0 pl-1 shadow-lg group-hover/sub:block">
                                                            {subitem.submenu.map((nestedItem) => (
                                                                <Link
                                                                    key={nestedItem.title}
                                                                    href={nestedItem.url}
                                                                    className={cn(
                                                                        'block px-4 py-2 whitespace-nowrap transition hover:bg-blue-800 hover:text-amber-200',
                                                                        isItemActive(nestedItem.url)
                                                                            ? 'font-semibold text-amber-100'
                                                                            : 'text-white/90',
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
                                                            'block px-4 py-2 whitespace-nowrap transition hover:bg-blue-800 hover:text-amber-200',
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
                                        'group/link relative text-sm transition duration-200 after:absolute after:right-0 after:-bottom-2 after:left-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-sky-300 after:transition-transform after:duration-300 hover:-translate-y-0.5 hover:text-amber-200 hover:after:scale-x-100 active:scale-95',
                                        isItemActive(item.url) ? 'font-semibold text-amber-100' : 'text-white/90',
                                        isItemActive(item.url) ? 'after:scale-x-100' : '',
                                    )}
                                >
                                    {item.title}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* <div className="hidden items-center gap-3 md:flex">
                    {authItems.map((item) => (
                        <Link key={item.title} href={item.url} className="rounded border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20">
                            {item.title}
                        </Link>
                    ))}
                </div> */}

                {/* This is an auth block */}
                <div className="hidden items-center md:flex">
                    {auth.user ? (
                        <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1">
                            <Link
                                href={route('profile.edit')}
                                className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-amber-100 transition hover:bg-white/10"
                            >
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400/20 text-amber-200">
                                    <User className="h-3.5 w-3.5" />
                                </span>
                                {auth.user.name}
                            </Link>
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                            >
                                <LogOut className="h-3.5 w-3.5" />
                                Logout
                            </Link>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link
                                href={route('login')}
                                className="rounded-full px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
                            >
                                Login
                            </Link>
                            <Link
                                href={route('register')}
                                className="rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-blue-950 shadow-sm transition hover:bg-amber-200 hover:shadow-md"
                            >
                                + Add your business
                            </Link>
                        </div>
                    )}
                </div>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-64 bg-blue-950 text-white">
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
                                                    'flex cursor-pointer items-center justify-between rounded-md px-4 py-3 text-base transition hover:bg-white/10',
                                                    isItemActive(item.url) ? 'bg-white/10 font-semibold' : 'bg-transparent',
                                                )}
                                            >
                                                <span>{item.title}</span>
                                                <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                                            </summary>
                                            <div className="mt-2 ml-4 flex flex-col gap-2 border-l border-white/10 pl-3">
                                                {item.submenu.map((subitem) => (
                                                    <div key={subitem.title}>
                                                        {/* Submenu item with nested items */}
                                                        {'submenu' in subitem && subitem.submenu ? (
                                                            <details className="group/sub">
                                                                <summary className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white">
                                                                    <span>{subitem.title}</span>
                                                                    <ChevronDown className="h-3 w-3 transition group-open/sub:rotate-180" />
                                                                </summary>
                                                                <div className="mt-2 ml-3 flex flex-col gap-2 border-l border-white/10 pl-2">
                                                                    {subitem.submenu.map((nestedItem) => (
                                                                        <Link
                                                                            key={nestedItem.title}
                                                                            href={nestedItem.url}
                                                                            className={cn(
                                                                                'rounded-md px-2 py-1.5 text-xs transition hover:bg-white/10 hover:text-white',
                                                                                isItemActive(nestedItem.url)
                                                                                    ? 'bg-white/10 text-white'
                                                                                    : 'text-white/70',
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
                                                isItemActive(item.url) ? 'bg-white/10 font-semibold' : 'text-yellow',
                                            )}
                                        >
                                            {item.title}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5">
                            {auth.user ? (
                                <>
                                    <div className="flex items-center gap-2 rounded-md px-4 py-2">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/20 text-amber-200">
                                            <User className="h-4 w-4" />
                                        </span>
                                        <p className="text-sm font-medium text-amber-100">{auth.user.name}</p>
                                    </div>
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-base text-white transition hover:bg-white/15"
                                    >
                                        <LogOut className="h-4 w-4" />
                                        Logout
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-center text-base text-white transition hover:bg-white/15"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md bg-amber-400 px-4 py-3 text-center text-base font-semibold text-emerald-900 shadow-sm transition hover:bg-amber-300"
                                    >
                                        + Add your business
                                    </Link>
                                </>
                            )}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="h-1.5 bg-[repeating-linear-gradient(110deg,#facc15_0_16px,#2563eb_16px_32px,#60a5fa_32px_48px)]" aria-hidden="true" />
        </header>
    );
}
