import type { ThoughtPostData } from '@/features/home/mocks/mockHomeFeedData'
import { FeedPostActionBar } from './FeedPostActionBar'
import { FeedPostHeader } from './FeedPostHeader'
import { FeedPostArticle } from './FeedPostArticle'

type ThoughtPostCardProps = {
  post: ThoughtPostData
  onSaveToggle?: (isSaved: boolean) => void
}

/** Feed card: free-form reading thought */
export function ThoughtPostCard({ post, onSaveToggle }: ThoughtPostCardProps) {
  return (
    <FeedPostArticle>
      <FeedPostHeader user={post.user} />
      <p className="mb-4 text-sm leading-relaxed text-[#1C1C1C]">{post.body}</p>
      <div className="border-t border-stone-100 pt-4 mt-4">
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
