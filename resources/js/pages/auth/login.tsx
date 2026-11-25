import InputError from '@/components/input-error';
import PortalAuthShell from '@/components/portal-auth-shell';
import { Checkbox } from '@/components/ui/checkbox';
import { Head, Link, useForm } from '@inertiajs/react';
import { Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

interface LoginForm {
    [key: string]: string | boolean;
    email: string;
    password: string;
    remember: boolean;
    account_type: 'visitor' | 'business';
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
        account_type: 'visitor',
    });
    const [showPassword, setShowPassword] = useState(false);
    const submit: FormEventHandler = (event) => {
        event.preventDefault();
        post(route('login'), { onFinish: () => reset('password') });
    };

    return (
        <>
            <Head title="Sign In" />
            <PortalAuthShell mode="login">
                <h1 className="font-display text-3xl font-semibold">Welcome back</h1>
                <p className="mt-1 text-sm text-white/45">Sign in to access your community portal account.</p>
                <div className="mt-5 grid grid-cols-2 gap-2 rounded-xl border border-[#294058] bg-[#173f82] p-1">
                    {(['visitor', 'business'] as const).map((accountType) => (
                        <button
                            key={accountType}
                            type="button"
                            onClick={() => setData('account_type', accountType)}
                            aria-pressed={data.account_type === accountType}
                            className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                                data.account_type === accountType ? 'bg-[#d4a853] text-[#0d1b2a]' : 'text-white/60 hover:text-white'
                            }`}
                        >
                            {accountType === 'visitor' ? 'Visitor' : 'Business'}
                        </button>
                    ))}
                </div>
                {data.account_type === 'business' && (
                    <p className="mt-3 text-xs leading-5 text-white/55">
                        Business owners can sign in to check an application or submit one from their dashboard.{' '}
                        <Link href={`${route('register')}?account_type=business`} className="text-[#d4a853]">
                            Register a business
                        </Link>
                    </p>
                )}
                <form onSubmit={submit} className="mt-9 grid gap-5">
                    <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                        Email Address
                        <span className="relative">
                            <Mail className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-white/30" />
                            <input
                                id="email"
                                type="email"
                                required
                                autoFocus
                                value={data.email}
                                onChange={(event) => setData('email', event.target.value)}
                                placeholder="juan@example.com"
                                className="h-[52px] w-full rounded-xl border border-[#294058] bg-[#173f82] px-11 text-sm font-normal tracking-normal text-white outline-none placeholder:text-white/25 focus:border-[#d4a853]"
                            />
                        </span>
                        <InputError message={errors.email} />
                    </label>
                    <label className="grid gap-2 text-xs font-semibold tracking-[0.08em] text-white/45 uppercase">
                        <span className="flex justify-between">
                            Password{' '}
                            {canResetPassword && (
                                <Link href={route('password.request')} className="font-normal tracking-normal text-[#d4a853] normal-case">
                                    Forgot password?
                                </Link>
                            )}
                        </span>
                        <span className="relative">
                            <LockKeyhole className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-white/30" />
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                value={data.password}
                                onChange={(event) => setData('password', event.target.value)}
                                placeholder="••••••••"
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
                    <label className="flex items-center gap-3 text-sm text-white/45">
                        <Checkbox
                            checked={data.remember}
                            onCheckedChange={(checked) => setData('remember', checked === true)}
                            className="border-[#294058] data-[state=checked]:border-[#d4a853] data-[state=checked]:bg-[#d4a853]"
                        />
                        Remember me for 30 days
                    </label>
                    <button
                        disabled={processing}
                        className="h-[52px] rounded-xl bg-[#d4a853] text-sm font-bold text-[#0d1b2a] transition hover:bg-[#e5bc6b]"
                    >
                        Sign In to Portal
                    </button>
                </form>
                {status && <p className="mt-4 text-center text-xs text-[#d4a853]">{status}</p>}
                <div className="mt-8 border-t border-white/10 pt-5 text-center text-sm text-white/45">
                    Don't have an account?{' '}
                    <Link href={route('register')} className="text-[#d4a853]">
                        Register free
                    </Link>
                    <span className="mx-2 text-white/20">·</span>
                    <Link href={route('admin.login')} className="text-white/45 hover:text-[#d4a853]">
                        Admin sign in
                    </Link>
                </div>
            </PortalAuthShell>
        </>
    );
}
