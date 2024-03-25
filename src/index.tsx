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
import SkHoverBar from "./components/layout/SkHoverBarOld/SkHoverBar";
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

// Define constants to control rendering of components
// const RENDER_FRAMER_MOTION_TEST = true;
// const RENDER_SK_HOVER_BAR = false;

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <SkUserStoreProvider>
      <ThemeProvider>
        <SkGlobalStyles />
        <SkHoverBar />
        {/* Conditionally render FramerMotionTest based on the constant */}
        {/* {RENDER_FRAMER_MOTION_TEST && <FramerMotionTest />} */}
        {/* Conditionally render SkHoverBar based on the constant */}
        {/* {RENDER_SK_HOVER_BAR && <SkHoverBar />} */}
      </ThemeProvider>
    </SkUserStoreProvider>
  </React.StrictMode>,
);
