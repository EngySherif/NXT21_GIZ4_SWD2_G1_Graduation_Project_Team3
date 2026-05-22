import { SavedPostFilters, SavedPostsGrid, SavedPostsHeader } from '@/features/saved/components'
import { savedPosts } from '@/features/saved/mocks/mockSavedPostsData'
import { PageContainer } from '@/shared/components/ui'

export function SavedPostsPage() {
  return (
    <PageContainer className="max-w-[1280px]">
      <SavedPostsHeader />
      <SavedPostFilters activeFilter="all" />
      <SavedPostsGrid posts={savedPosts} />
      <div className="mt-16 flex justify-center">
        <button
          type="button"
          className="h-12 rounded-full border border-[#E0E0E0] bg-white px-10 text-sm font-bold text-[#1A0C05] shadow-sm hover:bg-stone-50"
        >
          Load More Saved Posts
        </button>
      </div>
    </PageContainer>
  )
}
