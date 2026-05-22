type Props = {
    title: string;
    setTitle: (v: string) => void;
  
    body: string;
    setBody: (v: string) => void;
  };
  
  export function ReviewFields({
    title,
    setTitle,
    body,
    setBody,
  }: Props) {
    return (
      <div className="mb-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
          className="w-full border p-2 rounded mb-2"
        />
  
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your review..."
          rows={4}
          className="w-full border p-2 rounded"
        />
      </div>
    );
  }