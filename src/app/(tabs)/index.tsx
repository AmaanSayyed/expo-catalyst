import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ProductCardHorizontal } from '@/components';
import { useProducts, useRandomQuote } from '@/lib/api';
import { useAuthStore, useTheme } from '@/lib/store';

function Header() {
  const { colors } = useTheme();
  const user = useAuthStore((state) => state.user);

  return (
    <View className="px-5 pb-4 pt-2">
      <Text className="text-sm" style={{ color: colors.textSecondary }}>
        Welcome back,
      </Text>
      <Text className="text-2xl font-bold" style={{ color: colors.text }}>
        {user?.firstName || 'User'} 👋
      </Text>
    </View>
  );
}

function QuoteCard() {
  const { colors } = useTheme();
  const { data, isLoading, refetch } = useRandomQuote();

  if (isLoading) {
    return (
      <View
        className="mx-5 mb-6 rounded-2xl p-5"
        style={{ backgroundColor: colors.primaryLight }}
      >
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <Pressable
      onPress={() => refetch()}
      className="mx-5 mb-6 rounded-2xl p-5"
      style={{ backgroundColor: colors.primaryLight }}
    >
      <View className="mb-3 flex-row items-center gap-2">
        <Ionicons name="sparkles" size={18} color={colors.primary} />
        <Text
          className="text-sm font-semibold"
          style={{ color: colors.primary }}
        >
          Quote of the Day
        </Text>
      </View>
      <Text className="mb-2 text-base italic" style={{ color: colors.text }}>
        &ldquo;{data?.quote}&rdquo;
      </Text>
      <Text
        className="text-sm font-medium"
        style={{ color: colors.textSecondary }}
      >
        — {data?.author}
      </Text>
    </Pressable>
  );
}

function CategoryChips() {
  const { colors } = useTheme();
  const categories = ['All', 'Electronics', 'Clothing', 'Furniture', 'Beauty'];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20, gap: 8 }}
      className="mb-5"
    >
      {categories.map((category, index) => (
        <Pressable
          key={category}
          className="rounded-full px-4 py-2"
          style={{
            backgroundColor:
              index === 0 ? colors.primary : colors.surfaceVariant,
          }}
        >
          <Text
            className="text-sm font-medium"
            style={{ color: index === 0 ? '#fff' : colors.textSecondary }}
          >
            {category}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

function FeaturedProducts() {
  const { colors } = useTheme();
  const { data, isLoading } = useProducts(8);

  return (
    <View className="mb-6">
      <View className="mb-4 flex-row items-center justify-between px-5">
        <Text className="text-lg font-bold" style={{ color: colors.text }}>
          Featured Products
        </Text>
        <Pressable className="flex-row items-center gap-1">
          <Text
            className="text-sm font-medium"
            style={{ color: colors.primary }}
          >
            See All
          </Text>
          <Ionicons name="chevron-forward" size={16} color={colors.primary} />
        </Pressable>
      </View>
      {isLoading ? (
        <View className="h-48 items-center justify-center">
          <ActivityIndicator color={colors.primary} />
        </View>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {data?.products.map((product) => (
            <ProductCardHorizontal key={product.id} product={product} />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

function StatsCard() {
  const { colors } = useTheme();

  const stats = [
    { label: 'Products', value: '2.5K+', icon: 'cube-outline' as const },
    { label: 'Categories', value: '50+', icon: 'grid-outline' as const },
    { label: 'Brands', value: '100+', icon: 'pricetag-outline' as const },
  ];

  return (
    <View className="mx-5 mb-6 flex-row gap-3">
      {stats.map((stat) => (
        <View
          key={stat.label}
          className="flex-1 items-center rounded-2xl p-4"
          style={{ backgroundColor: colors.surface }}
        >
          <View
            className="mb-2 h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: colors.primaryLight }}
          >
            <Ionicons name={stat.icon} size={20} color={colors.primary} />
          </View>
          <Text className="text-lg font-bold" style={{ color: colors.text }}>
            {stat.value}
          </Text>
          <Text className="text-xs" style={{ color: colors.textSecondary }}>
            {stat.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

function TrendingSection() {
  const { colors } = useTheme();
  const { data, isLoading } = useProducts(6);

  const trendingProducts = data?.products.slice(0, 3) || [];

  return (
    <View className="mb-6 px-5">
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-lg font-bold" style={{ color: colors.text }}>
          Trending Now 🔥
        </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator color={colors.primary} />
      ) : (
        <View className="gap-3">
          {trendingProducts.map((product, index) => (
            <View
              key={product.id}
              className="flex-row items-center gap-4 rounded-2xl p-3"
              style={{ backgroundColor: colors.surface }}
            >
              <View
                className="h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: colors.primaryLight }}
              >
                <Text
                  className="text-lg font-bold"
                  style={{ color: colors.primary }}
                >
                  {index + 1}
                </Text>
              </View>
              <View className="flex-1">
                <Text
                  className="text-base font-semibold"
                  style={{ color: colors.text }}
                  numberOfLines={1}
                >
                  {product.title}
                </Text>
                <Text
                  className="text-sm"
                  style={{ color: colors.textSecondary }}
                >
                  ${product.price} • {product.rating}⭐
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={colors.textMuted}
              />
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

export default function HomeScreen() {
  const { colors } = useTheme();
  const { refetch, isRefetching } = useProducts(8);
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1" style={{ backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: insets.top }}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={refetch}
            tintColor={colors.primary}
          />
        }
      >
        <Header />
        <QuoteCard />
        <CategoryChips />
        <StatsCard />
        <FeaturedProducts />
        <TrendingSection />
        <View style={{ height: insets.bottom + 32 }} />
      </ScrollView>
    </View>
  );
}
