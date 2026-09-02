import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, LoaderCircle, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
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

            <div className="flex min-h-screen items-center justify-center bg-[#edf7f0] p-4 sm:p-6 lg:p-8">
                <div className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)] lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="relative flex min-h-[340px] flex-col overflow-hidden bg-gradient-to-br from-[#0f8c5a] via-[#0f9d63] to-[#0f8a54] p-6 text-white sm:p-8 lg:min-h-[680px] lg:p-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),transparent_28%)]" />

                        <div className="relative z-10 flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-21 w-auto items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.12)] backdrop-blur-sm">
                                    <img src="/images/logo-images/logo-tourism-pulilan.png" alt="Pulilan logo" className="h-21 w-auto object-contain" />
                                </div>

                            </div>
                            <Link
                                href={route('home')}
                                className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/15"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to home
                            </Link>
                        </div>

                        <div className="relative z-10 mt-8">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-50 backdrop-blur-sm">
                                <Sparkles className="h-3.5 w-3.5" />
                                Welcome back
                            </div>
                        </div>

                        <div className="relative z-10 mt-10 lg:mt-12">
                            <h1 className="max-w-[640px] text-[4rem] font-black leading-[0.88] tracking-[-0.06em] text-white sm:text-[1rem] lg:text-[4rem]">
                                Stay connected
                                <br />
                                to your
                                <br />
                                community.
                            </h1>
                        </div>

                        <div className="relative z-10 mt-6 max-w-[500px] text-[16px] leading-[1.5] text-emerald-50/90">
                            Keep up with updates, announcements, local events, and essential services from Pulilan in one place.
                        </div>

                        <div className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-emerald-50">
                                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10">
                                        <MapPin className="h-3.5 w-3.5" />
                                    </div>
                                    <span className="text-[12px] font-semibold uppercase tracking-[0.22em]">Local</span>
                                </div>
                                <p className="mt-3 text-[16px] leading-[1.35] text-white/90">Explore community updates and announcements.</p>
                            </div>
                            <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-emerald-50">
                                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10">
                                        <ShieldCheck className="h-3.5 w-3.5" />
                                    </div>
                                    <span className="text-[12px] font-semibold uppercase tracking-[0.22em]">Secure</span>
                                </div>
                                <p className="mt-3 text-[16px] leading-[1.35] text-white/90">Sign in to your personalized portal access.</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center justify-center bg-white p-6 sm:p-8 lg:p-10">
                        <div className="w-full max-w-md">
                            <div className="mb-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">Sign in</p>
                                <h2 className="mt-3 text-3xl font-semibold text-slate-900">Log in to your account</h2>
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
                                        className="h-12 rounded-2xl border-slate-200 bg-slate-50 px-4 text-slate-900 shadow-sm transition focus-visible:ring-2 focus-visible:ring-emerald-500"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password" className="text-sm font-medium text-slate-700">
                                            Password
                                        </Label>
                                        {canResetPassword && (
                                            <TextLink href={route('password.request')} className="text-xs font-medium text-emerald-600" tabIndex={5}>
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
                                        className="h-12 rounded-2xl border-slate-200 bg-slate-50 px-4 text-slate-900 shadow-sm transition focus-visible:ring-2 focus-visible:ring-emerald-500"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div className="flex items-center space-x-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        tabIndex={3}
                                        checked={data.remember}
                                        onCheckedChange={(checked) => setData('remember', checked === true)}
                                        disabled={processing}
                                        className="border-slate-300 text-emerald-600 data-[state=checked]:border-emerald-600 data-[state=checked]:bg-emerald-600"
                                    />
                                    <Label htmlFor="remember" className="cursor-pointer text-sm text-slate-600">
                                        Remember me
                                    </Label>
                                </div>

                                <Button
                                    type="submit"
                                    className="h-12 w-full rounded-2xl bg-emerald-600 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
                                    tabIndex={4}
                                    disabled={processing}
                                >
                                    {processing && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                                    Log in
                                </Button>
                            </form>

                            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
                                <span>Need an account?</span>
                                <TextLink href={route('register')} tabIndex={5} className="font-semibold text-emerald-600">
                                    Create one
                                </TextLink>
                            </div>

                            {status && (
                                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-center text-sm font-medium text-emerald-700">
                                    {status}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
