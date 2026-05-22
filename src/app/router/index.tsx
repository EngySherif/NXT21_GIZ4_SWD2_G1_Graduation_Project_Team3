import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppRouteLayout } from '@/app/layouts/AppRouteLayout'
import { ProtectedRoute } from '@/app/router/ProtectedRoute'
import { PublicRoute } from '@/app/router/PublicRoute'
import {
  CreatePostPage,
  ExplorePage,
  HomePage,
  LoginPage,
  NotificationsPage,
  ProfilePage,
  SavedPostsPage,
  SignUpPage,
} from '@/features'
import { ROUTES } from '@/shared/config/routes'

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppRouteLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'explore', element: <ExplorePage /> },
          { path: 'create', element: <CreatePostPage /> },
          { path: 'saved', element: <SavedPostsPage /> },
          { path: 'notifications', element: <NotificationsPage /> },
          { path: 'profile', element: <ProfilePage /> },
        ],
      },
    ],
  },
  {
    element: <PublicRoute />,
    children: [
      { path: ROUTES.login, element: <LoginPage /> },
      { path: ROUTES.signup, element: <SignUpPage /> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
