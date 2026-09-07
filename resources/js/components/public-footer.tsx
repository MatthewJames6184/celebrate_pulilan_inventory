import { Link } from '@inertiajs/react';

export default function PublicFooter() {
    return (
        <footer className="border-t border-white/5 bg-[#06121f] text-white/55">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-[1.4fr_0.7fr_0.7fr] lg:px-10">
                <div>
                    <Link href={route('home')} className="flex items-center gap-3 text-white">
                        <span className="font-display flex h-10 w-10 items-center justify-center rounded-full bg-[#dcae4e] font-bold text-[#172554]">
                            P
                        </span>
                        <span>
                            <span className="font-display block text-sm">Discover</span>
                            <span className="font-display text-[10px] tracking-[0.16em] text-[#dcae4e] italic">PULILAN</span>
                        </span>
                    </Link>
                    <p className="mt-5 max-w-xs text-xs leading-6">
                        Pulilan, Bulacan — the Carabao Capital of the Philippines. A municipality rich in heritage, culture, and natural beauty in the
                        heart of Central Luzon.
                    </p>
                    <div className="mt-4 flex gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[10px]">f</span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[10px]">◎</span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[10px]">Yt</span>
                    </div>
                </div>
                <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#dcae4e] uppercase">Explore</p>
                    <div className="mt-4 grid gap-3 text-xs">
                        <Link href={route('about.attraction')} className="hover:text-white">
                            What to See
                        </Link>
                        <Link href={route('about.festivals')} className="hover:text-white">
                            Festivals
                        </Link>
                        <Link href={route('about.history')} className="hover:text-white">
                            History
                        </Link>
                        <Link href={route('about')} className="hover:text-white">
                            About Pulilan
                        </Link>
                    </div>
                </div>
                <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#dcae4e] uppercase">Visit</p>
                    <div className="mt-4 grid gap-3 text-xs">
                        <span>Pulilan, Bulacan</span>
                        <span>Philippines, 3005</span>
                        <span>info@pulilan.gov.ph</span>
                        <Link
                            href={route('contact')}
                            className="mt-1 w-fit rounded-full border border-[#dcae4e]/50 px-3 py-1.5 text-[#dcae4e] hover:bg-[#dcae4e] hover:text-[#172554]"
                        >
                            Contact Us →
                        </Link>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/5 px-6 py-4 text-center text-[10px] text-white/30">
                © 2026 Municipality of Pulilan, Bulacan. All rights reserved.
            </div>
        </footer>
    );
}
