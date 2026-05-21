import { ReadingProgressInputs } from "../components/ReadingProgressInputs";
import { ReadingNoteInput } from "../components/ReadingNoteInput";
import { ReadingSubmitButton } from "../components/ReadingSubmitButton";

type Props = {
  data: {
    currentPage: number;
    totalPages: number;
    readingNote: string;
  };
  setData: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: () => void;
};

export function CreateReadingPostForm({
  data,
  setData,
  onSubmit,
}: Props) {
  const progress =
    data.totalPages > 0
      ? Math.round((data.currentPage / data.totalPages) * 100)
      : 0;

  return (
    <div className="bg-white p-4 rounded-xl border border-border-light">
      <h2 className="text-lg font-semibold mb-4">Reading Update</h2>

      <ReadingProgressInputs
        currentPage={data.currentPage}
        setCurrentPage={(value: number) =>
          setData((prev: any) => ({ ...prev, currentPage: value }))
        }
        totalPages={data.totalPages}
        setTotalPages={(value: number) =>
          setData((prev: any) => ({ ...prev, totalPages: value }))
        }
        progress={progress}
      />

      <ReadingNoteInput
        value={data.readingNote}
        setValue={(value: string) =>
          setData((prev: any) => ({ ...prev, readingNote: value }))
        }
      />

      <ReadingSubmitButton onClick={onSubmit} />
    </div>
  );
}