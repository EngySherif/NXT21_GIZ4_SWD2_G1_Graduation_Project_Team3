import type { ElementType, ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

const variantClasses = {
  default: 'border border-[#E0E0E0] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
  muted: 'border border-[#E0E0E0] bg-stone-50',
  brand: 'bg-[#2C1810] text-white shadow-lg',
} as const

type CardProps = {
  children: ReactNode
  className?: string
  variant?: keyof typeof variantClasses
  as?: ElementType
  padding?: 'none' | 'md'
}

/** Surface card — posts, sidebar widgets, auth forms */
export function Card({
  children,
  className,
  variant = 'default',
  as: Component = 'div',
  padding = 'md',
}: CardProps) {
  const Tag = Component as ElementType

  return (
    <Tag
      className={cn(
        'rounded-xl',
        variantClasses[variant],
        padding === 'md' && 'p-4',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
