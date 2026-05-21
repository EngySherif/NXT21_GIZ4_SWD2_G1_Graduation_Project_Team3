import { PostSocialActionButton } from "@/shared/components/ui/PostSocialActionButton";
import { createPostData, formatCount } from "../mocks/mockCreatePostData";

interface Props {
  handlePost: () => void;
}

export function ActionButtons({ handlePost }: Props) {
  const { likes, comments, shares, saved } = createPostData;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 border border-[#d8cbc6] rounded-xl hover:bg-[#f5ece8] transition">
            Add Photo
          </button>

          <button className="px-4 py-2 border border-[#d8cbc6] rounded-xl hover:bg-[#f5ece8] transition">
            Tag Friend
          </button>
        </div>

        <button
          onClick={handlePost}
          className="bg-[#3f2419] text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          Post to Library
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <PostSocialActionButton
            icon="favorite"
            count={formatCount(likes)}
            hoverColor="heart"
          />

          <PostSocialActionButton
            icon="chat_bubble"
            count={comments}
            hoverColor="brand"
          />

          <PostSocialActionButton
            icon="share"
            count={shares}
            hoverColor="brand"
          />
        </div>

        <PostSocialActionButton
          icon={saved ? "bookmark" : "bookmark_border"}
          hoverColor="bookmark"
          aria-label="Save post"
        />
      </div>
    </div>
  );
}