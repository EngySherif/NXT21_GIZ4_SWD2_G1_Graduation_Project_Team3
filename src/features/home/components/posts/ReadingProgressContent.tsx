import { BookCover } from '@/shared/components/ui/BookCover'
import { ProgressBar } from '@/shared/components/ui/ProgressBar'

type ReadingProgressContentProps = {
  coverUrl: string
  title: string
  author: string
  progressPercent: number
  currentPage: number
  totalPages: number
}

export function ReadingProgressContent({
  coverUrl,
  title,
  author,
  progressPercent,
  currentPage,
  totalPages,
}: ReadingProgressContentProps) {
  return (
    <div className="mb-4 flex gap-4 rounded-lg bg-stone-50 p-4">
      <BookCover src={coverUrl} alt={title} size="md" />
      <div className="flex flex-1 flex-col justify-center py-1">
        <h4 className="text-xl font-semibold text-[#2C1810]">{title}</h4>
        <p className="mb-4 text-xs text-[#757575]">by {author}</p>
        <ProgressBar value={progressPercent} className="mb-2" />
        <div className="flex justify-between text-xs font-medium">
          <span className="text-[#7c572d]">{progressPercent}% completed</span>
          <span className="text-[#757575]">
            Page {currentPage} of {totalPages}
          </span>
        </div>
      </div>
    </div>
  )
}
