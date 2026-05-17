const footerLinks = ['Privacy', 'Terms', 'Help Center', 'BookShare © 2024']

export function FeedFooterLinks() {
  return (
    <nav className="flex flex-wrap gap-x-4 gap-y-2 px-4">
      {footerLinks.map((label) => (
        <a key={label} href="#" className="text-xs text-[#757575] hover:text-stone-900">
          {label}
        </a>
      ))}
    </nav>
  )
}
