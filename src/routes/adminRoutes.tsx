// src/routes/adminRoutes.tsx
import type { RouteObject } from 'react-router';
import { RequireAuth } from '../components/layout/RequireAuth';
import { AdminLayout } from '../admin/layout/AdminLayout';
import { AdminLogin } from '../admin/pages/login/AdminLogin';
import { AdminDashboard } from '../admin/pages/dashboard/AdminDashboard';
import { AdminServicePage } from '../admin/pages/service/AdminServicePage';

export const adminRoutes: RouteObject[] = [
  // Admin login (no layout, no auth)
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    path: '/admin',
    element: <RequireAuth />,
    children: [
      {
        element: <AdminLayout />, 
        children: [
          {
            path: 'dashboard',
            element: <AdminDashboard />,
          },
           {
            path: 'service',
            element: <AdminServicePage/>,
          },
          {
            path: 'users',
            element: <div className="text-2xl font-bold">Comming Soon -- Users Management</div>,
          },
          {
            path: 'providers',
            element: <div className="text-2xl font-bold">Comming Soon -- Service Providers</div>,
          },
          {
            path: 'bookings',
            element: <div className="text-2xl font-bold">Comming Soon -- Bookings Management</div>,
          },
          {
            path: 'payments',
            element: <div className="text-2xl font-bold">Comming Soon -- Payments</div>,
          },
          {
            path: 'reports',
            element: <div className="text-2xl font-bold">Comming Soon -- Reports</div>,
          },
          {
            path: 'settings',
            element: <div className="text-2xl font-bold">Comming Soon -- Settings</div>,
          },
        ],
      },
    ],
  },
];
