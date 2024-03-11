/* src/contexts/SkThemeContexts.tsx */

import React, { useContext } from 'react';
import { themeStore } from '../stores/SkThemeStore';
import { getThemeStyles } from '../styles/SkThemeStyles';

const ThemeContext = React.createContext(themeStore);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeContext.Provider value={themeStore}>{children}</ThemeContext.Provider>
);

// Existing useThemeStore hook (you can keep it if it's used elsewhere)
export const useThemeStore = () => useContext(ThemeContext);

// New hook to directly use theme styles
export const useTheme = () => {
  const store = useContext(ThemeContext);
  return getThemeStyles(store.theme); // Return  style object based on  current theme
};
