import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/config/routes'
import { currentUser } from '@/features/home/mocks/mockHomeFeedData'
import { cn } from '@/shared/lib/utils'
import { Avatar } from '@/shared/components/ui/Avatar'
import { Card } from '@/shared/components/ui/Card'
import { Icon } from '@/shared/components/ui/Icon'
import { IconButton } from '@/shared/components/ui/IconButton'

const quickActions = [
  { icon: 'format_quote', label: 'Quote' },
  { icon: 'star', label: 'Review' },
  { icon: 'menu_book', label: 'Reading' },
] as const

export function QuickShareComposer() {
  return (
    <Card className="flex items-center gap-4">
      <Avatar src={currentUser.avatarUrl} alt="Your avatar" />
      <Link
        to={ROUTES.create}
        className={cn(
          'flex-1 rounded-lg border border-stone-200 bg-stone-50 px-4 py-3',
          'text-sm text-stone-400 transition-colors hover:border-[#7c572d] hover:text-stone-600',
        )}
      >
        Share a bookish thought...
      </Link>
      <div className="flex gap-1">
        {quickActions.map((action) => (
          <IconButton
            key={action.icon}
            to={ROUTES.create}
            aria-label={action.label}
            className="rounded-lg p-2 text-[#7c572d] hover:bg-stone-50"
          >
            <Icon name={action.icon} />
          </IconButton>
        ))}
      </div>
    </Card>
  )
}
