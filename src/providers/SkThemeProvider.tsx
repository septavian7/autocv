/* src/providers/SkThemeProvider.tsx */

import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { themeStore } from "../stores/SkThemeStore";
import { getThemeStyles } from "../styles/SkThemeStyles"; // Make sure this function and path are correct

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = observer(
  ({ children }) => {
    // Dynamically retrieves the theme object based on the current theme state in themeStore
    const theme = getThemeStyles(themeStore.theme);

    console.log("Providing theme:", theme);

    return (
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    );
  },
);
