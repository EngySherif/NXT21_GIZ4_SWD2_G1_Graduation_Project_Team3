type SocialAuthButtonsProps = {
  variant: 'login' | 'signup'
}

const GOOGLE_ICON_LOGIN =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA3ULH04ccoX7335R8CgrB4C3EG0sL4TlaFkofhFsZYxuvFA0IGVqYXbx_-DVNoafAQbzxYcG1Bumm9dYKMS_1jwgp0RlAWShtjPotc8ghDdhg5OgXUHsBRq2-1pLkMgx0tMrYx72IU6GVZuMT9QbKurtsZghjBVPKPniXC1rIb-aH-vD4kM-gLyOlHU1xxeNuNAr7WkwAxjKA6P_6zLVxe1FykvyNvwX4cHjPkco0YdPiqBinlKlFmi0FcwjuZHSK26bXCM1GpPY0'

const GOOGLE_ICON_SIGNUP =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBktd9DtEiQ3R4NaaqMyyg6dQ2Ga9LFq7YMP0zDYKrPr0OnBXCYQqx35kgo0m6I6z0zNFofXiHtxYgkXN0j3d4_XDE7MmDJI6yh1zRgEfTzqlq1GZaauB9RpYCE7RJiUc4QSip3EKqm2vaKRXiBj1lxtvbNjcKfxV8N5GOc1wKfIxEK3Qh7_4xWKDXT8gkfmKS4IwJn45g5RSMKfAhqrWGIxcX6Geqfw4IToegfUV5nvQJpTgMI9Jr5IpB03Arbxbcf-ZpXgFGINAI'

const LINKEDIN_ICON =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDRHzhST-NQKkYuTxZhKxjf_5ID3Ux1pIP3iyYBsi1jqFUL07g1MBk6zQPPFDn8tePUeO_fNDN0dsm1KomXq-irVLiZsNiatzmP8cjtcTB8KrHEpp8CL1j449zVcV4SQNLUJBGJD4qf2LIQnYt6RRMxfmc4gZO0l3wtWWnYKXcXV8kVlleyNe4ABxKTMo3nmzz8DQdcsZtaUnIrhcYmWDSIKCPR7CQOGbB0mzkbnvOGavK0GbMSvYSa0ZrspuTyqo2f6Q8Oi2igBG8'

const socialBtn =
  'flex h-11 items-center justify-center gap-2 rounded-lg border border-[#e0e0e0] text-sm font-semibold text-[#1c1c1c] transition-colors hover:bg-stone-50 active:scale-[0.98]'

export function SocialAuthButtons({ variant }: SocialAuthButtonsProps) {
  if (variant === 'login') {
    return (
      <div className="grid grid-cols-2 gap-4">
        <button type="button" className={socialBtn}>
          <img src={GOOGLE_ICON_LOGIN} alt="" className="mr-1 h-5 w-5" />
          Google
        </button>
        <button type="button" className={socialBtn}>
          <span className="material-symbols-outlined text-[#1c1c1c]">ios</span>
          Apple
        </button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <button type="button" className={`${socialBtn} h-10 text-sm font-normal`}>
        <img src={GOOGLE_ICON_SIGNUP} alt="" className="h-4 w-4" />
        Google
      </button>
      <button type="button" className={`${socialBtn} h-10 text-sm font-normal`}>
        <img src={LINKEDIN_ICON} alt="" className="h-4 w-4" />
        LinkedIn
      </button>
    </div>
  )
}
