# 🚀 Expo Starter Template

A **production-ready React Native Expo starter template** designed to kickstart new projects with best practices, modern tooling, and a scalable architecture — so you can focus on building features, not boilerplate.

Built with **Expo SDK 54**, **Expo Router**, **TypeScript**, **NativeWind**, and a carefully curated set of libraries I use across projects.

---

## ✨ Features

- ⚡ **Expo SDK 54** with Expo Router
- 🧭 **File-based routing** using `expo-router`
- 🎨 **NativeWind (Tailwind CSS)** for styling
- 🧠 **Zustand** for lightweight state management
- 🔄 **TanStack Query** for server state & caching
- 💾 **MMKV** for fast local storage
- 📋 **React Hook Form + Zod** for forms & validation
- 📱 **FlashList** for high-performance lists
- 🧩 **Bottom Sheets** via `@gorhom/bottom-sheet`
- 🛠️ **Strict linting & formatting**
- 🧪 **Git hooks, Commitizen & Commitlint**
- 📦 **PNPM-only setup** (enforced)
- 🌍 Web support via `react-native-web`

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
app/                # Expo Router routes
components/         # Reusable UI components
hooks/              # Custom hooks
store/              # Zustand stores
lib/                # Utilities, API clients
constants/          # App constants
assets/             # Fonts, images
````

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

* **ESLint** with Expo & custom rules
* **Prettier** with Tailwind plugin
* **Lint-staged** auto-fix on commit
* **Commitlint** enforcing conventional commits

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

## 🧩 Why this template?

I created this template to:

* Avoid repeating setup work on every new Expo project
* Start with **sane defaults & production-grade tooling**
* Scale from MVP → production without refactoring basics
* Maintain **developer experience** and consistency

If you build multiple apps with Expo — this saves **hours** every time.

---

## 📌 Usage

Feel free to:

* Fork it
* Clone it
* Customize it
* Use it internally for client or personal projects

> This repo is marked `private` by default — adjust as needed.

---

## 🛠️ Future Enhancements (Planned)

* Auth starter (Amplify / Appwrite / Firebase)
* App theming system
* API layer abstraction
* Feature-based folder example
* CI pipeline example

---

## 📄 License

MIT (or update if needed)

---

### ⭐ If this template helped you, consider starring the repo

```

