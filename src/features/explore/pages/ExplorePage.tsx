import { PageContainer, TwoColumnLayout } from '@/shared/components/ui'
import { Card } from '@/shared/components/ui/Card'
import { SectionHeader } from '@/shared/components/ui/SectionHeader'
import { Button } from '@/shared/components/ui/Button'
import { BookCover } from '@/shared/components/ui/BookCover'
import { Icon } from '@/shared/components/ui/Icon'
import { FeedSidebar } from '@/features/home/components/feed'
import { trendingBooks, reviewPost } from '@/features/home/mocks/mockHomeFeedData'

export function ExplorePage() {
  const topTrending = trendingBooks.slice(0, 3)
  const genres = ['Thriller', 'Romance', 'Sci-Fi', 'Non-Fiction', 'History', 'Fantasy', 'Philosophy']

  return (
    <PageContainer>
      <TwoColumnLayout
        main={
          <>
            {/* Trending This Week */}
            <Card as="section" className="mb-6">
              <SectionHeader title="Trending This Week" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {topTrending.map((b) => (
                  <div key={b.id} className="flex flex-col gap-3">
                    <div className="rounded-lg overflow-hidden">
                      <BookCover src={b.coverUrl} alt={b.title} size="lg" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-stone-900">{b.title}</h3>
                      <p className="text-xs text-stone-500">{b.author}</p>
                      <div className="mt-3">
                        <Button variant="secondary" size="sm">Read Review</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Daily Inspiration */}
            <Card as="section" className="mb-6">
              <SectionHeader title="Daily Inspiration" />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-[#eee] bg-white p-4">
                  <blockquote className="text-sm text-stone-800">“The world was hers for the reading. She could go anywhere, and she was never lonely.”</blockquote>
                  <div className="mt-3 flex items-center gap-3">
                    <BookCover src={topTrending[0].coverUrl} alt={topTrending[0].title} size="sm" />
                    <div>
                      <div className="text-xs font-semibold">A Tree Grows in Brooklyn</div>
                      <div className="text-xs text-stone-500">Betty Smith</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-[#eee] bg-white p-4">
                  <blockquote className="text-sm text-stone-800">“Stories are a different kind of true. They tell us what we need to know to survive.”</blockquote>
                  <div className="mt-3 flex items-center gap-3">
                    <BookCover src={topTrending[1].coverUrl} alt={topTrending[1].title} size="sm" />
                    <div>
                      <div className="text-xs font-semibold">The Starless Sea</div>
                      <div className="text-xs text-stone-500">Erin Morgenstern</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Explore Genres */}
            <Card as="section" className="mb-6">
              <SectionHeader title="Explore Genres" />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
                {genres.map((g) => (
                  <button
                    key={g}
                    type="button"
                    className="flex h-24 items-end justify-start rounded-lg bg-[#111827] px-3 py-2 text-white shadow-sm"
                  >
                    <span className="text-sm font-semibold">{g}</span>
                  </button>
                ))}
                <div className="flex items-center justify-center rounded-lg border border-dashed border-stone-200">View All</div>
              </div>
            </Card>

            {/* Popular Reviews */}
            <Card as="section">
              <SectionHeader title="Popular Reviews" />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {[reviewPost, reviewPost, reviewPost].map((r, idx) => (
                  <article key={idx} className="rounded-lg border border-[#eee] bg-white p-4">
                    <div className="flex items-start gap-3">
                      <img src={r.user.avatarUrl} alt={r.user.name} className="h-10 w-10 rounded-full" />
                      <div>
                        <div className="text-sm font-semibold">{r.user.name}</div>
                        <div className="text-xs text-stone-500">{r.stars} ⭐ — {r.title}</div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-stone-700 line-clamp-3">{r.body}</p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-stone-500">
                      <span className="flex items-center gap-1"><Icon name="thumb_up" size="sm" /> {r.likes}</span>
                      <span className="flex items-center gap-1"><Icon name="chat" size="sm" /> {r.comments}</span>
                    </div>
                  </article>
                ))}
              </div>
            </Card>
          </>
        }
        aside={<FeedSidebar />}
      />
    </PageContainer>
  )
}
