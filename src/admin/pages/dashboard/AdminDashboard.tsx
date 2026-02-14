// src/admin/pages/dashboard/AdminDashboard.tsx
import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  Users,
  Briefcase,
  Calendar,
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowRight,
} from 'lucide-react';
import { useAppSelector } from '../../../app/hooks';

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  isPositive,
  icon,
  color,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
          <div className="flex items-center gap-1">
            {isPositive ? (
              <TrendingUp className="text-green-500" size={16} />
            ) : (
              <TrendingDown className="text-red-500" size={16} />
            )}
            <span
              className={`text-sm font-medium ${
                isPositive ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {change}
            </span>
            <span className="text-sm text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
        <div
          className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

interface RecentActivityProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  color: string;
}

const RecentActivity: React.FC<RecentActivityProps> = ({
  icon,
  title,
  description,
  time,
  color,
}) => {
  return (
    <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500 truncate">{description}</p>
      </div>
      <span className="text-xs text-gray-400 whitespace-nowrap">{time}</span>
    </div>
  );
};

export const AdminDashboard: React.FC = () => {
  const { admin } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  // Mock data - Replace with real API calls
  const stats = [
    {
      title: 'Total Users',
      value: '12,458',
      change: '+12.5%',
      isPositive: true,
      icon: <Users className="text-blue-600" size={24} />,
      color: 'bg-blue-100',
    },
    {
      title: 'Service Providers',
      value: '3,247',
      change: '+8.2%',
      isPositive: true,
      icon: <Briefcase className="text-green-600" size={24} />,
      color: 'bg-green-100',
    },
    {
      title: 'Total Bookings',
      value: '8,945',
      change: '+15.3%',
      isPositive: true,
      icon: <Calendar className="text-purple-600" size={24} />,
      color: 'bg-purple-100',
    },
    {
      title: 'Revenue',
      value: '₹24.5L',
      change: '-3.2%',
      isPositive: false,
      icon: <DollarSign className="text-orange-600" size={24} />,
      color: 'bg-orange-100',
    },
  ];

  const recentActivities = [
    {
      icon: <Users className="text-blue-600" size={20} />,
      title: 'New User Registration',
      description: 'Harsh Kumar joined as a customer',
      time: '5 mins ago',
      color: 'bg-blue-100',
    },
    {
      icon: <Briefcase className="text-green-600" size={20} />,
      title: 'Provider Verified',
      description: 'Rahul Sharma completed verification',
      time: '15 mins ago',
      color: 'bg-green-100',
    },
    {
      icon: <Calendar className="text-purple-600" size={20} />,
      title: 'New Booking',
      description: 'Plumbing service booked for tomorrow',
      time: '1 hour ago',
      color: 'bg-purple-100',
    },
    {
      icon: <DollarSign className="text-orange-600" size={20} />,
      title: 'Payment Received',
      description: '₹2,500 received for booking #12345',
      time: '2 hours ago',
      color: 'bg-orange-100',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {admin?.fullName?.split(' ')[0] || 'Admin'}! 👋
        </h1>
        <p className="text-blue-100">
          Here's what's happening with your platform today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              View All
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="space-y-2">
            {recentActivities.map((activity, index) => (
              <RecentActivity key={index} {...activity} />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
       <div className="space-y-3">
  <button
    onClick={() => navigate("/admin/services")}
    className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
  >
    Manage Services
  </button>

  <button
    onClick={() => navigate("/admin/users")}
    className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
  >
    Manage Users
  </button>

  <button className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
    View Reports
  </button>
</div>

      </div>
    </div>
  );
};
