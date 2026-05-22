import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/shared/lib/utils'
import { Icon } from './Icon'

type PostSocialActionButtonProps = {
  icon: string
  count?: number | string
  hoverColor?: 'heart' | 'brand' | 'bookmark'
  filled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const hoverClasses = {
  heart: 'hover:text-[#FF6B6B]',
  brand: 'hover:text-[#7c572d]',
  bookmark: 'hover:text-[#42A5F5]',
} as const

/** Like, comment, share — used in post action rows */
export function PostSocialActionButton({
  icon,
  count,
  hoverColor = 'brand',
  filled = false,
  className,
  type = 'button',
  ...props
}: PostSocialActionButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'flex items-center gap-1.5 text-[#757575] transition-colors',
        hoverClasses[hoverColor],
        className,
      )}
      {...props}
    >
      <Icon name={icon} size="md" filled={filled} />
      {count !== undefined ? <span className="text-xs">{count}</span> : null}
    </button>
  )
}
