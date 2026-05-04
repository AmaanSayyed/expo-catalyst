# 🚀 Expo Catalyst

A **production-ready React Native Expo starter template** designed to kickstart new projects with best practices, modern tooling, and a scalable architecture — so you can focus on building features, not boilerplate.

Built with **Expo SDK 54**, **Expo Router**, **TypeScript**, **NativeWind**, and a carefully curated set of libraries battle-tested across multiple projects.

---

## ✨ Features

### Core Features

- ⚡ **Expo SDK 54** with Expo Router for file-based routing
- 🎨 **NativeWind (Tailwind CSS)** for utility-first styling
- 🧠 **Zustand** for lightweight state management
- 🔄 **TanStack Query** for server state & caching
- 💾 **MMKV** for fast, synchronous local storage
- 🔐 **Authentication flow** with protected routes
- 🌓 **Dark mode** with system preference support

### UI & Components

- 📱 **Native tabs** with theme integration
- 🧩 **Bottom Sheets** via `@gorhom/bottom-sheet`
- 📋 **React Hook Form + Zod** for forms & validation
- ⚡ **FlashList** for high-performance lists
- 🎯 **Reusable UI components** (Button, Input, Cards)

### Developer Experience

- 🛠️ **Strict ESLint & Prettier** configuration
- 🧪 **Git hooks** with Husky + Lint-staged
- 📝 **Commitizen & Commitlint** for conventional commits
- 📦 **PNPM-only** setup (enforced via preinstall)
- 🐛 **Reactotron** integration for debugging
- 🌍 **Web support** via `react-native-web`

---

## 🧱 Tech Stack

**Core**

- React 19
- React Native 0.81
- Expo SDK 54
- TypeScript

**Navigation**

- Expo Router
- React Navigation (Tabs, Native)

**State & Data**

- Zustand
- TanStack Query
- MMKV
- Async Storage

**UI & Styling**

- NativeWind (Tailwind CSS)
- Expo Image, Blur, Haptics
- Vector Icons
- Bottom Sheet

**Tooling**

- ESLint + Prettier
- Husky + Lint-Staged
- Commitizen + Commitlint
- PNPM enforced

---

## 📁 Project Structure

```txt
src/
├── app/                      # Expo Router file-based routes
│   ├── (auth)/              # Auth group (login, register)
│   │   ├── _layout.tsx      # Auth layout
│   │   ├── login.tsx        # Login screen
│   │   └── register.tsx     # Register screen
│   ├── (tabs)/              # Tab group (main app)
│   │   ├── _layout.tsx      # Tab bar configuration
│   │   ├── index.tsx        # Home tab
│   │   ├── explore.tsx      # Explore tab
│   │   └── profile.tsx      # Profile tab
│   └── _layout.tsx          # Root layout with providers
│
├── components/              # Reusable UI components
│   ├── ui/                  # Base UI components
│   │   ├── button.tsx       # Button component
│   │   ├── input.tsx        # Input component
│   │   ├── colors.ts        # Theme color definitions
│   │   └── ...
│   └── index.ts             # Component exports
│
├── lib/                     # Core utilities and configurations
│   ├── api/                 # API client and hooks
│   │   ├── client.ts        # Ky HTTP client setup
│   │   ├── hooks.ts         # TanStack Query hooks
│   │   └── index.ts
│   └── store/               # Zustand state stores
│       ├── index.ts         # Auth store
│       └── theme-store.ts   # Theme management
│
├── utils/                   # Utility functions
│   └── storage/             # Storage helpers
│       └── storage.ts       # MMKV wrapper functions
│
├── types/                   # TypeScript type definitions
│   └── index.ts
│
├── context/                 # React context providers
│   └── index.tsx            # Provider composition
│
└── assets/                  # Static assets
    ├── fonts/               # Custom fonts
    └── images/              # Images and icons
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone <repo-url>
cd <project-name>
```

### 2️⃣ Install dependencies (PNPM only)

```bash
pnpm install
```

> ❗ NPM & Yarn are blocked intentionally to ensure consistency.

### 3️⃣ Start the app

```bash
pnpm start
```

Run on a specific platform:

```bash
pnpm android
pnpm ios
pnpm web
```

---

## 🧪 Scripts

