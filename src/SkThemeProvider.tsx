/* SkThemeProvider.tsx */

import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { observer } from "mobx-react-lite";
import { themeStore } from './stores/SkThemeStore';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = observer(({ children }) => {
  // Directly access the theme colors from themeStore
  const theme = themeStore.colors; // Assuming colors is a computed value or observable that reacts to theme changes

  console.log("Providing theme:", theme);

  return (
    <EmotionThemeProvider theme={theme}>
      {children}
    </EmotionThemeProvider>
  );
});
