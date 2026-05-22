# BookShare — خارطة الطريق الكاملة للمشروع

> **المرجع الرسمي:** `Final Project Proposal Form-1.docx`  
> **الفريق:** Mohamed Abdelkawy · Engy Sherif · Noha Mohamed · Abdelrahman Asaad · Ali Shokry  
> **المسار:** Front-End Development (React) — مشروع تخرج

هذا الملف هو **الخطة التي تمشي عليها بالترتيب** لتحويل BookShare من تصميمات Stitch + واجهة جزئية إلى **تطبيق جاهز للتسليم والنشر** مع تسجيل دخول حقيقي وبروفايل وبيانات محفوظة.

---

## 1. ماذا يطلب البروبوزال؟

| البند | المطلوب |
|-------|---------|
| **الفكرة** | منصة اجتماعية للقرّاء (مثل Instagram للكتب) |
| **الواجهة** | React — Feed، Create Post، Profile، Explore، تفاعلات |
| **أنواع المنشورات** | Quote · Review · Reading progress · Thought |
| **التفاعل** | Like · Comment · Save |
| **البروفايل** | Bio، إحصائيات قراءة، شبكة منشورات |
| **Explore** | بحث كتب/مؤلفين/تصنيفات + محتوى ترند |
| **Challenges** | تحديات قراءة + تتبع تقدم |
| **Backend** | **Firebase أو Supabase** (إجباري) — Auth + DB + Storage |
| **إضافي** | Google Books API |
| **التسليم** | Front-End يعمل + Deploy + تكامل Backend حقيقي |

**التقنيات المعتمدة:** React · React Router · Tailwind · Supabase/Firebase · Google Books API

---

## 2. أين المشروع الآن؟ (حالة الكود الحالية)

### جاهز

- [x] هيكل المشروع (feature-based): `src/app` · `src/features` · `src/shared`
- [x] Router لكل المسارات (`/`, `/explore`, `/create`, …)
- [x] Layout: Sidebar · Header · Mobile Drawer (Portal)
- [x] Design system في `shared/components/ui`
- [x] **Home / Feed** (`features/home`) — واجهة كاملة + mock data
- [x] **Login** — واجهة + form (بدون ربط Auth حقيقي)
- [x] **Sign Up** — واجهة + validation بسيط (بدون ربط Auth حقيقي)
- [x] **Notifications** — واجهة جزئية/وهمية (يحتاج ربط بيانات لاحقاً)
- [x] `npm run build` يمر بنجاح

### ناقص (يجب إنجازه للتسليم)

- [ ] **Auth Logic** — `authStore` placeholder فقط
- [ ] **ProtectedRoute / PublicRoute** — أي زائر يفتح `/` بدون login
- [ ] **Logout** + عرض المستخدم الحالي في Header/Profile
- [ ] **Explore** — Stub فقط
- [ ] **Create Post** — Stub فقط
- [ ] **Profile** — Stub فقط
- [ ] **Saved** — Stub فقط
- [ ] **Like / Save / Create Post** — أزرار ثابتة بدون state عالمي
- [ ] **Comments** — غير مُنفَّذ
- [ ] **Supabase/Firebase** — غير مربوط
- [ ] **Google Books API** — غير مربوط
- [ ] **Deploy** (Vercel/Netlify) + `.env` + README للتسليم
- [ ] توحيد الألوان مع `shared/styles/tokens.css` (كثير من hex مباشرة في المكوّنات)

### مراجع التصميم (خارج `bookshare/`)

| الشاشة | مجلد Stitch |
|--------|-------------|
| Feed | `feed_page_desktop/code.html` |
| Explore | `explore_page_desktop/code.html` |
| Create | `create_post_page_desktop/code.html` |
| Profile | `user_profile_page_desktop/code.html` |
| Saved | `saved_posts_page_desktop/code.html` |
| Notifications | `notifications_page_desktop/code.html` |
| Login / Signup | `login_page_desktop/` · `signup_page_desktop/` |
| مواصفات كاملة | `bookshare_desktop_design_system/DESIGN.md` |

---

## 3. كيف يعمل تسجيل الدخول؟ (افهمها قبل التنفيذ)

```
المستخدم → LoginPage (email + password)
         → authStore.login()
         → (لاحقاً) Supabase Auth
         → حفظ user في الذاكرة + localStorage
         → isAuthenticated = true
         → Router يسمح بـ / و /profile
         → Header يعرض اسمك وصورتك
```

