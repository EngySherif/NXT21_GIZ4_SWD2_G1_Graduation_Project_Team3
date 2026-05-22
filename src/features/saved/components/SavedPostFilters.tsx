import type { SavedFilter } from '@/features/saved/mocks/mockSavedPostsData'
import { savedFilters } from '@/features/saved/mocks/mockSavedPostsData'
import { cn } from '@/shared/lib/utils'

type SavedPostFiltersProps = {
  activeFilter: SavedFilter
}

export function SavedPostFilters({ activeFilter }: SavedPostFiltersProps) {
  return (
    <div className="mb-8 flex gap-3 overflow-x-auto pb-1">
      {savedFilters.map((filter) => {
        const isActive = filter.id === activeFilter
        return (
          <button
            key={filter.id}
            type="button"
            className={cn(
              'h-10 shrink-0 rounded-full border px-6 text-sm font-semibold transition-colors',
              isActive
                ? 'border-[#2C1810] bg-[#2C1810] text-white'
                : 'border-[#E0E0E0] bg-white text-[#504440] hover:border-[#7c572d]',
            )}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}
