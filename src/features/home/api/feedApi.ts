import type {
  FeedPostItem,
  QuotePostData,
  ReadingPostData,
  ReviewPostData,
  ThoughtPostData,
} from '@/features/home/mocks/mockHomeFeedData'
import { supabase } from '@/shared/lib/supabase/client'
import { isSupabaseConfigured } from '@/shared/lib/supabase/config'

type DbProfile = {
  id: string
  full_name: string
  username: string | null
  avatar_url: string | null
}

type DbBook = {
  title: string
  author: string
  cover_url: string | null
}

type DbPostRow = {
  id: string
  type: 'quote' | 'review' | 'reading' | 'thought'
  payload: Record<string, unknown>
  likes_count: number
  comments_count: number
  profiles: DbProfile | DbProfile[] | null
  books: DbBook | DbBook[] | null
}

const defaultAvatar =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCalmgAWFTJ3lR_vFYmIee1jEi8Iqn-Q4C7D1HfHISxPsNa74e8u5qNyiCp7oLDj3zDdO2f0SNnVHthiHFsl1FlUZK5Dp7WCjWJhGpp_LzrxyT32yMtSGrKOjahtcW3ktJs5r1dMXm0ueeJfsFMW_WOIAaIvb8DKKTp2C0IMI7eQhwFzKm0rwWMUQwPpoDETAZ4FdS9p_RdNtLiuFydD4tjP0iwOA4axYs3l4NW8HP3Y1OvuHJTzTVAXcowqDdgQY8RZByTZkl-asY'

function first<T>(value: T | T[] | null): T | null {
  if (value == null) return null
  return Array.isArray(value) ? value[0] ?? null : value
}

function mapRow(row: DbPostRow): FeedPostItem | null {
  const profile = first(row.profiles)
  if (!profile) return null

  const book = first(row.books)
  const user = {
    name: profile.full_name,
    avatarUrl: profile.avatar_url ?? defaultAvatar,
    activity: '',
  }

  switch (row.type) {
    case 'reading': {
      const data: ReadingPostData = {
        id: row.id,
        user: { ...user, activity: 'is currently reading' },
        bookTitle: book?.title ?? 'Unknown book',
        bookAuthor: book?.author ?? '',
        coverUrl: book?.cover_url ?? defaultAvatar,
        progressPercent: Number(row.payload.progressPercent ?? 0),
        currentPage: Number(row.payload.currentPage ?? 0),
        totalPages: Number(row.payload.totalPages ?? 0),
        likes: row.likes_count,
        comments: row.comments_count,
      }
      return { type: 'reading', data }
    }
    case 'quote': {
      const data: QuotePostData = {
        id: row.id,
        user: { ...user, activity: 'shared a quote' },
        quote: String(row.payload.quote ?? ''),
        attribution: String(row.payload.attribution ?? ''),
        likes: row.likes_count,
        shares: Number(row.payload.shares ?? 0),
      }
      return { type: 'quote', data }
    }
    case 'review': {
      const data: ReviewPostData = {
        id: row.id,
        user,
        stars: Number(row.payload.rating ?? 5),
        title: String(row.payload.title ?? book?.title ?? ''),
        body: String(row.payload.body ?? ''),
        likes: row.likes_count,
        comments: row.comments_count,
      }
      return { type: 'review', data }
    }
    case 'thought': {
      const data: ThoughtPostData = {
        id: row.id,
        user,
        body: String(row.payload.body ?? ''),
        likes: row.likes_count,
        comments: row.comments_count,
      }
      return { type: 'thought', data }
    }
    default:
      return null
  }
}

export async function fetchFeedPosts(): Promise<FeedPostItem[]> {
  if (!isSupabaseConfigured() || !supabase) return []

  const { data, error } = await supabase
    .from('posts')
    .select(
      `
      id,
      type,
      payload,
      likes_count,
      comments_count,
      profiles ( id, full_name, username, avatar_url ),
      books ( title, author, cover_url )
    `,
    )
    .order('created_at', { ascending: false })
    .limit(20)

  if (error) throw new Error(error.message)

  return (data as DbPostRow[])
    .map(mapRow)
    .filter((item): item is FeedPostItem => item !== null)
}
