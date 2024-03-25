/* public/test.tsx */

import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { HoverBarProvider } from "../src/components/layout/SkHoverBarNew3/contexts/HoverBarContext";
import { getThemeStyles } from "../src/styles/SkThemeStyles";
import SkHoverBarNew3 from "../src/components/layout/SkHoverBarNew3/SkHoverBarNew3";

const rootElement = document.getElementById("test-root");
if (rootElement) {
  const root = createRoot(rootElement);

  const theme = getThemeStyles("light");

  root.render(
    <ThemeProvider theme={theme}>
      <HoverBarProvider>
        <SkHoverBarNew3 />
      </HoverBarProvider>
    </ThemeProvider>,
  );
}
