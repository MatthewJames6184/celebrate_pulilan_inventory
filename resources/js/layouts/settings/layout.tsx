import { cn } from '@/lib/utils';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';

const sidebarNavItems: NavItem[] = [
    { title: 'Profile', url: '/settings/profile', icon: null },
    { title: 'Password', url: '/settings/password', icon: null },
    { title: 'Appearance', url: '/settings/appearance', icon: null },
];

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
    const page = usePage();
    const currentPath = page.url;

    return (
        <div className="flex min-h-full flex-col gap-6 bg-[#f3f3f3] p-4 md:p-6">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Profile Settings</h1>
                <p className="mt-1 text-sm text-slate-500">Manage your account details and preferences.</p>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row">
                <aside className="w-full lg:w-64">
                    <nav className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
                        <div className="space-y-1">
                            {sidebarNavItems.map((item) => (
                                <Link
                                    key={item.url}
                                    href={item.url}
                                    prefetch
                                    className={cn(
                                        'block rounded-lg px-3 py-2 text-sm font-medium transition',
                                        currentPath === item.url ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                                    )}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </aside>

                <div className="flex-1 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">{children}</div>
            </div>
        </div>
    );
}
