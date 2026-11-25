import InputError from '@/components/input-error';
import PortalAuthShell from '@/components/portal-auth-shell';
import { Head, Link, useForm } from '@inertiajs/react';
import { Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

interface RegisterForm {
    [key: string]: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    account_type: 'visitor' | 'business';
    business_name: string;
    business_category: string;
    business_area: string;
    business_address: string;
    business_phone: string;
    business_website: string;
    business_description: string;
}

export default function Register({ accountType = 'visitor' }: { accountType?: 'visitor' | 'business' }) {
    const { data, setData, post, processing, errors, reset } = useForm<RegisterForm>({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        account_type: accountType,
        business_name: '',
        business_category: '',
        business_area: '',
        business_address: '',
        business_phone: '',
        business_website: '',
        business_description: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const submit: FormEventHandler = (event) => {
        event.preventDefault();
        post(route('register'), { onFinish: () => reset('password', 'password_confirmation') });
    };

    return (
        <>
            <Head title="Create Account" />
            <PortalAuthShell mode="register">
                <h1 className="font-display text-3xl font-semibold">Join Pulilan</h1>
                <p className="mt-1 text-sm text-white/45">Create your free account to explore and connect.</p>
                <form onSubmit={submit} className="mt-8 grid gap-4">
                    <div className="grid grid-cols-2 gap-3">
                        <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                            First Name
                            <input
                                required
                                placeholder="Juan"
                                value={data.first_name}
                                onChange={(event) => setData('first_name', event.target.value)}
                                className="h-[52px] rounded-xl border border-[#294058] bg-[#173f82] px-4 text-sm font-normal tracking-normal text-white outline-none placeholder:text-white/25 focus:border-[#d4a853]"
                            />
                            <InputError message={errors.first_name} />
                        </label>
                        <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                            Last Name
                            <input
                                required
                                placeholder="Dela Cruz"
                                value={data.last_name}
                                onChange={(event) => setData('last_name', event.target.value)}
                                className="h-[52px] rounded-xl border border-[#294058] bg-[#173f82] px-4 text-sm font-normal tracking-normal text-white outline-none placeholder:text-white/25 focus:border-[#d4a853]"
                            />
                            <InputError message={errors.last_name} />
                        </label>
                    </div>
                    <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                        Email Address
                        <span className="relative">
                            <Mail className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-white/30" />
                            <input
                                type="email"
                                required
                                value={data.email}
                                onChange={(event) => setData('email', event.target.value)}
                                placeholder="juan@example.com"
                                className="h-[52px] w-full rounded-xl border border-[#294058] bg-[#173f82] px-11 text-sm font-normal tracking-normal text-white outline-none placeholder:text-white/25 focus:border-[#d4a853]"
                            />
                        </span>
                        <InputError message={errors.email} />
                    </label>
                    <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                        Password
                        <span className="relative">
                            <LockKeyhole className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-white/30" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                value={data.password}
                                onChange={(event) => setData('password', event.target.value)}
                                placeholder="Min. 8 characters"
                                className="h-[52px] w-full rounded-xl border border-[#294058] bg-[#173f82] px-11 pr-11 text-sm font-normal tracking-normal text-white outline-none placeholder:text-white/25 focus:border-[#d4a853]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((visible) => !visible)}
                                className="absolute top-1/2 right-4 -translate-y-1/2 text-white/30"
                            >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </span>
                        <InputError message={errors.password} />
                    </label>
                    <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                        Confirm Password
                        <input
                            type="password"
                            required
                            value={data.password_confirmation}
                            onChange={(event) => setData('password_confirmation', event.target.value)}
                            placeholder="Re-enter your password"
                            className="h-[52px] w-full rounded-xl border border-[#294058] bg-[#173f82] px-4 text-sm font-normal tracking-normal text-white outline-none placeholder:text-white/25 focus:border-[#d4a853]"
                        />
                    </label>
                    <div className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                        Account type
                        <div className="grid grid-cols-2 gap-2">
                            {(['visitor', 'business'] as const).map((accountType) => (
                                <button
                                    key={accountType}
                                    type="button"
                                    onClick={() => setData('account_type', accountType)}
                                    aria-pressed={data.account_type === accountType}
                                    className={`col-span-1 h-16 rounded-xl border px-2 text-xs tracking-normal normal-case transition ${
                                        data.account_type === accountType
                                            ? 'border-[#d4a853] bg-[#d4a853]/15 text-[#d4a853]'
                                            : 'border-[#294058] bg-[#173f82] text-white/55 hover:text-white'
                                    }`}
                                >
                                    {accountType === 'visitor' ? '🗺 Visitor' : '🏢 Business'}
                                </button>
                            ))}
                        </div>
                    </div>
                    {data.account_type === 'business' && (
                        <section className="grid gap-4 rounded-xl border border-[#d4a853]/30 bg-[#d4a853]/5 p-4">
                            <div>
                                <h2 className="text-sm font-semibold tracking-normal text-white normal-case">Business application</h2>
                                <p className="mt-1 text-xs leading-5 font-normal tracking-normal text-white/50 normal-case">
                                    Your account will remain a visitor account until an administrator verifies your business.
                                </p>
                            </div>
                            <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                                Business name
                                <input
                                    required
                                    value={data.business_name}
                                    onChange={(event) => setData('business_name', event.target.value)}
                                    className="h-11 rounded-xl border border-[#294058] bg-[#173f82] px-4 text-sm font-normal tracking-normal text-white outline-none placeholder:text-white/25 focus:border-[#d4a853]"
                                />
                                <InputError message={errors.business_name} />
                            </label>
                            <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                                Business type
                                <input
                                    required
                                    value={data.business_category}
                                    onChange={(event) => setData('business_category', event.target.value)}
                                    placeholder="Restaurant, resort, shop..."
                                    className="h-11 rounded-xl border border-[#294058] bg-[#173f82] px-4 text-sm font-normal tracking-normal text-white outline-none placeholder:text-white/25 focus:border-[#d4a853]"
                                />
                                <InputError message={errors.business_category} />
                            </label>
                            <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                                Business address
                                <input
                                    required
                                    value={data.business_address}
                                    onChange={(event) => setData('business_address', event.target.value)}
                                    className="h-11 rounded-xl border border-[#294058] bg-[#173f82] px-4 text-sm font-normal tracking-normal text-white outline-none placeholder:text-white/25 focus:border-[#d4a853]"
                                />
                                <InputError message={errors.business_address} />
                            </label>
                            <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                                Email applying
                                <input
                                    readOnly
                                    value={data.email}
                                    className="h-11 rounded-xl border border-[#294058] bg-[#173f82]/60 px-4 text-sm font-normal tracking-normal text-white/70 outline-none"
                                />
                                <span className="text-[10px] font-normal tracking-normal text-white/40 normal-case">
                                    This is the email the approval notice will be sent to.
                                </span>
                            </label>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                                    Barangay / area
                                    <input
                                        value={data.business_area}
                                        onChange={(event) => setData('business_area', event.target.value)}
                                        className="h-11 rounded-xl border border-[#294058] bg-[#173f82] px-4 text-sm font-normal tracking-normal text-white outline-none focus:border-[#d4a853]"
                                    />
                                </label>
                                <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                                    Phone
                                    <input
                                        value={data.business_phone}
                                        onChange={(event) => setData('business_phone', event.target.value)}
                                        className="h-11 rounded-xl border border-[#294058] bg-[#173f82] px-4 text-sm font-normal tracking-normal text-white outline-none focus:border-[#d4a853]"
                                    />
                                </label>
                            </div>
                            <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                                Website (optional)
                                <input
                                    type="url"
                                    value={data.business_website}
                                    onChange={(event) => setData('business_website', event.target.value)}
                                    placeholder="https://example.com"
                                    className="h-11 rounded-xl border border-[#294058] bg-[#173f82] px-4 text-sm font-normal tracking-normal text-white outline-none placeholder:text-white/25 focus:border-[#d4a853]"
                                />
                                <InputError message={errors.business_website} />
                            </label>
                            <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                                About the business
                                <textarea
                                    required
                                    rows={3}
                                    value={data.business_description}
                                    onChange={(event) => setData('business_description', event.target.value)}
                                    className="rounded-xl border border-[#294058] bg-[#173f82] px-4 py-3 text-sm font-normal tracking-normal text-white outline-none focus:border-[#d4a853]"
                                />
                                <InputError message={errors.business_description} />
                            </label>
                        </section>
                    )}
                    <label className="flex items-start gap-3 text-xs leading-5 text-white/45">
                        <input type="checkbox" required className="mt-1 h-5 w-5 rounded accent-[#d4a853]" />I agree to the Terms of Service and
                        Privacy Policy of the Municipality of Pulilan.
                    </label>
                    <button
                        disabled={processing}
                        className="h-[52px] rounded-xl bg-[#d4a853] text-sm font-bold text-[#0d1b2a] transition hover:bg-[#e5bc6b]"
                    >
                        Create My Account
                    </button>
                </form>
                <div className="mt-7 text-center text-sm text-white/45">
                    Already have an account?{' '}
                    <Link href={route('login')} className="text-[#d4a853]">
                        Sign in
                    </Link>
                </div>
            </PortalAuthShell>
        </>
    );
}
