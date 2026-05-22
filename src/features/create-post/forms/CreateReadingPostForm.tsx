import { useState } from "react";
import type { Book } from "../pages/CreatePostPage";
import { BookSearch } from "../components/BookSearch";
import { SelectedBook } from "../components/SelectedBook";
import { ReadingProgressInputs } from "../components/ReadingProgressInputs";
import { ReadingNoteInput } from "../components/ReadingNoteInput";
import { ReadingSubmitButton } from "../components/ReadingSubmitButton";

type Props = {
  data: {
    currentPage: number;
    totalPages: number;
    readingNote: string;
  };
  setData: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: () => void;
  selectedBook: Book | null;
  setSelectedBook: React.Dispatch<React.SetStateAction<Book | null>>;
};

export function CreateReadingPostForm({
  data,
  setData,
  onSubmit,
  selectedBook,
  setSelectedBook,
}: Props) {
  const [bookSearch, setBookSearch] = useState("");

  const progress =
    data.totalPages > 0
      ? Math.round((data.currentPage / data.totalPages) * 100)
      : 0;

  return (
    <div className="bg-white p-4 rounded-xl border border-border-light">
      <h2 className="text-lg font-semibold mb-4">Reading Update</h2>

      <BookSearch
        bookSearch={bookSearch}
        setBookSearch={setBookSearch}
        onSelectBook={setSelectedBook}
      />

      {selectedBook && <SelectedBook selectedBook={selectedBook} />}

      <ReadingProgressInputs
        currentPage={data.currentPage}
        setCurrentPage={(value: number) =>
          setData((prev: any) => ({ ...prev, currentPage: value }))
        }
        totalPages={data.totalPages}
        setTotalPages={(value: number) =>
          setData((prev: any) => ({ ...prev, totalPages: value }))
        }
        progress={progress}
      />

      <ReadingNoteInput
        value={data.readingNote}
        setValue={(value: string) =>
          setData((prev: any) => ({ ...prev, readingNote: value }))
        }
      />

      <ReadingSubmitButton onClick={onSubmit} />
    </div>
  );
}