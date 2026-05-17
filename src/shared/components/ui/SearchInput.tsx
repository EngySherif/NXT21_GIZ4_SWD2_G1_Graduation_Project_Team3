import type { InputHTMLAttributes } from 'react'
import { cn } from '@/shared/lib/utils'
import { Icon } from './Icon'

type SearchInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  wrapperClassName?: string
}

export function SearchInput({ className, wrapperClassName, ...props }: SearchInputProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-full border border-[#E0E0E0] bg-[#f3f3f3] px-4 py-2',
        wrapperClassName,
      )}
    >
      <Icon name="search" className="text-[#757575]" />
      <input
        type="search"
        className={cn(
          'w-full border-none bg-transparent text-sm text-[#1C1C1C] outline-none placeholder:text-[#757575]',
          className,
        )}
        {...props}
      />
    </div>
  )
}
