// src/routes/index.tsx
import type { RouteObject } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import { adminRoutes } from './adminRoutes';
import NotFound from '../components/NotFound';


export const routes: RouteObject[] = [
  // Public website routes
  ...publicRoutes,


  // Admin routes
  ...adminRoutes,


  // 404 Not Found
  {
    path: '*',
    element: (
      <NotFound/>
    ),
  },
];
