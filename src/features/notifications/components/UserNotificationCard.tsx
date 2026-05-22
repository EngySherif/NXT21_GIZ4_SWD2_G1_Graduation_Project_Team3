import type { UserNotification } from '@/features/notifications/mocks/mockNotificationsData'
import { Avatar, BookCover } from '@/shared/components/ui'
import { cn } from '@/shared/lib/utils'

type UserNotificationCardProps = {
  notification: UserNotification
}

export function UserNotificationCard({ notification }: UserNotificationCardProps) {
  const isFollow = notification.kind === 'follow'

  return (
    <article
      className={cn(
        'flex items-start gap-3 rounded-xl border p-4 transition-colors hover:bg-stone-50/50',
        isFollow ? 'border-[#FDEEE7] bg-[#FFF9F6]' : 'border-[#E0E0E0] bg-white',
      )}
    >
      <Avatar src={notification.avatarUrl} alt={notification.user} size="md" />
      <div className="min-w-0 flex-1 text-left">
        <p className="text-xs leading-relaxed text-stone-700">
          <span className="font-bold text-[#1A0C05]">{notification.user}</span>{' '}
          {notification.action}{' '}
          {notification.target ? (
            <span className="font-semibold text-[#261308] italic">{notification.target}</span>
          ) : null}
        </p>
        {notification.quote ? (
          <div className="mt-2 rounded-lg border border-stone-100 bg-[#F9F9F9] p-2.5 font-serif text-[11px] text-stone-500 italic">
            {notification.quote}
          </div>
        ) : null}
        <span className="mt-1 block text-[10px] text-stone-400">{notification.time}</span>
      </div>
      {notification.bookCoverUrl ? (
        <BookCover
          src={notification.bookCoverUrl}
          alt={notification.target ?? 'Book cover'}
          size="sm"
          className="!h-11 !w-8"
        />
      ) : null}
      {notification.canFollowBack ? (
        <button
          type="button"
          className="whitespace-nowrap rounded-full bg-[#261308] px-3 py-1.5 text-[10px] font-bold text-white transition-colors hover:bg-[#3d2516]"
        >
          Follow Back
        </button>
      ) : null}
    </article>
  )
}
