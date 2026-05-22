-- Optional: sample feed data (run AFTER schema.sql and AFTER you have a user)
-- 1. Sign up in the app, then copy your user id from Supabase → Authentication → Users
-- 2. Replace YOUR_USER_ID below and run this script

/*
insert into public.books (title, author, cover_url) values
  ('The Midnight Library', 'Matt Haig', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt1ekvTX3j1nWsm-vgTr3ic6BhpioU-aSowVv2yumQQuuctcaQWlz1u2lv4_wKKMLSweilVymGBNYvG64-TEFLCTyXJLuzkvP9UGfWCo4HDFYDv1dqyaUxRRHgb6gy5DAedFkDQ61biZt8hLcM8H-gfTpUPXxaezUZ4i6VlYBXSVj6SBpBEOqhtegHZu-XLnjKBfkoPzN0LO3LsZbIH9TQgDks0zzJ_VauEDGUqk2zzc5AQRN7qEnzUEsTuWaCBroFnIREZxYst-U')
returning id;

-- Use the book id from above:
insert into public.posts (user_id, type, payload, book_id, likes_count, comments_count) values
  (
    'YOUR_USER_ID',
    'reading',
    '{"progressPercent":68,"currentPage":196,"totalPages":288}'::jsonb,
    'BOOK_ID_HERE',
    242,
    18
  );
*/
