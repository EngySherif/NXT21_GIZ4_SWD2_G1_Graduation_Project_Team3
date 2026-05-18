import React, { useState } from 'react';
import { ROUTES } from '@/shared/config/routes';
import { TextLink } from '@/shared/components/ui/TextLink';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter your details to sign in to your account.');
      return;
    }
    setError(null);
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col justify-between items-center p-4 font-sans text-left" dir="ltr">
      
      {/* الجزء العلوي: اللوجو */}
      <div className="text-center mt-6 flex flex-col items-center gap-1">
        <div className="flex items-center gap-2 text-xl font-bold text-[#1A0C05]">
          <span>📖</span> BookShare
        </div>
        <span className="text-[11px] text-gray-400">Community of Readers</span>
      </div>

      {/* الكارت الممركز في المنتصف */}
      <main className="w-full max-w-md my-auto">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-150 shadow-sm">
          
          <h2 className="text-xl sm:text-2xl font-bold text-[#1A0C05] mb-1">Welcome back</h2>
          <p className="text-gray-450 text-xs mb-6">Please enter your details to sign in to your account.</p>

          {error && (
            <div className="mb-4 p-2 text-xs text-red-600 bg-red-50 rounded-md text-center">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#1A0C05]">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. reader@bookshare.com"
                className="w-full px-3 py-2 border border-gray-200 bg-[#F9F9F9] rounded-md focus:outline-none focus:border-[#261308] text-sm text-left"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-[#1A0C05]">Password</label>
                <a href="#forgot" className="text-[11px] font-medium text-[#261308] hover:underline">Forgot Password?</a>
              </div>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 border border-gray-200 bg-[#F9F9F9] rounded-md focus:outline-none focus:border-[#261308] text-sm text-left"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer text-xs">👁️</span>
              </div>
            </div>

            {/* زرار تسجيل الدخول البني الداكن */}
            <button
              type="submit"
              className="mt-2 w-full py-2.5 bg-[#261308] text-white font-semibold rounded-md hover:bg-[#3d2516] transition-colors text-sm text-center"
            >
              Sign In
            </button>
          </form>

          {/* خط الفاصل الأوسط */}
          <div className="relative my-6 text-center">
            <hr className="border-gray-100" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[10px] text-gray-400">
              Or continue with
            </span>
          </div>

          {/* أزرار جوجل وآبل المتجاوبة */}
          <div className="flex gap-3">
            <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-3.5 h-3.5" alt="Google" />
              Google
            </button>
            <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50">
              <img src="https://www.svgrepo.com/show/473546/apple.svg" className="w-3.5 h-3.5" alt="Apple" />
              iOS Apple
            </button>
          </div>

          {/* رابط التحويل لإنشاء حساب */}
          <div className="mt-6 text-center text-xs text-gray-500">
            Don't have an account?{' '}
            <TextLink to={ROUTES.signup} className="font-bold text-[#261308] hover:underline">Create Account</TextLink>
          </div>

        </div>
      </main>

      {/* الروابط السفلية للوجن */}
      <footer className="w-full py-4 text-center text-[10px] text-gray-400 flex justify-center gap-4 mt-6">
        <a href="#privacy" className="hover:underline">Privacy Policy</a>
        <a href="#terms" className="hover:underline">Terms of Service</a>
        <a href="#help" className="hover:underline">Help Center</a>
      </footer>

    </div>
  );
}