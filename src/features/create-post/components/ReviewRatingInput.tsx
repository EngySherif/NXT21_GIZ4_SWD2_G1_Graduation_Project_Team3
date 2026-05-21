type Props = {
  stars: number;
  setStars: (v: number) => void;
};

export function ReviewRatingInput({ stars, setStars }: Props) {
  return (
    <div className="mb-3">
      <p className="mb-1 text-sm text-text-muted">Rating</p>

      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => {
          const value = i + 1;

          return (
            <button
              key={value}
              onClick={() => setStars(value)}
              className={`text-xl ${
                value <= stars ? "text-star" : "text-border-light"
              }`}
            >
              ★
            </button>
          );
        })}
      </div>
    </div>
  );
}