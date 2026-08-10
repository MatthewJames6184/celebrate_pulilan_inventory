import PublicTopicPage from '@/components/public-topic-page';

export default function History() {
    return (
        <PublicTopicPage
            headTitle="History of Pulilan"
            title="History of Pulilan"
            imageSubHeader={{ src: '/images/carousel-images/Historical.jpg', alt: 'history' }}
            breadcrumbs={[
                { label: 'Home', href: route('home') },
                { label: 'About Pulilan', href: route('about') },
                { label: 'History' },
            ]}
        >
        <section className="max-w-7xl mx-auto px-6 flex gap-10">
            {/* Main content */}
            <div className="flex flex-[3] mt-8 gap-6 flex-col">
                <img
                    src="/images/image-3.jpg"
                    alt="geography map of pulilan"
                    className="w-full h-auto object-cover rounded-3xl shadow-sm"
                />

                <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-slate-950">Town Roots</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                        Pulilan grew from an agricultural community shaped by fertile land, river systems, and long-standing local traditions
                        passed through generations.
                    </p>
                </article>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-[1] mt-8 flex-col gap-4 max-w-xs">
                <h3 className="text-base font-semibold text-slate-900">Related Pages</h3>

                <nav className="flex flex-col rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    
                </nav>
            </aside>
        </section>

        </PublicTopicPage>
    );
}