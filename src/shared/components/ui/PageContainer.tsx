import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

type PageContainerProps = {
  children: ReactNode
  className?: string
}

/** Max-width wrapper with standard page padding */
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-[1400px] px-4 pb-12 pt-8 lg:px-8 lg:pt-10',
        className,
      )}
    >
      {children}
    </div>
  )
}
