export type UserStats = {
  booksRead: number
  reviews: number
  followers: number
}

export type User = {
  id: string
  username: string
  displayName: string
  bio?: string
  location?: string
  avatarUrl: string
  coverUrl?: string
  stats: UserStats
}
