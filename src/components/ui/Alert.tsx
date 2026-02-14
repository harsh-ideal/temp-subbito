// src/components/ui/Alert.tsx
import React from 'react';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface AlertProps {
  type: 'success' | 'error' | 'info';
  message: string;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const styles = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: <CheckCircle className="text-green-500" size={20} />,
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: <XCircle className="text-red-500" size={20} />,
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: <AlertCircle className="text-blue-500" size={20} />,
    },
  };

  const style = styles[type];

  return (
    <div
      className={`${style.bg} ${style.border} ${style.text} border rounded-lg p-4 flex items-start gap-3`}
    >
      {style.icon}
      <p className="flex-1 text-sm font-medium">{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      )}
    </div>
  );
};
