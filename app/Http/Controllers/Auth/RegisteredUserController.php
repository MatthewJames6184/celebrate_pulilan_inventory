<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('auth/register', [
            'accountType' => $request->query('account_type') === 'business' ? 'business' : 'visitor',
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required_without_all:first_name,last_name', 'nullable', 'string', 'max:255'],
            'first_name' => ['required_without:name', 'string', 'max:120'],
            'last_name' => ['required_without:name', 'string', 'max:120'],
            'email' => [
                'required',
                'string',
                'lowercase',
                'email',
                'max:255',
                'unique:'.User::class,
                Rule::notIn(Admin::query()->pluck('email')->all()),
            ],
            'password' => ['required', 'confirmed', Password::defaults()],
            'account_type' => ['sometimes', Rule::in(['visitor', 'business'])],
            'business_name' => [Rule::requiredIf($request->input('account_type') === 'business'), 'nullable', 'string', 'max:255'],
            'business_type' => [Rule::requiredIf($request->input('account_type') === 'business'), 'in:accommodation,restaurant'],
            'business_area' => ['nullable', 'string', 'max:255'],
            'business_address' => [Rule::requiredIf($request->input('account_type') === 'business'), 'nullable', 'string', 'max:255'],
            'business_phone' => ['nullable', 'string', 'max:50'],
            'business_website' => ['nullable', 'url', 'max:255'],
            'business_description' => [Rule::requiredIf($request->input('account_type') === 'business'), 'nullable', 'string', 'max:2000'],
        ]);

        $accountType = $validated['account_type'] ?? 'visitor';
        $user = DB::transaction(function () use ($validated, $accountType) {
            $user = User::create([
                'name' => trim($validated['name'] ?? $validated['first_name'].' '.$validated['last_name']),
                'email' => $validated['email'],
                'password' => $validated['password'],
                'account_type' => 'visitor',
            ]);

            if ($accountType === 'business') {
                $user->businessApplications()->create([
                    'business_name' => $validated['business_name'],
                    'category' => $validated['business_type'] === 'restaurant' ? 'Restaurant' : 'Accommodation',
                    'business_type' => $validated['business_type'],
                    'area' => $validated['business_area'] ?? null,
                    'address' => $validated['business_address'],
                    'email' => $user->email,
                    'phone' => $validated['business_phone'] ?? null,
                    'website' => $validated['business_website'] ?? null,
                    'description' => $validated['business_description'],
                ]);
            }

            return $user;
        });

        event(new Registered($user));

        Auth::login($user);

        return to_route('dashboard', $accountType === 'business' ? ['apply-business' => 1] : []);
    }
}
