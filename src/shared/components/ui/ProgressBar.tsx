import { cn } from '@/shared/lib/utils'

type ProgressBarProps = {
  value: number
  max?: number
  className?: string
  barClassName?: string
}

export function ProgressBar({ value, max = 100, className, barClassName }: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div className={cn('h-1.5 w-full rounded-full bg-stone-200', className)}>
      <div
        className={cn('h-1.5 rounded-full bg-[#7c572d]', barClassName)}
        style={{ width: `${percent}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      />
    </div>
  )
}
