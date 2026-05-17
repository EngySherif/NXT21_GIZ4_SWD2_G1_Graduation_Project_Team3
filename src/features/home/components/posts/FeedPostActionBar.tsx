import { formatCount } from '@/features/home/mocks/mockHomeFeedData'
import { cn } from '@/shared/lib/utils'
import { PostSocialActionButton } from '@/shared/components/ui/PostSocialActionButton'

type FeedPostActionBarProps = {
  likes: number
  comments?: number
  shares?: number
  showBookmark?: boolean
}

export function FeedPostActionBar({ likes, comments, shares, showBookmark }: FeedPostActionBarProps) {
  return (
    <div className={cn('flex items-center gap-6', showBookmark && 'justify-between')}>
      <div className="flex items-center gap-6">
        <PostSocialActionButton icon="favorite" count={formatCount(likes)} hoverColor="heart" />
        {comments !== undefined ? (
          <PostSocialActionButton icon="chat_bubble" count={comments} hoverColor="brand" />
        ) : null}
        {shares !== undefined ? (
          <PostSocialActionButton icon="share" count={shares} hoverColor="brand" />
        ) : null}
      </div>
      {showBookmark ? (
        <PostSocialActionButton
          icon="bookmark"
          hoverColor="bookmark"
          className="ml-auto"
          aria-label="Save post"
        />
      ) : null}
    </div>
  )
}
