import type { ProfileData } from '@/features/profile/mocks/mockProfileData'
import { Avatar } from '@/shared/components/ui'
import { ProfileActions } from './ProfileActions'
import { ProfileStats } from './ProfileStats'

type ProfileSummaryProps = {
  profile: ProfileData
}

export function ProfileSummary({ profile }: ProfileSummaryProps) {
  return (
    <section className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-0">
      <div className="-mt-24 flex flex-col gap-6 sm:-mt-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
            <Avatar
              src={profile.avatarUrl}
              alt={profile.name}
              className="h-44 w-44 rounded-2xl border-4 border-white shadow-xl"
            />
            <div className="pb-3">
              <h1 className="text-xl font-medium text-[#1A0C05]">{profile.name}</h1>
              <p className="text-sm text-[#757575]">
                {profile.handle} • {profile.role}
              </p>
            </div>
          </div>
          <ProfileActions />
        </div>

        <ProfileStats stats={profile.stats} />

        <p className="max-w-[860px] text-sm leading-7 text-[#1A0C05]">
          {profile.bio} <span aria-hidden="true">📚 ✨</span>
        </p>
      </div>
    </section>
  )
}
