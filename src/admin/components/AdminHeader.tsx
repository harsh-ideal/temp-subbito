// src/admin/components/AdminHeader.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Search, LogOut, User, ChevronDown } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout } from '../../features/auth/authSlice';
import { useAdminLogoutMutation } from '../../features/auth/authApi';


const AdminHeader: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { admin } = useAppSelector((state) => state.auth);
  const [adminLogout] = useAdminLogoutMutation();


  const [showDropdown, setShowDropdown] = useState(false);


  const handleLogout = async () => {
    try {
      await adminLogout().unwrap();
      dispatch(logout());
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
      // Force logout anyway
      dispatch(logout());
      navigate('/admin/login');
    }
  };


  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search users, bookings, providers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>


        {/* Right Section */}
        <div className="flex items-center gap-4 ml-6">
          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>


          {/* Admin Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                {admin?.fullName?.charAt(0) || 'A'}
              </div>
              <div className="text-left hidden md:block">
                <p className="text-sm font-medium text-gray-900">
                  {admin?.fullName || 'Admin'}
                </p>
                <p className="text-xs text-gray-500">{admin?.email}</p>
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </button>


            {/* Dropdown Menu */}
            {showDropdown && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowDropdown(false)}
                ></div>
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">
                      {admin?.fullName}
                    </p>
                    <p className="text-xs text-gray-500">{admin?.email}</p>
                  </div>


                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      navigate('/admin/profile');
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <User size={16} />
                    Profile Settings
                  </button>


                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};


export default AdminHeader;
