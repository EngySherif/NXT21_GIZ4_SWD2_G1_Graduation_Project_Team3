import { FollowSuggestionsCard } from './FollowSuggestionsCard'
import { TrendingNotificationsCard } from './TrendingNotificationsCard'

export function NotificationsSidebar() {
  return (
    <aside className="flex flex-col gap-5">
      <TrendingNotificationsCard />
      <FollowSuggestionsCard />
    </aside>
  )
}
