import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/components/root-layout'
import HomePage from '@/pages/home'
import SearchPage from '@/pages/search'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'search', element: <SearchPage /> },
    ],
  },
  {
    path: '*',
    element: <span>{'404 Not Found'}</span>,
  },
])

export default router
