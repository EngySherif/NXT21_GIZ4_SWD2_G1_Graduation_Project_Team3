const links = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Help Center', href: '#' },
] as const

export function AuthFooterLinks() {
  return (
    <div className="mt-8 flex justify-center gap-8 text-xs text-[#757575]">
      {links.map(({ label, href }) => (
        <a key={label} href={href} className="transition-colors hover:text-[#1c1c1c]">
          {label}
        </a>
      ))}
    </div>
  )
}
