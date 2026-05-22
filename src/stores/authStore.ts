import { createContext, useContext } from 'react'
import type { AuthUser } from '@/shared/types/auth'

export type AuthMode = 'mock' | 'supabase'

export type AuthContextValue = {
  user: AuthUser | null
  isAuthenticated: boolean
  isLoading: boolean
  isHydrated: boolean
  authMode: AuthMode
  login: (email: string, password: string) => Promise<void>
  register: (input: { fullName: string; email: string; password: string }) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export function useAuthStore(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuthStore must be used within AuthProvider')
  return ctx
}
