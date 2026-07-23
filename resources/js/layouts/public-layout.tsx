import PublicFooter from '@/components/public-footer';
import PublicHeader from '@/components/public-header';
import { type ReactNode, useMemo } from 'react';

const homepageBackgrounds = ['/images/image-1.jpg', '/images/image-2.jpg', '/images/image-3.jpg', '/images/image-4.jpg', '/images/image-5.jpg'];

interface PublicLayoutProps {
    children: ReactNode;
    headerTransparent?: boolean;
    backgroundImage?: string;
}

export default function PublicLayout({ children, headerTransparent = false, backgroundImage }: PublicLayoutProps) {
    const fallbackBackgroundImage = useMemo(() => {
        const index = Math.floor(Math.random() * homepageBackgrounds.length);
        const image = homepageBackgrounds[index];

        return `linear-gradient(rgba(8, 64, 52, 0.45), rgba(6, 39, 30, 0.45)), url('${image}')`;
    }, []);

    const pageBackgroundImage = backgroundImage ?? fallbackBackgroundImage;

    return (
        <div
            className="min-h-screen text-slate-900"
            style={{
                backgroundImage: pageBackgroundImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}
        >
            <PublicHeader transparent={headerTransparent} />
            <main className="mx-auto w-full">{children}</main>
            <PublicFooter />
        </div>
    );
}
