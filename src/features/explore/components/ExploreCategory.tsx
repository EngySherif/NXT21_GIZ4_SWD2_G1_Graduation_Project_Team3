interface Props {
  icon: string;
  iconName: string;
  category: string;
  iconBackColor: {
    iconBg: string;
    iconText: string;
    hoverText: string;
  };
}

export function ExploreCategory({
  icon,
  iconName,
  category,
  iconBackColor,
}: Props) {
  return (
    <div
      className={`group flex items-center gap-4 bg-white border border-transparent rounded-xl p-4 shadow-sm cursor-pointer transition-all duration-200 w-full hover:border-amber-600`}
    >
      <div
        className={`flex items-center justify-center min-w-10 min-h-10 w-10 h-10 rounded-full text-lg transition-colors ${iconBackColor.iconBg} ${iconBackColor.iconText}`}
      >
        <span className={icon}>{iconName}</span>
      </div>
      <span
        className={`font-semibold text-sm md:text-base transition-colors duration-200 text-gray-700 ${iconBackColor.hoverText}`}
      >
        {category}
      </span>
    </div>
  );
}
