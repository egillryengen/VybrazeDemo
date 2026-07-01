// debug-start: legg dette øverst i src/app/_layout.tsx eller src/app/index.tsx
try {
  // eslint-disable-next-line no-console
  console.log('APP_DEBUG_START', { time: new Date().toISOString() });
} catch (e) {}
// slutt debug-start

import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <AppTabs />
    </ThemeProvider>
  );
}
