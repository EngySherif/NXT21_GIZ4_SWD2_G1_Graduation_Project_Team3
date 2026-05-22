interface Props {
  bookSearch: string;
  setBookSearch: (value: string) => void;
}

export function BookSearch({ bookSearch, setBookSearch }: Props) {
  return (
    <div className="mb-5">
      <label className="block mb-2 font-medium">Find the book</label>

      <input
        type="text"
        value={bookSearch}
        onChange={(e) => setBookSearch(e.target.value)}
        placeholder="Search by title, author, or ISBN"
        className="w-full border border-[#d8cbc6] rounded-xl px-4 py-3 outline-none focus:border-[#3f2419]"
      />
    </div>
  );
}