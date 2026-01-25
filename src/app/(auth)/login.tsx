import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { z } from 'zod';

import { Button, Input } from '@/components';
import { useAuthStore } from '@/lib/store';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

function useLoginForm() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: LoginFormData) => {
    const mockUser = {
      id: '1',
      email: data.email,
      firstName: 'John',
      lastName: 'Doe',
    };
    login('mock-jwt-token', mockUser);
    router.replace('/(tabs)');
  };

  return { form, onSubmit };
}

function LoginHeader() {
  return (
    <View className="mb-8">
      <Text className="mb-2 text-3xl font-bold text-gray-900">
        Welcome back
      </Text>
      <Text className="text-base text-gray-500">
        Sign in to your account to continue
      </Text>
    </View>
  );
}

function LoginFooter() {
  return (
    <View className="mt-6 flex-row justify-center">
      <Text className="text-gray-500">{"Don't have an account? "}</Text>
      <Link href="/register" asChild>
        <Text className="font-semibold text-primary">Sign Up</Text>
      </Link>
    </View>
  );
}

export default function Login() {
  const { form, onSubmit } = useLoginForm();
  const insets = useSafeAreaInsets();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: insets.bottom }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-center px-6 py-8">
            <LoginHeader />
            <View className="gap-4">
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    label="Email"
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    error={errors.email?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    label="Password"
                    placeholder="Enter your password"
                    isPassword
                    autoCapitalize="none"
                    autoComplete="password"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    error={errors.password?.message}
                  />
                )}
              />
              <Button
                onPress={handleSubmit(onSubmit)}
                loading={isSubmitting}
                fullWidth
                size="lg"
              >
                Sign In
              </Button>
            </View>
            <LoginFooter />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
