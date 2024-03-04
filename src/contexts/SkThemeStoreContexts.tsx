/*
parent_folder:  src/contexts/  
*/

/* SkThemeStoreContexts.tsx */

import React from 'react';
import { themeStore } from '../stores/SkThemeStore';

const ThemeContext = React.createContext(themeStore);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeContext.Provider value={themeStore}>{children}</ThemeContext.Provider>
);

export const useThemeStore = () => React.useContext(ThemeContext);
console.log("SkThemeStoreContexts.tsx: useThemeStore");