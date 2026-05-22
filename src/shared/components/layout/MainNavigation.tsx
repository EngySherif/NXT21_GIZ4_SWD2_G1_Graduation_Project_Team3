import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/config/routes'
import { BrandLogo } from '@/shared/components/ui/BrandLogo'
import { Button } from '@/shared/components/ui/Button'
import { navigationItems } from '@/shared/config/navigation'
import { useAuthStore } from '@/stores/authStore'
import { NavigationLink } from './NavigationLink'

type MainNavigationProps = {
  onItemClick?: () => void
  showBrand?: boolean
}

export function MainNavigation({ onItemClick, showBrand = true }: MainNavigationProps) {
  const navigate = useNavigate()
  const { logout, user } = useAuthStore()

  async function handleLogout() {
    await logout()
    onItemClick?.()
    navigate(ROUTES.login, { replace: true })
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {showBrand ? (
        <div className="mb-6 shrink-0 px-2">
          <BrandLogo onClick={onItemClick} />
        </div>
      ) : null}

      <ul className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <NavigationLink item={item} onClick={onItemClick} />
          </li>
        ))}
      </ul>

      <div className="mt-4 shrink-0 space-y-2 border-t border-[#E0E0E0] pt-4">
        <Button to={ROUTES.create} size="lg" fullWidth onClick={onItemClick}>
          Create Post
        </Button>
        {user ? (
          <button
            type="button"
            onClick={() => void handleLogout()}
            className="w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-stone-600 hover:bg-stone-100"
          >
            Log out
          </button>
        ) : null}
      </div>
    </div>
  )
}
