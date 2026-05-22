export function isSupabaseConfigured(): boolean {
  const url = import.meta.env.VITE_SUPABASE_URL
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY
  if (!url || !key) return false
  if (url === 'https://your-project.supabase.co' || key === 'your-anon-key-here') return false

  try {
    const parsedUrl = new URL(url)
    return parsedUrl.protocol === 'https:' && key.trim().length > 0
  } catch {
    return false
  }
}
