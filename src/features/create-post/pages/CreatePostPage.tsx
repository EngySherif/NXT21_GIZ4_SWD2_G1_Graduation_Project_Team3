import { useState } from "react";

import type { PostType } from "@/shared/types/post";

import { CreateReviewPostForm } from "../forms/CreatereviewPostForm";
import { CreateQuotePostForm } from "../forms/CreateQuotePostForm";
import { CreateReadingPostForm } from "../forms/CreateReadingPostForm";
import { CreateThoughtPostForm } from "../forms/CreateThoughtPostForm";

import { LivePreview } from "../components/LivePreview";
import { PageContainer, TwoColumnLayout } from "@/shared/components/ui";
import { PostTabs } from "../components/PostTabs";
import { PageHeader } from "../components/PageHeader";

export interface Book {
  title: string;
  author: string;
  image: string;
}


export function CreatePostPage() {
  const [activeTab, setActiveTab] = useState<PostType>("quote");

  const [postData, setPostData] = useState({
    quote: "",
    reflection: "",

    reviewTitle: "",
    reviewBody: "",
    stars: 0,

    currentPage: 0,
    totalPages: 1,
    readingNote: "",

    thoughtBody: "",
  });

  const selectedBook: Book = {
    title: "The Secret History",
    author: "Donna Tartt",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD68bqapiuRQlWbYjnw1flKrD0xXXOSbB29QuzVRHXPZM7fj1zMTfIQVd8aMJFr1bxjRwxKCzwz7OKtpbzdAA4NQEraLYk5MPiD6fSI75J-BFfMo-ANSD_bHQsFeSgxJCA0crBI1s6PEg2FV-e1FQADQQi9sUJ6Vot-C7HduwrVby7SBaRFsPZ6DbqQHLGvnb5stZizZeksMZXqCK95IeI-ktqE7pS1BaJFl1wdYHSTZdFE0CkdcM7fAXou1Agk_78eRCzM0qQDpQs",
  };

  const handlePost = () => {
    console.log("POST DATA:", postData);
    alert("Post created!");
  };

  return (
    <PageContainer>
      <PageHeader />

      <PostTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <TwoColumnLayout
        main={
          <>
            {
            activeTab === "quote" && (
              <CreateQuotePostForm
                data={postData}
                setData={setPostData}
                onSubmit={handlePost}
              />
            )}

            {activeTab === "review" && (
              <CreateReviewPostForm
                data={postData}
                setData={setPostData}
                onSubmit={handlePost}
              />
            )}

            {activeTab === "reading" && (
              <CreateReadingPostForm
                data={postData}
                setData={setPostData}
                onSubmit={handlePost}
              />
            )}

            {activeTab === "thought" && (
              <CreateThoughtPostForm
                data={postData}
                setData={setPostData}
                onSubmit={handlePost}
              />
            )}
          </>
        }
        aside={
          <LivePreview
            postType={activeTab}
            selectedBook={selectedBook}
            data={postData}
          />
        }
      />
    </PageContainer>
  );
}