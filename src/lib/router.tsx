import { createBrowserRouter } from 'react-router-dom'

import Layout from '@/components/layout'
import HomePage from '@/pages/home'
import ResultPage from '@/pages/result'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'result', element: <ResultPage /> },
    ],
  },
  {
    path: '*',
    element: <span>{'404 Not Found'}</span>,
  },
])

export default router
