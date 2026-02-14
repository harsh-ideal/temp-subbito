// src/features/auth/types.ts
export interface Admin {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: 'admin';
  permissions: string[];
  lastLogin: string;
}

export interface AuthState {
  admin: Admin | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginStep1Request {
  email: string;
  password: string;
}

export interface LoginStep1Response {
  success: boolean;
  message: string;
  data: {
    message: string;
    otpSentTo: string;
    expiresIn: string;
  };
}

export interface LoginStep2Request {
  email: string;
  otp: string;
}

export interface LoginStep2Response {
  success: boolean;
  message: string;
  data: {
    admin: Admin;
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  };
}
