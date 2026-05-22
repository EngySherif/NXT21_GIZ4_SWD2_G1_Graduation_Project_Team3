import { supabase } from '@/shared/lib/supabase/client'
import { isSupabaseConfigured } from '@/shared/lib/supabase/config'
import type { PostType } from '@/shared/types/post'
import type { Book } from '../pages/CreatePostPage'

export async function ensureBookExists(book: Book): Promise<string> {
  if (!isSupabaseConfigured() || !supabase) throw new Error('Supabase not configured')

  // Check if book exists by title and author
  const { data: existing, error: searchError } = await supabase
    .from('books')
    .select('id')
    .eq('title', book.title)
    .eq('author', book.author)
    .maybeSingle()

  if (searchError) throw searchError
  if (existing) return existing.id

  // Insert new book
  const { data: newBook, error: insertError } = await supabase
    .from('books')
    .insert({
      title: book.title,
      author: book.author,
      cover_url: book.image,
    })
    .select('id')
    .single()

  if (insertError) throw insertError
  return newBook.id
}

export async function createPost(
  type: PostType,
  data: any,
  book: Book | null,
  userId: string,
): Promise<void> {
  if (!isSupabaseConfigured() || !supabase) throw new Error('Supabase not configured')

  let bookId: string | null = null

  // 'thought' posts don't strictly require a book, but the UI might pass one anyway.
  // Other types generally relate to a book.
  if (book && type !== 'thought') {
    bookId = await ensureBookExists(book)
  }

  let payload = {}

  switch (type) {
    case 'quote':
      payload = {
        quote: data.quote,
        attribution: data.reflection || `${book?.title} by ${book?.author}`,
      }
      break
    case 'review':
      payload = {
        rating: data.stars,
        title: data.reviewTitle,
        body: data.reviewBody,
      }
      break
    case 'reading':
      payload = {
        currentPage: data.currentPage,
        totalPages: data.totalPages,
        progressPercent:
          data.totalPages > 0 ? Math.round((data.currentPage / data.totalPages) * 100) : 0,
      }
      break
    case 'thought':
      payload = {
        body: data.thoughtBody,
      }
      break
  }

  const { error } = await supabase.from('posts').insert({
    user_id: userId,
    type,
    payload,
    book_id: bookId,
  })

  if (error) throw error
}
