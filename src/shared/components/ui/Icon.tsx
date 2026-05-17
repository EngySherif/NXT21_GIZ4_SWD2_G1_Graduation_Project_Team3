import { cn } from '@/shared/lib/utils'

const sizeClasses = {
  sm: 'text-[12px]',
  md: 'text-[20px]',
  lg: 'text-[26px]',
  xl: 'text-4xl',
} as const

type IconProps = {
  name: string
  size?: keyof typeof sizeClasses
  filled?: boolean
  className?: string
}

/** Material Symbols icon — use everywhere instead of raw spans */
export function Icon({ name, size = 'md', filled = false, className }: IconProps) {
  return (
    <span
      className={cn(
        'material-symbols-outlined leading-none',
        sizeClasses[size],
        filled && 'filled',
        className,
      )}
    >
      {name}
    </span>
  )
}
