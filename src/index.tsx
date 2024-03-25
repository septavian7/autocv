/* src/index.tsx */

/* --------- IMPORT --------- */

// Plugins, Dependencies
import "normalize.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Global, css } from "@emotion/react";
// Configs
import "./config/firebaseConfig";
/* import { configure } from "mobx"; */
// Providers, Stores
import { SkUserStoreProvider } from "./contexts/SkUserContext";
import { ThemeProvider } from "./providers/SkThemeProvider";
// Components, Modules
import SkHoverBar from "./components/layout/SkHoverBar/SkHoverBar";
import SkGlobalStyles from "./styles/SkGlobalStyles";
// import FramerMotionTest from "./components/layout/FramerMotionTest"; // Import FramerMotionTest component

/* --------- SETUP --------- */

// MobX Configuration
/* configure({
  enforceActions: "always",
}); */

const globalStyles = css`
  @font-face {
    font-family: "Avenir";
    src: url("/fonts/Avenir-Regular.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: "Avenir", sans-serif;
    /* Other global styles */
  }
`;

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
    <Global styles={globalStyles} />
    <SkUserStoreProvider>
      <ThemeProvider>
        <SkGlobalStyles />
        <SkHoverBar />
      </ThemeProvider>
    </SkUserStoreProvider>
  </React.StrictMode>,
);
