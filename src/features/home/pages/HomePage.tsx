import { QuickShareComposer, FeedSidebar } from '@/features/home/components/feed'
import {
  QuotePostCard,
  ReadingPostCard,
  ReviewPostCard,
  ThoughtPostCard,
} from '@/features/home/components/posts'
import {
  quotePost,
  readingPost,
  reviewPost,
  thoughtPost,
} from '@/features/home/mocks/mockHomeFeedData'
import { PageContainer, TwoColumnLayout } from '@/shared/components/ui'

export function HomePage() {
  return (
    <PageContainer>
      <TwoColumnLayout
        main={
          <>
            <QuickShareComposer />
            <ReadingPostCard post={readingPost} />
            <QuotePostCard post={quotePost} />
            <ReviewPostCard post={reviewPost} />
            <ThoughtPostCard post={thoughtPost} />
          </>
        }
        aside={<FeedSidebar />}
      />
    </PageContainer>
  )
}
