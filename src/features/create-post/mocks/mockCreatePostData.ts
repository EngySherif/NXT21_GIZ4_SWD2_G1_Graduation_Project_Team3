export type User = {
    name: string
    avatarUrl: string
    activity: string
  }
  
  export type CreatePostData = {
    id: string
    user: User
    bookTitle: string
    bookAuthor: string
    coverUrl: string
    progressPercent: number
    currentPage: number
    totalPages: number
    likes: number
    comments: number
    shares: number
    saved: boolean
  }
  
  export const createPostData: CreatePostData = {
    id: 'create-post-1',
  
    user: {
      name: 'Elias Throne',
      avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCalmgAWFTJ3lR_vFYmIee1jEi8Iqn-Q4C7D1HfHISxPsNa74e8u5qNyiCp7oLDj3zDdO2f0SNnVHthiHFsl1FlUZK5Dp7WCjWJhGpp_LzrxyT32yMtSGrKOjahtcW3ktJs5r1dMXm0ueeJfsFMW_WOIAaIvb8DKKTp2C0IMI7eQhwFzKm0rwWMUQwPpoDETAZ4FdS9p_RdNtLiuFydD4tjP0iwOA4axYs3l4NW8HP3Y1OvuHJTzTVAXcowqDdgQY8RZByTZkl-asY',
      activity: 'Shared a quote'
    },
  
    bookTitle: 'The Midnight Library',
  
    bookAuthor: 'Matt Haig',
  
    coverUrl:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400',
  
    progressPercent: 68,
  
    currentPage: 196,
  
    totalPages: 288,
  
    likes: 1240,
  
    comments: 86,
  
    shares: 24,
  
    saved: false,
  }
  
  export function formatCount(count: number): string {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k`
    }
  
    return String(count)
  }