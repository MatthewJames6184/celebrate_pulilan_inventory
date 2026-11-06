<?php

namespace App\Http\Controllers;

use App\Models\StayDineSubmission;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('home');
    }

    public function about(): Response
    {
        return Inertia::render('about');
    }

    public function attraction(): Response
    {
        return Inertia::render('about/attraction');
    }

    public function history(): Response
    {
        return Inertia::render('about/history');
    }

    public function festivals(): Response
    {
        return Inertia::render('about/festivals');
    }

    public function detail(string $topic, string $slug): Response
    {
        return Inertia::render('about/detail', [
            'topic' => $topic,
            'slug' => $slug,
        ]);
    }

    public function stayDine(): Response
    {
        return Inertia::render('stay-dine');
    }

    public function stayDineSubmitListing(): Response
    {
        return Inertia::render('stay-dine/submit-listing', [
            'types' => ['accommodation', 'restaurant'],
        ]);
    }

    public function stayDineAccommodations(): Response
    {
        return Inertia::render('stay-dine/accommodations', [
            'approvedListings' => $this->approvedListingsFor('accommodation'),
        ]);
    }

    public function stayDineRestaurants(): Response
    {
        return Inertia::render('stay-dine/restaurants', [
            'approvedListings' => $this->approvedListingsFor('restaurant'),
        ]);
    }

    protected function approvedListingsFor(string $type): array
    {
        if (! Schema::hasTable('stay_dine_submissions')) {
            return [];
        }

        return StayDineSubmission::query()
            ->where('status', 'approved')
            ->where('type', $type)
            ->orderBy('name')
            ->get()
            ->map(fn (StayDineSubmission $submission) => [
                'name' => $submission->name,
                'category' => $submission->category ?? 'Listing',
                'area' => $submission->area ?? 'Pulilan',
                'address' => $submission->address ?? 'Pulilan, Bulacan',
                'summary' => $submission->description ?? 'A local listing approved for the Pulilan Stay & Dine directory.',
                'highlights' => [
                    $submission->category ? $submission->category : 'Approved listing',
                    $submission->area ?? 'Pulilan',
                    'Verified listing',
                ],
                'featured' => false,
                'image' => $type === 'restaurant'
                    ? '/images/carousel-images/Cuisine.jpg'
                    : '/images/other-images/stay-dine-resort.jpg',
            ])->all();
    }

    public function stayDineDetail(string $type, string $slug): Response
    {
        // Server-side can later resolve the real listing by type+slug from DB.
        // For now return the type and slug so the page can render details and map by address.
        return Inertia::render('stay-dine/detail', [
            'type' => $type,
            'slug' => $slug,
        ]);
    }

    public function contact(): Response
    {
        return Inertia::render('contact');
    }

    public function others(): Response
    {
        return Inertia::render('others');
    }

    public function othersDownloads(): Response
    {
        return Inertia::render('others/downloads');
    }

    public function othersFaq(): Response
    {
        return Inertia::render('others/faq');
    }

    public function othersSiteMap(): Response
    {
        return Inertia::render('others/site-map');
    }

    public function othersAnnouncements(): Response
    {
        return Inertia::render('others/announcements');
    }

    public function othersCalendarOfEvents(): Response
    {
        return Inertia::render('others/calendar-of-events');
    }

    public function othersPhotoGallery(): Response
    {
        return Inertia::render('others/photo-gallery');
    }
}
