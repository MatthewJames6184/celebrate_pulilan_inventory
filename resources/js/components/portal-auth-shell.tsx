import { Link } from '@inertiajs/react';
import { ArrowLeft, Building2, CalendarDays, Landmark, Map } from 'lucide-react';
import { type ReactNode } from 'react';

interface PortalAuthShellProps {
    children: ReactNode;
    mode: 'login' | 'register';
}

export default function PortalAuthShell({ children, mode }: PortalAuthShellProps) {
    return (
        <div className="min-h-screen bg-[#123b8f] font-sans text-[#f5f0e8]">
            <div className="grid min-h-screen lg:grid-cols-[52%_48%]">
                <section className="relative hidden min-h-screen overflow-hidden px-14 py-14 lg:flex lg:flex-col">
                    <img
                        src="/images/carousel-images/Religious.jpg"
                        alt="San Isidro Parish Church, Pulilan"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,59,143,0.88),rgba(28,79,163,0.76)),linear-gradient(0deg,rgba(18,59,143,0.55),transparent_65%)]" />
                    <div
                        className="absolute top-10 right-10 h-40 w-40 opacity-20"
                        style={{ backgroundImage: 'radial-gradient(#d4a853 2px, transparent 2px)', backgroundSize: '18px 18px' }}
                    />
                    <div className="relative z-10 flex items-start">
                        <Link href={route('home')} className="group flex items-start gap-3">
                            <span className="font-display flex h-11 w-11 items-center justify-center rounded-full bg-[#d4a853] text-lg font-semibold text-[#0d1b2a]">
                                P
                            </span>
                            <span className="leading-none">
                                <span className="font-display block text-lg font-semibold">Discover</span>
                                <span className="font-display mt-1 block text-xs tracking-[0.28em] text-[#d4a853] italic">PULILAN</span>
                                <span className="mt-2 block border-t border-[#d4a853] pt-1 text-[11px] tracking-[0.12em] text-[#d4a853]">
                                    MUNICIPAL TOURISM PORTAL
                                </span>
                            </span>
                        </Link>
                    </div>
                    <div className="relative z-10 mt-9 max-w-[448px]">
                        <p className="text-xs font-medium tracking-[0.16em] text-[#d4a853]">MUNICIPAL TOURISM PORTAL</p>
                        <h2 className="font-display mt-6 text-5xl leading-[1.25] font-semibold tracking-tight">
                            Your gateway to <em className="text-[#d4a853]">Pulilan's</em> finest experiences.
                        </h2>
                        <p className="mt-7 text-sm leading-6 text-white/65">
                            Join our community portal to plan visits, discover heritage sites, stay updated on festivals, and connect with local
                            businesses across all 18 barangays of Pulilan.
                        </p>
                        <div className="mt-8 grid gap-4 text-sm text-white/65">
                            <p className="flex items-center gap-4">
                                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/10">
                                    <Map className="h-4 w-4" />
                                </span>
                                Explore 18 barangays and local landmarks
                            </p>
                            <p className="flex items-center gap-4">
                                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/10">
                                    <CalendarDays className="h-4 w-4" />
                                </span>
                                Stay updated on festivals and community events
                            </p>
                            <p className="flex items-center gap-4">
                                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/10">
                                    <Landmark className="h-4 w-4" />
                                </span>
                                Discover heritage, cuisine, and local products
                            </p>
                            <p className="flex items-center gap-4">
                                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/10">
                                    <Building2 className="h-4 w-4" />
                                </span>
                                List your business for thousands of visitors
                            </p>
                        </div>
                        <div className="mt-8 flex gap-10 border-t border-white/15 pt-5">
                            <span>
                                <b className="font-display block text-xl text-white">18</b>
                                <small className="text-xs text-white/55">Barangays</small>
                            </span>
                            <span>
                                <b className="font-display block text-xl text-white">100K+</b>
                                <small className="text-xs text-white/55">Residents</small>
                            </span>
                            <span>
                                <b className="font-display block text-xl text-white">300+</b>
                                <small className="text-xs text-white/55">Yrs of History</small>
                            </span>
                        </div>
                    </div>
                </section>
                <section className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-10 lg:px-14">
                    <div className="w-full max-w-[448px]">
                        <Link href={route('home')} className="mb-8 inline-flex items-center gap-2 text-xs text-white/45 hover:text-white lg:hidden">
                            <ArrowLeft className="h-3.5 w-3.5" /> Back to home
                        </Link>
                        <div className="mb-8 flex rounded-2xl border border-white/10 bg-[#173f82] p-1.5">
                            <Link
                                href={route('login')}
                                className={`flex h-10 flex-1 items-center justify-center rounded-xl text-sm font-semibold transition ${mode === 'login' ? 'bg-[#d4a853] text-[#0d1b2a]' : 'text-white/40 hover:text-white'}`}
                            >
                                Sign In
                            </Link>
                            <Link
                                href={route('register')}
                                className={`flex h-10 flex-1 items-center justify-center rounded-xl text-sm font-semibold transition ${mode === 'register' ? 'bg-[#d4a853] text-[#0d1b2a]' : 'text-white/40 hover:text-white'}`}
                            >
                                Create Account
                            </Link>
                        </div>
                        {children}
                        <p className="mt-8 text-center text-[11px] text-white/35">Republic of the Philippines · Municipality of Pulilan, Bulacan</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
