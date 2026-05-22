import { useState, useEffect } from "react";
import { searchBooks } from "@/shared/lib/googleBooksApi";
import type { Book } from "../pages/CreatePostPage";

interface Props {
  bookSearch: string;
  setBookSearch: (value: string) => void;
  onSelectBook: (book: Book) => void;
}

export function BookSearch({ bookSearch, setBookSearch, onSelectBook }: Props) {
  const [results, setResults] = useState<Book[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (bookSearch.trim().length > 2) {
        setIsSearching(true);
        const books = await searchBooks(bookSearch);
        setResults(books);
        setIsSearching(false);
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [bookSearch]);

  const handleSelect = (book: Book) => {
    onSelectBook(book);
    setBookSearch("");
    setResults([]);
  };

  return (
    <div className="mb-5 relative">
      <label className="block mb-2 font-medium">Find the book</label>

      <input
        type="text"
        value={bookSearch}
        onChange={(e) => setBookSearch(e.target.value)}
        placeholder="Search by title, author, or ISBN"
        className="w-full border border-[#d8cbc6] rounded-xl px-4 py-3 outline-none focus:border-[#3f2419]"
      />

      {isSearching && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-[#d8cbc6] rounded-xl shadow-lg p-4 text-center text-sm text-stone-500">
          Searching...
        </div>
      )}

      {results.length > 0 && !isSearching && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-[#d8cbc6] rounded-xl shadow-lg max-h-60 overflow-auto">
          {results.map((book, idx) => (
            <li
              key={idx}
              className="px-4 py-3 hover:bg-stone-50 cursor-pointer flex items-center gap-3 border-b last:border-b-0 border-[#f5ece8]"
              onClick={() => handleSelect(book)}
            >
              <img src={book.image} alt={book.title} className="w-8 h-12 object-cover rounded shadow-sm" />
              <div>
                <p className="font-semibold text-sm text-stone-800 line-clamp-1">{book.title}</p>
                <p className="text-xs text-stone-500">{book.author}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}