import { FeedPostList } from "@/features/home/components/FeedPostList";
import type { PostType } from "@/shared/types/post";
import type { FeedPostItem } from "@/features/home/mocks/mockHomeFeedData";
import { currentUser } from "@/features/home/mocks/mockHomeFeedData";

export interface Book {
  title: string;
  author: string;
  image: string;
}

interface Props {
  postType: PostType;
  selectedBook: Book | null;
  data: any;
}

export function LivePreview({ postType, selectedBook, data }: Props) {
  const fallbackBook = {
    title: "Select a book...",
    author: "",
    image: "https://via.placeholder.com/128x192.png?text=No+Cover"
  };

  const displayBook = selectedBook || fallbackBook;

  let previewItem: FeedPostItem;

  switch (postType) {
    case "quote":
      previewItem = {
        type: "quote",
        data: {
          id: "preview-quote",
          user: currentUser,
          quote: data.quote || "Your quote will appear here...",
          attribution: data.reflection || `${displayBook.title} by ${displayBook.author}`,
          likes: 0,
          shares: 0,
        },
      };
      break;

    case "review":
      previewItem = {
        type: "review",
        data: {
          id: "preview-review",
          user: currentUser,
          stars: data.stars || 0,
          title: data.reviewTitle || "Review Title",
          body: data.reviewBody || "Write your review thoughts...",
          likes: 0,
          comments: 0,
        },
      };
      break;

    case "reading":
      previewItem = {
        type: "reading",
        data: {
          id: "preview-reading",
          user: currentUser,
          bookTitle: displayBook.title,
          bookAuthor: displayBook.author,
          coverUrl: displayBook.image,
          progressPercent:
            data.totalPages > 0
              ? Math.round((data.currentPage / data.totalPages) * 100)
              : 0,
          currentPage: data.currentPage,
          totalPages: data.totalPages,
          likes: 0,
          comments: 0,
        },
      };
      break;

    case "thought":
    default:
      previewItem = {
        type: "thought",
        data: {
          id: "preview-thought",
          user: currentUser,
          body: data.thoughtBody || "Share your reading thoughts with the community...",
          likes: 0,
          comments: 0,
        },
      };
      break;
  }

  return (
    <div className="hidden xl:block xl:col-span-1">
      <div className="sticky top-24">
        <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-4 px-2">
          Live Preview
        </h3>
        <div className="pointer-events-none opacity-90 scale-95 origin-top-right">
          <FeedPostList posts={[previewItem]} />
        </div>
      </div>
    </div>
  );
}