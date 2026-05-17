import { ROUTES } from './routes'

/**
 * Shared navigation items for DesktopSidebar (desktop) and MobileNavigationDrawer (mobile).
 */
export type NavigationItem = {
  id: string
  label: string
  icon: string
  path: string
}

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', icon: 'home', path: ROUTES.home },
  { id: 'explore', label: 'Explore', icon: 'explore', path: ROUTES.explore },
  { id: 'create', label: 'Create', icon: 'add_box', path: ROUTES.create },
  { id: 'saved', label: 'Saved', icon: 'bookmark', path: ROUTES.saved },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: 'notifications',
    path: ROUTES.notifications,
  },
  { id: 'profile', label: 'Profile', icon: 'account_circle', path: ROUTES.profile },
]
