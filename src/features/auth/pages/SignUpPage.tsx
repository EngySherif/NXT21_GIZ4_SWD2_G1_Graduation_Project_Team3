import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  AuthDecor,
  AuthField,
  PasswordStrength,
  SignUpHeroPanel,
  SocialAuthButtons,
} from '@/features/auth/components'
import { ROUTES } from '@/shared/config/routes'
import { useAuthStore } from '@/stores/authStore'

export function SignUpPage() {
  const navigate = useNavigate()
  const { register, isLoading } = useAuthStore()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const passwordsMatch =
    confirmPassword.length > 0 && password.length > 0 && password === confirmPassword

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    setError(null)
    try {
      await register({ fullName, email, password })
      navigate(ROUTES.home, { replace: true })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed.')
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col bg-[#f9f9f9] antialiased">
      <AuthDecor />

      <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-stone-200 bg-white/90 px-6 shadow-sm backdrop-blur-md">
        <Link to={ROUTES.login} className="text-2xl font-bold tracking-tight text-stone-900">
          BookShare
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-stone-500 transition-colors hover:text-stone-700">
            Browse Books
          </a>
          <a href="#" className="text-sm font-medium text-stone-500 transition-colors hover:text-stone-700">
            Community
          </a>
          <Link to={ROUTES.signup} className="text-sm font-semibold text-stone-900">
            Join Now
          </Link>
        </nav>
      </header>

      <main className="flex flex-grow items-center justify-center px-4 py-24">
        <div className="flex w-full max-w-[1000px] flex-col overflow-hidden rounded-xl border border-[#e0e0e0] bg-white shadow-sm md:flex-row">
          <SignUpHeroPanel />

          <div className="flex w-full flex-col justify-center p-6 md:w-1/2 md:p-8">
            <div className="mb-6">
              <h1 className="mb-1 text-[28px] font-bold text-[#1c1c1c]">Create Account</h1>
              <p className="text-sm text-[#504440]">Start your intellectual journey today.</p>
            </div>

            {error ? (
              <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-center text-xs text-red-700">
                {error}
              </p>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              <AuthField
                id="name"
                label="Full Name"
                type="text"
                icon="person"
                placeholder="Enter your full name"
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              <AuthField
                id="email"
                label="Email Address"
                type="email"
                icon="mail"
                placeholder="name@example.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div>
                <AuthField
                  id="password"
                  label="Password"
                  type="password"
                  icon="lock"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <PasswordStrength password={password} />
              </div>

              <div>
                <AuthField
                  id="confirm-password"
                  label="Confirm Password"
                  type="password"
                  icon="shield"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {passwordsMatch ? (
                  <div className="mt-1 flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-[14px] text-[#4CAF50]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="text-[10px] font-medium text-[#4CAF50]">Passwords match</span>
                  </div>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 flex h-11 w-full items-center justify-center rounded-lg bg-[#2c1810] text-sm font-semibold text-white shadow-md transition-all duration-150 hover:opacity-90 active:scale-[0.97] disabled:opacity-60"
              >
                {isLoading ? 'Creating…' : 'Create Account'}
              </button>
            </form>

            <div className="mt-8 border-t border-stone-100 pt-6 text-center">
              <p className="text-sm text-[#504440]">
                Already a member?{' '}
                <Link to={ROUTES.login} className="font-semibold text-[#7c572d] hover:underline">
                  Sign In
                </Link>
              </p>
            </div>

            <div className="mt-4">
              <div className="relative mb-4 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-stone-100" />
                </div>
                <span className="relative bg-white px-2 text-[10px] tracking-widest text-[#827470] uppercase">
                  Or join with
                </span>
              </div>
              <SocialAuthButtons variant="signup" />
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center">
        <p className="text-xs text-[#827470]">
          © 2024 BookShare. Cultivating a community of curious minds.
        </p>
        <div className="mt-1 flex justify-center gap-4">
          <a href="#" className="text-xs text-[#827470] transition-colors hover:text-[#7c572d]">
            Privacy
          </a>
          <a href="#" className="text-xs text-[#827470] transition-colors hover:text-[#7c572d]">
            Terms
          </a>
          <a href="#" className="text-xs text-[#827470] transition-colors hover:text-[#7c572d]">
            Help
          </a>
        </div>
      </footer>
    </div>
  )
}
