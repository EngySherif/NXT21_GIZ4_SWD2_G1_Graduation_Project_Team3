import type { FeedPostItem } from '@/features/home/mocks/mockHomeFeedData'
import { cn } from '@/shared/lib/utils'
import { QuotePostCard } from './posts/QuotePostCard'
import { ReadingPostCard } from './posts/ReadingPostCard'
import { ReviewPostCard } from './posts/ReviewPostCard'
import { ThoughtPostCard } from './posts/ThoughtPostCard'

type FeedPostListProps = {
  posts: FeedPostItem[]
  onSaveToggle?: (postId: string, isSaved: boolean) => void
  removingPostIds?: string[]
}

export function FeedPostList({ posts, onSaveToggle, removingPostIds = [] }: FeedPostListProps) {
  return (
    <>
      {posts.map((item) => {
        const isRemoving = removingPostIds.includes(item.data.id)
        const handleSaveToggle = onSaveToggle
          ? (isSaved: boolean) => onSaveToggle(item.data.id, isSaved)
          : undefined

        let cardElement = null
        switch (item.type) {
          case 'reading':
            cardElement = <ReadingPostCard post={item.data} onSaveToggle={handleSaveToggle} />
            break
          case 'quote':
            cardElement = <QuotePostCard post={item.data} onSaveToggle={handleSaveToggle} />
            break
          case 'review':
            cardElement = <ReviewPostCard post={item.data} onSaveToggle={handleSaveToggle} />
            break
          case 'thought':
            cardElement = <ThoughtPostCard post={item.data} onSaveToggle={handleSaveToggle} />
            break
          default:
            return null
        }

        return (
          <div
            key={item.data.id}
            className={cn(
              "transition-all duration-400",
              isRemoving && "animate-card-fade-out"
            )}
          >
            {cardElement}
          </div>
        )
      })}
    </>
  )
}
