import { cn } from '@/shared/lib/utils'

const sizeClasses = {
  sm: 'h-16 w-12',
  md: 'h-28 w-20',
} as const

type BookCoverProps = {
  src: string
  alt: string
  size?: keyof typeof sizeClasses
  className?: string
}

export function BookCover({ src, alt, size = 'md', className }: BookCoverProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn('shrink-0 rounded object-cover shadow-sm', sizeClasses[size], className)}
    />
  )
}
