import type { Book } from "../pages/CreatePostPage";

interface Props {
  selectedBook: Book;
}

export function SelectedBook({ selectedBook }: Props) {
  return (
    <div className="flex items-center gap-4 border border-[#eadfda] rounded-xl p-4 mb-5">
      <img
        src={selectedBook.image}
        alt="book"
        className="w-14 h-20 rounded-lg object-cover"
      />

      <div>
        <h3 className="font-semibold">{selectedBook.title}</h3>
        <p className="text-sm text-[#6b5b57]">{selectedBook.author}</p>
      </div>
    </div>
  );
}