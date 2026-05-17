/**
 * All app routes in one place — used by the router and navigation links.
 */
export const ROUTES = {
  home: '/',
  explore: '/explore',
  create: '/create',
  saved: '/saved',
  notifications: '/notifications',
  profile: '/profile',
  login: '/login',
  signup: '/signup',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
