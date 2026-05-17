import type { ReactNode } from 'react'
import type { FeedUser } from '@/features/home/mocks/mockHomeFeedData'
import { Avatar } from '@/shared/components/ui/Avatar'

type FeedPostHeaderProps = {
  user: FeedUser
  timeAgo?: string
  trailing?: ReactNode
}

export function FeedPostHeader({ user, timeAgo, trailing }: FeedPostHeaderProps) {
  return (
    <div className="mb-4 flex items-start justify-between gap-3">
      <div className="flex items-center gap-3">
        <Avatar src={user.avatarUrl} alt={user.name} />
        <div>
          <h3 className="text-base font-semibold text-stone-900">{user.name}</h3>
          {user.activity ? <p className="text-xs text-[#757575]">{user.activity}</p> : null}
          {trailing ? <div className="mt-0.5">{trailing}</div> : null}
        </div>
      </div>
      {timeAgo ? <span className="shrink-0 text-xs text-[#757575]">{timeAgo}</span> : null}
    </div>
  )
}
