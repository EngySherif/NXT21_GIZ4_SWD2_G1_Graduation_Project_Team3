import { FeedFooterLinks } from './FeedFooterLinks'
import { ReadingChallengeWidget } from './ReadingChallengeWidget'
import { TrendingSection } from './TrendingSection'

/** Right column on Home: trending, challenge, footer links */
export function FeedSidebar() {
  return (
    <aside className="flex flex-col gap-8">
      <TrendingSection />
      <ReadingChallengeWidget />
      <FeedFooterLinks />
    </aside>
  )
}
