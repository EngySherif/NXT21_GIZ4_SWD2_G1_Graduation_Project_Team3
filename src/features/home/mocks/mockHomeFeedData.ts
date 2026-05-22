/**
 * Mock data for the Home (Feed) page.
 * The team can later replace this with API calls (TanStack Query, etc.).
 */

export type TrendingBook = {
  id: string
  title: string
  author: string
  readersLabel: string
  coverUrl: string
}

export type FeedUser = {
  name: string
  avatarUrl: string
  activity: string
  timeAgo?: string
}

export type ReadingPostData = {
  id: string
  user: FeedUser
  bookTitle: string
  bookAuthor: string
  coverUrl: string
  progressPercent: number
  currentPage: number
  totalPages: number
  likes: number
  comments: number
  isSaved?: boolean
}

export type QuotePostData = {
  id: string
  user: FeedUser
  quote: string
  attribution: string
  likes: number
  shares: number
  isSaved?: boolean
}

export type ReviewPostData = {
  id: string
  user: FeedUser
  stars: number
  title: string
  body: string
  likes: number
  comments: number
  isSaved?: boolean
}

export type ThoughtPostData = {
  id: string
  user: FeedUser
  body: string
  likes: number
  comments: number
  isSaved?: boolean
}

/** Current user shown in the top bar and "share thought" box */
export const currentUser = {
  name: 'You',
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCBq-wZQ9nLq4qalcAGH_3teKuDV-HPcf2o88DGVMJrxyOqTGx-jTsh0Lc1xlcHavjO9zlieRLPuhgDnpy81ZBseqcI4rqm5730FMp6tiyJ91KhHkXFjdy9-wJ3_Xycv5m9QsrnTcXrXpEm63KCs7vd6HBor4g_BaIRkLmP5vTMQFwCgmO9rQ93vWDMq3Z3NmkN1s9gL5XzRL7Wr4SXVt0Gh6F8itlXUiUhAIDVeTDoL1sPCnJe7pr8LY6Oda7FraiEL9z8yEEAxPA',
  topBarAvatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuChZC7qyMYDusFuZm5KVI6eHbYdITo_bGVJK4Nleqhg-6KQKVXkZgFmhmQwtmEbRYgPjeSASf1EDJlrZzm1bzc5PGu11uTQaUlwiUKMdj4yyjdQ0cyfJRT7XsI10iSy4JMcTUZFwTHnxnDwEudsk1M4tLZDBB7NGw7YkllEX-GNx9pFqEcSqlRWlUQjsdlhCh5tqytgUeqBLE_0MasWHxk4EkPrCj0YgmQdw7bNBsVaQOxiWwKU45mEyJ2E2UKamrW6gGXRVrXTiew',
}

export const readingPost: ReadingPostData = {
  id: 'reading-1',
  user: {
    name: 'Julian Barnes',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCalmgAWFTJ3lR_vFYmIee1jEi8Iqn-Q4C7D1HfHISxPsNa74e8u5qNyiCp7oLDj3zDdO2f0SNnVHthiHFsl1FlUZK5Dp7WCjWJhGpp_LzrxyT32yMtSGrKOjahtcW3ktJs5r1dMXm0ueeJfsFMW_WOIAaIvb8DKKTp2C0IMI7eQhwFzKm0rwWMUQwPpoDETAZ4FdS9p_RdNtLiuFydD4tjP0iwOA4axYs3l4NW8HP3Y1OvuHJTzTVAXcowqDdgQY8RZByTZkl-asY',
    activity: 'is currently reading',
    timeAgo: '2h ago',
  },
  bookTitle: 'The Midnight Library',
  bookAuthor: 'Matt Haig',
  coverUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAt1ekvTX3j1nWsm-vgTr3ic6BhpioU-aSowVv2yumQQuuctcaQWlz1u2lv4_wKKMLSweilVymGBNYvG64-TEFLCTyXJLuzkvP9UGfWCo4HDFYDv1dqyaUxRRHgb6gy5DAedFkDQ61biZt8hLcM8H-gfTpUPXxaezUZ4i6VlYBXSVj6SBpBEOqhtegHZu-XLnjKBfkoPzN0LO3LsZbIH9TQgDks0zzJ_VauEDGUqk2zzc5AQRN7qEnzUEsTuWaCBroFnIREZxYst-U',
  progressPercent: 68,
  currentPage: 196,
  totalPages: 288,
  likes: 242,
  comments: 18,
}

export const quotePost: QuotePostData = {
  id: 'quote-1',
  user: {
    name: 'Elena Richardson',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_pLK0s_ytFexNREGtl9S-wxbLP1fq23o8P3NBIDhER8NWLXddWNPb0odzk-8F7sflw0FQxFUOevpwDRJrRH69JJV5P1qvEH2UGn3YtNbosz5Q5Tn3JlmxGpr_6nwO0-yPhaG5QRD5QqLZdfUN88AtJx5oHmPGG_I9lbAZbj1w9xbshCykhEDBRKdCoHbvrshXGl4vBBPjMRFGv5IbqLuAFljelR6HZyO0QdXRCRp62CE2IQhHJpbLuZYYoNQu1K-ppvuAuNVmf3w',
    activity: 'shared a quote',
  },
  quote: 'I am not afraid of storms, for I am learning how to sail my ship.',
  attribution: '— Little Women, Louisa May Alcott',
  likes: 1200,
  shares: 56,
}

