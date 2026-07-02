import React, { useEffect } from "react";
import Home from "./pages/Home";

/**
 * Robust index:
 * - Vis Home umiddelbart som fallback.
 * - Hvis expo-router er tilgjengelig, forsøk en trygg replace('/home') i bakgrunnen.
 */

let maybeUseRouter: any;
try {
  // Dynamisk require for å unngå bygg tid avhengighet
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const mod = require("expo-router");
  maybeUseRouter = mod?.useRouter;
} catch {
  maybeUseRouter = undefined;
}

function RouterRedirectWithFallback() {
  const router = maybeUseRouter?.();
  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        // Kort delay for å la native init og router bli klare
        await new Promise((r) => setTimeout(r, 100));
        if (!cancelled) {
          try {
            router?.replace?.("/home");
          } catch {
            // ignore
          }
        }
      } catch {
        // ignore
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [router]);

  // Viktig: returner Home som fallback slik at UI aldri er blank
  return <Home />;
}

export default function Index() {
  return maybeUseRouter ? <RouterRedirectWithFallback /> : <Home />;
}
