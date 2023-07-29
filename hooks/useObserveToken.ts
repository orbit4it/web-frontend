import { store } from '@/store';
import axios from 'axios';
import { useEffect } from 'react';
import useRefreshToken from './useRefreshToken';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

const useObserveToken = () => {
  const auth = store.getState().auth.accessToken;
  const refreshToken = useRefreshToken();

  useEffect(() => {
    const requestIntercept = axiosInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = 'Bearer ' + auth;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseIntercept = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error?.config;
        if (error?.response?.status === 401 && !originalRequest?._retry) {
          originalRequest._retry = true;
          const { accessToken }: any = await refreshToken();
          originalRequest.headers.Authorization = 'Bearer ' + accessToken;
          return axiosInstance(originalRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept);
      axiosInstance.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refreshToken]);

  return axiosInstance;
};

export default useObserveToken;
