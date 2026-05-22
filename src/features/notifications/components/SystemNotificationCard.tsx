import type { SystemNotification } from '@/features/notifications/mocks/mockNotificationsData'
import { Icon, ProgressBar } from '@/shared/components/ui'

type SystemNotificationCardProps = {
  notification: SystemNotification
}

export function SystemNotificationCard({ notification }: SystemNotificationCardProps) {
  return (
    <article className="flex items-start gap-3 rounded-xl border border-[#E0E0E0] bg-white p-4 transition-colors hover:bg-stone-50/50">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-100 bg-[#F9F9F9] text-[#261308]">
        <Icon name={notification.icon} />
      </div>
      <div className="flex-1 text-left">
        <p className="text-xs leading-relaxed text-stone-700">
          {notification.action}{' '}
          {notification.target ? (
            <span className="font-bold text-[#261308]">{notification.target}</span>
          ) : null}
        </p>
        {notification.stats ? (
          <span className="mt-1 block text-[10px] font-medium text-stone-500">
            {notification.stats}
          </span>
        ) : null}
        {notification.progress !== undefined ? (
          <div className="mt-2.5 max-w-xs">
            <ProgressBar value={notification.progress} />
          </div>
        ) : null}
        <span className="mt-1.5 block text-[10px] text-stone-400">{notification.time}</span>
      </div>
    </article>
  )
}
