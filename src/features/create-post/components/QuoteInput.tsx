interface Props {
  quote: string;
  setQuote: (value: string) => void;
}

export function QuoteInput({ quote, setQuote }: Props) {
  return (
    <div className="mb-5">
      <label className="block mb-2 font-medium">The Quote</label>

      <textarea
        rows={4}
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        placeholder="Write your quote here..."
        className="w-full border border-[#d8cbc6] rounded-xl p-4 resize-none outline-none focus:border-[#3f2419]"
      />
    </div>
  );
}