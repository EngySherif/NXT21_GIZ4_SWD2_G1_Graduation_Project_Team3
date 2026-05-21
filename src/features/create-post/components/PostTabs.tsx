import type { PostType } from "@/shared/types/post";

type Props = {
  activeTab: PostType;
  setActiveTab: (tab: PostType) => void;
};

const TABS: PostType[] = ["quote", "review", "reading", "thought"];

export function PostTabs({ activeTab, setActiveTab }: Props) {
  return (
    <div className="flex gap-3 border-b border-[#eadfda] pb-4 mb-6 overflow-x-auto">
      {TABS.map((tab) => (
        <button
        key={tab}
        onClick={() => {
          setActiveTab(tab);
        }}
          className={`px-4 py-2 rounded-full text-sm capitalize transition ${
            activeTab === tab
              ? "bg-[#3f2419] text-white"
              : "bg-[#f5ece8]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}