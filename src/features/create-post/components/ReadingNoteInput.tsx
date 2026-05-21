type Props = {
  value: string;
  setValue: (v: string) => void;
};

export function ReadingNoteInput({ value, setValue }: Props) {
  return (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Write a note..."
      rows={3}
      className="w-full border p-2 rounded mb-3"
    />
  );
}