// Base color palette - used by Tailwind
export const colors = {
  primary: {
    DEFAULT: '#1F485B',
    dark: '#163844',
    medium: '#194A7A',
    light: '#D7E3FC',
  },
  secondary: {
    DEFAULT: '#6B7280',
    dark: '#4B5563',
    light: '#9CA3AF',
  },
  success: {
    DEFAULT: '#10B981',
    dark: '#059669',
    light: '#D1FAE5',
  },
  error: {
    DEFAULT: '#EF4444',
    dark: '#DC2626',
    light: '#FEE2E2',
  },
  warning: {
    DEFAULT: '#F59E0B',
    dark: '#D97706',
    light: '#FEF3C7',
  },
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  white: '#FFFFFF',
  black: '#000000',
};

// Theme colors for runtime JS access (useTheme hook)
export const lightColors = {
  background: colors.white,
  surface: colors.gray[50],
  surfaceVariant: colors.gray[100],
  text: colors.gray[900],
  textSecondary: colors.gray[500],
  textMuted: colors.gray[400],
  border: colors.gray[200],
  primary: colors.primary.DEFAULT,
  primaryLight: colors.primary.light,
  success: colors.success.DEFAULT,
  error: colors.error.DEFAULT,
  warning: colors.warning.DEFAULT,
  card: colors.white,
  cardBorder: colors.gray[200],
};

export const darkColors = {
  background: '#0F172A',
  surface: '#1E293B',
  surfaceVariant: '#334155',
  text: colors.gray[50],
  textSecondary: colors.gray[400],
  textMuted: colors.gray[500],
  border: '#334155',
  primary: '#60A5FA',
  primaryLight: '#1E3A5F',
  success: '#34D399',
  error: '#F87171',
  warning: '#FBBF24',
  card: '#1E293B',
  cardBorder: '#334155',
};
