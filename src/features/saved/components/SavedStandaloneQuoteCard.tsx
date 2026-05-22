import type { SavedStandaloneQuote } from '@/features/saved/mocks/mockSavedPostsData'
import { Card, Icon } from '@/shared/components/ui'
import { SavedBookmarkButton } from './SavedBookmarkButton'

type SavedStandaloneQuoteCardProps = {
  post: SavedStandaloneQuote
}

export function SavedStandaloneQuoteCard({ post }: SavedStandaloneQuoteCardProps) {
  return (
    <Card as="article" variant="brand" className="flex min-h-[320px] flex-col p-7 lg:col-span-4">
      <div className="mb-8 flex items-start justify-between">
        <Icon name="format_quote" size="lg" className="text-[#fecb97]" />
        <SavedBookmarkButton />
      </div>
      <blockquote className="font-[family-name:var(--font-quote)] text-lg italic leading-relaxed">
        &ldquo;{post.quote}&rdquo;
      </blockquote>
      <p className="mt-8 font-bold text-[#fecb97]">— {post.author}</p>
      <div className="mt-auto flex items-center gap-2 text-sm text-white/60">
        <Icon name="schedule" size="sm" />
        {post.savedDate}
      </div>
    </Card>
  )
}
