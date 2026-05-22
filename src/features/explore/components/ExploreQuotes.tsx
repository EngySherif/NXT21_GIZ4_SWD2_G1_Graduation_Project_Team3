import { FeedPostActionBar } from "../../home/components/posts/FeedPostActionBar";
import { FeedPostHeader } from "../../home/components/posts/FeedPostHeader";
import { FeedPostArticle } from "../../home/components/posts/FeedPostArticle";

interface Props {
  user: {
    name: string;
    avatarUrl: string;
    activity: string;
  };
  body: string;
  likes: number;
  comments: number;
}

export function ExploreQuotes({ user, body, likes, comments }: Props) {
  return (
    <FeedPostArticle>
      <FeedPostHeader user={user} />
      <p className="mb-4 text-sm italic leading-relaxed text-[#1C1C1C]">
        {body}
      </p>
      <FeedPostActionBar likes={likes} comments={comments} />
    </FeedPostArticle>
  );
}
