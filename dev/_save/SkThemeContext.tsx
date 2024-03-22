/* src/contexts/SkThemeContexts.tsx */

// Imports
import React, { useContext } from "react";
import { themeStore } from "../../src/stores/SkThemeStore";
import { getThemeStyles } from "../../src/styles/SkThemeStyles";

// Context Creation
const ThemeContext = React.createContext(themeStore);

// Context Provider
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <ThemeContext.Provider value={themeStore}>{children}</ThemeContext.Provider>
);

// Hooks

// Existing useThemeStore hook (you can keep it if it's used elsewhere)
export const useThemeStore = () => useContext(ThemeContext);

// Directly use theme styles hook
export const useTheme = () => {
  const store = useContext(ThemeContext); // Return style object based on the current theme
  return getThemeStyles(store.theme);
};
