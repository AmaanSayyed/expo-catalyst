import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, View } from 'react-native';

import { useTheme, useThemeStore } from '@/lib/store';

export function ThemeToggle() {
  const { colors } = useTheme();
  const setMode = useThemeStore((state) => state.setMode);
  const mode = useThemeStore((state) => state.mode);

  const cycleTheme = () => {
    if (mode === 'light') {
      setMode('dark');
    } else if (mode === 'dark') {
      setMode('system');
    } else {
      setMode('light');
    }
  };

  const getIcon = () => {
    if (mode === 'light') return 'sunny';
    if (mode === 'dark') return 'moon';
    return 'phone-portrait-outline';
  };

  return (
    <Pressable
      onPress={cycleTheme}
      className="h-10 w-10 items-center justify-center rounded-full"
      style={{ backgroundColor: colors.surfaceVariant }}
    >
      <Ionicons name={getIcon()} size={20} color={colors.text} />
    </Pressable>
  );
}

export function ThemeToggleRow() {
  const { colors } = useTheme();
  const setMode = useThemeStore((state) => state.setMode);
  const mode = useThemeStore((state) => state.mode);

  return (
    <View className="flex-row gap-2">
      <Pressable
        onPress={() => setMode('light')}
        className="h-10 w-10 items-center justify-center rounded-full"
        style={{
          backgroundColor:
            mode === 'light' ? colors.primary : colors.surfaceVariant,
        }}
      >
        <Ionicons
          name="sunny"
          size={18}
          color={mode === 'light' ? '#fff' : colors.textSecondary}
        />
      </Pressable>
      <Pressable
        onPress={() => setMode('dark')}
        className="h-10 w-10 items-center justify-center rounded-full"
        style={{
          backgroundColor:
            mode === 'dark' ? colors.primary : colors.surfaceVariant,
        }}
      >
        <Ionicons
          name="moon"
          size={18}
          color={mode === 'dark' ? '#fff' : colors.textSecondary}
        />
      </Pressable>
      <Pressable
        onPress={() => setMode('system')}
        className="h-10 w-10 items-center justify-center rounded-full"
        style={{
          backgroundColor:
            mode === 'system' ? colors.primary : colors.surfaceVariant,
        }}
      >
        <Ionicons
          name="phone-portrait-outline"
          size={18}
          color={mode === 'system' ? '#fff' : colors.textSecondary}
        />
      </Pressable>
    </View>
  );
}
