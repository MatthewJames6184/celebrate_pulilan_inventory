import StayDineDirectoryPage, { type DirectoryItem } from '@/components/stay-dine-directory';
import { restaurantsSeed } from '@/lib/stay-dine-listings';
import { usePage } from '@inertiajs/react';

export default function StayDineRestaurants() {
    const { approvedListings = [] } = usePage<{ approvedListings?: DirectoryItem[] }>().props;
    const restaurantList = [...approvedListings, ...restaurantsSeed];

    return (
        <StayDineDirectoryPage
            headTitle="Restaurants in Pulilan"
            eyebrow="Where to Stay and Dine"
            title="Restaurants in Pulilan"
            intro="Search by name, narrow by food type, and browse the alphabet when you already know the restaurant you want."
            imageSubHeader={{ src: '/images/carousel-images/Cuisine.jpg', alt: 'Pulilan restaurant and food stops' }}
            breadcrumbs={[
                { label: 'Where to Stay and Dine' },
                { label: 'Restaurants' },
            ]}
            stats={[
                { value: String(restaurantList.length), label: 'Directory listings' },
                { value: '5', label: 'Dining categories' },
                { value: '19', label: 'Barangays in Pulilan' },
            ]}
            items={restaurantList}
            type="restaurants"
            defaultView="grid"
            focusLabel="Food guide"
            focusNote="This layout keeps the archive easy to scan while still giving visitors the search, category, and alphabet tools they need to find a place fast."
        />
    );
}