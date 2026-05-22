import type { SavedReviewPost } from '@/features/saved/mocks/mockSavedPostsData'
import { Avatar, Card } from '@/shared/components/ui'
import { SavedBookmarkButton } from './SavedBookmarkButton'

type SavedReviewCardProps = {
  post: SavedReviewPost
}

export function SavedReviewCard({ post }: SavedReviewCardProps) {
  return (
    <Card as="article" className="flex min-h-[420px] flex-col p-7 lg:col-span-4">
      <div className="mb-7 flex items-start justify-between">
        <div className="text-[#FFD700]" aria-label={`${post.rating} stars`}>
          {'★'.repeat(post.rating)}
        </div>
        <SavedBookmarkButton />
      </div>
      <h2 className="mb-4 text-xl font-bold text-[#1A0C05]">{post.title}</h2>
      <p className="line-clamp-4 text-base leading-relaxed text-[#2F2A28]">{post.body}</p>
      <div className="mt-6 flex items-center gap-3">
        <Avatar src={post.reviewer.avatarUrl} alt={post.reviewer.name} size="sm" />
        <span className="text-sm font-medium text-[#1A0C05]">Review by {post.reviewer.name}</span>
      </div>
    </Card>
  )
}
