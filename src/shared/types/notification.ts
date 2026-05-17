export type NotificationType =
  | 'like'
  | 'comment'
  | 'follow'
  | 'trending'
  | 'progress'

export type Notification = {
  id: string
  type: NotificationType
  actorId?: string
  actorName?: string
  actorAvatarUrl?: string
  message: string
  createdAt: string
  isRead: boolean
  targetPostId?: string
}
