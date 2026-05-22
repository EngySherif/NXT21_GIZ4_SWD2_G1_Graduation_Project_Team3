import { useState } from 'react'
import { formatCount } from '@/features/home/mocks/mockHomeFeedData'
import { cn } from '@/shared/lib/utils'
import { PostSocialActionButton } from '@/shared/components/ui/PostSocialActionButton'
import { toggleSavePost } from '@/features/saved/api/savedApi'
import { useAuthStore } from '@/stores/authStore'

type FeedPostActionBarProps = {
  postId: string
  likes: number
  comments?: number
  shares?: number
  showBookmark?: boolean
  initialIsSaved?: boolean
  onSaveToggle?: (isSaved: boolean) => void
}

export function FeedPostActionBar({
  postId,
  likes,
  comments,
  shares,
  showBookmark,
  initialIsSaved = false,
  onSaveToggle,
}: FeedPostActionBarProps) {
  const { user } = useAuthStore()
  const [isSaved, setIsSaved] = useState(initialIsSaved)
  const [animateState, setAnimateState] = useState<'none' | 'in' | 'out'>('none')

  const handleToggleSave = async () => {
    if (!user) {
      alert('You must be logged in to save posts.')
      return
    }

    // Optimistic UI update
    const previousState = isSaved
    const newSavedState = !previousState
    setIsSaved(newSavedState)
    setAnimateState(newSavedState ? 'in' : 'out')

    if (onSaveToggle) {
      onSaveToggle(newSavedState)
    }

    try {
      await toggleSavePost(postId, user.id, previousState)
    } catch (error) {
      // Revert if API fails
      setIsSaved(previousState)
      setAnimateState(previousState ? 'in' : 'out')
      if (onSaveToggle) {
        onSaveToggle(previousState)
      }
      alert('Failed to save post. Please try again.')
    }
  }

  return (
    <div className={cn('flex items-center gap-6', showBookmark && 'justify-between')}>
      <div className="flex items-center gap-6">
        <PostSocialActionButton icon="favorite" count={formatCount(likes)} hoverColor="heart" />
        {comments !== undefined ? (
          <PostSocialActionButton icon="chat_bubble" count={comments} hoverColor="brand" />
        ) : null}
        {shares !== undefined ? (
          <PostSocialActionButton icon="share" count={shares} hoverColor="brand" />
        ) : null}
      </div>
      {showBookmark ? (
        <PostSocialActionButton
          icon="bookmark"
          hoverColor="bookmark"
          filled={isSaved}
          className={cn(
            "ml-auto transition-colors duration-300", 
            isSaved ? "text-[#42A5F5]" : "text-[#757575]",
            animateState === 'in' && 'animate-bookmark-in',
            animateState === 'out' && 'animate-bookmark-out'
          )}
          aria-label={isSaved ? "Unsave post" : "Save post"}
          onClick={handleToggleSave}
        />
      ) : null}
    </div>
  )
}
