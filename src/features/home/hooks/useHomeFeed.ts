import { useEffect, useState } from 'react'
import { fetchFeedPosts } from '@/features/home/api/feedApi'
import { feedPosts as mockFeedPosts, type FeedPostItem } from '@/features/home/mocks/mockHomeFeedData'
import { isSupabaseConfigured } from '@/shared/lib/supabase/config'

type FeedState = {
  posts: FeedPostItem[]
  source: 'mock' | 'supabase'
  isLoading: boolean
  error: string | null
}

export function useHomeFeed(): FeedState {
  const [posts, setPosts] = useState<FeedPostItem[]>(mockFeedPosts)
  const [source, setSource] = useState<'mock' | 'supabase'>('mock')
  const [isLoading, setIsLoading] = useState(isSupabaseConfigured())
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!isSupabaseConfigured()) return

    let cancelled = false

    async function load() {
      setIsLoading(true)
      setError(null)
      try {
        const remote = await fetchFeedPosts()
        if (cancelled) return
        if (remote.length > 0) {
          setPosts(remote)
          setSource('supabase')
        } else {
          setPosts(mockFeedPosts)
          setSource('mock')
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load feed')
          setPosts(mockFeedPosts)
          setSource('mock')
        }
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [])

  return { posts, source, isLoading, error }
}
