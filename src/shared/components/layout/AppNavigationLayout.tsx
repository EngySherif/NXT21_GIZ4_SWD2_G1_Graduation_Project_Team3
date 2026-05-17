import type { ReactNode } from 'react'
import { ROUTES } from '@/shared/config/routes'
import { Button } from '@/shared/components/ui/Button'
import { Icon } from '@/shared/components/ui/Icon'
import { AppHeaderBar } from './AppHeaderBar'
import { DesktopSidebar } from './DesktopSidebar'

type AppNavigationLayoutProps = {
  children: ReactNode
}

/** App chrome: desktop sidebar, header, main area, mobile create FAB */
export function AppNavigationLayout({ children }: AppNavigationLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <DesktopSidebar />
      <AppHeaderBar />
      <main className="min-h-screen pt-16 lg:ml-64">{children}</main>
      <Button
        to={ROUTES.create}
        className="mobile-fab !fixed bottom-8 right-8 z-50 !h-14 !w-14 !rounded-full !p-0 lg:hidden"
        aria-label="Create post"
      >
        <Icon name="add" size="lg" className="text-white" />
      </Button>
    </div>
  )
}
