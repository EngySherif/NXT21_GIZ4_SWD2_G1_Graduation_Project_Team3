import type { TrendingBook } from '@/features/home/mocks/mockHomeFeedData'
import { BookCover } from '@/shared/components/ui/BookCover'
import { Icon } from '@/shared/components/ui/Icon'

type TrendingBookRowProps = {
  book: TrendingBook
}

export function TrendingBookRow({ book }: TrendingBookRowProps) {
  return (
    <button
      type="button"
      className="group flex w-full gap-3 text-left transition-transform hover:opacity-90"
    >
      <BookCover
        src={book.coverUrl}
        alt={book.title}
        size="sm"
        className="transition-transform group-hover:scale-105"
      />
      <div>
        <h4 className="text-base font-semibold leading-tight text-stone-900">{book.title}</h4>
        <p className="text-xs text-[#757575]">{book.author}</p>
        <p className="mt-1 flex items-center gap-1 text-xs text-[#7c572d]">
          <Icon name="groups" size="sm" />
          {book.readersLabel}
        </p>
      </div>
    </button>
  )
}
