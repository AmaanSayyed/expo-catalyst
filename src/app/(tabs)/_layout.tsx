import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Platform } from 'react-native';

import { useTheme } from '@/lib/store';

export default function TabsLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: Platform.select({
          ios: {
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
          },
          android: {
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
            height: 65,
            paddingBottom: 8,
            paddingTop: 8,
          },
        }),
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        animation: 'shift',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) =>
            Platform.OS === 'ios' ? (
              <SymbolView
                name={focused ? 'house.fill' : 'house'}
                tintColor={color}
                size={24}
              />
            ) : (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={color}
              />
            ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) =>
            Platform.OS === 'ios' ? (
              <SymbolView
                name={focused ? 'safari.fill' : 'safari'}
                tintColor={color}
                size={24}
              />
            ) : (
              <Ionicons
                name={focused ? 'compass' : 'compass-outline'}
                size={24}
                color={color}
              />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) =>
            Platform.OS === 'ios' ? (
              <SymbolView
                name={focused ? 'person.fill' : 'person'}
                tintColor={color}
                size={24}
              />
            ) : (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={24}
                color={color}
              />
            ),
        }}
      />
    </Tabs>
  );
}
