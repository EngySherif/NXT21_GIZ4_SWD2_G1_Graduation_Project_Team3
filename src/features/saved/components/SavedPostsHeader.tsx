import { Icon } from '@/shared/components/ui'

export function SavedPostsHeader() {
  return (
    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[#1A0C05]">Saved Posts</h1>
      </div>
      <div className="flex items-center gap-4 text-sm text-[#757575]">
        <span>Sorted by: Newest</span>
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[#2C1810] hover:bg-stone-100"
          aria-label="Sort saved posts"
        >
          <Icon name="sort" />
        </button>
      </div>
    </header>
  )
}
