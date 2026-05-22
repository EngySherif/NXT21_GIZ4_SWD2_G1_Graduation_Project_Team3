type Props = {
    onClick: () => void;
  };
  
  export function ReviewSubmitButton({ onClick }: Props) {
    return (
      <button
        onClick={onClick}
        className="w-full bg-brand-brown text-white py-2 rounded"
      >
        Post Review
      </button>
    );
  }