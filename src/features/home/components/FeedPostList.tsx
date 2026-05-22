import type { FeedPostItem } from '@/features/home/mocks/mockHomeFeedData'
import { QuotePostCard } from './posts/QuotePostCard'
import { ReadingPostCard } from './posts/ReadingPostCard'
import { ReviewPostCard } from './posts/ReviewPostCard'
import { ThoughtPostCard } from './posts/ThoughtPostCard'

type FeedPostListProps = {
  posts: FeedPostItem[]
}

export function FeedPostList({ posts }: FeedPostListProps) {
  return (
    <>
      {posts.map((item) => {
        switch (item.type) {
          case 'reading':
            return <ReadingPostCard key={item.data.id} post={item.data} />
          case 'quote':
            return <QuotePostCard key={item.data.id} post={item.data} />
          case 'review':
            return <ReviewPostCard key={item.data.id} post={item.data} />
          case 'thought':
            return <ThoughtPostCard key={item.data.id} post={item.data} />
          default:
            return null
        }
      })}
    </>
  )
}
