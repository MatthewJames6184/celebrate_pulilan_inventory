<?php

namespace App\Http\Controllers;

use App\Http\Requests\StayDineSubmissionRequest;
use App\Models\StayDineSubmission;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StayDineSubmissionController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('stay-dine/submit-listing', [
            'types' => ['accommodation', 'restaurant'],
        ]);
    }

    public function store(StayDineSubmissionRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        StayDineSubmission::create([
            'user_id' => $request->user()?->id,
            'type' => $validated['type'],
            'name' => $validated['name'],
            'category' => $validated['category'] ?? null,
            'area' => $validated['area'] ?? null,
            'address' => $validated['address'] ?? null,
            'email' => $validated['email'],
            'phone' => $validated['phone'] ?? null,
            'website' => $validated['website'] ?? null,
            'description' => $validated['description'] ?? null,
            'status' => 'pending',
        ]);

        return back()->with('success', 'Your listing request has been submitted for review.');
    }

    public function index(): Response
    {
        $submissions = StayDineSubmission::with(['user', 'reviewer'])
            ->latest()
            ->get();

        return Inertia::render('admin/stay-dine-requests', [
            'submissions' => $submissions->map(fn (StayDineSubmission $submission) => [
                'id' => $submission->id,
                'type' => $submission->type,
                'name' => $submission->name,
                'category' => $submission->category,
                'area' => $submission->area,
                'address' => $submission->address,
                'email' => $submission->email,
                'phone' => $submission->phone,
                'website' => $submission->website,
                'description' => $submission->description,
                'status' => $submission->status,
                'created_at' => $submission->created_at?->format('M d, Y'),
                'submitted_by' => $submission->user?->name,
            ]),
        ]);
    }

    public function update(StayDineSubmission $submission, Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', 'in:approved,rejected,pending'],
            'note' => ['nullable', 'string', 'max:255'],
        ]);

        $submission->update([
            'status' => $validated['status'],
            'reviewed_by' => $request->user()->id,
            'reviewed_at' => now(),
        ]);

        return back()->with('success', 'Submission updated.');
    }
}
