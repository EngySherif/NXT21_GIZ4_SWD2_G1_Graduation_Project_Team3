import type { SavedProgressPost } from '@/features/saved/mocks/mockSavedPostsData'
import { Card, Icon, ProgressBar } from '@/shared/components/ui'
import { SavedBookmarkButton } from './SavedBookmarkButton'

type SavedProgressCardProps = {
  post: SavedProgressPost
}

export function SavedProgressCard({ post }: SavedProgressCardProps) {
  return (
    <Card as="article" className="flex flex-col gap-5 p-7 lg:col-span-4">
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#FFF2E2] text-[#8B572A]">
          <Icon name="menu_book" size="lg" />
        </div>
        <SavedBookmarkButton />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#1A0C05]">{post.title}</h2>
        <p className="mt-1 text-sm text-[#757575]">{post.author}</p>
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between text-sm font-bold text-[#1A0C05]">
          <span>Progress</span>
          <span>{post.progressPercent}%</span>
        </div>
        <ProgressBar
          value={post.progressPercent}
          className="!h-2"
          barClassName="!h-2 !bg-[#8B572A]"
        />
      </div>

      <p className="line-clamp-3 text-sm leading-relaxed text-[#504440]">&quot;{post.note}&quot;</p>
      <button
        type="button"
        className="mt-auto h-10 rounded-lg border border-[#E0E0E0] text-sm font-bold text-[#1A0C05] hover:bg-stone-50"
      >
        View Progress Log
      </button>
    </Card>
  )
}
