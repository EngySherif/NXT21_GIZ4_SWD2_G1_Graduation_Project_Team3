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
};

export function CreateQuotePostForm({
  data,
  setData,
  onSubmit,
}: Props) {
  const [bookSearch, setBookSearch] = useState("");

  const selectedBook: Book = {
    title: "The Secret History",
    author: "Donna Tartt",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1451445852i/33413128.jpg",
  };

  return (
    <div className="xl:col-span-2 bg-white rounded-2xl border border-[#eadfda] p-6 shadow-sm">

      <BookSearch
        bookSearch={bookSearch}
        setBookSearch={setBookSearch}
      />

      <SelectedBook selectedBook={selectedBook} />

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