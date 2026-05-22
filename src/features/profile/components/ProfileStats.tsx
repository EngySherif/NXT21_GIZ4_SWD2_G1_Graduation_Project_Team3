import type { ProfileStat } from '@/features/profile/mocks/mockProfileData'

type ProfileStatsProps = {
  stats: ProfileStat[]
}

export function ProfileStats({ stats }: ProfileStatsProps) {
  return (
    <dl className="grid grid-cols-2 gap-6 border-y border-[#E0E0E0] py-5 sm:flex sm:gap-12">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="text-[11px] font-medium uppercase tracking-widest text-[#757575]">
            {stat.label}
          </dt>
          <dd className="mb-1 text-xl font-medium text-[#1A0C05]">{stat.value}</dd>
        </div>
      ))}
    </dl>
  )
}
