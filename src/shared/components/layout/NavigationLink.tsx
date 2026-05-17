import { NavLink } from 'react-router-dom'
import { ROUTES } from '@/shared/config/routes'
import { cn } from '@/shared/lib/utils'
import { Icon } from '@/shared/components/ui/Icon'
import type { NavigationItem } from '@/shared/config/navigation'

type NavigationLinkProps = {
  item: NavigationItem
  onClick?: () => void
}

export function NavigationLink({ item, onClick }: NavigationLinkProps) {
  return (
    <NavLink
      to={item.path}
      end={item.path === ROUTES.home}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          'flex items-center gap-3 rounded-lg px-4 py-3 transition-all active:scale-[0.98]',
          isActive
            ? 'bg-stone-200 font-bold text-[#2C1810]'
            : 'bg-white text-stone-700 hover:bg-stone-100 lg:bg-transparent',
        )
      }
    >
      {({ isActive }) => (
        <>
          <Icon name={item.icon} className="text-[22px]" filled={isActive} />
          <span className="text-sm font-semibold">{item.label}</span>
        </>
      )}
    </NavLink>
  )
}
