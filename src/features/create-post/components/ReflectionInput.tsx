interface Props {
  reflection: string;
  setReflection: (value: string) => void;
}

export function ReflectionInput({ reflection, setReflection }: Props) {
  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium">
        Why does this resonate?
      </label>

      <textarea
        rows={5}
        value={reflection}
        onChange={(e) => setReflection(e.target.value)}
        placeholder="Write your thoughts..."
        className="w-full border border-[#d8cbc6] rounded-xl p-4 resize-none outline-none focus:border-[#3f2419]"
      />
    </div>
  );
}