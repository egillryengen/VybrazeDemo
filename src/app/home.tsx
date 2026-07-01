// src/app/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

// Hvis du bruker expo-splash-screen, avkommenter og bruk guard i useEffect
// import * as SplashScreen from 'expo-splash-screen';

export default function Home(): React.ReactElement {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        // Hvis du bruker expo-splash-screen, kall preventAutoHideAsync her:
        // await SplashScreen.preventAutoHideAsync();

        // Forsinket/dynamisk import av tunge moduler for å unngå tidlig native-init
        // Eksempel: const { default: SomeHeavy } = await import('some-heavy-lib');
        // Hvis du ikke har tunge imports, denne blokken er trygg og rask.

        // Simuler kort init eller hent data
        await new Promise((r) => setTimeout(r, 150));

        if (!mounted) return;
        setReady(true);

        // Hvis du bruker expo-splash-screen, skjul splash når alt er klart:
        // await SplashScreen.hideAsync();
      } catch (e) {
        // Logg feilen til konsoll for debugging
        // Ikke kast videre — vi vil vise fallback UI
        // eslint-disable-next-line no-console
        console.warn('Home init error', e);
        if (mounted) setReady(true);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (!ready) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text style={styles.subtitle}>Laster…</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>VybrazeDemo Home</Text>
      <Text style={styles.subtitle}>Dette er testversjonen av Home.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#666', marginTop: 8 },
});
