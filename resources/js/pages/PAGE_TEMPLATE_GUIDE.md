# Creating New Pages in Celebrate Pulilan

This guide explains how to create new pages following the existing design patterns in this project.

## Quick Summary

A typical public-facing page in this project consists of:
1. A React component file in `resources/js/pages/`
2. A route definition in `routes/web.php`
3. A controller method in `app/Http/Controllers/PageController.php`

---

## Step-by-Step Guide

### Step 1: Create the Page Component

Create a new file in `resources/js/pages/` with a descriptive name (e.g., `attractions.tsx`, `dining.tsx`).

Here's the basic template structure:

```tsx
// resources/js/pages/your-page-name.tsx

import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';

// Define the data/sections your page will display
const pageData = [
    {
        title: 'Section Title 1',
        description: 'A brief description or introduction text for this section.',
        // Optional: add items array for list-style sections
        items: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
        title: 'Section Title 2',
        description: 'Another section with different content.',
    },
];

export default function PageName() {
    return (
        <PublicLayout>
            {/* Head component sets the page title shown in browser tab and SEO */}
            <Head title="Page Title Here" />

            {/* Main container section with consistent styling */}
            <section className="space-y-6 rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm shadow-slate-200/80 md:p-10">
                {/* Header section */}
                <div className="space-y-3">
                    {/* Small label above title - use emerald color for consistency */}
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Page Category Label</p>
                    
                    {/* Main page title */}
                    <h1 className="text-4xl font-semibold text-slate-950">Main Page Title</h1>
                    
                    {/* Introductory text */}
                    <p className="max-w-3xl text-base leading-8 text-slate-600">
                        An introductory paragraph that explains what visitors can find on this page.
                        Keep this concise but informative.
                    </p>
                </div>

                {/* Content grid - adjust columns as needed for your content */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {pageData.map((item) => (
                        <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
                            
                            {/* Description text */}
                            {item.description && (
                                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                            )}
                            
                            {/* Items list - renders as bullet points */}
                            {item.items && (
                                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                                    {item.items.map((listItem) => (
                                        <li key={listItem} className="flex items-center gap-3">
                                            {/* Green dot bullet point */}
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
```

---

### Step 2: Design Your Content Structure

**For simple card/grid layouts:**
- Use `grid gap-5 md:grid-cols-2 lg:grid-cols-3` in the outer div
- Each card gets: `rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm`

**For sections with description + items list:**
- Include `item.description` for text
- Include `item.items` array for bullet-point lists
- Each bullet uses the emerald-700 dot

**Color Scheme (keep consistent):**
- Primary: `emerald-700`, `emerald-800`, `emerald-900`
- Text: `slate-950` (dark), `slate-600` (medium), `slate-200` (light borders)
- Accents: `amber-400`, `amber-200` (hover states)
- Backgrounds: `bg-slate-50` (card backgrounds), `bg-white` (main)

---

### Step 3: Add the Route

Edit `routes/web.php` and add:

```php
Route::get('/your-page-url', [PageController::class, 'methodName'])->name('route.name');
```

Example:
```php
Route::get('/attractions', [PageController::class, 'attractions'])->name('attractions');
```

**Important:** The route name (e.g., `attractions`) is used in navigation and can be referenced with `route('attractions')` throughout the app.

---

### Step 4: Create the Controller Method

Edit `app/Http/Controllers/PageController.php` and add a new method:

```php
/**
 * Display the Attractions page
 *
 * @return Response
 */
public function attractions()
{
    return Inertia::render('attractions');
}
```

The method should:
- Be named the same as the method name in the route
- Return `Inertia::render('page-name')` where `page-name` matches your `.tsx` filename
- Include a PHPDoc comment describing what it does

---

### Step 5: Update Navigation (Optional)

If you want to add the page to the header navigation:

Edit `resources/js/components/public-header.tsx` and update the `navItems` array:

**For a simple link:**
```typescript
{ title: 'Attractions', url: route('attractions') },
```

**For a dropdown menu:**
```typescript
{
    title: 'Attractions & Events',
    url: route('attractions'),
    submenu: [
        { title: 'Historical Sites', url: route('attractions') },
        { title: 'Festivals', url: route('attractions') },
        { title: 'Nature Reserves', url: route('attractions') },
    ],
},
```

---

## Component Examples

### Example 1: Simple Content Page

