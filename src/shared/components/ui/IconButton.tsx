import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/shared/lib/utils'

type IconButtonBase = {
  children: ReactNode
  className?: string
  badge?: boolean
}

type IconButtonAsButton = IconButtonBase &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: never }

type IconButtonAsLink = IconButtonBase & LinkProps & { to: string }

export type IconButtonProps = IconButtonAsButton | IconButtonAsLink

const baseClass =
  'relative inline-flex items-center justify-center text-stone-900 transition-transform active:scale-95'

/** Icon-only control for top bar, quick actions, post actions */
export function IconButton(props: IconButtonProps) {
  const { children, className, badge, ...rest } = props

  const classes = cn(baseClass, className)

  const content = (
    <>
      {children}
      {badge ? (
        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-[#FF6B6B]" />
      ) : null}
    </>
  )

  if ('to' in props && props.to) {
    const { to, ...linkRest } = rest as LinkProps
    return (
      <Link to={to} className={classes} {...linkRest}>
        {content}
      </Link>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type="button" className={classes} {...buttonRest}>
      {content}
    </button>
  )
}
