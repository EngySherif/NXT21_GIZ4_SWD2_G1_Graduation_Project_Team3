import {
  NotificationSection,
  NotificationsPageHeader,
  NotificationsSidebar,
} from '@/features/notifications/components'
import { notificationsData } from '@/features/notifications/mocks/mockNotificationsData'
import { PageContainer, TwoColumnLayout } from '@/shared/components/ui'

export function NotificationsPage() {
  return (
    <PageContainer>
      <NotificationsPageHeader />
      <TwoColumnLayout
        main={
          <div className="flex flex-col gap-6">
            <NotificationSection title="Today" notifications={notificationsData.today} />
            <NotificationSection title="This Week" notifications={notificationsData.thisWeek} />
          </div>
        }
        aside={<NotificationsSidebar />}
      />
    </PageContainer>
  )
}
