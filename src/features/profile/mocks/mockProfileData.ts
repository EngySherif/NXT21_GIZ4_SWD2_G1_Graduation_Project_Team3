export type ProfileStat = {
  label: string
  value: string
}

export type ProfileTab = {
  id: 'posts' | 'saved' | 'lists'
  label: string
}

export type ProfilePhoto = {
  id: string
  src: string
  alt: string
}

export type ProfileData = {
  name: string
  handle: string
  role: string
  avatarUrl: string
  coverUrl: string
  bio: string
  stats: ProfileStat[]
  tabs: ProfileTab[]
  photos: ProfilePhoto[]
}

export const profileData: ProfileData = {
  name: 'Julian Barnes',
  handle: '@julianreads',
  role: 'Literary Explorer',
  avatarUrl:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
  coverUrl:
    'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop',
  bio: 'Chronicling my journey through the classics and modern masterpieces. Currently immersed in 19th-century Russian literature. Building a community for those who find solace in the scent of old paper.',
  stats: [
    { label: 'Posts', value: '1.2k' },
    { label: 'Followers', value: '4.8k' },
    { label: 'Following', value: '842' },
    { label: 'Books Read', value: '156' },
  ],
  tabs: [
    { id: 'posts', label: 'Posts' },
    { id: 'saved', label: 'Saved' },
    { id: 'lists', label: 'Lists' },
  ],
  photos: [
    {
      id: 'pressed-flowers',
      src: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop',
      alt: 'Open book with pressed flowers',
    },
    {
      id: 'stacked-books',
      src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop',
      alt: 'Minimal stack of books',
    },
    {
      id: 'window-reading',
      src: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop',
      alt: 'Reading by a window',
    },
    {
      id: 'library-aisle',
      src: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop',
      alt: 'Library aisle full of books',
    },
    {
      id: 'coffee-book',
      src: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=800&auto=format&fit=crop',
      alt: 'Open book with coffee',
    },
    {
      id: 'book-pages',
      src: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop',
      alt: 'Close up of book pages',
    },
  ],
}
