import InputError from '@/components/input-error';
import PortalAuthShell from '@/components/portal-auth-shell';
import { Head, Link, useForm } from '@inertiajs/react';
import { Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

interface RegisterForm {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<RegisterForm>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
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
                                className="h-[52px] rounded-xl border border-[#294058] bg-[#173f82] px-4 text-sm font-normal tracking-normal text-white outline-none placeholder:text-white/25 focus:border-[#d4a853]"
                            />
                        </label>
                        <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                            Last Name
                            <input
                                required
                                placeholder="Dela Cruz"
                                onChange={(event) => setData('name', event.target.value)}
                                className="h-[52px] rounded-xl border border-[#294058] bg-[#173f82] px-4 text-sm font-normal tracking-normal text-white outline-none placeholder:text-white/25 focus:border-[#d4a853]"
                            />
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
                        I am a
                        <div className="grid grid-cols-3 gap-2">
                            <button
                                type="button"
                                className="h-16 rounded-xl border border-[#d4a853] bg-[#d4a853]/15 px-2 text-xs tracking-normal text-[#d4a853] normal-case"
                            >
                                🗺 Visitor
                            </button>
                            <button
                                type="button"
                                className="h-16 rounded-xl border border-[#294058] bg-[#173f82] px-2 text-xs tracking-normal text-white/55 normal-case"
                            >
                                🏢 Business
                            </button>
                            <button
                                type="button"
                                className="h-16 rounded-xl border border-[#294058] bg-[#173f82] px-2 text-xs tracking-normal text-white/55 normal-case"
                            >
                                🏘 Resident
                            </button>
                        </div>
                    </div>
                    <label className="flex items-start gap-3 text-xs leading-5 text-white/45">
                        <input type="checkbox" required className="mt-1 h-5 w-5 rounded accent-[#d4a853]" />I agree to the Terms of Service and Privacy Policy of the
                        Municipality of Pulilan.
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
