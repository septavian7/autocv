/* public/test.tsx */

import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { getThemeStyles } from "../src/styles/SkThemeStyles";
import SkHoverBarNew3 from "../src/components/layout/SkHoverBarNew3/SkHoverBarNew3";

const rootElement = document.getElementById("test-root");
if (rootElement) {
  const root = createRoot(rootElement);

  const theme = getThemeStyles("light");

  root.render(
    <ThemeProvider theme={theme}>
      <SkHoverBarNew3 />
    </ThemeProvider>,
  );
}
