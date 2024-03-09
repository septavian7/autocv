/* src/index.tsx */

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import './firebaseConfig'; // Ensure Firebase is initialized correctly
import { configure } from "mobx";
import { SkUserStoreProvider } from './contexts/SkUserStoreContexts';
import { ThemeProvider } from './SkThemeProvider';
import SkHoverBar from "./layout/SkHoverBar/SkHoverBar";

configure({
  enforceActions: "always",
});

// Create a root element for the app
const rootElement = document.createElement("div");
rootElement.id = "Sk0ne-root";
document.body.appendChild(rootElement);

// Mount the root element and render the app within the context providers
const rootElementMounted = document.getElementById("Sk0ne-root");
if (rootElementMounted) {
  const root = createRoot(rootElementMounted);
  root.render(
    <React.StrictMode>
      <SkUserStoreProvider>
        <ThemeProvider> {/* Wraps your app with the ThemeProvider */}
          <SkHoverBar />
          {/* SkUserSettings is now managed within SkHoverBar/SkHoverWindow */}
        </ThemeProvider>
      </SkUserStoreProvider>
    </React.StrictMode>,
  );
}