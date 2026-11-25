<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBusinessApplicationRequest;
use App\Models\BusinessApplication;
use App\Models\User;
use App\Notifications\BusinessApplicationApproved;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class BusinessApplicationController extends Controller
{
    public function store(StoreBusinessApplicationRequest $request): RedirectResponse
    {
        $userId = $request->user()->id;

        DB::transaction(function () use ($request, $userId) {
            $user = User::query()->lockForUpdate()->findOrFail($userId);

            if ($user->isBusiness()) {
                throw ValidationException::withMessages([
                    'business_name' => 'Your account already has approved business access.',
                ]);
            }

            if ($user->businessApplications()->where('status', 'pending')->exists()) {
                throw ValidationException::withMessages([
                    'business_name' => 'You already have a business application waiting for review.',
                ]);
            }

            $user->businessApplications()->create($request->safe()->except('email') + [
                'email' => $user->email,
                'status' => 'pending',
            ]);
        });

        return back()->with('success', 'Your business application has been submitted for review.');
    }

    public function index(): Response
    {
        $applications = BusinessApplication::with('user:id,name,email')
            ->orderByRaw('status = ? DESC', ['pending'])
            ->latest()
            ->limit(100)
            ->get();

        return Inertia::render('admin/business-applications', [
            'applications' => $applications->map(fn (BusinessApplication $application) => [
                'id' => $application->id,
                'business_name' => $application->business_name,
                'category' => $application->category,
                'area' => $application->area,
                'address' => $application->address,
                'email' => $application->email,
                'phone' => $application->phone,
                'website' => $application->website,
                'description' => $application->description,
                'status' => $application->status,
                'created_at' => $application->created_at?->format('M d, Y'),
                'applicant_name' => $application->user->name,
            ]),
            'pendingCount' => BusinessApplication::where('status', 'pending')->count(),
        ]);
    }

    public function review(BusinessApplication $businessApplication, Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', 'in:approved,rejected'],
        ]);

        $businessApplication = DB::transaction(function () use ($businessApplication, $validated, $request) {
            $businessApplication = BusinessApplication::query()
                ->lockForUpdate()
                ->findOrFail($businessApplication->id);

            if ($businessApplication->status !== 'pending') {
                throw ValidationException::withMessages([
                    'status' => 'This business application has already been reviewed.',
                ]);
            }

            $businessApplication->update([
                'status' => $validated['status'],
                'reviewed_by' => $request->user()->id,
                'reviewed_at' => now(),
            ]);

            if ($validated['status'] === 'approved') {
                $applicant = $businessApplication->user;

                if (! $applicant->isAdmin()) {
                    $applicant->update(['role' => 'business']);
                }
            }

            return $businessApplication->load('user');
        });

        if ($validated['status'] === 'approved') {
            $businessApplication->user->notify(new BusinessApplicationApproved($businessApplication->business_name));
        }

        return back()->with('success', 'Business application '.$validated['status'].'.');
    }
}
