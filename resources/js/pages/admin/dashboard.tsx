import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Bell, CheckCircle2, CircleDashed, FileText, Newspaper, Plus, Sparkles, TrendingUp, Users } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Dashboard', href: '/admin/dashboard' }];

const stats = [
    { title: 'News', value: '24', label: 'Published', tone: 'bg-slate-100 text-slate-700' },
    { title: 'Events', value: '12', label: 'Upcoming', tone: 'bg-amber-100 text-amber-700' },
    { title: 'Places', value: '36', label: 'Listed', tone: 'bg-emerald-100 text-emerald-700' },
];

const recentActivity = [
    { text: 'Added "Pulilan Carabao Festival"', when: 'Today' },
    { text: 'Updated tourism information', when: 'Today' },
    { text: 'Published new local product', when: 'Yesterday' },
];

const quickActions = ['+ Add News', '+ Add Event', '+ Add Place'];

export default function AdminDashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin Dashboard" />

            <div className="flex min-h-full flex-col gap-6 bg-[#f3f3f3] p-4 md:p-6">
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Dashboard</h1>
                        <p className="mt-1 text-sm text-slate-500">Welcome back, Admin!</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 shadow-sm">
                            <Bell className="h-4 w-4" />
                        </button>
                        <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-2 py-1.5 shadow-sm">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">A</div>
                            <span className="text-sm font-medium text-slate-700">Admin</span>
                        </div>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {stats.map(({ title, value, label, tone }) => (
                        <div key={title} className="rounded-lg border border-dashed border-slate-300 bg-white p-4 shadow-sm">
                            <div className="flex items-center justify-between gap-3">
                                <div className="text-base font-medium text-slate-700">{title}</div>
                                <div className={`rounded-md px-2 py-1 text-xs font-medium ${tone}`}>{label}</div>
                            </div>
                            <div className="mt-5 text-3xl font-bold text-slate-900">{value}</div>
                        </div>
                    ))}
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="mb-4 flex items-center gap-2 text-slate-700">
                        <FileText className="h-4 w-4" />
                        <h2 className="text-lg font-semibold">Recent Activity</h2>
                    </div>

                    <div className="space-y-3">
                        {recentActivity.map(({ text, when }) => (
                            <div key={text} className="flex items-center justify-between gap-4 border-t border-slate-200 py-3 first:border-t-0 first:pt-0">
                                <div className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-slate-900" />
                                    <span className="text-sm text-slate-700">{text}</span>
                                </div>
                                <span className="text-xs text-slate-500">{when}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="mb-4 flex items-center gap-2 text-slate-700">
                        <Sparkles className="h-4 w-4" />
                        <h2 className="text-lg font-semibold">Quick Actions</h2>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {quickActions.map((action) => (
                            <button
                                key={action}
                                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                            >
                                <Plus className="h-4 w-4" />
                                {action}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
