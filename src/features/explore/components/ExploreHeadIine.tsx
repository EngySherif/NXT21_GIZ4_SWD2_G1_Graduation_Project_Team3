import { translation } from "../translate";

interface Props {
  title: string;
  isSeeAll?: boolean;
}

export function ExploreHeadline({ isSeeAll, title }: Props) {
  return (
    <div className="flex items-center justify-between px-1 mb-5">
      <h2 className="flex items-center gap-2 text-[20px] font-bold text-[#111827]">
        {title}
      </h2>

      {isSeeAll && (
        <button className="text-[13px] font-medium text-[#D4A373] hover:text-[#c28d5c] transition-colors duration-200 cursor-pointer">
          {translation.seeAll}
        </button>
      )}
    </div>
  );
}
