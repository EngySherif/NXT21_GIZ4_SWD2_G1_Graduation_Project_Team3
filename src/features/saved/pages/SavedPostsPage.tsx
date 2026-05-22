import { useEffect, useState } from 'react'
import { SavedPostFilters, SavedPostsHeader } from '@/features/saved/components'
import { PageContainer } from '@/shared/components/ui'
import { useAuthStore } from '@/stores/authStore'
import { fetchSavedPosts } from '@/features/saved/api/savedApi'
import { FeedPostList } from '@/features/home/components/FeedPostList'
import type { FeedPostItem } from '@/features/home/mocks/mockHomeFeedData'

export function SavedPostsPage() {
  const { user } = useAuthStore()
  const [posts, setPosts] = useState<FeedPostItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [removingPostIds, setRemovingPostIds] = useState<string[]>([])

  useEffect(() => {
    async function loadSavedPosts() {
      if (!user) return
      setIsLoading(true)
      try {
        const data = await fetchSavedPosts(user.id)
        setPosts(data)
      } catch (error) {
        console.error('Failed to load saved posts:', error)
      } finally {
        setIsLoading(false)
      }
    }
    loadSavedPosts()
  }, [user])

  const handleSaveToggle = (postId: string, isSaved: boolean) => {
    if (!isSaved) {
      // The post was unbookmarked/unsaved
      // 1. Mark as removing to trigger the exit fade-out collapse animation
      setRemovingPostIds((prev) => [...prev, postId])

      // 2. Wait for 450ms (matches CSS animation duration) before official removal
      setTimeout(() => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.data.id !== postId))
        setRemovingPostIds((prev) => prev.filter((id) => id !== postId))
      }, 450)
    }
  }

  return (
    <PageContainer className="max-w-[1280px]">
      <SavedPostsHeader />
      <SavedPostFilters activeFilter="all" />
      
      {isLoading ? (
        <div className="py-20 text-center text-stone-500">Loading saved posts...</div>
      ) : posts.length > 0 ? (
        <div className="mx-auto max-w-2xl mt-8">
          <FeedPostList
            posts={posts}
            onSaveToggle={handleSaveToggle}
            removingPostIds={removingPostIds}
          />
        </div>
      ) : (
        <div className="py-20 text-center text-stone-500">You haven't saved any posts yet.</div>
      )}

      {posts.length > 0 && (
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            className="h-12 rounded-full border border-[#E0E0E0] bg-white px-10 text-sm font-bold text-[#1A0C05] shadow-sm hover:bg-stone-50"
          >
            Load More Saved Posts
          </button>
        </div>
      )}
    </PageContainer>
  )
}
