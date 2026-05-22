import type { ProfilePhoto } from '@/features/profile/mocks/mockProfileData'

type ProfilePhotoGridProps = {
  photos: ProfilePhoto[]
}

export function ProfilePhotoGrid({ photos }: ProfilePhotoGridProps) {
  return (
    <section className="mx-auto mt-7 max-w-[980px] px-4 pb-12 sm:px-6 lg:px-0">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <button
            key={photo.id}
            type="button"
            className="group aspect-square overflow-hidden rounded-lg bg-stone-100 text-left shadow-sm"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
    </section>
  )
}
