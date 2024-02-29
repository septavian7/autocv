/* index.tsx */

import React from "react";
import { createRoot } from "react-dom/client";
import { configure } from "mobx";
import { SkUserStoreProvider } from './contexts/SkUserStoreContexts';
import { ThemeProvider } from './contexts/SkThemeStoreContexts'; // Assuming you have this context
import SkHoverBar from "./layout/SkHoverBar/SkHoverBar";
import SkUserSettings from './features/SkUserSettings/SkUserSettings';

// MobX configuration
configure({
  enforceActions: "always", // or "observed"
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
        <ThemeProvider> {/* Wrap the app with ThemeProvider if you're using theme context */}
          <SkHoverBar />
          <SkUserSettings /> {/* Include SkUserSettings if you want it to be part of the initial UI */}
        </ThemeProvider>
      </SkUserStoreProvider>
    </React.StrictMode>,
  );
}
