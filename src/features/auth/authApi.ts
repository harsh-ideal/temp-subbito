// src/features/auth/authApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  LoginStep1Request,
  LoginStep1Response,
  LoginStep2Request,
  LoginStep2Response,
} from './types';
import type { RootState } from '../../app/store';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    adminLoginStep1: builder.mutation<LoginStep1Response, LoginStep1Request>({
      query: (credentials) => ({
        url: '/auth/admin/login/step1',
        method: 'POST',
        body: credentials,
      }),
    }),
    adminLoginStep2: builder.mutation<LoginStep2Response, LoginStep2Request>({
      query: (data) => ({
        url: '/auth/admin/login/step2',
        method: 'POST',
        body: data,
      }),
    }),
    adminLogout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/admin/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useAdminLoginStep1Mutation,
  useAdminLoginStep2Mutation,
  useAdminLogoutMutation,
} = authApi;
