import type { ReactNode } from 'react'
import { Card } from './Card'
import { BrandLogo } from './BrandLogo'

type AuthCardProps = {
  subtitle: string
  children: ReactNode
}

/** Centered card for login / signup pages */
export function AuthCard({ subtitle, children }: AuthCardProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f9f9f9] px-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center">
          <BrandLogo className="inline-block" />
          <p className="mt-2 text-sm text-[#757575]">{subtitle}</p>
        </div>
        {children}
      </Card>
    </div>
  )
}