**بدون Auth:** كل الصفحات مفتوحة والبيانات mock ثابتة لكل الناس.  
**مع Auth:** محتوى "بتاعك" (منشوراتك، saved، إحصائياتك) مربوط بـ `user.id`.

---

## 4. الترتيب الصحيح — امشِ عليه بالظبط

> **قاعدة:** لا تكمل Explore/Profile قبل ما Auth + Route Guards يشتغلوا.

| # | المرحلة | المدة التقريبية | معيار النجاح |
|---|---------|-----------------|--------------|
| **0** | تثبيت الفريق + Git + اختيار Supabase | 1–2 يوم | الكل يشغّل `npm run dev` |
| **1** | Auth (Mock ثم Supabase) + Route Guards | أسبوع 1 | بدون login → `/login` · بعد login → Feed · Reload يحفظ الجلسة |
| **2** | إكمال كل واجهات الصفحات | أسبوع 2–3 | لا يوجد `StubPageContent` في الصفحات الرئيسية |
| **3** | تفاعل Front (feedStore) | أسبوع 3–4 | Create post يظهر في Feed · Save يظهر في `/saved` |
| **4** | Supabase (جداول + RLS) | أسبوع 4–5 | بيانات تبقى بعد refresh من DB |
| **5** | Google Books API | أسبوع 5 | بحث/اختيار كتاب في Create و Explore |
| **6** | Comments + Challenges + Polish | أسبوع 6 | Empty states · Loading · أخطاء |
| **7** | Deploy + تسليم التخرج | أسبوع 7 | URL عام + README + Demo |

---

## 5. المرحلة 0 — تثبيت الأساس

### Checklist

- [ ] Clone المشروع + `cd bookshare` + `npm install`
- [ ] تشغيل `npm run dev` → `http://localhost:5173`
- [ ] إنشاء repo GitHub + branches: `feat/auth`, `feat/explore`, …
- [ ] قراءة `DESIGN.md` وملف البروبوزال
- [ ] **قرار الفريق:** Supabase (مُوصى به) أو Firebase
- [ ] إنشاء مشروع Supabase مجاني + نسخ `URL` و `anon key`

### أوامر مفيدة

```bash
cd bookshare
npm install
npm run dev          # تطوير محلي
npm run dev:host     # من شبكة الموبايل
npm run build        # تحقق قبل كل PR
```

---

## 6. المرحلة 1 — Auth + حماية المسارات (أولوية قصوى)

### الهدف

جعل Login/Signup **بوابة الدخول** — لا أحد يستخدم التطبيق بدون حساب.

### 1.1 — تثبيت Zustand (اختياري لكن موصى به)

```bash
npm install zustand
```

### 1.2 — ملفات جديدة

```
src/
├── stores/
│   └── authStore.ts              # user, login, register, logout, hydrate
├── app/router/
│   ├── ProtectedRoute.tsx        # !isAuthenticated → /login
│   └── PublicRoute.tsx           # isAuthenticated → /
├── shared/
│   ├── types/user.ts             # AuthUser type
│   └── lib/auth/
│       ├── session.ts            # localStorage helpers
│       └── mockAuth.ts           # حساب demo قبل Supabase
```

### 1.3 — `authStore` — ماذا يحتوي؟

```ts
// الحقول
user: AuthUser | null
isAuthenticated: boolean
isLoading: boolean

// الدوال
login(email, password): Promise<void>
register({ fullName, email, password }): Promise<void>
logout(): void
hydrateFromStorage(): void   // عند فتح التطبيق
```

**Mock Auth (أول 2 يوم):**

- حساب تجريبي: `reader@bookshare.com` / `password123`
- أو أي email بشرط password ≥ 6
- حفظ في `localStorage` تحت مفتاح `bookshare_session`

**Supabase Auth (نهاية المرحلة 1):**

- `supabase.auth.signUp` / `signInWithPassword`
- جدول `profiles` مرتبط بـ `auth.users.id`
- استبدال `mockAuth` باستدعاءات Supabase

### 1.4 — Route Guards

**في `src/app/router/index.tsx`:**

```tsx
// المسارات المحمية — داخل ProtectedRoute + AppRouteLayout
/  /explore  /create  /saved  /notifications  /profile

// مسارات عامة — داخل PublicRoute
/login  /signup
```

