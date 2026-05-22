import type { AuthUser } from '@/shared/types/auth'

const SESSION_KEY = 'bookshare_session'

export function loadStoredSession(): AuthUser | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    return JSON.parse(raw) as AuthUser
  } catch {
    return null
  }
}

export function saveStoredSession(user: AuthUser): void {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user))
}

export function clearStoredSession(): void {
  localStorage.removeItem(SESSION_KEY)
}

export const DEMO_CREDENTIALS = {
  email: 'reader@bookshare.com',
  password: 'password123',
} as const
