'use client';
import { store } from '@/store';
import axios from 'axios';
import { showToast } from './toaster';

const Apicall = async (query: string, refreshToken: boolean = true) => {
  try {
    let token = '';
    if (refreshToken) {
      const auth = store.getState().auth.accessToken;
      if (!auth) {
        throw new Error('Auth is not defined');
      }

      if (auth) {
        token = auth;
      } else {
        showToast('Terjadi Kesalahan', 'danger');
        throw new Error('Something went wrong');
      }
    }

    const headers: { [key: string]: string } = {};

    if (refreshToken) {
      headers.Authorization = 'Bearer ' + token;
    }

    const option = {
      method: 'POST',
      url: process.env.NEXT_PUBLIC_BASE_URL + '/graphql',
      data: {
        query: `
          ${query}
        `,
      },
      headers,
      withCredentials: true,
    };

    const response = await axios(option);
    return response.data;
  } catch (error) {
    showToast('Terjadi Kesalahan', 'danger');
    return error;
  }
};

export default Apicall;
