import { useEffect, useState } from 'react'
import { fetchFeedPosts } from '@/features/home/api/feedApi'
import { feedPosts as mockFeedPosts, type FeedPostItem } from '@/features/home/mocks/mockHomeFeedData'
import { isSupabaseConfigured } from '@/shared/lib/supabase/config'

import { useAuthStore } from '@/stores/authStore'

type FeedState = {
  posts: FeedPostItem[]
  source: 'mock' | 'supabase'
  isLoading: boolean
  error: string | null
}

export function useHomeFeed(): FeedState {
  const { user } = useAuthStore()
  // Always initialize with mock data but it will be immediately replaced if supabase is configured
  const [posts, setPosts] = useState<FeedPostItem[]>(isSupabaseConfigured() ? [] : mockFeedPosts)
  const [source, setSource] = useState<'mock' | 'supabase'>(isSupabaseConfigured() ? 'supabase' : 'mock')
  const [isLoading, setIsLoading] = useState(isSupabaseConfigured())
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!isSupabaseConfigured()) return

    let cancelled = false

    async function load() {
      setIsLoading(true)
      setError(null)
      try {
        const remote = await fetchFeedPosts(user?.id)
        if (cancelled) return
        setPosts(remote)
        setSource('supabase')
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load feed')
          setPosts([])
          setSource('supabase')
        }
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [user?.id])

  return { posts, source, isLoading, error }
}
