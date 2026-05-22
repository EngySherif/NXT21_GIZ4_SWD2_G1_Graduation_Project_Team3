export type SavedFilter = 'all' | 'quotes' | 'reviews' | 'reading-progress' | 'reading-lists'

export type SavedAuthor = {
  name: string
  avatarUrl: string
}

export type SavedQuotePost = {
  id: string
  type: 'quote-post'
  author: SavedAuthor
  savedLabel: string
  bookTitle: string
  coverUrl: string
  quote: string
  body: string
  likes: string
  comments: number
}

export type SavedProgressPost = {
  id: string
  type: 'progress'
  title: string
  author: string
  progressPercent: number
  note: string
}

export type SavedReviewPost = {
  id: string
  type: 'review'
  rating: number
  title: string
  body: string
  reviewer: SavedAuthor
}

export type SavedReadingListPost = {
  id: string
  type: 'reading-list'
  label: string
  title: string
  body: string
  imageUrl: string
  readers: Array<{ id: string; avatarUrl: string }>
  extraReaders: number
}

export type SavedStandaloneQuote = {
  id: string
  type: 'quote'
  quote: string
  author: string
  savedDate: string
}

export type SavedPost =
  | SavedQuotePost
  | SavedProgressPost
  | SavedReviewPost
  | SavedReadingListPost
  | SavedStandaloneQuote

export const savedFilters: Array<{ id: SavedFilter; label: string }> = [
  { id: 'all', label: 'All Posts' },
  { id: 'quotes', label: 'Quotes' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'reading-progress', label: 'Reading Progress' },
  { id: 'reading-lists', label: 'Reading Lists' },
]

export const savedPosts: SavedPost[] = [
  {
    id: 'night-circus-quote',
    type: 'quote-post',
    author: {
      name: 'Elena Gilbert',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120',
    },
    savedLabel: 'Saved 2 days ago',
    bookTitle: 'The Night Circus',
    coverUrl:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=500&auto=format&fit=crop',
    quote:
      'The circus arrives without warning. No announcements precede it. It is simply there, when yesterday it was not.',
    body: "Erin Morgenstern's prose is absolutely magical. This opening line still gives me chills every time I revisit it. Definitely a favorite for atmospheric world-building.",
    likes: '1.2k',
    comments: 84,
  },
  {
    id: 'atomic-habits-progress',
    type: 'progress',
    title: 'Atomic Habits',
    author: 'James Clear',
    progressPercent: 74,
    note: 'You do not rise to the level of your goals. You fall to the level of your systems. This chapter on habit...',
  },
  {
    id: 'project-hail-mary-review',
    type: 'review',
    rating: 5,
    title: 'Masterpiece of modern sci-fi',
    body: 'Project Hail Mary is Andy Weir at his absolute best. The scientific detail is immense but never boring, and the relationship between Ryland and Roc...',
    reviewer: {
      name: 'Sarah J.',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120',
    },
  },
  {
    id: 'quiet-libraries-list',
    type: 'reading-list',
    label: 'Curated List',
    title: "Sanctuary: The World's Most Quiet Libraries",
    body: 'A curated collection of the most peaceful places on earth for a bibliophile. From the hidden monastic libraries of Europe to the hyper-modern silent hubs in Tokyo.',
    imageUrl:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=900&auto=format&fit=crop',
    readers: [
      {
        id: 'reader-1',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80',
      },
      {
        id: 'reader-2',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80',
      },
    ],
    extraReaders: 12,
  },
  {
    id: 'mark-twain-quote',
    type: 'quote',
    quote: 'The man who does not read has no advantage over the man who cannot read.',
    author: 'Mark Twain',
    savedDate: 'Saved Oct 24',
  },
]
