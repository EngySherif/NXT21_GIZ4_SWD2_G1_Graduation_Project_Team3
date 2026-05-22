type AuthBrandHeaderProps = {
  className?: string
}

export function AuthBrandHeader({ className = '' }: AuthBrandHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="mb-2 flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-4xl text-[#2c1810]">book_2</span>
        <h1 className="text-[28px] font-bold leading-tight tracking-tight text-stone-900">
          BookShare
        </h1>
      </div>
      <p className="text-sm text-[#504440]">Community of Readers</p>
    </div>
  )
}
