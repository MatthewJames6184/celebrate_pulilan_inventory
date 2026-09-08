import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, LogOut, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
    { title: 'Home', url: route('home') },
    { title: 'About', url: route('about') },
    { title: 'What to See', url: route('about.attraction') },
    { title: 'Festivals', url: route('about.festivals') },
    { title: 'History', url: route('about.history') },
    { title: 'News', url: route('news.archive') },
    { title: 'Contact', url: route('contact') },
];

function normalizePath(url: string): string {
    return (
        url
            .replace(/^https?:\/\/[^/]+/, '')
            .split('?')[0]
            .replace(/\/$/, '') || '/'
    );
}

export default function PublicHeader() {
    const page = usePage<SharedData>();
    const { auth } = page.props;
    const currentPath = normalizePath(page.url);
    const [scrolled, setScrolled] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    useEffect(() => {
        const updateHeader = () => {
            setScrolled(window.scrollY > 36 || document.documentElement.scrollTop > 36);
        };

        updateHeader();
        window.addEventListener('scroll', updateHeader, { passive: true });
        document.addEventListener('scroll', updateHeader, { passive: true });

        return () => {
            window.removeEventListener('scroll', updateHeader);
            document.removeEventListener('scroll', updateHeader);
        };
    }, [page.url]);

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 text-white transition-all duration-500',
                scrolled ? 'bg-[#4169E1]/95 shadow-[0_2px_40px_rgba(0,0,0,0.4)] backdrop-blur-md' : 'bg-transparent',
            )}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
                <Link href={route('home')} className="group flex items-center gap-3">
                    <span className="font-display flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#d4a853] to-[#c09040] text-sm leading-none font-bold text-[#0d1b2a] shadow-lg">
                        P
                    </span>
                    <span className="leading-none">
                        <span className="font-display block text-lg font-semibold tracking-tight transition-colors duration-200 group-hover:text-[#d4a853]">
                            Discover
                        </span>
                        <span className="font-display mt-1 block text-sm tracking-widest text-[#d4a853] uppercase italic">Pulilan</span>
                    </span>
                </Link>

                <nav className="hidden items-center gap-1 lg:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.url}
                            className={cn(
                                'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
                                currentPath === normalizePath(item.url)
                                    ? 'bg-[#d4a853]/20 text-[#d4a853]'
                                    : 'text-white hover:bg-white/5 hover:text-[#f5f0e8]',
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                    <div className="group relative">
                        <span
                            className={cn(
                                'flex cursor-default items-center gap-1 rounded-full px-4 py-2 text-sm font-medium',
                                currentPath.startsWith('/stay-dine') ? 'bg-[#d4a853]/20 text-[#d4a853]' : 'text-white',
                            )}
                        >
                            Stay &amp; Dine <ChevronDown className="h-3 w-3" />
                        </span>
                        <div className="invisible absolute top-7 left-0 min-w-44 rounded-xl border border-white/10 bg-[#4169E1]/70 p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                            <Link
                                href={route('stay.dine.accommodations')}
                                className="block rounded-lg px-3 py-2 text-xs text-white hover:bg-white/10 hover:text-white"
                            >
                                Accommodations
                            </Link>
                            <Link
                                href={route('stay.dine.restaurants')}
                                className="block rounded-lg px-3 py-2 text-xs text-white hover:bg-white/10 hover:text-white"
                            >
                                Restaurants
                            </Link>
                        </div>
                    </div>
                </nav>

                <div className="hidden items-center gap-3 lg:flex">
                    {auth.user ? (
                        <div className="relative">
                            <button onClick={() => setProfileOpen((open) => !open)} className="flex items-center gap-2 rounded-full px-3 py-2 text-xs text-white/80 transition hover:bg-white/10 hover:text-white">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2e54e8] text-sm font-bold text-white">{auth.user.name.charAt(0)}</span>
                                <span>{auth.user.name.split(' ')[0]}</span>
                                <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', profileOpen && 'rotate-180')} />
                            </button>
                            {profileOpen && (
                                <div className="absolute top-12 right-0 w-52 overflow-hidden rounded-2xl border border-white/10 bg-[#04091f] shadow-2xl">
                                    <div className="flex items-center gap-3 border-b border-white/5 p-4">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2e54e8] font-bold">{auth.user.name.charAt(0)}</span>
                                        <div><p className="text-sm font-semibold text-white">{auth.user.name}</p><p className="text-xs text-white/35">Visitor Account</p></div>
                                    </div>
                                    <Link href={route('dashboard')} className="block px-4 py-3 text-sm text-white/60 hover:bg-white/5 hover:text-white">⊞ &nbsp; Dashboard</Link>
                                    <Link href={route('dashboard')} className="block px-4 py-3 text-sm text-white/60 hover:bg-white/5 hover:text-white">🔖 &nbsp; My Saved Places</Link>
                                    <Link href={route('dashboard')} className="block px-4 py-3 text-sm text-white/60 hover:bg-white/5 hover:text-white">📅 &nbsp; My Itinerary</Link>
                                    <Link href={route('logout')} method="post" as="button" className="w-full border-t border-white/5 px-4 py-3 text-left text-sm text-red-400 hover:bg-red-500/10">Sign out</Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            href={route('login')}
                            className="rounded-full px-4 py-2 text-sm font-medium text-[#f5f0e8]/70 transition-all duration-200 hover:bg-white/5 hover:text-[#f5f0e8]"
                        >
                            Login
                        </Link>
                    )}
                    {auth.user ? (
                        <Link href={route('logout')} method="post" as="button" className="text-xs text-white/60 hover:text-white">
                            <LogOut className="h-3.5 w-3.5" />
                        </Link>
                    ) : (
                        <Link
                            href={route('register')}
                            className="ml-2 rounded-full bg-[#d4a853] px-5 py-2 text-sm font-semibold text-[#0d1b2a] shadow-lg shadow-[#d4a853]/20 transition-colors duration-200 hover:bg-[#e8b96a]"
                        >
                            + Add Business
                        </Link>
                    )}
                </div>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="border border-white/15 bg-white/5 text-white hover:bg-white/10 lg:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="border-white/10 bg-[#0b1f4d] text-white">
                        <SheetHeader>
                            <SheetTitle className="font-display text-white">Discover Pulilan</SheetTitle>
                        </SheetHeader>
                        <nav className="mt-8 flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className={cn(
                                        'rounded-lg px-3 py-3 text-sm hover:bg-white/10 hover:text-[#e5b955]',
                                        currentPath === normalizePath(item.url) ? 'bg-[#d4a853]/15 text-[#d4a853]' : 'text-white/80',
                                    )}
                                >
                                    {item.title}
                                </Link>
                            ))}
                            <Link
                                href={route('stay.dine.accommodations')}
                                className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-[#e5b955]"
                            >
                                Stay &amp; Dine · Accommodations
                            </Link>
                            <Link
                                href={route('stay.dine.restaurants')}
                                className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-[#e5b955]"
                            >
                                Stay &amp; Dine · Restaurants
                            </Link>
                            {!auth.user && (
                                <Link
                                    href={route('register')}
                                    className="mt-4 rounded-full bg-[#dcae4e] px-4 py-3 text-center text-sm font-semibold text-[#102033]"
                                >
                                    + Add Business
                                </Link>
                            )}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
