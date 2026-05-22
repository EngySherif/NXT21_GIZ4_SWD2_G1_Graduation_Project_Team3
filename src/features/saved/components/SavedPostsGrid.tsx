import type { SavedPost } from '@/features/saved/mocks/mockSavedPostsData'
import { SavedProgressCard } from './SavedProgressCard'
import { SavedQuotePostCard } from './SavedQuotePostCard'
import { SavedReadingListCard } from './SavedReadingListCard'
import { SavedReviewCard } from './SavedReviewCard'
import { SavedStandaloneQuoteCard } from './SavedStandaloneQuoteCard'

type SavedPostsGridProps = {
  posts: SavedPost[]
}

export function SavedPostsGrid({ posts }: SavedPostsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {posts.map((post) => {
        switch (post.type) {
          case 'quote-post':
            return <SavedQuotePostCard key={post.id} post={post} />
          case 'progress':
            return <SavedProgressCard key={post.id} post={post} />
          case 'review':
            return <SavedReviewCard key={post.id} post={post} />
          case 'reading-list':
            return <SavedReadingListCard key={post.id} post={post} />
          case 'quote':
            return <SavedStandaloneQuoteCard key={post.id} post={post} />
          default:
            return null
        }
      })}
    </div>
  )
}
