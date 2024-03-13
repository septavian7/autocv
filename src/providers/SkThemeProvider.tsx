/* src/providers/SkThemeProvider.tsx */

import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { themeStore } from "../stores/SkThemeStore";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = observer(
  ({ children }) => {
    const theme = themeStore.colors;

    console.log("Providing theme:", theme);

    return (
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    );
  },
);
