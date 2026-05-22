import type { SavedReadingListPost } from '@/features/saved/mocks/mockSavedPostsData'
import { Avatar, Card, Icon } from '@/shared/components/ui'
import { SavedBookmarkButton } from './SavedBookmarkButton'

type SavedReadingListCardProps = {
  post: SavedReadingListPost
}

export function SavedReadingListCard({ post }: SavedReadingListCardProps) {
  return (
    <Card as="article" padding="none" className="overflow-hidden lg:col-span-8">
      <div className="grid min-h-[420px] md:grid-cols-[1fr_1fr]">
        <img src={post.imageUrl} alt="" className="h-full min-h-[280px] w-full object-cover" />
        <div className="flex flex-col p-7">
          <div className="mb-5 flex items-start justify-between">
            <span className="rounded-md bg-[#DCEADD] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#1A0C05]">
              {post.label}
            </span>
            <SavedBookmarkButton />
          </div>
          <h2 className="mb-5 max-w-sm text-3xl font-bold leading-tight text-[#1A0C05]">
            {post.title}
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-[#504440]">{post.body}</p>
          <div className="mt-auto flex items-center justify-between pt-8">
            <div className="flex items-center">
              {post.readers.map((reader) => (
                <Avatar
                  key={reader.id}
                  src={reader.avatarUrl}
                  alt=""
                  size="sm"
                  className="-mr-2 border-2 border-white"
                />
              ))}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-200 text-[10px] font-bold text-[#504440]">
                +{post.extraReaders}
              </span>
            </div>
            <button
              type="button"
              className="flex items-center gap-2 text-sm font-bold text-[#8B572A] hover:underline"
            >
              Read Article
              <Icon name="arrow_forward" size="sm" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}
