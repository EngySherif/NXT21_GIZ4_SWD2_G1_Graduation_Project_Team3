import { ROUTES } from '@/shared/config/routes'
import { BrandLogo } from '@/shared/components/ui/BrandLogo'
import { Button } from '@/shared/components/ui/Button'
import { navigationItems } from '@/shared/config/navigation'
import { NavigationLink } from './NavigationLink'

type MainNavigationProps = {
  onItemClick?: () => void
  showBrand?: boolean
}

export function MainNavigation({ onItemClick, showBrand = true }: MainNavigationProps) {
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

      <div className="mt-4 shrink-0 border-t border-[#E0E0E0] pt-4">
        <Button to={ROUTES.create} size="lg" fullWidth onClick={onItemClick}>
          Create Post
        </Button>
      </div>
    </div>
  )
}
