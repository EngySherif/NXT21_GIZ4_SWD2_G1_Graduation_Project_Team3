interface Props {
  bookNumber: number;
  title: string;
  writer: string;
  image: string;
  rate: number;
}

export function ExploreBook({ bookNumber, title, writer, image, rate }: Props) {
  return (
    <>
      <div className="relative inline-block">
        <div className="absolute -top-1.5 -left-1.5 bg-[#e09f67] text-white text-[11px] font-extrabold px-2 py-1 rounded-sm z-50 shadow-md">
          #{bookNumber}
        </div>
        <img
          src={image}
          alt="The Alchemist"
          className="w-40 h-60 object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-0.5">
        <p className="text-gray-900 text-[17px] font-bold leading-tight truncate">
          {title}
        </p>
        <p className="text-gray-500 text-[12px] font-medium">{writer}</p>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-[#f1c40f] text-xs">★</span>
        <span className="text-gray-500 text-xs font-semibold">{rate}</span>
      </div>
    </>
  );
}
