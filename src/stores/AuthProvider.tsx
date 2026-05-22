import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { AuthUser } from '@/shared/types/auth'
import {
  clearStoredSession,
  DEMO_CREDENTIALS,
  loadStoredSession,
  saveStoredSession,
} from '@/shared/lib/auth/sessionStorage'
import { supabase } from '@/shared/lib/supabase/client'
import { isSupabaseConfigured } from '@/shared/lib/supabase/config'
import { AuthContext, type AuthContextValue, type AuthMode } from './authStore'

const defaultAvatar =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCBq-wZQ9nLq4qalcAGH_3teKuDV-HPcf2o88DGVMJrxyOqTGx-jTsh0Lc1xlcHavjO9zlieRLPuhgDnpy81ZBseqcI4rqm5730FMp6tiyJ91KhHkXFjdy9-wJ3_Xycv5m9QsrnTcXrXpEm63KCs7vd6HBor4g_BaIRkLmP5vTMQFwCgmO9rQ93vWDMq3Z3NmkN1s9gL5XzRL7Wr4SXVt0Gh6F8itlXUiUhAIDVeTDoL1sPCnJe7pr8LY6Oda7FraiEL9z8yEEAxPA'

function userFromMock(email: string, fullName?: string): AuthUser {
  const name = fullName ?? email.split('@')[0] ?? 'Reader'
  return {
    id: `mock-${email}`,
    email,
    fullName: name,
    username: name.toLowerCase().replace(/\s+/g, ''),
    avatarUrl: defaultAvatar,
  }
}

async function fetchProfile(userId: string): Promise<AuthUser | null> {
  if (!supabase) return null

  const { data, error } = await supabase
    .from('profiles')
    .select('id, full_name, username, avatar_url')
    .eq('id', userId)
    .single()

  if (error || !data) return null

  const { data: authData } = await supabase.auth.getUser()
  const email = authData.user?.email ?? ''

  return {
    id: data.id,
    email,
    fullName: data.full_name,
    username: data.username ?? email.split('@')[0] ?? 'reader',
    avatarUrl: data.avatar_url ?? defaultAvatar,
  }
}

function fetchProfileWithTimeout(userId: string): Promise<AuthUser | null> {
  return Promise.race([
    fetchProfile(userId),
    new Promise<null>((resolve) => {
      window.setTimeout(() => resolve(null), 5000)
    }),
  ])
}

function authRequestTimeout(): Promise<null> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(null), 5000)
  })
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const useSupabase = isSupabaseConfigured()
  const [user, setUser] = useState<AuthUser | null>(() =>
    useSupabase ? null : loadStoredSession(),
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isHydrated, setIsHydrated] = useState(!useSupabase)

  useEffect(() => {
    if (!useSupabase || !supabase) return

    let cancelled = false

    async function hydrate() {
      try {
        if (!supabase) return
        const sessionResult = await Promise.race([supabase.auth.getSession(), authRequestTimeout()])
        if (!sessionResult) return

        if (!cancelled && sessionResult.data.session?.user) {
          const profile = await fetchProfileWithTimeout(sessionResult.data.session.user.id)
          setUser(profile)
        }
      } finally {
        if (!cancelled) setIsHydrated(true)
      }
    }

    void hydrate()

    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (cancelled) return
      if (session?.user) {
        const profile = await fetchProfileWithTimeout(session.user.id)
        setUser(profile)
      } else {
        setUser(null)
      }
      setIsHydrated(true)
    })

    return () => {
      cancelled = true
      authListener.subscription.unsubscribe()
    }
  }, [useSupabase])

  const login = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true)
      try {
        if (useSupabase && supabase) {
          clearStoredSession()
          const { data, error } = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
          })
          if (error) throw error

          const profile = await fetchProfileWithTimeout(data.user.id)
          if (!profile) {
            throw new Error(
              'Profile not found. Run supabase/schema.sql in your Supabase SQL Editor.',
            )
          }
          setUser(profile)
          return
        }

        const normalized = email.trim().toLowerCase()
        const isDemo =
          normalized === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password
        if (!isDemo && password.length < 6) {
          throw new Error('Password must be at least 6 characters.')
        }
        if (normalized === DEMO_CREDENTIALS.email && !isDemo) {
          throw new Error('Invalid email or password.')
        }
        const mockUser = userFromMock(normalized)
        saveStoredSession(mockUser)
        setUser(mockUser)
      } finally {
        setIsLoading(false)
      }
    },
    [useSupabase],
  )

  const register = useCallback(
    async ({ fullName, email, password }: { fullName: string; email: string; password: string }) => {
      setIsLoading(true)
      try {
        if (useSupabase && supabase) {
          clearStoredSession()
          const { data, error } = await supabase.auth.signUp({
            email: email.trim(),
            password,
            options: {
              data: {
                full_name: fullName.trim(),
                username: email.split('@')[0],
              },
            },
          })
          if (error) throw error
          if (!data.user) throw new Error('Sign up failed.')

          if (!data.session) {
            throw new Error(
              'Account created. Confirm your email in Supabase (or disable email confirmation), then sign in.',
            )
          }

          const profile = await fetchProfileWithTimeout(data.user.id)
          setUser(profile)
          return
        }

        if (password.length < 8) throw new Error('Password must be at least 8 characters.')
        const mockUser = userFromMock(email.trim().toLowerCase(), fullName.trim())
        saveStoredSession(mockUser)
        setUser(mockUser)
      } finally {
        setIsLoading(false)
      }
    },
    [useSupabase],
  )

  const logout = useCallback(async () => {
    if (useSupabase && supabase) {
      await supabase.auth.signOut()
    }
    clearStoredSession()
    setUser(null)
  }, [useSupabase])

  const authMode: AuthMode = useSupabase ? 'supabase' : 'mock'

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading,
      isHydrated,
      authMode,
      login,
      register,
      logout,
    }),
    [user, isLoading, isHydrated, authMode, login, register, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
