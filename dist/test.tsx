/* src/index.tsx */

/* --------- IMPORT --------- */

// Plugins, Dependencies
import "normalize.css";
import React from "react";
import { createRoot } from "react-dom/client";
// Configs
import "../src/config/firebaseConfig";
import { configure } from "mobx";
// Providers, Stores, Styles
import { SkUserStoreProvider } from "../src/contexts/SkUserContext";
import { ThemeProvider } from "../src/providers/SkThemeProvider";
import SkGlobalStyles from "../src/styles/SkGlobalStyles";
// Components, Modules
import SkHoverBar from "../src/components/layout/SkHoverBar/SkHoverBar";
import SkUserLogin from "../src/components/features/SkUserLogin/SkUserLogin";
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
