import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ProductCard } from '@/components';
import { useProducts } from '@/lib/api';
import { useTheme } from '@/lib/store';

function SearchBar() {
  const { colors } = useTheme();
  const [search, setSearch] = useState('');

  return (
    <View
      className="mx-5 mb-5 flex-row items-center gap-3 rounded-xl px-4 py-3"
      style={{ backgroundColor: colors.surface }}
    >
      <Ionicons name="search" size={20} color={colors.textMuted} />
      <TextInput
        placeholder="Search products..."
        placeholderTextColor={colors.textMuted}
        value={search}
        onChangeText={setSearch}
        className="flex-1 text-base"
        style={{ color: colors.text }}
      />
      {search.length > 0 && (
        <Pressable onPress={() => setSearch('')}>
          <Ionicons name="close-circle" size={20} color={colors.textMuted} />
        </Pressable>
      )}
    </View>
  );
}

function Categories() {
  const { colors } = useTheme();

  const categories = [
    { name: 'Electronics', icon: 'laptop-outline', color: '#3B82F6' },
    { name: 'Clothing', icon: 'shirt-outline', color: '#EC4899' },
    { name: 'Home', icon: 'home-outline', color: '#10B981' },
    { name: 'Beauty', icon: 'sparkles-outline', color: '#F59E0B' },
    { name: 'Sports', icon: 'football-outline', color: '#8B5CF6' },
    { name: 'Books', icon: 'book-outline', color: '#EF4444' },
  ];

  return (
    <View className="mb-6 px-5">
      <Text className="mb-4 text-lg font-bold" style={{ color: colors.text }}>
        Categories
      </Text>
      <View className="flex-row flex-wrap gap-3">
        {categories.map((category) => (
          <Pressable
            key={category.name}
            className="w-[30%] items-center rounded-2xl p-4"
            style={{ backgroundColor: colors.surface }}
          >
            <View
              className="mb-2 h-12 w-12 items-center justify-center rounded-full"
              style={{ backgroundColor: `${category.color}20` }}
            >
              <Ionicons
                name={category.icon as keyof typeof Ionicons.glyphMap}
                size={24}
                color={category.color}
              />
            </View>
            <Text
              className="text-center text-xs font-medium"
              style={{ color: colors.text }}
            >
              {category.name}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function AllProducts() {
  const { colors } = useTheme();
  const { data, isLoading } = useProducts(10);

  return (
    <View className="px-5">
      <Text className="mb-4 text-lg font-bold" style={{ color: colors.text }}>
        All Products
      </Text>
      {isLoading ? (
        <View className="h-48 items-center justify-center">
          <ActivityIndicator color={colors.primary} />
        </View>
      ) : (
        <View>
          {data?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </View>
      )}
    </View>
  );
}

export default function ExploreScreen() {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1" style={{ backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: insets.top }}
      >
        <View className="px-5 pb-4 pt-2">
          <Text className="text-2xl font-bold" style={{ color: colors.text }}>
            Explore
          </Text>
          <Text className="text-sm" style={{ color: colors.textSecondary }}>
            Discover amazing products
          </Text>
        </View>
        <SearchBar />
        <Categories />
        <AllProducts />
        <View style={{ height: insets.bottom + 32 }} />
      </ScrollView>
    </View>
  );
}
