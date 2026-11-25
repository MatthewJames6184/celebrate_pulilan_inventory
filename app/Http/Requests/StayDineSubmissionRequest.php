<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StayDineSubmissionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $user = $this->user();
        $application = $user?->businessApplications()
            ->where('status', 'approved')
            ->latest()
            ->first();
        $submission = $application?->stayDineSubmission;

        return $user?->isBusiness() === true
            && $application !== null
            && (! $submission || $submission->status === 'rejected');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'category' => ['nullable', 'string', 'max:255'],
            'area' => ['nullable', 'string', 'max:255'],
            'address' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:50'],
            'website' => ['nullable', 'url', 'max:255'],
            'description' => ['nullable', 'string', 'max:2000'],
        ];
    }
}
