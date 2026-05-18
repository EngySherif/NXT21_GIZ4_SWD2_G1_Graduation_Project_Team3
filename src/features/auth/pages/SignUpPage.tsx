import React, { useState } from 'react';
import { ROUTES } from '@/shared/config/routes';
import { TextLink } from '@/shared/components/ui/TextLink';

interface SignUpFormData {
  fullName: string;
  email: string;
  password:  string;
  confirmPassword:  string;
}

export function SignUpPage() {
  const [formData, setFormData] = useState<SignUpFormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError(null);
    console.log('Registered successfully:', formData);
  };

  // شريط القوة المقسم لأربع قطع في الصورة
  const hasMinLen = formData.password.length >= 8;
  const hasLetter = /[a-zA-Z]/.test(formData.password);
  const hasNum = /[0-9]/.test(formData.password);
  const isStrong = hasMinLen && hasLetter && hasNum;

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans text-left" dir="ltr">
      
      {/* 1. الهيدر العلوي (Navbar) */}
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-[#1A0C05]">BookShare</span>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#browse" className="hover:text-[#261308] hidden sm:block">Browse Books</a>
          <a href="#community" className="hover:text-[#261308] hidden sm:block">Community</a>
          <TextLink to={ROUTES.login} className="font-bold text-[#1A0C05] hover:underline">Join Now</TextLink>
        </nav>
      </header>

      {/* 2. المحتوى الرئيسي المتجاوب */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-8 lg:p-12">
        {/* الكارت الأبيض الكبير */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-5xl overflow-hidden flex flex-col md:flex-row">
          
          {/* الجزء الأيسر: الصورة والمقولة (يختفي في الشاشات الصغيرة جداً ويأخذ نصف المساحة من اللاب توب وطالع) */}
          <div className="w-full md:w-1/2 bg-[#2B1A11] p-8 lg:p-12 flex flex-col justify-between relative min-h-[400px] md:min-h-full">
            {/* الخلفية المعتمة للمكتبة */}
            <div className="absolute inset-0 opacity-25 z-0">
              <img 
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000" 
                alt="Library" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* النصوص العلوية للصورة */}
            <div className="relative z-10 text-white">
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
                Discover your next favorite read.
              </h1>
              <p className="text-gray-350 text-sm max-w-sm font-light">
                Join a community of 50,000+ readers sharing insights, reviews, and progress.
              </p>
            </div>

            {/* صندوق المقولة المميزة السفلي */}
            <div className="relative z-10 bg-black/30 backdrop-blur-md p-5 rounded-xl border border-white/10 max-w-md mt-auto">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold mb-2">
                <span>⭐</span> Featured Quote
              </div>
              <p className="italic text-sm text-gray-100 font-serif mb-2">
                "A room without books is like a body without a soul."
              </p>
              <p className="text-[11px] text-gray-400">— Marcus Tullius Cicero</p>
            </div>
          </div>

          {/* الجزء الأيمن: حقول الإدخال */}
          <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col justify-center">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1A0C05] mb-1">Create Account</h2>
              <p className="text-gray-400 text-xs mb-6">Start your intellectual journey today.</p>

              {error && (
                <div className="mb-4 p-2 text-xs text-red-600 bg-red-50 rounded-md text-center">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                {/* Full Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#1A0C05]">Full Name</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">👤</span>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full pl-9 pr-3 py-2 border border-gray-200 bg-[#F9F9F9] rounded-md focus:outline-none focus:border-[#3d2516] text-sm"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#1A0C05]">Email Address</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">✉️</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full pl-9 pr-3 py-2 border border-gray-200 bg-[#F9F9F9] rounded-md focus:outline-none focus:border-[#3d2516] text-sm"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#1A0C05]">Password</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">🔒</span>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3 py-2 border border-gray-200 bg-[#F9F9F9] rounded-md focus:outline-none focus:border-[#3d2516] text-sm"
                    />
                  </div>
                  {/* شريط القوة المقسم لـ 4 قطع تضيء أخضر عند إدخال الرموز */}
                  <div className="flex gap-1 mt-1.5">
                    <div className={`h-1 flex-1 rounded-full ${formData.password.length > 0 ? 'bg-green-500' : 'bg-gray-100'}`}></div>
                    <div className={`h-1 flex-1 rounded-full ${hasMinLen ? 'bg-green-500' : 'bg-gray-100'}`}></div>
                    <div className={`h-1 flex-1 rounded-full ${hasLetter ? 'bg-green-500' : 'bg-gray-100'}`}></div>
                    <div className={`h-1 flex-1 rounded-full ${hasNum ? 'bg-green-500' : 'bg-gray-100'}`}></div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-gray-400 mt-1">
                    <span className={isStrong ? "text-green-600 font-semibold" : ""}>
                      {isStrong ? "Strong password" : "Weak password"}
                    </span>
                    <span>8+ characters</span>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#1A0C05]">Confirm Password</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">🛡️</span>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3 py-2 border border-gray-200 bg-[#F9F9F9] rounded-md focus:outline-none focus:border-[#3d2516] text-sm"
                    />
                  </div>
                  {formData.confirmPassword && (
                    <span className={`text-[10px] mt-1 ${formData.password === formData.confirmPassword ? 'text-green-600' : 'text-red-500'}`}>
                      {formData.password === formData.confirmPassword ? '✓ Passwords match' : '✗ Passwords do not match'}
                    </span>
                  )}
                </div>

                {/* زرار الحساب البني العريض */}
                <button
                  type="submit"
                  className="mt-2 w-full py-2.5 bg-[#261308] text-white font-semibold rounded-md hover:bg-[#3d2516] transition-colors text-sm"
                >
                  Create Account
                </button>
              </form>

              {/* لينك الدخول في النص */}
              <div className="mt-5 text-center text-xs text-gray-500">
                Already a member?{' '}
                <TextLink to={ROUTES.login} className="font-bold text-[#261308] hover:underline">Sign In</TextLink>
              </div>

              {/* فاصل الشبكات */}
              <div className="relative my-5 text-center">
                <hr className="border-gray-100" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-[9px] text-gray-400 font-bold tracking-wider">
                  OR JOIN WITH
                </span>
              </div>

              {/* أزرار قنوات التسجيل الاجتماعي (جوجل ولينكد إن) */}
              <div className="flex gap-3">
                <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-3.5 h-3.5" alt="Google" />
                  Google
                </button>
                <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50">
                  <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="w-3.5 h-3.5" alt="LinkedIn" />
                  LinkedIn
                </button>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* 3. الفوتر (Footer) في نهاية الشاشة */}
      <footer className="w-full py-4 text-center text-[10px] text-gray-400 flex flex-col gap-1 border-t border-gray-100 bg-white">
        <p>© 2026 BookShare. Cultivating a community of curious minds.</p>
        <div className="flex justify-center gap-4">
          <a href="#privacy" className="hover:underline">Privacy</a>
          <a href="#terms" className="hover:underline">Terms</a>
          <a href="#help" className="hover:underline">Help</a>
        </div>
      </footer>

    </div>
  );
}