# Supabase setup — BookShare

## 1. `.env` (في مجلد `bookshare`)

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

انسخ من `.env.example` إلى `.env` ثم ضع القيم الحقيقية. **أعد تشغيل** `npm run dev` بعد أي تعديل.

## 2. Schema (مرة واحدة)

Supabase Dashboard → **SQL Editor** → الصق محتوى `schema.sql` → **Run**.

## 3. Auth (للتطوير)

Authentication → Providers → Email → عطّل **Confirm email** (أو أكّد الإيميل يدوياً).

Site URL: `http://localhost:5173` (أو `5174` إذا البورت مشغول).

## 4. تحقق سريع

```bash
npm run supabase:check
```

## 5. بيانات تجريبية (اختياري)

بعد Sign Up، انسخ User ID من Authentication → Users، عدّل `seed.sql`، شغّله في SQL Editor.
