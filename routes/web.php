<?php

use App\Http\Controllers\Auth\AdminSessionController;
use App\Http\Controllers\BusinessApplicationController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\StayDineSubmissionController;
use App\Models\BusinessApplication;
use App\Models\StayDineSubmission;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::prefix('about')->name('about.')->controller(PageController::class)->group(function () {
    Route::get('/attraction', 'attraction')->name('attraction');
    Route::get('/history', 'history')->name('history');
    Route::get('/festivals', 'festivals')->name('festivals');
    Route::get('/{topic}/{slug}', 'detail')->name('detail');
});

Route::get('/stay-dine', [PageController::class, 'stayDine'])->name('stay.dine.index');
Route::get('/stay-dine/accommodations', [PageController::class, 'stayDineAccommodations'])->name('stay.dine.accommodations');
Route::get('/stay-dine/restaurants', [PageController::class, 'stayDineRestaurants'])->name('stay.dine.restaurants');
Route::middleware('auth')->group(function () {
    Route::get('/stay-dine/submit-listing', [StayDineSubmissionController::class, 'create'])->name('stay.dine.submit-listing');
    Route::post('/stay-dine/submit-listing', [StayDineSubmissionController::class, 'store'])->name('stay.dine.submit.store');
});
Route::get('/stay-dine/{type}/{slug}', [PageController::class, 'stayDineDetail'])
    ->whereIn('type', ['accommodation', 'restaurant'])
    ->name('stay.dine.detail');

Route::get('/contact', [PageController::class, 'contact'])->name('contact');

Route::get('/others', [PageController::class, 'others'])->name('others');
Route::prefix('others')->name('others.')->controller(PageController::class)->group(function () {
    Route::get('/downloads', 'othersDownloads')->name('downloads');
    Route::get('/faq', 'othersFaq')->name('faq');
    Route::get('/site-map', 'othersSiteMap')->name('site-map');
    Route::get('/announcements', 'othersAnnouncements')->name('announcements');
    Route::get('/calendar-of-events', 'othersCalendarOfEvents')->name('calendar-of-events');
    Route::get('/photo-gallery', 'othersPhotoGallery')->name('photo-gallery');
});

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        $user = request()->user();
        $application = $user->latestBusinessApplication()->with('stayDineSubmission')->first();

        return Inertia::render('dashboard', [
            'isBusiness' => $user->isBusiness(),
            'businessApplication' => $application ? [
                'id' => $application->id,
                'business_name' => $application->business_name,
                'business_type' => $application->business_type,
                'email' => $application->email,
                'status' => $application->status,
                'created_at' => $application->created_at?->format('M d, Y'),
                'listing_status' => $application->stayDineSubmission?->status,
            ] : null,
        ]);
    })->name('dashboard');

    Route::post('/business-applications', [BusinessApplicationController::class, 'store'])
        ->name('business-applications.store');
});

// for admin
Route::middleware('guest:admin')->group(function () {
    Route::get('/admin/login', [AdminSessionController::class, 'create'])->name('admin.login');
    Route::post('/admin/login', [AdminSessionController::class, 'store'])
        ->middleware('throttle:5,1')
        ->name('admin.login.store');
});

Route::middleware('auth:admin')->group(function () {
    Route::post('/admin/logout', [AdminSessionController::class, 'destroy'])->name('admin.logout');
});

Route::middleware(['auth:admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('admin/dashboard', [
            'pendingApplications' => BusinessApplication::where('status', 'pending')->count(),
            'pendingListings' => StayDineSubmission::where('status', 'pending')->count(),
        ]);
    })->name('admin.dashboard');
    Route::get('/business-applications', [BusinessApplicationController::class, 'index'])
        ->name('admin.business-applications');
    Route::patch('/business-applications/{businessApplication}', [BusinessApplicationController::class, 'review'])
        ->name('admin.business-applications.review');
    Route::get('/stay-dine-requests', [StayDineSubmissionController::class, 'index'])->name('admin.stay-dine-requests');
    Route::patch('/stay-dine-requests/{submission}', [StayDineSubmissionController::class, 'update'])->name('admin.stay-dine-request.update');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
