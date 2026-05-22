type ProfileCoverProps = {
  src: string
}

export function ProfileCover({ src }: ProfileCoverProps) {
  return (
    <div className="h-52 overflow-hidden border-b border-[#E0E0E0] sm:h-64 lg:h-80">
      <img src={src} alt="" className="h-full w-full object-cover" />
    </div>
  )
}
