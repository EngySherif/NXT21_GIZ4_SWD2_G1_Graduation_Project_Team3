import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '@/shared/lib/utils'

const variantClasses = {
  primary:
    'bg-[#2C1810] text-white shadow-md hover:opacity-90 active:scale-[0.98]',
  secondary:
    'border border-[#7c572d] text-[#7c572d] hover:bg-stone-50 active:scale-[0.98]',
  ghost: 'text-stone-700 hover:bg-stone-100 active:scale-[0.98]',
} as const

const sizeClasses = {
  sm: 'rounded-lg px-3 py-2 text-xs font-semibold',
  md: 'rounded-xl px-4 py-3 text-sm font-semibold',
  lg: 'rounded-xl px-4 py-4 text-sm font-semibold',
} as const

type ButtonVariant = keyof typeof variantClasses
type ButtonSize = keyof typeof sizeClasses

type SharedProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  children: ReactNode
  className?: string
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: never }

type ButtonAsLink = SharedProps &
  LinkProps & { to: string; type?: never }

export type ButtonProps = ButtonAsButton | ButtonAsLink

function buttonClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  fullWidth: boolean,
  className?: string,
) {
  return cn(
    'inline-flex items-center justify-center transition-all',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className,
  )
}

/** Button or router Link — same styles for reuse across the app */
export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    children,
    className,
    ...rest
  } = props

  const classes = buttonClassName(variant, size, fullWidth, className)

  if ('to' in props && props.to) {
    const { to, ...linkRest } = rest as LinkProps
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type="button" className={classes} {...buttonRest}>
      {children}
    </button>
  )
}
