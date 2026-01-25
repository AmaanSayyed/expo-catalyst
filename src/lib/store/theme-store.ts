import { useColorScheme } from 'react-native';
import { create } from 'zustand';

import { darkColors, lightColors } from '@/components/ui/colors';
import { loadString, saveString } from '@/utils/storage/storage';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeState {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const THEME_KEY = 'theme_mode';

const getInitialMode = (): ThemeMode => {
  const stored = loadString(THEME_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }
  return 'system';
};

export const useThemeStore = create<ThemeState>((set) => ({
  mode: getInitialMode(),
  setMode: (mode: ThemeMode) => {
    saveString(THEME_KEY, mode);
    set({ mode });
  },
}));

export function useTheme() {
  const systemColorScheme = useColorScheme();
  const mode = useThemeStore((state) => state.mode);

  const isDark =
    mode === 'dark' || (mode === 'system' && systemColorScheme === 'dark');

  return {
    isDark,
    mode,
    colors: isDark ? darkColors : lightColors,
  };
}

export type ThemeColors = typeof lightColors;
