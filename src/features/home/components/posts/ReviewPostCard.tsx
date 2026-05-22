import type { ReviewPostData } from '@/features/home/mocks/mockHomeFeedData'
import { FeedPostActionBar } from './FeedPostActionBar'
import { FeedPostHeader } from './FeedPostHeader'
import { FeedPostArticle } from './FeedPostArticle'
import { StarRating } from './StarRating'

type ReviewPostCardProps = {
  post: ReviewPostData
  onSaveToggle?: (isSaved: boolean) => void
}

/** Feed card: book review with star rating */
export function ReviewPostCard({ post, onSaveToggle }: ReviewPostCardProps) {
  return (
    <FeedPostArticle>
      <FeedPostHeader user={post.user} trailing={<StarRating rating={post.stars} />} />
      <h4 className="mb-2 text-xl font-semibold text-stone-900">{post.title}</h4>
      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-stone-700">{post.body}</p>
      <div className="border-t border-stone-100 pt-4">
        <FeedPostActionBar
          postId={post.id}
          likes={post.likes}
          comments={post.comments}
          showBookmark
          initialIsSaved={post.isSaved}
          onSaveToggle={onSaveToggle}
        />
      </div>
    </FeedPostArticle>
  )
}
