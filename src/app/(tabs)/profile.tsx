import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAuthStore, useTheme, useThemeStore } from '@/lib/store';

function ProfileHeader() {
  const { colors } = useTheme();
  const user = useAuthStore((state) => state.user);

  return (
    <View className="items-center px-5 pb-6 pt-4">
      <View
        className="mb-4 h-24 w-24 items-center justify-center rounded-full"
        style={{ backgroundColor: colors.primaryLight }}
      >
        <Text className="text-3xl font-bold" style={{ color: colors.primary }}>
          {user?.firstName?.[0]}
          {user?.lastName?.[0]}
        </Text>
      </View>
      <Text className="text-xl font-bold" style={{ color: colors.text }}>
        {user?.firstName} {user?.lastName}
      </Text>
      <Text className="text-sm" style={{ color: colors.textSecondary }}>
        {user?.email}
      </Text>
    </View>
  );
}

function ThemeSection() {
  const { colors } = useTheme();
  const mode = useThemeStore((state) => state.mode);
  const setMode = useThemeStore((state) => state.setMode);

  const themes = [
    { key: 'light' as const, label: 'Light', icon: 'sunny' as const },
    { key: 'dark' as const, label: 'Dark', icon: 'moon' as const },
    {
      key: 'system' as const,
      label: 'System',
      icon: 'phone-portrait' as const,
    },
  ];

  return (
    <View className="mx-5 mb-6">
      <Text
        className="mb-3 text-sm font-semibold"
        style={{ color: colors.textSecondary }}
      >
        APPEARANCE
      </Text>
      <View className="rounded-2xl" style={{ backgroundColor: colors.surface }}>
        {themes.map((theme, index) => (
          <Pressable
            key={theme.key}
            onPress={() => setMode(theme.key)}
            className="flex-row items-center justify-between px-4 py-4"
            style={{
              borderBottomWidth: index < themes.length - 1 ? 1 : 0,
              borderBottomColor: colors.border,
            }}
          >
            <View className="flex-row items-center gap-3">
              <View
                className="h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: colors.primaryLight }}
              >
                <Ionicons name={theme.icon} size={18} color={colors.primary} />
              </View>
              <Text
                className="text-base font-medium"
                style={{ color: colors.text }}
              >
                {theme.label}
              </Text>
            </View>
            {mode === theme.key && (
              <Ionicons
                name="checkmark-circle"
                size={24}
                color={colors.primary}
              />
            )}
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function SettingsSection() {
  const { colors } = useTheme();

  const settings = [
    { label: 'Edit Profile', icon: 'person-outline' as const },
    { label: 'Notifications', icon: 'notifications-outline' as const },
    { label: 'Privacy', icon: 'shield-outline' as const },
    { label: 'Help & Support', icon: 'help-circle-outline' as const },
    { label: 'About', icon: 'information-circle-outline' as const },
  ];

  return (
    <View className="mx-5 mb-6">
      <Text
        className="mb-3 text-sm font-semibold"
        style={{ color: colors.textSecondary }}
      >
        SETTINGS
      </Text>
      <View className="rounded-2xl" style={{ backgroundColor: colors.surface }}>
        {settings.map((setting, index) => (
          <Pressable
            key={setting.label}
            className="flex-row items-center justify-between px-4 py-4"
            style={{
              borderBottomWidth: index < settings.length - 1 ? 1 : 0,
              borderBottomColor: colors.border,
            }}
          >
            <View className="flex-row items-center gap-3">
              <View
                className="h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: colors.surfaceVariant }}
              >
                <Ionicons
                  name={setting.icon}
                  size={18}
                  color={colors.textSecondary}
                />
              </View>
              <Text
                className="text-base font-medium"
                style={{ color: colors.text }}
              >
                {setting.label}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textMuted}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function LogoutButton() {
  const { colors } = useTheme();
  const logout = useAuthStore((state) => state.logout);

  return (
    <View className="mx-5 mb-6">
      <Pressable
        onPress={logout}
        className="flex-row items-center justify-center gap-2 rounded-2xl py-4"
        style={{ backgroundColor: colors.surface }}
      >
        <Ionicons name="log-out-outline" size={20} color={colors.error} />
        <Text
          className="text-base font-semibold"
          style={{ color: colors.error }}
        >
          Sign Out
        </Text>
      </Pressable>
    </View>
  );
}

export default function ProfileScreen() {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1" style={{ backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: insets.top }}
      >
        <ProfileHeader />
        <ThemeSection />
        <SettingsSection />
        <LogoutButton />
        <View style={{ height: insets.bottom + 32 }} />
      </ScrollView>
    </View>
  );
}