export const reviewPost: ReviewPostData = {
  id: 'review-1',
  user: {
    name: 'Dr. Marcus Thorne',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-m98Xzz2WIzXWLRQqRD8rNGOwzU-oubYrIRW859dFjwcOq1HYqDg8XXwYVJSL7D356G_07vptbxXtwG2JZxwcnpl1B4ZhqF38mCz-7Uwk_YqfIrYidbcANJiTfvoRpodNnuPFQCBzp77joZ4itUjO3qq6F9UL4v9dFR_43Yg50YaJQFmQ8hPMSeyc09y93s7mq-gGl6yPFboHOJytr3YrmEshmbcscBJ7y6q52jnwhiME2I5f-5Ed8oqyI9nAeCpm8qiZYa1Vkh4',
    activity: '',
  },
  stars: 4.5,
  title: 'Circe: A Masterclass in Mythology',
  body: 'Madeline Miller has done it again. The prose is lyrical, almost hypnotic. Seeing the familiar world of Homer through Circe\'s eyes felt like discovering a secret door in a house I\'ve lived in for years. Highly recommend for any fan of Greek classics...',
  likes: 89,
  comments: 12,
}

export const thoughtPost: ThoughtPostData = {
  id: 'thought-1',
  user: {
    name: 'Sarah Jenkins',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDv7R5c_AO6QGyqBuJ0PeUMFt5Q2kYEXUBTnmfwd8fY73HxUkbTe4UDpEktPB6y6xH4vYbzeCWJ2amIozwQEJ_Ns-irzu86Gm1PwUjFLDyZln8pmRN4iPrLc6eji8r2hB8lB64PW--5jiZ3LT4-fe41CcapUL7FxPAunL71hkJOyOr2qag2AKIJeHh0k0HBMbtTOeJalnUKFm98ldwrTUwbD2TIF1cI3w2m9uyUYjPG3ydh8s2OSQmSYXNBOLH-kDnYn7UGR4xUNRE',
    activity: 'is thinking about reading lists',
  },
  body: 'Is it just me, or does the TBR (To-Be-Read) pile actually grow faster than we can read? I just added three more books this morning after browsing the \'New Arrivals\' section. I think I need an intervention! 📚😅',
  likes: 312,
  comments: 45,
}

export const trendingBooks: TrendingBook[] = [
  {
    id: 'trend-1',
    title: 'Tomorrow, and Tomorrow...',
    author: 'Gabrielle Zevin',
    readersLabel: '1.2k reading',
    coverUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAzQT49kPfIfiTDcKJtyrCPFvZILQdL_0-EZDxxEx4n8Fx26jERDBx3EUNFfewgDk1IWm_i0t_IzsNLlxu1FttQvQD-CQx9lnimYuHK7vWRNPdjNK3XFAZ1u8af0yChhMKPYW79UXsDFL21fRIilAnmXeK4xDKBBd6hvsL50DEmyZKO5cDfr5uXWcRuairp6AKcxL8lDAu9_6UcbEbNiJyBZ6MTTkxLZJggp5xITxB1G5hzzHJppXgHTxHGOVboaN1WiTE03nAfic8',
  },
  {
    id: 'trend-2',
    title: 'Lessons in Chemistry',
    author: 'Bonnie Garmus',
    readersLabel: '850 reading',
    coverUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjojHIr44O7PuxHFbhAh8TCFtMeIyvpAqavjTOvwLuUwMQcwCuAA7M3Qdoavnu7Mic4c6bpdmwp83wh_MZbVzYfBGtNUfk4NCPCElT-GXEkbezX_vwmlrojvi3BeGjvAQ4Z8O36pxvjPToY91PBQV9ljXahFtfhSkY7OUDowmaJvuwX2R87ZLg-ERgIj-7ODbrumtQJrsezn8D62ttNM-ZiyLC_mIfNOqjTXqyBGYOfJ2EHBiqr2_6qaWmUCeIjWhqRyoTIKc4tOY',
  },
  {
    id: 'trend-3',
    title: 'Yellowface',
    author: 'R.F. Kuang',
    readersLabel: '2.1k reading',
    coverUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD68bqapiuRQlWbYjnw1flKrD0xXXOSbB29QuzVRHXPZM7fj1zMTfIQVd8aMJFr1bxjRwxKCzwz7OKtpbzdAA4NQEraLYk5MPiD6fSI75J-BFfMo-ANSD_bHQsFeSgxJCA0crBI1s6PEg2FV-e1FQADQQi9sUJ6Vot-C7HduwrVby7SBaRFsPZ6DbqQHLGvnb5stZizZeksMZXqCK95IeI-ktqE7pS1BaJFl1wdYHSTZdFE0CkdcM7fAXou1Agk_78eRCzM0qQDpQs',
  },
]

export const readingChallenge = {
  year: 2024,
  booksRead: 14,
  booksGoal: 24,
  progressPercent: 58,
  currentStreakDays: 12,
  pagesRead: 4281,
}

export type FeedPostItem =
  | { type: 'reading'; data: ReadingPostData }
  | { type: 'quote'; data: QuotePostData }
  | { type: 'review'; data: ReviewPostData }
  | { type: 'thought'; data: ThoughtPostData }

/** Ordered feed for HomePage — map in FeedPostList */
export const feedPosts: FeedPostItem[] = [
  { type: 'reading', data: readingPost },
  { type: 'quote', data: quotePost },
  { type: 'review', data: reviewPost },
  { type: 'thought', data: thoughtPost },
]

/** Format large numbers for display (e.g. 1200 → "1.2k") */
export function formatCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k`
  }
  return String(count)
}
