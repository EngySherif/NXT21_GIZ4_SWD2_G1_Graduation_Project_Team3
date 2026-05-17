import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'
import { Icon } from './Icon'

type SectionHeaderProps = {
  title: string
  icon?: string
  iconClassName?: string
  action?: ReactNode
  className?: string
}

export function SectionHeader({
  title,
  icon,
  iconClassName,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-4 flex items-center justify-between gap-2', className)}>
      <h2 className="flex items-center gap-2 text-xl font-semibold text-stone-900">
        {icon ? <Icon name={icon} className={cn('text-[#7c572d]', iconClassName)} /> : null}
        {title}
      </h2>
      {action}
    </div>
  )
}
