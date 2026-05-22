import { supabase } from '@/shared/lib/supabase/client'
import { isSupabaseConfigured } from '@/shared/lib/supabase/config'
import { mapRow } from '@/features/home/api/feedApi'
import type { DbPostRow } from '@/features/home/api/feedApi'
import type { FeedPostItem } from '@/features/home/mocks/mockHomeFeedData'

/**
 * Toggles the saved status of a post for a specific user.
 */
export async function toggleSavePost(postId: string, userId: string, currentlySaved: boolean): Promise<boolean> {
  if (!isSupabaseConfigured() || !supabase) return currentlySaved

  try {
    if (currentlySaved) {
      const { error } = await supabase
        .from('saves')
        .delete()
        .eq('post_id', postId)
        .eq('user_id', userId)

      if (error) throw error
      return false
    } else {
      const { error } = await supabase
        .from('saves')
        .insert({ post_id: postId, user_id: userId })

      if (error) throw error
      return true
    }
  } catch (error) {
    console.error('Error toggling save:', error)
    throw error
  }
}

/**
 * Fetches all posts saved by a specific user.
 */
export async function fetchSavedPosts(userId: string): Promise<FeedPostItem[]> {
  if (!isSupabaseConfigured() || !supabase || !userId) return []

  const { data, error } = await supabase
    .from('saves')
    .select(
      `
      post_id,
      posts (
        id,
        type,
        payload,
        likes_count,
        comments_count,
        profiles!posts_user_id_fkey ( id, full_name, username, avatar_url ),
        books ( title, author, cover_url )
      )
    `
    )
    .eq('user_id', userId)
    .order('post_id', { ascending: false }) // Just an arbitrary stable order since we don't have saved_at

  if (error) throw new Error(error.message)

  return (data as any[])
    .map((saveRow) => {
      // The join returns an array or single object for 'posts'. Let's handle both.
      const postRow = Array.isArray(saveRow.posts) ? saveRow.posts[0] : saveRow.posts
      if (!postRow) return null
      
      const item = mapRow(postRow as DbPostRow)
      if (item) {
        item.data.isSaved = true
      }
      return item
    })
    .filter((item): item is FeedPostItem => item !== null)
}