| Script         | Description             |
| -------------- | ----------------------- |
| `pnpm start`   | Start Expo dev server   |
| `pnpm android` | Run on Android          |
| `pnpm ios`     | Run on iOS              |
| `pnpm web`     | Run on web              |
| `pnpm lint`    | Run ESLint              |
| `pnpm doctor`  | Expo health check       |
| `pnpm commit`  | Commit using Commitizen |

---

## 🧹 Code Quality

- **ESLint** with Expo & custom rules
- **Prettier** with Tailwind plugin
- **Lint-staged** auto-fix on commit
- **Commitlint** enforcing conventional commits

Example commit:

```bash
pnpm commit
```

---

## 🌱 Environment Variables

This template disables auto-dotenv loading:

```bash
EXPO_NO_DOTENV=1
```

You can manage envs manually or plug in your own env strategy as needed.

---

## 📚 Usage Guide

### Creating a New Screen

Create a new file in `src/app/(tabs)/` for a new tab, or anywhere in `src/app/` for a regular screen:

```tsx
// src/app/(tabs)/settings.tsx
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@/lib/store';

export default function SettingsScreen() {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1"
      style={{
        backgroundColor: colors.background,
        paddingTop: insets.top
      }}
    >
      <Text style={{ color: colors.text }}>Settings</Text>
    </View>
  );
}
```

Then add it to the tabs in `src/app/(tabs)/_layout.tsx`:

```tsx
<Tabs.Screen
  name="settings"
  options={{
    title: 'Settings',
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="settings-outline" size={size} color={color} />
    ),
  }}
/>
```

### Using the Theme System

The template includes a built-in theme system with dark mode support:

```tsx
import { useTheme, useThemeStore } from '@/lib/store';

function MyComponent() {
  const { colors, isDark } = useTheme();
  const setMode = useThemeStore((state) => state.setMode);

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>Hello World</Text>

      {/* Toggle theme */}
      <Button onPress={() => setMode(isDark ? 'light' : 'dark')}>
        Toggle Theme
      </Button>
    </View>
  );
}
```

**Available theme modes:**

- `'light'` - Always light mode
- `'dark'` - Always dark mode
- `'system'` - Follow system preference (default)

**Available colors:**

```tsx
colors.background      // Main background
colors.surface         // Card/surface background
colors.surfaceVariant  // Subtle surface variation
colors.primary         // Primary brand color
colors.primaryLight    // Light primary variant
colors.text            // Primary text
colors.textSecondary   // Secondary text
colors.textMuted       // Muted text
colors.border          // Border color
```

### Fetching Data with TanStack Query

Create API hooks in `src/lib/api/hooks.ts`:

```tsx
import { useQuery, useMutation } from '@tanstack/react-query';
import { api } from './client';

// GET request
export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await api.get('products').json<ProductsResponse>();
      return response;
    },
  });
}

// POST request with mutation
export function useCreateProduct() {
  return useMutation({
    mutationFn: async (product: CreateProductInput) => {
      return await api.post('products', { json: product }).json();
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
}
```

Use in components:

```tsx
import { useProducts } from '@/lib/api/hooks';

function ProductList() {
  const { data, isLoading, error, refetch } = useProducts();

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error loading products</Text>;

  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={isLoading} onRefresh={refetch} />
    }>
      {data?.products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ScrollView>
  );
}
```

### Managing State with Zustand

Create a new store in `src/lib/store/`:

```tsx
// src/lib/store/cart-store.ts
import { create } from 'zustand';

interface CartItem {
  id: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item]
    })),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter(item => item.id !== id)
    })),

  clearCart: () => set({ items: [] }),
}));
```

Use in components:

```tsx
import { useCartStore } from '@/lib/store/cart-store';

function CartButton() {
  const items = useCartStore((state) => state.items);
  const itemCount = items.length;

  return (
    <View>
      <Icon name="cart" />
      <Badge>{itemCount}</Badge>
    </View>
  );
}
```

### Using Local Storage (MMKV)

The template includes MMKV wrapper functions in `src/utils/storage/storage.ts`:

```tsx
import { saveString, loadString, save, load, remove } from '@/utils/storage/storage';

// Save/load strings
saveString('user_name', 'John Doe');
const name = loadString('user_name');

// Save/load objects (auto JSON stringify/parse)
save('user_preferences', { theme: 'dark', notifications: true });
const prefs = load<UserPreferences>('user_preferences');

// Remove item
remove('user_name');
```

