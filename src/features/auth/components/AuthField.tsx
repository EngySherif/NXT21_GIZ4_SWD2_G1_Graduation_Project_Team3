import { useState, type InputHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

type AuthFieldProps = {
  id: string
  label: string
  labelAction?: ReactNode
  icon?: string
  showPasswordToggle?: boolean
  inputClassName?: string
} & InputHTMLAttributes<HTMLInputElement>

const inputBase =
  'h-11 w-full rounded-lg border border-[#e0e0e0] bg-[#f3f3f3] text-sm text-[#1a1c1c] transition-all placeholder:text-stone-400 focus:border-[#7c572d] focus:outline-none focus:ring-1 focus:ring-[#7c572d]'

export function AuthField({
  id,
  label,
  labelAction,
  icon,
  showPasswordToggle,
  className,
  inputClassName,
  type,
  ...inputProps
}: AuthFieldProps) {
  const [visible, setVisible] = useState(false)
  const isPassword = type === 'password'
  const resolvedType = isPassword && showPasswordToggle && visible ? 'text' : type

  return (
    <div className={cn('space-y-2', className)}>
      <div className={cn(labelAction ? 'flex items-center justify-between' : '')}>
        <label htmlFor={id} className="block text-base font-semibold text-[#1c1c1c]">
          {label}
        </label>
        {labelAction}
      </div>
      <div className="relative">
        {icon ? (
          <span className="material-symbols-outlined pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[20px] text-[#827470]">
            {icon}
          </span>
        ) : null}
        <input
          id={id}
          type={resolvedType}
          className={cn(
            inputBase,
            icon ? 'pl-10' : 'pl-4',
            showPasswordToggle ? 'pr-12' : 'pr-4',
            inputClassName,
          )}
          {...inputProps}
        />
        {isPassword && showPasswordToggle ? (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className="absolute top-1/2 right-4 -translate-y-1/2 text-[#757575] hover:text-[#1c1c1c]"
            aria-label={visible ? 'Hide password' : 'Show password'}
          >
            <span className="material-symbols-outlined text-[20px]">
              {visible ? 'visibility_off' : 'visibility'}
            </span>
          </button>
        ) : null}
      </div>
    </div>
  )
}
