import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dugnsyluvgwnwbheabhx.supabase.co'
const supabaseKey = 'sb_publishable_7M_FK20bHk98govOSgLXQQ_DX_ViRQf'
const supabase = createClient(supabaseUrl, supabaseKey)

async function check() {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      id,
      type,
      payload,
      likes_count,
      comments_count,
      profiles!posts_user_id_fkey ( id, full_name, username, avatar_url ),
      books ( title, author, cover_url )
    `)
  console.log(JSON.stringify(data, null, 2), error)
}

check()
