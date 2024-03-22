/* public/test.tsx */

import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "../src/providers/SkThemeProvider";
import FramerMotionTest from "../src/components/layout/FramerMotionTest";

const rootElement = document.getElementById("test-root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <FramerMotionTest />
      </ThemeProvider>
    </React.StrictMode>,
  );
}
