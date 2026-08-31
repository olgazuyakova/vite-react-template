import { createBrowserRouter } from 'react-router-dom';

import Layout from '@layout/Layout';

import Home from '@pages/Home';
import Terms from '@pages/Terms';
import Contact from '@pages/Contact';
import Privacy from '@pages/Privacy';
import NotFound from '@pages/NotFound';
import Accessibility from '@pages/Accessibility';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />, // Automatically catches errors or broken links
    children: [
      {
        index: true, // Matches baseline "/" path
        element: <Home />,
      },
      {
        path: 'accessibility', // Matches "/about" path
        element: <Accessibility />,
      },
      {
        path: 'contact', // Matches "/about" path
        element: <Contact />,
      },
      {
        path: 'privacy', // Matches "/about" path
        element: <Privacy />,
      },
      {
        path: 'terms', // Matches "/about" path
        element: <Terms />,
      },
    ],
  },
]);
