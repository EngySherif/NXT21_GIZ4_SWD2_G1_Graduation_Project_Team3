export function NotificationsPageHeader() {
  return (
    <header className="mb-6 flex items-center justify-between gap-4 border-b border-stone-100 pb-4">
      <div>
        <h1 className="text-xl font-bold text-[#1A0C05] sm:text-2xl">Notifications</h1>
        <p className="mt-0.5 text-xs text-stone-400">
          Stay updated with your reading community
        </p>
      </div>
      <button
        type="button"
        className="shrink-0 text-xs font-semibold text-[#261308] hover:underline"
      >
        Mark all as read
      </button>
    </header>
  )
}
