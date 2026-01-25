import { create } from 'zustand';

import type { AuthActions, AuthState, User } from '@/types';
import { loadString, remove, saveString } from '@/utils/storage/storage';

export * from './theme-store';

const TOKEN_KEY = 'auth_token';

const getInitialToken = (): string | null => {
  return loadString(TOKEN_KEY);
};

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  token: getInitialToken(),
  user: null,
  isAuthenticated: !!getInitialToken(),

  login: (token: string, user: User) => {
    saveString(TOKEN_KEY, token);
    set({ token, user, isAuthenticated: true });
  },

  logout: () => {
    remove(TOKEN_KEY);
    set({ token: null, user: null, isAuthenticated: false });
  },

  setUser: (user: User) => {
    set({ user });
  },

  setToken: (token: string) => {
    saveString(TOKEN_KEY, token);
    set({ token, isAuthenticated: true });
  },
}));
