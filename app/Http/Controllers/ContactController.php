<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function store(ContactRequest $request)
    {
        $validated = $request->validated();

        Log::info('Contact form submitted', $validated);

        return back()->with('success', 'Thank you for your message. We will contact you shortly.');
    }
}
