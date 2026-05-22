import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";
import { createPost } from "../api/createPostApi";
import { ROUTES } from "@/shared/config/routes";

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
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState<PostType>("quote");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handlePost = async () => {
    if (!user) {
      alert("You must be logged in to post.");
      return;
    }
    
    if (activeTab !== "thought" && !selectedBook) {
      alert("Please select a book first.");
      return;
    }

    setIsSubmitting(true);
    try {
      await createPost(activeTab, postData, selectedBook, user.id);
      navigate(ROUTES.home);
    } catch (error) {
      console.error("Error creating post:", error);
      alert(error instanceof Error ? error.message : "Failed to create post");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageContainer>
      <PageHeader />

      <PostTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <TwoColumnLayout
        main={
          <div className={isSubmitting ? "opacity-50 pointer-events-none transition-opacity" : ""}>
            {
            activeTab === "quote" && (
              <CreateQuotePostForm
                data={postData}
                setData={setPostData}
                onSubmit={handlePost}
                selectedBook={selectedBook}
                setSelectedBook={setSelectedBook}
              />
            )}

            {activeTab === "review" && (
              <CreateReviewPostForm
                data={postData}
                setData={setPostData}
                onSubmit={handlePost}
                selectedBook={selectedBook}
                setSelectedBook={setSelectedBook}
              />
            )}

            {activeTab === "reading" && (
              <CreateReadingPostForm
                data={postData}
                setData={setPostData}
                onSubmit={handlePost}
                selectedBook={selectedBook}
                setSelectedBook={setSelectedBook}
              />
            )}

            {activeTab === "thought" && (
              <CreateThoughtPostForm
                data={postData}
                setData={setPostData}
                onSubmit={handlePost}
              />
            )}
          </div>
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