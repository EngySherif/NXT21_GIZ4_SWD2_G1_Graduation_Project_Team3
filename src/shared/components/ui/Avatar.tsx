import { cn } from '@/shared/lib/utils'

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
} as const

type AvatarProps = {
  src: string
  alt: string
  size?: keyof typeof sizeClasses
  className?: string
}

export function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn('shrink-0 rounded-full object-cover', sizeClasses[size], className)}
    />
  )
}
