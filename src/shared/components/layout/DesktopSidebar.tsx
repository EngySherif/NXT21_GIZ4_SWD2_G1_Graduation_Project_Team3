import { MainNavigation } from './MainNavigation'

/**
 * Left navigation — visible on large screens (desktop layout).
 */
export function DesktopSidebar() {
  return (
    <nav className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-stone-200 bg-stone-50 p-4 lg:flex">
      <MainNavigation />
    </nav>
  )
}
