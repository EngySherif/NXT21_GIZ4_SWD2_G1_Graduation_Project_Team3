const LIBRARY_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC7iqKhkGacfSAR_FPFJAeApzaxLAH7jlgYcpOpOK3U-p28LpNCnjenRY3uR6Cds3B9pm5NwGsEVPUpACvlkH4p62HXMlkPui68fVUyEwgu4i-2PC4UfA7nLZ6W-fdbUTFY7dFfRhNh3AYM-lZkixPPPVktYpHATNSCIgB6PChju_DWMXeJ-apulfSsRUY6a_-E0AG6f6NMmhL7BYx5pm6PEJkpmkPCFEu9AuDQOrz2LQ28hnZZL35GQEoacVV_STSVraHFKh9iTHg'

export function SignUpHeroPanel() {
  return (
    <div className="relative hidden flex-col justify-between overflow-hidden bg-[#2c1810] p-8 md:flex md:w-1/2">
      <img
        src={LIBRARY_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="relative z-10">
        <h2 className="mb-4 text-[32px] leading-tight font-bold text-white">
          Discover your next favorite read.
        </h2>
        <p className="max-w-xs text-sm text-[#9e7e73]">
          Join a community of 50,000+ readers sharing insights, reviews, and progress.
        </p>
      </div>
      <div className="relative z-10 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-md">
        <div className="mb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#FFD700]" style={{ fontVariationSettings: "'FILL' 1" }}>
            star
          </span>
          <span className="text-base font-semibold text-white">Featured Quote</span>
        </div>
        <p className="font-[family-name:var(--font-quote)] text-base italic text-white">
          &ldquo;A room without books is like a body without a soul.&rdquo;
        </p>
        <p className="mt-2 text-xs text-white/70">— Marcus Tullius Cicero</p>
      </div>
    </div>
  )
}
