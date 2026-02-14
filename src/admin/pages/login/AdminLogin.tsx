// src/pages/admin/AdminLogin.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Shield } from 'lucide-react';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import { Alert } from '../../../components/ui/Alert';
import {
  useAdminLoginStep1Mutation,
  useAdminLoginStep2Mutation,
} from '../../../features/auth/authApi';
import { useAppDispatch } from '../../../app/hooks';
import { setCredentials } from '../../../features/auth/authSlice';

export const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Step 1: Password verification
  const [loginStep1, { isLoading: isStep1Loading }] =
    useAdminLoginStep1Mutation();

  // Step 2: OTP verification
  const [loginStep2, { isLoading: isStep2Loading }] =
    useAdminLoginStep2Mutation();

  // Form state
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSentTo, setOtpSentTo] = useState('');

  // Error and success states
  const [alert, setAlert] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
  } | null>(null);

  // Form errors
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    otp?: string;
  }>({});

  // Validate Step 1
  const validateStep1 = () => {
    const newErrors: typeof errors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate Step 2
  const validateStep2 = () => {
    const newErrors: typeof errors = {};

    if (!otp) {
      newErrors.otp = 'OTP is required';
    } else if (otp.length !== 6) {
      newErrors.otp = 'OTP must be 6 digits';
    } else if (!/^\d+$/.test(otp)) {
      newErrors.otp = 'OTP must contain only numbers';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Step 1 Submit
  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAlert(null);

    if (!validateStep1()) return;

    try {
      const response = await loginStep1({ email, password }).unwrap();

      if (response.success) {
        setOtpSentTo(response.data.otpSentTo);
        setStep(2);
        setAlert({
          type: 'success',
          message: response.data.message,
        });
      }
    } catch (error: any) {
      setAlert({
        type: 'error',
        message: error?.data?.message || 'Login failed. Please try again.',
      });
    }
  };

  // Handle Step 2 Submit
  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAlert(null);

    if (!validateStep2()) return;

    try {
      const response = await loginStep2({ email, otp }).unwrap();

      if (response.success) {
        // Save credentials to Redux and localStorage
        dispatch(
          setCredentials({
            admin: response.data.admin,
            accessToken: response.data.tokens.accessToken,
            refreshToken: response.data.tokens.refreshToken,
          })
        );

        setAlert({
          type: 'success',
          message: 'Login successful! Redirecting...',
        });

        // Redirect to dashboard
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 1000);
      }
    } catch (error: any) {
      setAlert({
        type: 'error',
        message:
          error?.data?.message || 'OTP verification failed. Please try again.',
      });
    }
  };

  // Resend OTP
  const handleResendOTP = async () => {
    setAlert(null);
    try {
      const response = await loginStep1({ email, password }).unwrap();
      if (response.success) {
        setAlert({
          type: 'success',
          message: 'New OTP sent to your phone!',
        });
      }
    } catch (error: any) {
      setAlert({
        type: 'error',
        message: error?.data?.message || 'Failed to resend OTP.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Shield className="text-blue-600" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-500 mt-2">
              {step === 1
                ? 'Enter your credentials to continue'
                : 'Enter the OTP sent to your phone'}
            </p>
          </div>

          {/* Alert */}
          {alert && (
            <div className="mb-6">
              <Alert
                type={alert.type}
                message={alert.message}
                onClose={() => setAlert(null)}
              />
            </div>
          )}

          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-green-600 text-white'
              }`}
            >
              {step === 1 ? '1' : '✓'}
            </div>
            <div className="w-16 h-1 bg-gray-200">
              <div
                className={`h-full bg-blue-600 transition-all duration-300 ${
                  step === 2 ? 'w-full' : 'w-0'
                }`}
              />
            </div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === 2
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              2
            </div>
          </div>

          {/* Step 1: Email & Password */}
          {step === 1 && (
            <form onSubmit={handleStep1Submit} className="space-y-5">
              <Input
                label="Email Address"
                type="email"
                placeholder="admin@pronto.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                icon={<Mail size={20} />}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
                icon={<Lock size={20} />}
              />

              <Button
                type="submit"
                isLoading={isStep1Loading}
                className="w-full"
              >
                Continue
              </Button>
            </form>
          )}

          {/* Step 2: OTP */}
          {step === 2 && (
            <form onSubmit={handleStep2Submit} className="space-y-5">
              <div>
                <p className="text-sm text-gray-600 mb-4">
                  OTP sent to: <strong>{otpSentTo}</strong>
                </p>
                <Input
                  label="Enter OTP"
                  type="text"
                  placeholder="123456"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  maxLength={6}
                  error={errors.otp}
                  icon={<Lock size={20} />}
                />
              </div>

              <Button
                type="submit"
                isLoading={isStep2Loading}
                className="w-full"
              >
                Verify & Login
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendOTP}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Didn't receive OTP? Resend
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setOtp('');
                  setAlert(null);
                }}
                className="text-sm text-gray-500 hover:text-gray-700 w-full text-center"
              >
                ← Back to login
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Protected by 2-Factor Authentication
        </p>
      </div>
    </div>
  );
};
