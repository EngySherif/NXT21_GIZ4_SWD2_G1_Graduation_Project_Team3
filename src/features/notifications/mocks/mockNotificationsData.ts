export type UserNotification = {
  id: string
  kind: 'like' | 'comment' | 'follow'
  user: string
  avatarUrl: string
  action: string
  target?: string
  quote?: string
  time: string
  bookCoverUrl?: string
  canFollowBack?: boolean
}

export type SystemNotification = {
  id: string
  kind: 'trending' | 'progress'
  icon: string
  action: string
  target?: string
  stats?: string
  progress?: number
  time: string
}

export type NotificationItem = UserNotification | SystemNotification

export type TrendingTopic = {
  id: string
  eyebrow: string
  title: string
  metric: string
}

export type FollowSuggestion = {
  id: string
  name: string
  description: string
  avatarUrl: string
}

export const notificationsData: {
  today: UserNotification[]
  thisWeek: SystemNotification[]
} = {
  today: [
    {
      id: 'like-shadow-wind',
      kind: 'like',
      user: 'Elena L.',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      action: 'liked your review of',
      target: 'The Shadow of the Wind',
      time: '2 hours ago',
      bookCoverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=100',
    },
    {
      id: 'comment-pacing',
      kind: 'comment',
      user: 'Marcus Reed',
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
      action: 'commented: "Totally agree with your point about the pacing in Chapter 4!"',
      quote: '"The pacing was deliberate, forcing the reader to..."',
      time: '5 hours ago',
    },
    {
      id: 'follow-sarah',
      kind: 'follow',
      user: 'Sarah Chen',
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      action: 'started following you',
      time: '8 hours ago',
      canFollowBack: true,
    },
  ],
  thisWeek: [
    {
      id: 'trending-gothic',
      kind: 'trending',
      icon: 'trending_up',
      action: 'Your post "Top 10 Gothic Novels for Rainy Days" is trending in',
      target: '#BookRecommendations',
      stats: '1.2k views · 240 comments',
      time: '2 days ago',
    },
    {
      id: 'reading-goal',
      kind: 'progress',
      icon: 'menu_book',
      action: 'You reached 75% of your 2024 Reading Goal. 3 books to go.',
      progress: 75,
      time: '4 days ago',
    },
  ],
}

export const trendingTopics: TrendingTopic[] = [
  {
    id: 'dark-academia',
    eyebrow: 'Trending in Fiction',
    title: '#DarkAcademia',
    metric: '12.5k posts',
  },
  {
    id: 'last-librarian',
    eyebrow: 'New Release',
    title: 'The Last Librarian',
    metric: '8.2k readers',
  },
  {
    id: 'october-haul',
    eyebrow: 'Community Event',
    title: 'October Book Haul',
    metric: '3.1k participating',
  },
]

export const followSuggestions: FollowSuggestion[] = [
  {
    id: 'jane-doe',
    name: 'Jane Doe',
    description: 'Sci-Fi Specialist',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
  },
  {
    id: 'tom-books',
    name: 'Tom Books',
    description: 'Classic Literature',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
  },
]
