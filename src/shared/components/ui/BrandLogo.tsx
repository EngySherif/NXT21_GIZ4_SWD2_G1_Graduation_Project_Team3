import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/config/routes'
import { cn } from '@/shared/lib/utils'

type BrandLogoProps = {
  onClick?: () => void
  compact?: boolean
  className?: string
}

export function BrandLogo({ onClick, compact = false, className }: BrandLogoProps) {
  return (
    <Link to={ROUTES.home} onClick={onClick} className={cn('block', className)}>
      <h1 className={cn('font-black text-[#2C1810]', compact ? 'text-lg' : 'text-xl')}>
        BookShare
      </h1>
      {!compact ? <p className="text-xs text-[#757575]">Community of Readers</p> : null}
    </Link>
  )
}
