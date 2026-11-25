<?php

namespace App\Http\Controllers;

use App\Http\Requests\StayDineSubmissionRequest;
use App\Models\StayDineSubmission;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class StayDineSubmissionController extends Controller
{
    public function create(Request $request): Response
    {
        $user = $request->user();
        $application = $user->businessApplications()
            ->where('status', 'approved')
            ->with('stayDineSubmission')
            ->latest()
            ->first();

        abort_unless($user->isBusiness() && $application, 403);

        return Inertia::render('stay-dine/submit-listing', [
            'businessType' => $application->business_type,
            'businessName' => $application->business_name,
            'businessEmail' => $application->email,
            'existingSubmission' => $application->stayDineSubmission ? [
                'status' => $application->stayDineSubmission->status,
                'name' => $application->stayDineSubmission->name,
            ] : null,
        ]);
    }

    public function store(StayDineSubmissionRequest $request): RedirectResponse
    {
        $validated = $request->validated();
        $application = $request->user()->businessApplications()
            ->where('status', 'approved')
            ->with('stayDineSubmission')
            ->latest()
            ->firstOrFail();

        $listingDetails = [
            'user_id' => $request->user()->id,
            'business_application_id' => $application->id,
            'type' => $application->business_type,
            'name' => $validated['name'],
            'category' => $validated['category'] ?? null,
            'area' => $validated['area'] ?? null,
            'address' => $validated['address'] ?? null,
            'email' => $application->email,
            'phone' => $validated['phone'] ?? null,
            'website' => $validated['website'] ?? null,
            'description' => $validated['description'] ?? null,
            'status' => 'pending',
            'reviewed_by_admin_id' => null,
            'reviewed_at' => null,
        ];

        if ($application->stayDineSubmission) {
            if ($application->stayDineSubmission->status !== 'rejected') {
                throw ValidationException::withMessages([
                    'name' => 'Your business listing has already been submitted for review.',
                ]);
            }

            $application->stayDineSubmission->update($listingDetails);
        } else {
            StayDineSubmission::create($listingDetails);
        }

        return to_route('dashboard')->with('success', 'Your business listing has been submitted for admin review.');
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
                'business_type' => $submission->type,
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
            'reviewed_by_admin_id' => $request->user('admin')->id,
            'reviewed_at' => now(),
        ]);

        return back()->with('success', 'Submission updated.');
    }
}