**`ProtectedRoute`:**  
`!isAuthenticated` → `<Navigate to={ROUTES.login} replace />`

**`PublicRoute`:**  
`isAuthenticated` → `<Navigate to={ROUTES.home} replace />`

### 1.5 — ربط الصفحات

| ملف | التعديل |
|-----|---------|
| `features/auth/pages/LoginPage.tsx` | `onSubmit` → `login()` → `navigate(ROUTES.home)` + عرض خطأ |
| `features/auth/pages/SignUpPage.tsx` | `onSubmit` → `register()` → redirect |
| `shared/components/layout/MainNavigation.tsx` | زر **Logout** أسفل القائمة |
| `shared/components/layout/AppHeaderBar.tsx` | Avatar/اسم من `authStore.user` |
| `app/providers/AppProviders.tsx` | `hydrateFromStorage()` عند mount |

### 1.6 — Checklist المرحلة 1

- [ ] `authStore` يعمل (mock)
- [ ] `ProtectedRoute` + `PublicRoute`
- [ ] Login يوجّه للـ Feed بعد النجاح
- [ ] Signup ينشئ حساب (mock أو Supabase)
- [ ] Logout يمسح الجلسة ويرجع `/login`
- [ ] Reload الصفحة يبقى المستخدم مسجّل
- [ ] (اختياري) Supabase Auth + جدول `profiles`

---

## 7. المرحلة 2 — إكمال الواجهات (UI من Stitch)

### الهدف

كل صفحة = feature folder بنفس أسلوب `features/home`.

### نمط العمل لكل صفحة

1. افتح `*_page_desktop/code.html`
2. أنشئ `features/<name>/mocks/mock<Name>Data.ts`
3. قسّم إلى `components/` صغيرة
4. اكتب `<Name>Page.tsx` + `PageContainer`
5. حدّث `features/<name>/index.ts`
6. `npm run build`

### تفاصيل كل صفحة

#### Explore — `features/explore/`

**من التصميم (`explore_page_desktop/code.html`):**

