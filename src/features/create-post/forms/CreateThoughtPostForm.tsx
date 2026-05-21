import { ThoughtInput } from "../components/ThoughtInput";
import { ThoughtSubmitButton } from "../components/ThoughtSubmitButton";

type Props = {
  data: {
    thoughtBody: string;
  };
  setData: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: () => void;
};

export function CreateThoughtPostForm({
  data,
  setData,
  onSubmit,
}: Props) {
  return (
    <div className="bg-white p-4 rounded-xl border border-border-light">
      <h2 className="text-lg font-semibold mb-3">Share a Thought</h2>

      <ThoughtInput
        value={data.thoughtBody}
        setValue={(value: string) =>
          setData((prev: any) => ({ ...prev, thoughtBody: value }))
        }
      />

      <ThoughtSubmitButton onClick={onSubmit} />
    </div>
  );
}