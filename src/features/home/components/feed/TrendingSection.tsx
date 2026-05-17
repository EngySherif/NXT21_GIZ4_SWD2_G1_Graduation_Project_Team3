import { ROUTES } from '@/shared/config/routes'
import { trendingBooks } from '@/features/home/mocks/mockHomeFeedData'
import { Button } from '@/shared/components/ui/Button'
import { Card } from '@/shared/components/ui/Card'
import { SectionHeader } from '@/shared/components/ui/SectionHeader'
import { TrendingBookRow } from './TrendingBookRow'

export function TrendingSection() {
  return (
    <Card as="section">
      <SectionHeader title="Trending Now" icon="trending_up" />
      <ul className="flex flex-col gap-4">
        {trendingBooks.map((book) => (
          <li key={book.id}>
            <TrendingBookRow book={book} />
          </li>
        ))}
      </ul>
      <Button to={ROUTES.explore} variant="secondary" size="sm" fullWidth className="mt-6">
        Explore Popular
      </Button>
    </Card>
  )
}
