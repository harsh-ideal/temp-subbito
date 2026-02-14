// src/admin/components/AdminSidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Calendar,
  CreditCard,
  BarChart3,
  Settings,
  Shield,
} from 'lucide-react';


const menuItems = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/admin/dashboard',
  },
  {
    label: 'Users',
    icon: Users,
    path: '/admin/users',
  },
  {
    label: 'Service Providers',
    icon: Briefcase,
    path: '/admin/providers',
  },
  {
    label: 'Bookings',
    icon: Calendar,
    path: '/admin/bookings',
  },
  {
    label: 'Payments',
    icon: CreditCard,
    path: '/admin/payments',
  },
  {
    label: 'Reports',
    icon: BarChart3,
    path: '/admin/reports',
  },
  {
    label: 'Settings',
    icon: Settings,
    path: '/admin/settings',
  },
];


const AdminSidebar: React.FC = () => {
  const location = useLocation();


  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Shield size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold">Pronto</h1>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </div>
      </div>


      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;


          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>


      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <p className="text-xs text-gray-500 text-center">
          © 2026 Pronto. All rights reserved.
        </p>
      </div>
    </aside>
  );
};


export default AdminSidebar;
