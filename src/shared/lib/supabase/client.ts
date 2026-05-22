import { createClient } from '@supabase/supabase-js'
import { isSupabaseConfigured } from './config'

const url = import.meta.env.VITE_SUPABASE_URL ?? ''
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? ''

export const supabase = isSupabaseConfigured() ? createClient(url, anonKey) : null
