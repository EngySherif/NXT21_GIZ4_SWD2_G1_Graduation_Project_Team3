import { useState } from "react";
import type { Book } from "../pages/CreatePostPage";

import { BookSearch } from "../components/BookSearch";
import { SelectedBook } from "../components/SelectedBook";
import { QuoteInput } from "../components/QuoteInput";
import { ReflectionInput } from "../components/ReflectionInput";
import { ActionButtons } from "../components/ActionButtons";

type Props = {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: () => void;
  selectedBook: Book | null;
  setSelectedBook: React.Dispatch<React.SetStateAction<Book | null>>;
};

export function CreateQuotePostForm({
  data,
  setData,
  onSubmit,
  selectedBook,
  setSelectedBook,
}: Props) {
  const [bookSearch, setBookSearch] = useState("");

  return (
    <div className="xl:col-span-2 bg-white rounded-2xl border border-[#eadfda] p-6 shadow-sm">
      <BookSearch
        bookSearch={bookSearch}
        setBookSearch={setBookSearch}
        onSelectBook={setSelectedBook}
      />

      {selectedBook && <SelectedBook selectedBook={selectedBook} />}

      <QuoteInput
        quote={data.quote}
        setQuote={(value: string) =>
          setData((prev: any) => ({ ...prev, quote: value }))
        }
      />

      <ReflectionInput
        reflection={data.reflection}
        setReflection={(value: string) =>
          setData((prev: any) => ({ ...prev, reflection: value }))
        }
      />

      <ActionButtons handlePost={onSubmit} />
    </div>
  );
}