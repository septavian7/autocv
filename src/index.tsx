/* src/index.tsx */

/* --------- IMPORT --------- */

// Plugins, Dependencies
import "normalize.css";
import React from "react";
import { createRoot } from "react-dom/client";
// Configs
import "./config/firebaseConfig";
import { configure } from "mobx";
// Providers, Stores
import { SkUserStoreProvider } from "./contexts/SkUserContext";
import { ThemeProvider } from "./providers/SkThemeProvider";
// Components, Modules
import SkHoverBar from "./components/layout/SkHoverBar/SkHoverBar";
import SkGlobalStyles from "./styles/SkGlobalStyles";
// import FramerMotionTest from "./components/layout/FramerMotionTest"; // Import FramerMotionTest component

/* --------- SETUP --------- */

configure({
  enforceActions: "always",
});

let rootElement = document.getElementById("extension-root"); // Look for dummy host root element
if (!rootElement) {
  // If not found, proceed as usual
  rootElement = document.createElement("div");
  rootElement.id = "Sk0ne-root";
  document.body.appendChild(rootElement);
}

/* --------- RENDER --------- */

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <SkUserStoreProvider>
      <ThemeProvider>
        <SkGlobalStyles />
        <SkHoverBar />
      </ThemeProvider>
    </SkUserStoreProvider>
  </React.StrictMode>,
);
