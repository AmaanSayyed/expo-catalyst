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

const registerSchema = z
  .object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

function useRegisterForm() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues,
  });

  const onSubmit = async (data: RegisterFormData) => {
    const mockUser = {
      id: '1',
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    };
    login('mock-jwt-token', mockUser);
    router.replace('/(tabs)');
  };

  return { form, onSubmit };
}

function RegisterHeader() {
  return (
    <View className="mb-8">
      <Text className="mb-2 text-3xl font-bold text-gray-900">
        Create Account
      </Text>
      <Text className="text-base text-gray-500">Sign up to get started</Text>
    </View>
  );
}

function RegisterFooter() {
  return (
    <View className="mt-6 flex-row justify-center">
      <Text className="text-gray-500">Already have an account? </Text>
      <Link href="/login" asChild>
        <Text className="font-semibold text-primary">Sign In</Text>
      </Link>
    </View>
  );
}

type FormProps = {
  control: ReturnType<typeof useForm<RegisterFormData>>['control'];
  errors: ReturnType<typeof useForm<RegisterFormData>>['formState']['errors'];
};

function NameFields({ control, errors }: FormProps) {
  return (
    <View className="flex-row gap-3">
      <View className="flex-1">
        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="First Name"
              placeholder="John"
              autoCapitalize="words"
              autoComplete="given-name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.firstName?.message}
            />
          )}
        />
      </View>
      <View className="flex-1">
        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Last Name"
              placeholder="Doe"
              autoCapitalize="words"
              autoComplete="family-name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.lastName?.message}
            />
          )}
        />
      </View>
    </View>
  );
}

function CredentialFields({ control, errors }: FormProps) {
  return (
    <>
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
            placeholder="Create a password"
            isPassword
            autoCapitalize="none"
            autoComplete="new-password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.password?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Confirm Password"
            placeholder="Confirm your password"
            isPassword
            autoCapitalize="none"
            autoComplete="new-password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={errors.confirmPassword?.message}
          />
        )}
      />
    </>
  );
}

export default function Register() {
  const { form, onSubmit } = useRegisterForm();
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
            <RegisterHeader />
            <View className="gap-4">
              <NameFields control={control} errors={errors} />
              <CredentialFields control={control} errors={errors} />
              <Button
                onPress={handleSubmit(onSubmit)}
                loading={isSubmitting}
                fullWidth
                size="lg"
              >
                Create Account
              </Button>
            </View>
            <RegisterFooter />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