- [ ] `ExplorePage.tsx` — layout رئيسي
- [ ] `TrendingThisWeekSection` — grid: كارت كبير (Editor's Pick) + كروت صغيرة
- [ ] `DailyInspirationSection` — اقتباسات (Newsreader)
- [ ] `ExploreGenresSection` — شبكة تصنيفات + View All
- [ ] `YourChallengesPanel` — هدف 2024 + badges
- [ ] `PopularReviewsSection` — 3 كروت مراجعات
- [ ] `mocks/mockExploreData.ts`

#### Create Post — `features/create-post/`

- [ ] تبويبات: Quote | Review | Reading | Thought
- [ ] Form لكل نوع (حقول من `DESIGN.md`)
- [ ] زر Publish (يربط في المرحلة 3 بـ `feedStore`)
- [ ] `mocks/` إن لزم

#### Profile — `features/profile/`

- [ ] Header: avatar · bio · أزرار Edit/Follow
- [ ] Stats: books read · pages · streak
- [ ] Tabs: Posts | Saved | Reviews
- [ ] Grid منشورات المستخدم
- [ ] بيانات من `authStore.user` + posts المستخدم

#### Saved — `features/saved/`

- [ ] نفس كروت الـ Feed
- [ ] Filter: All | Quotes | Reviews | Reading | Thoughts
- [ ] Empty state + زر Explore
- [ ] (المرحلة 3) فلترة من `savedPostIds`

#### Notifications — `features/notifications/`

- [ ] مراجعة الكود الحالي vs `notifications_page_desktop`
- [ ] تجميع Today / This Week
- [ ] Mark all as read (UI + state)
- [ ] ربط لاحقاً بـ Supabase

#### Auth — تحسينات UI

- [ ] مطابقة Login مع `login_page_desktop`
- [ ] Signup موجود — مراجعة التفاصيل فقط

### Checklist المرحلة 2

- [ ] Explore — كامل
- [ ] Create Post — كامل
- [ ] Profile — كامل
- [ ] Saved — كامل
- [ ] Notifications — متطابق مع التصميم
- [ ] لا `StubPageContent` في الصفحات الست أعلاه

---

## 8. المرحلة 3 — تفاعل الواجهة (Front-End State)

### الهدف

التطبيق "حي" قبل أو أثناء ربط Supabase.

### 3.1 — `feedStore.ts`

```
src/stores/feedStore.ts
```

| Action | الوظيفة |
|--------|---------|
| `posts` | مصفوفة تبدأ من `mockHomeFeedData` |
| `createPost(data)` | إضافة منشور في أول القائمة |
| `toggleLike(postId)` | like + العداد + لون القلب |
| `toggleSave(postId)` | إضافة/إزالة من `savedPostIds` |
| `getSavedPosts()` | للصفحة `/saved` |

### 3.2 — ربط المكوّنات

- [ ] `FeedPostActionBar` → `toggleLike` / `toggleSave`
- [ ] `CreatePostPage` → `createPost` → `navigate('/')`
- [ ] `SavedPostsPage` → عرض `getSavedPosts()`
- [ ] `ProfilePage` → فلترة posts بـ `user.id`
- [ ] `QuickShareComposer` → (اختياري) فتح Create أو post سريع

### 3.3 — Checklist المرحلة 3

- [ ] Like يغيّر العدد والأيقونة
- [ ] Save يظهر المنشور في `/saved`
- [ ] Create يضيف منشوراً في أعلى Feed
- [ ] Profile يعرض منشورات المستخدم الحالي

---

## 9. المرحلة 4 — Supabase (Backend حقيقي)

### 9.1 — إعداد

```bash
npm install @supabase/supabase-js
```

ملف `.env`:

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

`src/shared/lib/supabase/client.ts`

### 9.2 — جداول مقترحة

| جدول | أهم الحقول |
|------|------------|
| `profiles` | `id` (FK auth.users), `full_name`, `username`, `avatar_url`, `bio`, `books_goal` |
| `posts` | `id`, `user_id`, `type`, `payload` (jsonb), `book_id`, `created_at` |
| `likes` | `user_id`, `post_id` |
| `saves` | `user_id`, `post_id` |
| `books` | `google_books_id`, `title`, `author`, `cover_url` |
| `comments` | `id`, `post_id`, `user_id`, `body`, `created_at` |
| `challenges` | `title`, `goal_books`, `icon`, … |
| `challenge_members` | `user_id`, `challenge_id`, `progress` |

### 9.3 — Row Level Security (RLS)

- [ ] المستخدم يقرأ posts العامة
- [ ] المستخدم يعدّل profile الخاص به فقط
- [ ] like/save مرتبطة بـ `auth.uid()`

### 9.4 — Storage

- [ ] Bucket `avatars` — صور البروفايل
- [ ] Bucket `covers` — أغلفة مخصصة (اختياري)

### 9.5 — استبدال تدريجي

| من | إلى |
|----|-----|
| `mockAuth` | `supabase.auth` |
| `feedStore` mock | `supabase.from('posts')` |
| `mockExploreData` | queries + joins |

### Checklist المرحلة 4

- [ ] تسجيل/دخول عبر Supabase
- [ ] `profiles` يُنشأ عند Sign up
- [ ] Posts تُحفظ وتُقرأ من DB
- [ ] Likes/Saves تبقى بعد refresh
- [ ] Avatar upload يعمل

---

## 10. المرحلة 5 — Google Books API

- [ ] مفتاح API في `.env`: `VITE_GOOGLE_BOOKS_API_KEY`
- [ ] `shared/lib/books/googleBooks.ts` — بحث بالعنوان/ISBN
- [ ] Create Post: اختيار كتاب من نتائج البحث
- [ ] Explore: شريط بحث يربط بنتائج
- [ ] حفظ الكتاب في جدول `books` عند أول استخدام

---

## 11. المرحلة 6 — Comments · Challenges · Polish

- [ ] UI التعليقات على المنشور + إضافة تعليق
- [ ] Reading challenges: Join + progress (Explore + Profile)
- [ ] Loading skeletons · Error boundaries · رسائل فاضية
- [ ] استبدال hex الثابتة بـ tokens / `@theme`
- [ ] Accessibility: `aria-label` على الأزرار المهمة
- [ ] مراجعة Mobile (drawer · FAB · scroll أفقي)

---

## 12. المرحلة 7 — النشر والتسليم

- [ ] `npm run build` بدون أخطاء
- [ ] Deploy على **Vercel** أو **Netlify**
- [ ] Environment variables على الاستضافة
- [ ] تحديث `README.md`: وصف · صور · رابط live · طريقة التشغيل
- [ ] فيديو Demo 3–5 دقائق للتسليم
- [ ] Tag release على GitHub: `v1.0.0`

---

## 13. هيكل المجلدات المستهدف (بعد اكتمال الخطة)

```
bookshare/src/
├── main.tsx
├── app/
│   ├── App.tsx
│   ├── providers/AppProviders.tsx
│   ├── layouts/AppRouteLayout.tsx
│   └── router/
│       ├── index.tsx
│       ├── ProtectedRoute.tsx
│       └── PublicRoute.tsx
├── features/
│   ├── auth/pages/
│   ├── home/          ✅ Feed
│   ├── explore/       components + mocks + pages
│   ├── create-post/
│   ├── profile/
│   ├── saved/
│   └── notifications/
├── shared/
│   ├── components/ui/
│   ├── components/layout/
│   ├── config/routes.ts · navigation.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── supabase/client.ts
│   │   └── books/googleBooks.ts
│   ├── types/
│   └── styles/
└── stores/
    ├── authStore.ts
    └── feedStore.ts
```

---

## 14. تقسيم الفريق (6 أعضاء)

| العضو | المسؤولية الرئيسية |
|-------|---------------------|
| 1 | Auth · Route Guards · Supabase Auth · `profiles` |
| 2 | Explore UI + Google Books في Explore |
| 3 | Create Post + `feedStore` + أنواع المنشورات |
| 4 | Profile + إحصائيات + grid المنشورات |
| 5 | Saved · Notifications · Likes/Saves/Comments UI |
| 6 | Polish · tokens · Deploy · README · اختبار نهائي |

**قواعد Git:**

- PR صغير لكل feature
- لا merge بدون `npm run build`
- مراجعة كود قبل الدمج في `main`

---

## 15. Checklist التسليم النهائي (البروبوزال)

استخدمها قبل تسليم المشروع للدكتور:

### وظائف أساسية

- [ ] إنشاء حساب + تسجيل دخول + تسجيل خروج
- [ ] حماية الصفحات (Route Guards)
- [ ] Feed بأنواع المنشورات الأربعة
- [ ] إنشاء منشور جديد من صفحة Create
- [ ] Like و Save يعملان ويُحفظان (DB)
- [ ] صفحة Saved تعرض المحفوظات فقط
- [ ] Profile: bio + stats + منشورات المستخدم
- [ ] Explore: ترند + quotes + genres + reviews
- [ ] Notifications تعمل (على الأقل UI + بيانات)
- [ ] Reading challenges (انضمام + progress)

### تقني

- [ ] Supabase أو Firebase متصل
- [ ] Google Books API مستخدم
- [ ] `.env.example` موثّق بدون أسرار
- [ ] Build + Deploy URL يعمل

### تجربة المستخدم

- [ ] Responsive (موبايل + ديسكتوب)
- [ ] لا صفحات Stub في المسارات الرئيسية
- [ ] حالات فارغة ورسائل خطأ واضحة

---

## 16. ملخص: ماذا ينقصك بالظبط للجاهزية 100%؟

| # | النقص | المرحلة |
|---|-------|---------|
| 1 | لا يوجد Auth حقيقي ولا Route Guards | 1 |
| 2 | 4 صفحات Stub (Explore, Create, Profile, Saved) | 2 |
| 3 | لا feedStore — لا create/like/save ديناميكي | 3 |
| 4 | لا Supabase/Firebase | 4 |
| 5 | لا Google Books | 5 |
| 6 | Comments + Challenges غير مكتملة | 6 |
| 7 | لا Deploy عام | 7 |

**أقصر طريق:**  
`المرحلة 1 (Auth)` → `المرحلة 2 (UI)` → `المرحلة 3 (State)` → `المرحلة 4 (Supabase)` → باقي المراحل.

---

## 17. الخطوة التالية في الكود (ابدأ هنا)

1. نفّذ **المرحلة 1** بالكامل (Mock Auth + ProtectedRoute).
2. ثم **Explore** كأول صفحة في المرحلة 2 (الأكبر بعد Feed).
3. لا تنتقل لـ Supabase قبل ما Route Guards يشتغلوا على Mock.

عند البدء في الكود، راجع الملفات:

- `src/stores/authStore.ts`
- `src/app/router/index.tsx`
- `src/features/auth/pages/LoginPage.tsx`

---

*آخر تحديث: يعكس حالة المشروع بعد إعادة الهيكلة (features/shared) وملف البروبوزال.*
