import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { Product } from '@/lib/api';
import { useTheme } from '@/lib/store';

interface ProductCardProps {
  product: Product;
  onPress?: () => void;
}

export function ProductCard({ product, onPress }: ProductCardProps) {
  const { colors } = useTheme();
  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  return (
    <Pressable
      onPress={onPress}
      className="mb-4 overflow-hidden rounded-2xl"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.cardBorder,
        borderWidth: 1,
      }}
    >
      <Image
        source={{ uri: product.thumbnail }}
        style={{ width: '100%', height: 160 }}
        contentFit="cover"
        transition={300}
      />
      <View className="p-4">
        <Text
          className="mb-1 text-xs font-medium uppercase tracking-wide"
          style={{ color: colors.primary }}
        >
          {product.category}
        </Text>
        <Text
          className="mb-2 text-base font-semibold"
          style={{ color: colors.text }}
          numberOfLines={1}
        >
          {product.title}
        </Text>
        <Text
          className="mb-3 text-sm"
          style={{ color: colors.textSecondary }}
          numberOfLines={2}
        >
          {product.description}
        </Text>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <Text className="text-lg font-bold" style={{ color: colors.text }}>
              ${discountedPrice.toFixed(2)}
            </Text>
            {product.discountPercentage > 0 && (
              <Text
                className="text-sm line-through"
                style={{ color: colors.textMuted }}
              >
                ${product.price.toFixed(2)}
              </Text>
            )}
          </View>
          <View className="flex-row items-center gap-1">
            <Ionicons name="star" size={14} color={colors.warning} />
            <Text
              className="text-sm font-medium"
              style={{ color: colors.text }}
            >
              {product.rating.toFixed(1)}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export function ProductCardHorizontal({ product, onPress }: ProductCardProps) {
  const { colors } = useTheme();
  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  return (
    <Pressable
      onPress={onPress}
      className="mr-4 w-44 overflow-hidden rounded-2xl"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.cardBorder,
        borderWidth: 1,
      }}
    >
      <Image
        source={{ uri: product.thumbnail }}
        style={{ width: '100%', height: 120 }}
        contentFit="cover"
        transition={300}
      />
      <View className="p-3">
        <Text
          className="mb-1 text-sm font-semibold"
          style={{ color: colors.text }}
          numberOfLines={1}
        >
          {product.title}
        </Text>
        <View className="flex-row items-center justify-between">
          <Text
            className="text-base font-bold"
            style={{ color: colors.primary }}
          >
            ${discountedPrice.toFixed(2)}
          </Text>
          <View className="flex-row items-center gap-1">
            <Ionicons name="star" size={12} color={colors.warning} />
            <Text className="text-xs" style={{ color: colors.textSecondary }}>
              {product.rating.toFixed(1)}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
