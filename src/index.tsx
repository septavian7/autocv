/* src/index.tsx */

/* --------- IMPORT --------- */

import React from "react";
import { createRoot } from "react-dom/client";
import './config/firebaseConfig'; // Ensure Firebase is initialized correctly
import { configure } from "mobx";
import { SkUserStoreProvider } from './contexts/SkUserContext';
import { ThemeProvider } from './providers/SkThemeProvider';
import SkHoverBar from "./components/layout/SkHoverBar/SkHoverBar";
import SkGlobalStyles from "./styles/SkGlobalStyles"; // Import the SkGlobalStyles component

/* --------- SETUP --------- */

configure({
  enforceActions: "always",
});

// Create a root element for the app
const rootElement = document.createElement("div");
rootElement.id = "Sk0ne-root";
document.body.appendChild(rootElement);

/* --------- RENDER --------- */

// Mount the root element and render the app within the context providers
const rootElementMounted = document.getElementById("Sk0ne-root");
if (rootElementMounted) {
  const root = createRoot(rootElementMounted);
  root.render(
    <React.StrictMode>
      <SkUserStoreProvider>
        <ThemeProvider> {/* Wraps your app with the ThemeProvider */}
          <SkGlobalStyles /> {/* Apply global styles */}
          <SkHoverBar />
          {/* Additional components can be added here and will inherit the global styles */}
        </ThemeProvider>
      </SkUserStoreProvider>
    </React.StrictMode>,
  );
}
