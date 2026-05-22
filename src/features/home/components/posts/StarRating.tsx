type StarRatingProps = {
  /** Value from 0 to 5 (supports half stars, e.g. 4.5) */
  rating: number
}

/**
 * Displays filled / half / empty stars for review posts.
 */
export function StarRating({ rating }: StarRatingProps) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="flex text-[#FFD700]">
      {stars.map((star) => {
        if (rating >= star) {
          return (
            <span key={star} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
          )
        }
        if (rating >= star - 0.5) {
          return (
            <span key={star} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              star_half
            </span>
          )
        }
        return (
          <span key={star} className="material-symbols-outlined text-[16px] text-stone-300">
            star
          </span>
        )
      })}
    </div>
  )
}
