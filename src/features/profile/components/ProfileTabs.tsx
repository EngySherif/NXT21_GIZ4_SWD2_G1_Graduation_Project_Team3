import type { ProfileTab } from '@/features/profile/mocks/mockProfileData'
import { cn } from '@/shared/lib/utils'

type ProfileTabsProps = {
  tabs: ProfileTab[]
  activeTab: ProfileTab['id']
}

export function ProfileTabs({ tabs, activeTab }: ProfileTabsProps) {
  return (
    <nav className="mx-auto mt-12 max-w-[980px] border-b border-[#E0E0E0] px-4 sm:px-6 lg:px-0">
      <div className="flex gap-8 sm:gap-16">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab
          return (
            <button
              key={tab.id}
              type="button"
              className={cn(
                'relative h-12 px-1 text-sm font-bold transition-colors',
                isActive ? 'text-[#1A0C05]' : 'text-[#757575] hover:text-[#1A0C05]',
              )}
            >
              {tab.label}
              {isActive ? (
                <span className="absolute right-0 bottom-0 left-0 h-0.5 bg-[#1A0C05]" />
              ) : null}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
