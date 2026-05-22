type Props = {
  onClick: () => void;
};

export function ReadingSubmitButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-brand-brown text-white py-2 rounded"
    >
      Post
    </button>
  );
}