import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, LoaderCircle, ShieldCheck, UserRound } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginForm {
    email: string;
    password: string;
    remember: boolean;
}

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<LoginForm>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Log in" />

            <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4 sm:p-6 lg:p-8">
                <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden bg-gradient-to-br from-emerald-700 via-green-600 to-emerald-500 p-8 text-white lg:min-h-[560px] lg:p-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.25),transparent_35%)]" />
                        <div className="relative z-10 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
                                <img src="/images/logo-images/logo-tourism-pulilan.png" alt="Pulilan logo" className="h-full w-full object-cover" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-emerald-100">Pulilan</p>
                                <p className="text-lg font-semibold">Portal</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex justify-start">
                            <Link
                                href={route('home')}
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/15"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to home
                            </Link>
                        </div>

                        <div className="relative z-10">
                            <p className="text-sm uppercase tracking-[0.25em] text-emerald-100">Welcome</p>
                            <h1 className="mt-4 text-3xl font-semibold leading-tight lg:text-5xl">User and admin access</h1>
                            <p className="mt-4 max-w-md text-sm text-emerald-50 lg:text-base">
                                Manage updates, announcements, and public content from one simple dashboard.
                            </p>
                        </div>

                        <div className="relative z-10 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-emerald-100">
                                    <UserRound className="h-4 w-4" />
                                    <span className="text-xs uppercase tracking-[0.2em]">User</span>
                                </div>
                                <p className="mt-3 text-sm text-white/90">View content and updates.</p>
                            </div>
                            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-emerald-100">
                                    <ShieldCheck className="h-4 w-4" />
                                    <span className="text-xs uppercase tracking-[0.2em]">Admin</span>
                                </div>
                                <p className="mt-3 text-sm text-white/90">Moderate records and activities.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center bg-white p-6 sm:p-8 lg:p-10">
                        <div className="w-full max-w-md">
                            <div className="mb-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">Sign in</p>
                                <h2 className="mt-3 text-2xl font-semibold text-slate-900">Log in to your account</h2>
                                <p className="mt-2 text-sm text-slate-500">Enter your email and password to continue.</p>
                            </div>

                            <form className="space-y-5" onSubmit={submit}>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                                        Email address
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="email@example.com"
                                        className="h-11 rounded-xl border-slate-200 bg-slate-50 focus-visible:ring-emerald-500"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password" className="text-sm font-medium text-slate-700">
                                            Password
                                        </Label>
                                        {canResetPassword && (
                                            <TextLink href={route('password.request')} className="text-xs text-emerald-600" tabIndex={5}>
                                                Forgot password?
                                            </TextLink>
                                        )}
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="Password"
                                        className="h-11 rounded-xl border-slate-200 bg-slate-50 focus-visible:ring-emerald-500"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div className="flex items-center space-x-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                                    <Checkbox id="remember" name="remember" tabIndex={3} className="border-slate-300 text-emerald-600" />
                                    <Label htmlFor="remember" className="text-sm text-slate-600">
                                        Remember me
                                    </Label>
                                </div>

                                <Button type="submit" className="h-11 w-full rounded-xl bg-emerald-600 text-white hover:bg-emerald-700" tabIndex={4} disabled={processing}>
                                    {processing && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                                    Log in
                                </Button>
                            </form>

                            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
                                <span>Need an account?</span>
                                <TextLink href={route('register')} tabIndex={5} className="font-medium text-emerald-600">
                                    Create one
                                </TextLink>
                            </div>

                            {status && <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-center text-sm font-medium text-emerald-700">{status}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
