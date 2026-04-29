import { QueryClient } from '@tanstack/react-query';

export * from './client';
export * from './hooks';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2,
    },
    mutations: {
      retry: 1,
    },
  },
});
