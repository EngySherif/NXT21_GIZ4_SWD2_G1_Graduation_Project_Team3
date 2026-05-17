import type { QuotePostData } from '@/features/home/mocks/mockHomeFeedData'
import { FeedPostActionBar } from './FeedPostActionBar'
import { FeedPostHeader } from './FeedPostHeader'
import { FeedPostArticle } from './FeedPostArticle'
import { QuotePostContent } from './QuotePostContent'

type QuotePostCardProps = {
  post: QuotePostData
}

/** Feed card: user shared a book quote */
export function QuotePostCard({ post }: QuotePostCardProps) {
  return (
    <FeedPostArticle>
      <FeedPostHeader user={post.user} />
      <QuotePostContent quote={post.quote} attribution={post.attribution} />
      <div className="border-t border-stone-100 pt-4">
        <FeedPostActionBar likes={post.likes} shares={post.shares} />
      </div>
    </FeedPostArticle>
  )
}
