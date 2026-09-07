<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PageController;
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
Route::prefix('stay-dine')->name('stay.dine.')->controller(PageController::class)->group(function () {
    Route::get('/accommodations', 'stayDineAccommodations')->name('accommodations');
    Route::get('/restaurants', 'stayDineRestaurants')->name('restaurants');
    // detail route for individual stay/dine listings
    Route::get('/{type}/{slug}', 'stayDineDetail')->name('detail');
});
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::get('/news', [PageController::class, 'newsArchive'])->name('news.archive');
Route::get('/news/{slug}', [PageController::class, 'newsShow'])->name('news.show');

Route::get('/others', [PageController::class, 'others'])->name('others');
Route::prefix('others')->name('others.')->controller(PageController::class)->group(function () {
    Route::get('/downloads', 'othersDownloads')->name('downloads');
    Route::get('/faq', 'othersFaq')->name('faq');
    Route::get('/news', 'othersNews')->name('news');
    Route::get('/site-map', 'othersSiteMap')->name('site-map');
    Route::get('/announcements', 'othersAnnouncements')->name('announcements');
    Route::get('/calendar-of-events', 'othersCalendarOfEvents')->name('calendar-of-events');
    Route::get('/photo-gallery', 'othersPhotoGallery')->name('photo-gallery');
});

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// for admin
Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('admin/dashboard');
    })->name('admin.dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
