import type { Book } from '@/features/create-post/pages/CreatePostPage';

export async function searchBooks(query: string): Promise<Book[]> {
  if (!query || query.trim() === '') return [];

  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=5`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }

    const data = await response.json();

    if (!data.docs) return [];

    return data.docs.map((item: any) => {
      const coverUrl = item.cover_i 
        ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
        : 'https://placehold.co/128x192/f5ece8/8b6f65.png?text=No+Cover';
        
      return {
        title: item.title || 'Unknown Title',
        author: item.author_name && item.author_name.length > 0 ? item.author_name[0] : 'Unknown Author',
        image: coverUrl,
      };
    });
  } catch (error) {
    console.error('Error fetching books from OpenLibrary API:', error);
    return [];
  }
}
