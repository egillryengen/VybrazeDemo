// C:\Vybraze\src\app\_layout.js

/**
 * src/app/_layout.js
 * Polyfill for DOMException + minimal Expo Router layout
 */

// DEBUG ENTRY CHECK — skal logges i Metro når filen lastes
console.log("DEBUG ENTRY: src/app/_layout.js loaded");

try {
  if (typeof global.DOMException === 'undefined') {
    class DOMExceptionPolyfill extends Error {
      constructor(message = '', name = 'DOMException') {
        super(message);
        this.name = name;
        this.code = 0;
        this.message = message;
      }
    }
    global.DOMException = DOMExceptionPolyfill;
    console.log("DEBUG: DOMException polyfilled in _layout.js");
  } else {
    console.log("DEBUG: DOMException already present");
  }
} catch (e) {
  console.error("DEBUG: error in _layout.js polyfill", e);
}

import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return <Stack />;
}
