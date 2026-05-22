import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  AuthBrandHeader,
  AuthDecor,
  AuthDivider,
  AuthField,
  AuthFooterLinks,
  SocialAuthButtons,
} from '@/features/auth/components'
import { ROUTES } from '@/shared/config/routes'
import { useAuthStore } from '@/stores/authStore'

export function LoginPage() {
  const navigate = useNavigate()
  const { login, isLoading } = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !password) {
      setError('Enter email and password.')
      return
    }
    setError(null)
    try {
      await login(email, password)
      navigate(ROUTES.home, { replace: true })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign in failed.')
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-white antialiased">
      <AuthDecor />

      <main className="flex flex-grow items-center justify-center px-4 py-12">
        <div className="flex w-full max-w-[440px] flex-col items-center">
          <AuthBrandHeader className="mb-8" />

          <div className="w-full rounded-xl border border-[#e0e0e0] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            <div className="mb-6">
              <h2 className="mb-1 text-xl font-semibold text-[#1c1c1c]">Welcome back</h2>
              <p className="text-xs text-[#757575]">
                Please enter your details to sign in to your account.
              </p>
            </div>

            {error ? (
              <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-center text-xs text-red-700">
                {error}
              </p>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <AuthField
                id="email"
                label="Email address"
                type="email"
                name="email"
                placeholder="e.g. reader@bookshare.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <AuthField
                id="password"
                label="Password"
                type="password"
                name="password"
                placeholder="••••••••"
                autoComplete="current-password"
                showPasswordToggle
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                labelAction={
                  <a
                    href="#"
                    className="text-sm font-semibold text-[#7c572d] transition-all hover:underline"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot Password?
                  </a>
                }
              />

              <button
                type="submit"
                disabled={isLoading}
                className="flex h-11 w-full items-center justify-center rounded-lg bg-[#2c1810] text-sm font-semibold text-white shadow-[0_4px_12px_rgba(44,24,16,0.15)] transition-all duration-100 active:scale-[0.95] disabled:opacity-60"
              >
                {isLoading ? 'Signing in…' : 'Sign In'}
              </button>

              <AuthDivider label="Or continue with" />
              <SocialAuthButtons variant="login" />
            </form>

            <div className="mt-8 border-t border-[#e0e0e0] pt-6 text-center">
              <p className="text-sm text-[#757575]">
                Don&apos;t have an account?{' '}
                <Link
                  to={ROUTES.signup}
                  className="ml-1 text-base font-semibold text-[#7c572d] transition-all hover:underline"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>

          <AuthFooterLinks />
        </div>
      </main>
    </div>
  )
}
