import { Icon } from '@/shared/components/ui'

export function SavedBookmarkButton() {
  return (
    <button
      type="button"
      className="text-[#1E90FF] transition-colors hover:text-[#0B6FCC]"
      aria-label="Remove from saved posts"
    >
      <Icon name="bookmark" />
    </button>
  )
}
