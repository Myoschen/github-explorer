import {createBrowserRouter} from 'react-router-dom';
import DetailPage from './pages/detail';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import RootLayout from './components/root-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'repository/:id',
        element: <DetailPage />,
      },
    ],
  },
  {
    path: '*',
    element: <span>404 Not Found</span>,
  },
]);

export default router;
