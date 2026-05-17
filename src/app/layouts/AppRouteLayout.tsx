import { Outlet } from 'react-router-dom'
import { AppNavigationLayout } from '@/shared/components/layout'

export function AppRouteLayout() {
  return (
    <AppNavigationLayout>
      <Outlet />
    </AppNavigationLayout>
  )
}
