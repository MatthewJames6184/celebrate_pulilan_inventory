import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { FileText, Grid2x2, LayoutGrid, Newspaper, Settings, UserRound, Users } from 'lucide-react';
import AppLogo from './app-logo';

const userNavItems: NavItem[] = [
    { title: 'Dashboard', url: '/dashboard', icon: LayoutGrid },
    { title: 'Profile', url: '/settings/profile', icon: UserRound },
    { title: 'Settings', url: '/settings/password', icon: Settings },
];

const adminNavItems: NavItem[] = [
    { title: 'Dashboard', url: '/admin/dashboard', icon: LayoutGrid },
    { title: 'Content', url: '/admin/dashboard', icon: FileText },
    { title: 'News', url: '/admin/dashboard', icon: Newspaper },
    { title: 'Events', url: '/admin/dashboard', icon: Grid2x2 },
    { title: 'Users', url: '/admin/dashboard', icon: Users },
    { title: 'Settings', url: '/settings/profile', icon: Settings },
];

export function AppSidebar() {
    const page = usePage();
    const isAdmin = page.url.startsWith('/admin');
    const items = isAdmin ? adminNavItems : userNavItems;

    return (
        <Sidebar collapsible="icon" variant="inset" className="border-r border-slate-200 bg-[#f3f3f3]">
            <SidebarHeader className="border-b border-slate-200 bg-[#f3f3f3]">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={isAdmin ? '/admin/dashboard' : '/dashboard'} prefetch className="px-2">
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="bg-[#f3f3f3] px-2 py-4">
                <SidebarMenu>
                    {items.map((item) => {
                        const Icon = item.icon;
                        const active = page.url === item.url || (item.url === '/dashboard' && page.url.startsWith('/settings'));

                        return (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild isActive={active} tooltip={item.title} className="justify-start">
                                    <Link href={item.url} prefetch>
                                        {Icon && <Icon className="h-4 w-4" />}
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarContent>

            <SidebarFooter className="border-t border-slate-200 bg-[#f3f3f3] p-2">
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
