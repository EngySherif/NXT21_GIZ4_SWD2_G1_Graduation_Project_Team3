import type {
  NotificationItem,
  SystemNotification,
} from '@/features/notifications/mocks/mockNotificationsData'
import { SystemNotificationCard } from './SystemNotificationCard'
import { UserNotificationCard } from './UserNotificationCard'

type NotificationSectionProps = {
  title: string
  notifications: NotificationItem[]
}

function isSystemNotification(notification: NotificationItem): notification is SystemNotification {
  return notification.kind === 'trending' || notification.kind === 'progress'
}

export function NotificationSection({ title, notifications }: NotificationSectionProps) {
  return (
    <section>
      <h2 className="mb-3 text-[11px] font-bold tracking-wider text-stone-400 uppercase">
        {title}
      </h2>
      <div className="flex flex-col gap-3">
        {notifications.map((notification) =>
          isSystemNotification(notification) ? (
            <SystemNotificationCard key={notification.id} notification={notification} />
          ) : (
            <UserNotificationCard key={notification.id} notification={notification} />
          ),
        )}
      </div>
    </section>
  )
}
