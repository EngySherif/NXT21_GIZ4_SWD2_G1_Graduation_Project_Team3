export type PostType = 'quote' | 'review' | 'reading' | 'thought'

export type BookRef = {
  title: string
  author: string
  coverUrl?: string
}

export type PostAuthor = {
  id: string
  username: string
  avatarUrl: string
}

export type BasePost = {
  id: string
  authorId: string
  author: PostAuthor
  createdAt: string
  likesCount: number
  commentsCount: number
  savesCount: number
  isLiked: boolean
  isSaved: boolean
}

export type QuotePost = BasePost & {
  type: 'quote'
  quote: string
  book: BookRef
}

export type ReviewPost = BasePost & {
  type: 'review'
  rating: 1 | 2 | 3 | 4 | 5
  title: string
  body: string
  book: BookRef
}

export type ReadingPost = BasePost & {
  type: 'reading'
  book: BookRef
  currentPage: number
  totalPages: number
  notes?: string
}

export type ThoughtPost = BasePost & {
  type: 'thought'
  body: string
  book?: BookRef
}

export type Post = QuotePost | ReviewPost | ReadingPost | ThoughtPost
