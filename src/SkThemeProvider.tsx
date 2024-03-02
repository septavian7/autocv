/* SkThemeProvider.tsx */

import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { themeStore } from './state/SkThemeStore';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const theme = themeStore.colors; // Get current theme colors
    console.log("Providing theme:", themeStore.colors);
  
  return (
    <EmotionThemeProvider theme={theme}>
      {children}
    </EmotionThemeProvider>
  );
};
