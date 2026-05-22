import { Icon } from '@/shared/components/ui'

export function ProfileActions() {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        className="h-12 rounded-lg bg-[#2C1810] px-8 text-sm font-bold text-white shadow-md transition-opacity hover:opacity-90"
      >
        Edit Profile
      </button>
      <button
        type="button"
        className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#E0E0E0] bg-white text-[#1A0C05] transition-colors hover:bg-stone-50"
        aria-label="Profile settings"
      >
        <Icon name="settings" size="lg" />
      </button>
    </div>
  )
}
