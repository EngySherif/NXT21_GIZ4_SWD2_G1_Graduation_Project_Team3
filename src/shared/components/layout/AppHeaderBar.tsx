import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/config/routes'
import { currentUser } from '@/features/home/mocks/mockHomeFeedData'
import { useAuthStore } from '@/stores/authStore'
import { Avatar } from '@/shared/components/ui/Avatar'
import { BrandLogo } from '@/shared/components/ui/BrandLogo'
import { Icon } from '@/shared/components/ui/Icon'
import { IconButton } from '@/shared/components/ui/IconButton'
import { SearchInput } from '@/shared/components/ui/SearchInput'
import { MobileNavigationDrawer } from './MobileNavigationDrawer'

export function AppHeaderBar() {
  const { user } = useAuthStore()
  const avatarSrc = user?.avatarUrl ?? currentUser.topBarAvatarUrl

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between gap-3 border-b border-stone-200 bg-white/90 px-4 shadow-sm backdrop-blur-md sm:px-6 lg:left-64">
      <div className="flex min-w-0 items-center gap-2 lg:hidden">
        <MobileNavigationDrawer />
        <BrandLogo compact />
      </div>

      <SearchInput
        wrapperClassName="hidden w-96 max-w-full lg:flex"
        placeholder="Search books, authors, or reviews..."
      />

      <div className="flex shrink-0 items-center gap-4 sm:gap-6">
        <IconButton aria-label="Messages" className="hidden sm:inline-flex">
          <Icon name="mail" />
        </IconButton>

        <IconButton to={ROUTES.notifications} badge aria-label="Notifications">
          <Icon name="notifications" />
        </IconButton>

        <Link to={ROUTES.profile} aria-label="Your profile">
          <Avatar src={avatarSrc} alt={user?.fullName ?? 'Profile'} size="sm" />
        </Link>
      </div>
    </header>
  )
}
