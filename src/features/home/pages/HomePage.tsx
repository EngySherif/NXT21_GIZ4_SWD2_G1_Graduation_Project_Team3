import { QuickShareComposer, FeedSidebar } from '@/features/home/components/feed'
import { FeedPostList } from '@/features/home/components/FeedPostList'
import { useHomeFeed } from '@/features/home/hooks/useHomeFeed'
import { PageContainer, TwoColumnLayout } from '@/shared/components/ui'

export function HomePage() {
  const { posts, source, isLoading, error } = useHomeFeed()

  return (
    <PageContainer>
      <TwoColumnLayout
        main={
          <>
            {error ? (
              <p className="rounded-lg bg-amber-50 px-4 py-2 text-sm text-amber-900">
                {error} — showing sample posts.
              </p>
            ) : null}
            {source === 'mock' && !isLoading ? (
              <p className="text-xs text-stone-500">
                Sample feed (add Supabase posts or run schema.sql for live data).
              </p>
            ) : null}
            <QuickShareComposer />
            {isLoading ? (
              <p className="py-8 text-center text-sm text-stone-500">Loading feed…</p>
            ) : (
              <FeedPostList posts={posts} />
            )}
          </>
        }
        aside={<FeedSidebar />}
      />
    </PageContainer>
  )
}
