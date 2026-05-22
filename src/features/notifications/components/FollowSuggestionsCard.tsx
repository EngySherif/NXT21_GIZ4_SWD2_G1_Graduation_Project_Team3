import { followSuggestions } from '@/features/notifications/mocks/mockNotificationsData'
import { Avatar, Card } from '@/shared/components/ui'

export function FollowSuggestionsCard() {
  return (
    <Card as="section">
      <h3 className="mb-3 text-left text-xs font-bold text-[#1A0C05]">Who to follow</h3>
      <div className="flex flex-col gap-3.5 text-left">
        {followSuggestions.map((suggestion) => (
          <div key={suggestion.id} className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2">
              <Avatar src={suggestion.avatarUrl} alt={suggestion.name} size="sm" />
              <div className="min-w-0">
                <span className="block truncate text-xs font-bold text-[#1A0C05]">
                  {suggestion.name}
                </span>
                <span className="block truncate text-[10px] text-stone-400">
                  {suggestion.description}
                </span>
              </div>
            </div>
            <button
              type="button"
              className="rounded-full border border-stone-300 px-3 py-1 text-[10px] font-bold text-[#1A0C05] hover:bg-stone-50"
            >
              Follow
            </button>
          </div>
        ))}
      </div>
    </Card>
  )
}
