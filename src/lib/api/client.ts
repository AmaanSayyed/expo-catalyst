import ky from 'ky';

import { useAuthStore } from '@/lib/store';

const API_URL = process.env.API_URL || 'https://dummyjson.com/';

export const api = ky.create({
  prefixUrl: API_URL,
  timeout: 30000,
  hooks: {
    beforeRequest: [
      (request) => {
        const token = useAuthStore.getState().token;
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }
      },
    ],
    afterResponse: [
      async (_request, _options, response) => {
        if (response.status === 401) {
          useAuthStore.getState().logout();
        }
        return response;
      },
    ],
  },
});
