import type { ThoughtPostData } from '@/features/home/mocks/mockHomeFeedData'
import { FeedPostActionBar } from './FeedPostActionBar'
import { FeedPostHeader } from './FeedPostHeader'
import { FeedPostArticle } from './FeedPostArticle'

type ThoughtPostCardProps = {
  post: ThoughtPostData
}

/** Feed card: free-form reading thought */
export function ThoughtPostCard({ post }: ThoughtPostCardProps) {
  return (
    <FeedPostArticle>
      <FeedPostHeader user={post.user} />
      <p className="mb-4 text-sm leading-relaxed text-[#1C1C1C]">{post.body}</p>
      <FeedPostActionBar likes={post.likes} comments={post.comments} />
    </FeedPostArticle>
  )
}
