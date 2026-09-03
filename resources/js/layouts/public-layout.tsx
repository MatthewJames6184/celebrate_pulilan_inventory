import PublicFooter from '@/components/public-footer';
import PublicHeader from '@/components/public-header';
import { type ReactNode } from 'react';

interface PublicLayoutProps {
    children: ReactNode;
    headerTransparent?: boolean;
    backgroundImage?: string;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <PublicHeader />
            <main className="mx-auto w-full">{children}</main>
            <PublicFooter />
        </div>
    );
}
