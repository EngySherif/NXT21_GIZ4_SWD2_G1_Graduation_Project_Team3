-- Run once in Supabase → SQL Editor

drop table if exists public.saves cascade;
drop table if exists public.likes cascade;
drop table if exists public.posts cascade;
drop table if exists public.books cascade;
drop table if exists public.profiles cascade;
drop type if exists public.post_type cascade;

create type public.post_type as enum ('quote', 'review', 'reading', 'thought');

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username text unique,
  full_name text not null,
  avatar_url text,
  bio text,
  books_goal int default 24,
  books_read int default 0,
  created_at timestamptz default now()
);

create table public.books (
  id uuid primary key default gen_random_uuid(),
  google_books_id text unique,
  title text not null,
  author text not null,
  cover_url text,
  created_at timestamptz default now()
);

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  type public.post_type not null,
  payload jsonb not null default '{}',
  book_id uuid references public.books (id),
  likes_count int default 0,
  comments_count int default 0,
  created_at timestamptz default now()
);

create table public.likes (
  user_id uuid references public.profiles (id) on delete cascade,
  post_id uuid references public.posts (id) on delete cascade,
  primary key (user_id, post_id)
);

create table public.saves (
  user_id uuid references public.profiles (id) on delete cascade,
  post_id uuid references public.posts (id) on delete cascade,
  primary key (user_id, post_id)
);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name, username)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', 'Reader'),
    coalesce(new.raw_user_meta_data ->> 'username', split_part(new.email, '@', 1))
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.posts enable row level security;
alter table public.likes enable row level security;
alter table public.saves enable row level security;
alter table public.books enable row level security;

create policy "profiles_select" on public.profiles for select using (true);
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id);
create policy "posts_select" on public.posts for select using (true);
create policy "posts_insert_own" on public.posts for insert with check (auth.uid() = user_id);
create policy "books_select" on public.books for select using (true);
create policy "likes_own" on public.likes for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "saves_own" on public.saves for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
