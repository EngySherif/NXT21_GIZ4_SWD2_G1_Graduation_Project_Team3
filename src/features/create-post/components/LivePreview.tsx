import { Card, SectionHeader } from "@/shared/components/ui";
import { PostSocialActionButton } from "@/shared/components/ui/PostSocialActionButton";

import {
  createPostData,
  formatCount,
} from "../mocks/mockCreatePostData";

import type { Book } from "../pages/CreatePostPage";

type PostType = "quote" | "review" | "reading" | "thought";

type LivePreviewData = {
  quote: string;
  reflection: string;

  reviewTitle: string;
  reviewBody: string;
  stars: number;

  readingNote: string;
  currentPage: number;
  totalPages: number;

  thoughtBody: string;
};

type Props = {
  postType: PostType;
  data: LivePreviewData;
  selectedBook: Book;
};

export function LivePreview({ postType, data, selectedBook }: Props) {
  const { user, likes, comments, shares, saved } = createPostData;

  function renderContent() {
    switch (postType) {
      case "quote":
        return (
          <>
            <p className="italic text-[#3f2419] leading-7 text-base">
              “{data.quote || "Write your favorite quote..."}”
            </p>

            <p className="mt-3 text-sm text-[#6b5b57]">
              {data.reflection || "Your reflection will appear here..."}
            </p>
          </>
        );

      case "review":
        return (
          <>
            <h3 className="font-semibold text-[#2d1b14] text-base">
              {data.reviewTitle || "Review title"}
            </h3>

            <p className="text-sm text-[#6b5b57] mt-2 leading-6">
              {data.reviewBody || "Write your review here..."}
            </p>

            <p className="text-xs mt-2 text-[#8b6f65]">
              {data.stars}/5
            </p>
          </>
        );

      case "reading":
        return (
          <>
            <p className="text-sm text-[#6b5b57] leading-6">
              {data.readingNote || "Reading progress will appear here..."}
            </p>

            <p className="text-xs mt-2 text-[#8b6f65]">
              Page {data.currentPage} / {data.totalPages}
            </p>
          </>
        );

      case "thought":
        return (
          <p className="italic text-[#3f2419] text-base leading-6">
            {data.thoughtBody || "Share your thought..."}
          </p>
        );
    }
  }

  return (
    <Card as="section" className="space-y-5">
      <SectionHeader title="Live Preview" icon="visibility" />

      <div className="flex items-center gap-3 border-b border-[#efe4df] pb-4">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="w-11 h-11 rounded-full object-cover"
        />

        <div>
          <p className="font-medium text-[#2d1b14]">{user.name}</p>
          <p className="text-sm text-[#8b6f65]">{user.activity}</p>
        </div>
      </div>

      <div className="flex gap-4">
        <img
          src={selectedBook.image}
          alt={selectedBook.title}
          className="w-20 h-28 rounded-xl object-cover shadow-sm"
        />

        <div className="flex-1">{renderContent()}</div>
      </div>

      <div className="flex items-center justify-between border-t border-[#efe4df] pt-4">
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
    </Card>
  );
}