```tsx
const sections = [
    {
        title: 'Feature 1',
        description: 'Describe this feature.',
    },
    {
        title: 'Feature 2',
        description: 'Describe this feature.',
    },
];

export default function MyPage() {
    return (
        <PublicLayout>
            <Head title="My Page" />
            <section className="space-y-6 rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm shadow-slate-200/80 md:p-10">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Category</p>
                    <h1 className="text-4xl font-semibold text-slate-950">Page Title</h1>
                    <p className="max-w-3xl text-base leading-8 text-slate-600">Introduction text here.</p>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                    {sections.map((section) => (
                        <div key={section.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                            <h2 className="text-xl font-semibold text-slate-950">{section.title}</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{section.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </PublicLayout>
    );
}
```

### Example 2: Page with Lists

```tsx
const items = [
    { title: 'Item Name', description: 'Brief description.' },
    { title: 'Item Name', description: 'Brief description.' },
];

export default function ListPage() {
    return (
        <PublicLayout>
            <Head title="Items" />
            <section className="space-y-6 rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm shadow-slate-200/80 md:p-10">
                <div className="space-y-3">
                    <h1 className="text-4xl font-semibold text-slate-950">All Items</h1>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </PublicLayout>
    );
}
```

---

## Common Tailwind Classes Used

| Element | Classes |
|---------|---------|
| Main Container | `space-y-6 rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm shadow-slate-200/80 md:p-10` |
| Card | `rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm` |
| Card Title | `text-xl font-semibold text-slate-950` |
| Description Text | `text-sm leading-7 text-slate-600` |
| Grid (2 cols) | `grid gap-5 md:grid-cols-2` |
| Grid (3 cols) | `grid gap-5 sm:grid-cols-2 lg:grid-cols-3` |
| Category Label | `text-sm uppercase tracking-[0.3em] text-emerald-700` |
| Main Title | `text-4xl font-semibold text-slate-950` |
| Bullet Point | `inline-flex h-2.5 w-2.5 rounded-full bg-emerald-700` |

---

## Tips & Best Practices

1. **Keep it Consistent** - Use the same color palette and spacing as existing pages
2. **Data Structure** - Define your content data at the top of the component, before the JSX
3. **Responsive Design** - Use `md:` and `lg:` prefixes for responsive layouts
4. **Semantic HTML** - Use `<article>`, `<section>`, `<h2>` tags appropriately
5. **Spacing** - Use `space-y-*` classes for vertical spacing between elements
6. **Icons** - Import from `lucide-react` if you need icons (already used in the project)
7. **Links** - Use `Link` from `@inertiajs/react` for internal links

---

## Example: Creating a "Festivals" Page

### File: `resources/js/pages/festivals.tsx`

```tsx
import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';

const festivals = [
    {
        title: 'Santo Niño Fiesta',
        description: 'An annual celebration honoring the Holy Child Jesus with processions, concerts, and community gatherings.',
        items: ['January', 'Family events', 'Local food', 'Religious services'],
    },
    {
        title: 'Pulilan Day',
        description: 'Celebrates the town's founding and cultural heritage with street parties and cultural performances.',
        items: ['Founded 1574', 'Parade floats', 'Live bands', 'Night market'],
    },
];

export default function Festivals() {
    return (
        <PublicLayout>
            <Head title="Festivals & Celebrations" />

            <section className="space-y-6 rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm shadow-slate-200/80 md:p-10">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Cultural Events</p>
                    <h1 className="text-4xl font-semibold text-slate-950">Festivals & Celebrations</h1>
                    <p className="max-w-3xl text-base leading-8 text-slate-600">
                        Experience Pulilan's vibrant festivals and cultural celebrations that showcase the community's traditions and spirit.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {festivals.map((festival) => (
                        <div key={festival.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                            <h2 className="text-xl font-semibold text-slate-950">{festival.title}</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{festival.description}</p>
                            {festival.items && (
                                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                                    {festival.items.map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-700" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </PublicLayout>
    );
}
```

### File: `routes/web.php` (add this line)

```php
Route::get('/festivals', [PageController::class, 'festivals'])->name('festivals');
```

### File: `app/Http/Controllers/PageController.php` (add this method)

```php
/**
 * Display the Festivals page
 *
 * @return Response
 */
public function festivals()
{
    return Inertia::render('festivals');
}
```

---

## Need Help?

- Check existing pages like [about.tsx](./about.tsx), [others.tsx](./others.tsx), or [stay-dine.tsx](./stay-dine.tsx) for reference
- Review [public-layout.tsx](../layouts/public-layout.tsx) to see the layout structure
- Check Tailwind CSS documentation for styling: https://tailwindcss.com/docs
- This project uses Inertia.js v2 with React: https://inertiajs.com/
