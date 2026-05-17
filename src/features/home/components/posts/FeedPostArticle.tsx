import type { ReactNode } from 'react'
import { Card } from '@/shared/components/ui/Card'

type FeedPostArticleProps = {
  children: ReactNode
  className?: string
}

export function FeedPostArticle({ children, className }: FeedPostArticleProps) {
  return (
    <Card as="article" className={className}>
      {children}
    </Card>
  )
}
