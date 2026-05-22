import type { SavedQuotePost } from '@/features/saved/mocks/mockSavedPostsData'
import { Avatar, BookCover, Card, Icon, PostSocialActionButton } from '@/shared/components/ui'
import { SavedBookmarkButton } from './SavedBookmarkButton'

type SavedQuotePostCardProps = {
  post: SavedQuotePost
}

export function SavedQuotePostCard({ post }: SavedQuotePostCardProps) {
  return (
    <Card as="article" className="p-6 lg:col-span-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar src={post.author.avatarUrl} alt={post.author.name} />
          <div>
            <h2 className="text-base font-bold text-[#1A0C05]">{post.author.name}</h2>
            <p className="text-xs text-[#757575]">
              {post.savedLabel} • From &quot;{post.bookTitle}&quot;
            </p>
          </div>
        </div>
        <SavedBookmarkButton />
      </div>

      <div className="grid gap-6 sm:grid-cols-[150px_1fr]">
        <BookCover
          src={post.coverUrl}
          alt={post.bookTitle}
          className="h-48 w-36 rounded-lg shadow-lg"
        />
        <div>
          <blockquote className="mb-5 border-l-4 border-[#fecb97] pl-5 font-[family-name:var(--font-quote)] text-lg italic leading-relaxed text-[#1A0C05]">
            &ldquo;{post.quote}&rdquo;
          </blockquote>
          <p className="text-sm leading-relaxed text-[#504440]">{post.body}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-5">
        <div className="flex items-center gap-8">
          <PostSocialActionButton icon="favorite" count={post.likes} hoverColor="heart" />
          <PostSocialActionButton icon="chat_bubble" count={post.comments} />
        </div>
        <button type="button" aria-label="Share saved post" className="text-[#757575] hover:text-[#7c572d]">
          <Icon name="share" />
        </button>
      </div>
    </Card>
  )
}
