/**
 * Verifies .env, Supabase API, and that schema tables exist.
 * Run: npm run supabase:check
 */
import { readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { createClient } from '@supabase/supabase-js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const envPath = resolve(root, '.env')

function loadEnv() {
  if (!existsSync(envPath)) {
    console.error('❌ Missing bookshare/.env — copy .env.example and add your Supabase URL + anon key.')
    process.exit(1)
  }
  const vars = {}
  for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    if (!line || line.startsWith('#')) continue
    const i = line.indexOf('=')
    if (i > 0) vars[line.slice(0, i).trim()] = line.slice(i + 1).trim()
  }
  return vars
}

const env = loadEnv()
const url = env.VITE_SUPABASE_URL
const key = env.VITE_SUPABASE_ANON_KEY

if (!url || !key || url.includes('your-project')) {
  console.error('❌ Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env')
  process.exit(1)
}

console.log('✓ .env loaded')
console.log('  URL:', url)

const sb = createClient(url, key)

for (const table of ['profiles', 'posts', 'books']) {
  const { error } = await sb.from(table).select('id').limit(1)
  if (error?.code === 'PGRST205' || error?.message?.includes('does not exist')) {
    console.error(`❌ Table "${table}" missing — run supabase/schema.sql in SQL Editor.`)
    process.exit(1)
  }
  if (error) {
    console.warn(`⚠ ${table}:`, error.message)
  } else {
    console.log(`✓ table "${table}" reachable`)
  }
}

const { data: health } = await sb.auth.getSession()
void health

console.log('\nNext: disable email confirmation in Supabase → Authentication → Providers → Email')
console.log('Then Sign Up in the app at http://localhost:5173/login (or :5174 if port busy)')
