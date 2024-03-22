/* src/providers/SkThemeProvider.tsx */

// Imports
import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { themeStore } from "../stores/SkThemeStore";
import { getThemeStyles } from "../styles/SkThemeStyles";

// ThemeProvider Component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = observer(
  ({ children }) => {
    // Dynamically retrieve theme object based on the current theme state
    const theme = getThemeStyles(themeStore.theme);

    return (
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    );
  },
);
