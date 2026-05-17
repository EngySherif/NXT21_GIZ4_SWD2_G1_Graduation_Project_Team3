import { readingChallenge } from '@/features/home/mocks/mockHomeFeedData'
import { Card } from '@/shared/components/ui/Card'
import { ProgressBar } from '@/shared/components/ui/ProgressBar'
import { StatBox } from '@/shared/components/ui/StatBox'

export function ReadingChallengeWidget() {
  const { year, booksRead, booksGoal, progressPercent, currentStreakDays, pagesRead } =
    readingChallenge

  return (
    <Card as="section" variant="brand" className="relative overflow-hidden">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
      <h2 className="relative z-10 mb-4 text-xl font-semibold">{year} Reading Challenge</h2>
      <div className="relative z-10 mb-2 flex items-end gap-2">
        <span className="text-3xl font-black">{booksRead}</span>
        <span className="pb-1 font-medium text-[#9e7e73]">/ {booksGoal} books</span>
      </div>
      <ProgressBar
        value={progressPercent}
        className="relative z-10 mb-6 !bg-white/20"
        barClassName="!bg-[#fecb97]"
      />
      <div className="relative z-10 grid grid-cols-2 gap-4">
        <StatBox label="Current Streak" value={`${currentStreakDays} Days`} variant="on-dark" />
        <StatBox label="Pages Read" value={pagesRead.toLocaleString()} variant="on-dark" />
      </div>
    </Card>
  )
}
