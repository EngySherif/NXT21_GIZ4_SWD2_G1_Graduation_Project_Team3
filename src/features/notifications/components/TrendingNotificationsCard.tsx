import { trendingTopics } from '@/features/notifications/mocks/mockNotificationsData'
import { Card } from '@/shared/components/ui'

export function TrendingNotificationsCard() {
  return (
    <Card as="section">
      <h3 className="mb-3 text-left text-xs font-bold text-[#1A0C05]">
        Trending in BookShare
      </h3>
      <div className="flex flex-col gap-3 text-left text-xs">
        {trendingTopics.map((topic, index) => (
          <div key={topic.id}>
            {index > 0 ? <hr className="mb-3 border-stone-100" /> : null}
            <span className="block text-[10px] text-stone-400">{topic.eyebrow}</span>
            <button
              type="button"
              className="block cursor-pointer font-bold text-[#1A0C05] hover:underline"
            >
              {topic.title}
            </button>
            <span className="block text-[10px] text-stone-400">{topic.metric}</span>
          </div>
        ))}
        <button
          type="button"
          className="mt-2 w-full text-center text-[11px] font-semibold text-[#261308] hover:underline"
        >
          Show more
        </button>
      </div>
    </Card>
  )
}
