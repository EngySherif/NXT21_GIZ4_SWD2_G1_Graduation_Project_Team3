import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/shared/lib/utils'

type TextLinkProps = LinkProps & {
  variant?: 'primary' | 'muted'
}

export function TextLink({ variant = 'primary', className, children, ...props }: TextLinkProps) {
  return (
    <Link
      className={cn(
        'text-sm transition-colors',
        variant === 'primary' && 'font-semibold text-[#2C1810] hover:underline',
        variant === 'muted' && 'text-[#757575] hover:text-[#2C1810]',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
