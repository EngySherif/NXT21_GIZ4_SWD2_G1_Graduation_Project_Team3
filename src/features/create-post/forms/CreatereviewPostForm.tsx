import { ReviewRatingInput } from "../components/ReviewRatingInput";
import { ReviewFields } from "../components/ReviewFields";
import { ReviewSubmitButton } from "../components/ReviewSubmitButton";

type PostData = {
  reviewTitle: string;
  reviewBody: string;
  stars: number;
};

type Props = {
  data: PostData;
  setData: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: () => void;
};

export function CreateReviewPostForm({
  data,
  setData,
  onSubmit,
}: Props) {
  return (
    <div className="bg-white p-4 rounded-xl border border-border-light">
      <h2 className="text-lg font-semibold mb-4">Write a Review</h2>

      <ReviewRatingInput
        stars={data.stars}
        setStars={(value: number) =>
          setData((prev: any) => ({ ...prev, stars: value }))
        }
      />

      <ReviewFields
        title={data.reviewTitle}
        setTitle={(value: string) =>
          setData((prev: any) => ({ ...prev, reviewTitle: value }))
        }
        body={data.reviewBody}
        setBody={(value: string) =>
          setData((prev: any) => ({ ...prev, reviewBody: value }))
        }
      />

      <ReviewSubmitButton onClick={onSubmit} />
    </div>
  );
}