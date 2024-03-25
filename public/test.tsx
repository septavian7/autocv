/* public/test.tsx */

import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { themeStore } from "../src/stores/SkThemeStore";
import { HoverBarProvider } from "../src/components/layout/SkHoverBarNew3/contexts/HoverBarContext";
import SkHoverBarNew3 from "../src/components/layout/SkHoverBarNew3/SkHoverBarNew3";
import { getThemeStyles } from "../src/styles/SkThemeStyles";

const rootElement = document.getElementById("test-root");

if (rootElement) {
  const App = observer(() => {
    const theme = getThemeStyles(themeStore.theme);

    return (
      <ThemeProvider theme={theme}>
        <HoverBarProvider>
          <SkHoverBarNew3 />
        </HoverBarProvider>
      </ThemeProvider>
    );
  });

  const root = createRoot(rootElement);
  root.render(<App />);
}
