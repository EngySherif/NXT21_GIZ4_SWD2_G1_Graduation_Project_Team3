import { useLocation } from 'react-router-dom'
import { ROUTES } from '@/shared/config/routes'
import { useDocumentTitle } from '@/shared/hooks/useDocumentTitle'

const pageTitles: Record<string, string> = {
  [ROUTES.home]: 'Feed',
  [ROUTES.explore]: 'Explore',
  [ROUTES.create]: 'Create Post',
  [ROUTES.saved]: 'Saved Posts',
  [ROUTES.notifications]: 'Notifications',
  [ROUTES.profile]: 'Profile',
  [ROUTES.login]: 'Sign In',
  [ROUTES.signup]: 'Create Account',
}

export function PageTitle() {
  const { pathname } = useLocation()
  const pageTitle = pageTitles[pathname] ?? 'BookShare'

  useDocumentTitle(pageTitle === 'BookShare' ? pageTitle : `BookShare - ${pageTitle}`)

  return null
}
