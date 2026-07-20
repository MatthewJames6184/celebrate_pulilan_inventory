/**
 * NEW PAGE TEMPLATE - Copy this file to create a new page
 *
 * INSTRUCTIONS:
 * 1. Copy this entire file
 * 2. Create a new file in resources/js/pages/ with your desired name (e.g., attractions.tsx)
 * 3. Replace the placeholder text marked with [EDIT] below
 * 4. Add the route to routes/web.php
 * 5. Add the controller method to app/Http/Controllers/PageController.php
 * 6. (Optional) Add navigation item to resources/js/components/public-header.tsx
 *
 * KEY POINTS:
 * - Component name should match the filename (without .tsx)
 * - Keep the data structure at the top for easy content updates
 * - Use consistent Tailwind classes as shown below
 * - All colors should use emerald/slate palette
 */

import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';

// [EDIT] Define your page content/sections here
// Each item in the array becomes a card in the grid
const pageContent = [
    {
        title: '[EDIT] Section Title 1',
        description: '[EDIT] Write a description or introduction for this section.',
        // Optional: items array for bullet-point lists
        items: ['[EDIT] Item 1', '[EDIT] Item 2', '[EDIT] Item 3'],
    },
    {
        title: '[EDIT] Section Title 2',
        description: '[EDIT] Another section with different content.',
        // This section has no items, just a description
    },
    {
        title: '[EDIT] Section Title 3',
        description: '[EDIT] A third example section.',
        items: ['[EDIT] Feature A', '[EDIT] Feature B'],
    },
];

/**
 * [EDIT] Change the function name to match your page name
 * Example: if filename is attractions.tsx → function Attractions()
 */
export default function TemplatePage() {
    return (
        <PublicLayout>
            {/* [EDIT] Set the page title shown in browser tab and SEO */}
            <Head title="[EDIT] Page Title" />

            {/* Main container - keep styling consistent across all pages */}
            <section className="space-y-6 rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm shadow-slate-200/80 md:p-10">
                {/* Header section */}
                <div className="space-y-3">
                    {/* [EDIT] Category label - appears above main title */}
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">[EDIT] Page Category</p>

                    {/* [EDIT] Main page heading */}
                    <h1 className="text-4xl font-semibold text-slate-950">[EDIT] Main Page Title</h1>

                    {/* [EDIT] Introductory paragraph - explains what's on the page */}
                    <p className="max-w-3xl text-base leading-8 text-slate-600">
                        [EDIT] Write an engaging introduction that explains what visitors can find on this page. Keep it
                        concise but informative to encourage exploration.
                    </p>
                </div>

                {/* Content grid - displays all cards/sections */}
                {/* 
                    [EDIT] Grid layout options:
                    - md:grid-cols-2          → 2 columns on medium screens and up
                    - md:grid-cols-2 lg:grid-cols-3  → 2 columns medium, 3 columns large
                    - sm:grid-cols-2 lg:grid-cols-3  → 2 columns small, 3 columns large
                    - md:grid-cols-1          → Always single column, wide cards
                */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {pageContent.map((item) => (
                        <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            {/* Card title */}
                            <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>

                            {/* Description text - shown if provided */}
                            {item.description && <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>}

                            {/* Bullet-point list - shown if items array exists */}
                            {item.items && (
                                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                                    {item.items.map((listItem) => (
                                        <li key={listItem} className="flex items-center gap-3">
                                            {/* Green dot bullet point - consistent across site */}
                                            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-700" />
                                            {listItem}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </article>
                    ))}
                </div>
            </section>
        </PublicLayout>
    );
}

/**
 * NEXT STEPS:
 *
 * 1. Add route to routes/web.php:
 *    Route::get('/your-page-url', [PageController::class, 'methodName'])->name('route.name');
 *
 *    Example:
 *    Route::get('/attractions', [PageController::class, 'attractions'])->name('attractions');
 *
 *
 * 2. Add controller method to app/Http/Controllers/PageController.php:
 *
 *    public function methodName()
 *    {
 *        return Inertia::render('PageName');
 *    }
 *
 *    Example:
 *    public function attractions()
 *    {
 *        return Inertia::render('attractions');
 *    }
 *
 *
 * 3. (Optional) Add to navigation in resources/js/components/public-header.tsx:
 *
 *    For simple link:
 *    { title: 'Page Title', url: route('route.name') },
 *
 *    For dropdown menu:
 *    {
 *        title: 'Page Title',
 *        url: route('route.name'),
 *        submenu: [
 *            { title: 'Sub-option 1', url: route('route.name') },
 *            { title: 'Sub-option 2', url: route('route.name') },
 *        ],
 *    },
 */