### Creating Reusable Components

Follow the pattern in `src/components/ui/`:

```tsx
// src/components/ui/card.tsx
import { View, ViewProps } from 'react-native';
import { useTheme } from '@/lib/store';

interface CardProps extends ViewProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated';
}

export function Card({ children, variant = 'default', style, ...props }: CardProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: colors.surface,
          borderRadius: 16,
          padding: 16,
        },
        variant === 'elevated' && {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 4,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
```

Export from `src/components/index.ts`:

```tsx
export { Card } from './ui/card';
```

### Form Handling with React Hook Form + Zod

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

function LoginScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <View>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Email"
            value={value}
            onChangeText={onChange}
            error={errors.email?.message}
          />
        )}
      />
      <Button onPress={handleSubmit(onSubmit)}>Login</Button>
    </View>
  );
}
```

### Authentication Flow

The template includes a basic auth setup with protected routes:

```tsx
// src/lib/store/index.ts - Already configured
import { useAuthStore } from '@/lib/store';

function LoginButton() {
  const login = useAuthStore((state) => state.login);

  const handleLogin = async () => {
    const token = 'your-auth-token';
    const user = { id: '1', firstName: 'John', email: 'john@example.com' };

    login(token, user);
    // Router will automatically navigate to (tabs)
  };

  return <Button onPress={handleLogin}>Login</Button>;
}

function LogoutButton() {
  const logout = useAuthStore((state) => state.logout);

  return <Button onPress={logout}>Logout</Button>;
}
```

The root layout (`src/app/_layout.tsx`) automatically handles navigation between auth and main app based on authentication state.

---

## 🧩 Why this template?

I created this template to:

- Avoid repeating setup work on every new Expo project
- Start with **sane defaults & production-grade tooling**
- Scale from MVP → production without refactoring basics
- Maintain **developer experience** and consistency

If you build multiple apps with Expo — this saves **hours** every time.

---

## 📌 Usage

Feel free to:

- Fork it
- Clone it
- Customize it
- Use it internally for client or personal projects

---

## 🎨 Customization

### Changing Theme Colors

Edit `src/components/ui/colors.ts` to customize your theme:

```tsx
export const lightColors = {
  background: '#F8F9FA',
  surface: '#FFFFFF',
  primary: '#1F485B',     // Change your primary brand color
  // ... other colors
};

export const darkColors = {
  background: '#121212',
  surface: '#1E1E1E',
  primary: '#4A9EBA',     // Adjust for dark mode
  // ... other colors
};
```

### Changing Fonts

1. Add your font files to `assets/fonts/`
2. Update `src/app/_layout.tsx`:

```tsx
const [fontsLoaded] = useFonts({
  'YourFont-Regular': require('../../assets/fonts/YourFont-Regular.ttf'),
  'YourFont-Bold': require('../../assets/fonts/YourFont-Bold.ttf'),
});
```

3. Use in your global CSS or inline styles

### Modifying the API Client

Edit `src/lib/api/client.ts` to configure your API:

```tsx
export const api = ky.create({
  prefixUrl: 'https://your-api.com/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    beforeRequest: [
      (request) => {
        const token = loadString('auth_token');
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }
      },
    ],
  },
});
```

---

## 🚢 Deployment

### Building for Production

```bash
# iOS
eas build --platform ios --profile production

# Android
eas build --platform android --profile production

# Both
eas build --platform all --profile production
```

### Publishing Updates (OTA)

```bash
eas update --branch production --message "Bug fixes and improvements"
```

---

## 🤝 Contributing

This is a personal starter template, but suggestions are welcome! Feel free to:

- Open an issue for bugs or feature requests
- Submit a PR for improvements
- Fork and customize for your own use

---

## 📄 License

MIT - feel free to use this template for personal or commercial projects.

---

## 🙏 Acknowledgments

Built with these amazing tools:

- [Expo](https://expo.dev) - The framework
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-based routing
- [NativeWind](https://www.nativewind.dev/) - Tailwind for React Native
- [TanStack Query](https://tanstack.com/query) - Data fetching & caching
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [MMKV](https://github.com/mrousavy/react-native-mmkv) - Fast storage

---

### ⭐ If this template helped you, consider starring the repo!

**Happy coding! 🚀**
