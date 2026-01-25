import React, { forwardRef, useState } from 'react';
import { Pressable, Text, TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isPassword?: boolean;
}

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      isPassword,
      secureTextEntry,
      ...props
    },
    ref
  ) => {
    const [isSecure, setIsSecure] = useState(isPassword || secureTextEntry);
    const hasError = !!error;

    const toggleSecure = () => {
      setIsSecure((prev) => !prev);
    };

    return (
      <View className="w-full">
        {label && (
          <Text className="mb-1.5 text-sm font-medium text-gray-700">
            {label}
          </Text>
        )}

        <View
          className={`
            flex-row items-center rounded-lg border bg-white px-3
            ${hasError ? 'border-error' : 'border-gray-300'}
          `}
        >
          {leftIcon && <View className="mr-2">{leftIcon}</View>}

          <TextInput
            ref={ref}
            {...props}
            secureTextEntry={isSecure}
            className={`
              flex-1 py-3 text-base text-gray-900
              ${props.className || ''}
            `}
            placeholderTextColor="#9CA3AF"
          />

          {isPassword ? (
            <Pressable onPress={toggleSecure} className="ml-2 p-1">
              <Text className="text-sm text-gray-500">
                {isSecure ? 'Show' : 'Hide'}
              </Text>
            </Pressable>
          ) : (
            rightIcon && <View className="ml-2">{rightIcon}</View>
          )}
        </View>

        {hasError && <Text className="mt-1 text-sm text-error">{error}</Text>}

        {!hasError && helperText && (
          <Text className="mt-1 text-sm text-gray-500">{helperText}</Text>
        )}
      </View>
    );
  }
);

Input.displayName = 'Input';
