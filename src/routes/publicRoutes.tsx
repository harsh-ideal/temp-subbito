// src/routes/publicRoutes.tsx
import type { RouteObject } from 'react-router-dom';
import Home from '../website/pages/home/Home';
import Privacy from '../website/pages/Privacy/Privacy';
import Terms from '../website/pages/terms/Terms';
import Landing from '../website/pages/home/Landing';


export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/landing',
    element: <Landing />,
  },
  {
    path: '/privacy-policy',
    element: <Privacy />,
  },
  {
    path: '/terms-and-conditions',
    element: <Terms />,
  },
];
