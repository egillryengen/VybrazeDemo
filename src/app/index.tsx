// src/app/index.tsx
import { useEffect } from 'react';
import Home from './home';

/**
 * Hvis expo-router er installert i runtime, bruk useRouter for å
 * redirecte til /home uten å vise en synlig mellomtilstand.
 * Hvis ikke, render Home direkte.
 */
let maybeUseRouter: any;
try {
  // Dynamisk require slik at filen også kan fungere uten expo-router i noen miljøer
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mod = require('expo-router');
  maybeUseRouter = mod?.useRouter;
} catch (e) {
  maybeUseRouter = undefined;
}

function RouterRedirect() {
  const router = maybeUseRouter?.();
  useEffect(() => {
    const t = setTimeout(() => {
      try {
        router?.replace?.('/home');
      } catch {
        // swallow errors
      }
    }, 50);
    return () => clearTimeout(t);
  }, [router]);

  return null;
}

export default function Index() {
  return maybeUseRouter ? <RouterRedirect /> : <Home />;
}
