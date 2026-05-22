type Props = {
  value: string;
  setValue: (v: string) => void;
};

export function ThoughtInput({ value, setValue }: Props) {
  return (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="What are you thinking about?"
      rows={4}
      className="w-full border p-2 rounded mb-3"
    />
  );
}