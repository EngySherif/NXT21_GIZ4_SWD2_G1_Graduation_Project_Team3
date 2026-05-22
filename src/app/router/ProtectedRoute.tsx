import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from '@/shared/config/routes'
import { useAuthStore } from '@/stores/authStore'

export function ProtectedRoute() {
  const { isHydrated, isAuthenticated } = useAuthStore()

  if (!isHydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f9f9f9] text-sm text-stone-500">
        Loading…
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.login} replace />
  }

  return <Outlet />
}
