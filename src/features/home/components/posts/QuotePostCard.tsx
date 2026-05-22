import type { QuotePostData } from '@/features/home/mocks/mockHomeFeedData'
import { FeedPostActionBar } from './FeedPostActionBar'
import { FeedPostHeader } from './FeedPostHeader'
import { FeedPostArticle } from './FeedPostArticle'
import { QuotePostContent } from './QuotePostContent'

type QuotePostCardProps = {
  post: QuotePostData
  onSaveToggle?: (isSaved: boolean) => void
}

/** Feed card: user shared a book quote */
export function QuotePostCard({ post, onSaveToggle }: QuotePostCardProps) {
  return (
    <FeedPostArticle>
      <FeedPostHeader user={post.user} />
      <QuotePostContent quote={post.quote} attribution={post.attribution} />
      <div className="border-t border-stone-100 pt-4">
        <FeedPostActionBar
          postId={post.id}
          likes={post.likes}
          shares={post.shares}
          showBookmark
          initialIsSaved={post.isSaved}
          onSaveToggle={onSaveToggle}
        />
      </div>
    </FeedPostArticle>
  )
}
