import { cn } from '@/shared/lib/utils'

type StatBoxProps = {
  label: string
  value: string
  variant?: 'light' | 'on-dark'
  className?: string
}

export function StatBox({ label, value, variant = 'light', className }: StatBoxProps) {
  return (
    <div
      className={cn(
        'rounded-lg p-3',
        variant === 'on-dark' ? 'bg-white/10 backdrop-blur-sm' : 'bg-stone-100',
        className,
      )}
    >
      <p
        className={cn(
          'mb-1 text-[10px] font-bold uppercase tracking-wider',
          variant === 'on-dark' ? 'text-[#9e7e73]' : 'text-[#757575]',
        )}
      >
        {label}
      </p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  )
}
