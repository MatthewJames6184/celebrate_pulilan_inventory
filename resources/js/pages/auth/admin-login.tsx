import InputError from '@/components/input-error';
import { Head, Link, useForm } from '@inertiajs/react';
import { LockKeyhole, Mail } from 'lucide-react';
import { type FormEventHandler } from 'react';

export default function AdminLogin() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const submit: FormEventHandler = (event) => {
        event.preventDefault();
        post(route('admin.login.store'));
    };

    return (
        <>
            <Head title="Administrator Sign In" />
            <main className="flex min-h-screen items-center justify-center bg-[#0b1640] px-5 py-10 text-white">
                <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#10245f] p-7 shadow-xl sm:p-9">
                    <Link href={route('home')} className="text-xs text-white/50 hover:text-white">
                        ← Back to portal
                    </Link>
                    <div className="mt-7 flex h-11 w-11 items-center justify-center rounded-full bg-[#d4a853] font-bold text-[#0b1640]">P</div>
                    <h1 className="mt-5 font-display text-3xl font-semibold">Admin sign in</h1>
                    <p className="mt-2 text-sm text-white/55">Sign in to manage Pulilan portal content and applications.</p>

                    <form onSubmit={submit} className="mt-7 grid gap-5">
                        <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/55 uppercase">
                            Administrator email
                            <span className="relative">
                                <Mail className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-white/30" />
                                <input
                                    type="email"
                                    autoComplete="username"
                                    required
                                    value={data.email}
                                    onChange={(event) => setData('email', event.target.value)}
                                    className="h-12 w-full rounded-xl border border-white/10 bg-[#0b1640] px-11 text-sm font-normal tracking-normal text-white outline-none focus:border-[#d4a853]"
                                />
                            </span>
                            <InputError message={errors.email} />
                        </label>

                        <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/55 uppercase">
                            Password
                            <span className="relative">
                                <LockKeyhole className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-white/30" />
                                <input
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={data.password}
                                    onChange={(event) => setData('password', event.target.value)}
                                    className="h-12 w-full rounded-xl border border-white/10 bg-[#0b1640] px-11 text-sm font-normal tracking-normal text-white outline-none focus:border-[#d4a853]"
                                />
                            </span>
                            <InputError message={errors.password} />
                        </label>

                        <label className="flex items-center gap-2 text-sm text-white/55">
                            <input
                                type="checkbox"
                                checked={data.remember}
                                onChange={(event) => setData('remember', event.target.checked)}
                                className="h-4 w-4 accent-[#d4a853]"
                            />
                            Remember me
                        </label>

                        <button
                            type="submit"
                            disabled={processing}
                            className="h-12 rounded-xl bg-[#d4a853] text-sm font-bold text-[#0d1b2a] transition hover:bg-[#e5bc6b] disabled:opacity-60"
                        >
                            {processing ? 'Signing in...' : 'Sign in to admin'}
                        </button>
                    </form>

                    <p className="mt-6 border-t border-white/10 pt-5 text-center text-xs text-white/45">
                        Not an administrator? <Link href={route('login')} className="text-[#d4a853]">Visitor or business sign in</Link>
                    </p>
                </section>
            </main>
        </>
    );
}
