import type { ReactNode } from 'react'

type TwoColumnLayoutProps = {
  main: ReactNode
  aside?: ReactNode
}

/** Main column (8/12) + optional sidebar column (4/12) — used on Home feed */
export function TwoColumnLayout({ main, aside }: TwoColumnLayoutProps) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      <div className="flex flex-col gap-6 lg:col-span-8">{main}</div>
      {aside ? <div className="lg:col-span-4">{aside}</div> : null}
    </div>
  )
}
