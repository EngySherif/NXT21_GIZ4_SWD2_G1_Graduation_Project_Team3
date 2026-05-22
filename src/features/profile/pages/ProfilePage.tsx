import { ProfileCover, ProfilePhotoGrid, ProfileSummary, ProfileTabs } from '@/features/profile/components'
import { profileData } from '@/features/profile/mocks/mockProfileData'

export function ProfilePage() {
  return (
    <div className="bg-[#f9f9f9]">
      <ProfileCover src={profileData.coverUrl} />
      <ProfileSummary profile={profileData} />
      <ProfileTabs tabs={profileData.tabs} activeTab="posts" />
      <ProfilePhotoGrid photos={profileData.photos} />
    </div>
  )
}
