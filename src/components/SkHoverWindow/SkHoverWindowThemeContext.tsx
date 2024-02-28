/* components/SKHoverWindow/SkHoverWindowThemeContext.tsx */

import React, { createContext, useContext, ReactNode } from 'react';

interface HoverWindowTheme {
  background: string;
  padding: string;
  borderRadius: string;
  boxShadow: string;
  maxWidth: string;
  maxHeight: string;
  overflow: string;
  textColor: string;
  container: {
    width: string;
    height: string;
  };
}

const baseHoverWindowTheme: HoverWindowTheme = {
  background: 'white',
  padding: '36px',
  borderRadius: '10px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  maxWidth: '40%',
  maxHeight: '80vh',
  overflow: 'auto',
  textColor: '#000',
  container: {
    width: '60vw',
    height: '60vh',
  },
};

const HoverWindowThemeContext = createContext<HoverWindowTheme>(baseHoverWindowTheme);

export const HoverWindowThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // This is where you'd dynamically integrate with the global theme, if necessary.
  return <HoverWindowThemeContext.Provider value={baseHoverWindowTheme}>{children}</HoverWindowThemeContext.Provider>;
};

export const useHoverWindowTheme = () => useContext(HoverWindowThemeContext);
