import type { ReadingPostData } from '@/features/home/mocks/mockHomeFeedData'
import { ReadingProgressContent } from './ReadingProgressContent'
import { FeedPostActionBar } from './FeedPostActionBar'
import { FeedPostHeader } from './FeedPostHeader'
import { FeedPostArticle } from './FeedPostArticle'

type ReadingPostCardProps = {
  post: ReadingPostData
}

/** Feed card: user reading progress on a book */
export function ReadingPostCard({ post }: ReadingPostCardProps) {
  return (
    <FeedPostArticle>
      <FeedPostHeader user={post.user} timeAgo={post.user.timeAgo} />
      <ReadingProgressContent
        coverUrl={post.coverUrl}
        title={post.bookTitle}
        author={post.bookAuthor}
        progressPercent={post.progressPercent}
        currentPage={post.currentPage}
        totalPages={post.totalPages}
      />
      <FeedPostActionBar likes={post.likes} comments={post.comments} showBookmark />
    </FeedPostArticle>
  )
}
