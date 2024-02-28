/* components/SkHoverBar/SkHoverBarThemeContext.tsx */

import React, { createContext, useContext, ReactNode } from 'react';

interface HoverBarTheme {
  background: string;
  boxShadow: string;
  textColor: string;
}

// Placeholder for base theme. Actual dynamic theme application should occur within components.
const baseHoverBarTheme: HoverBarTheme = {
  background: 'radial-gradient(circle, rgba(255,255,255,0.975) 0%, rgba(255,255,255,0.875) 100%)',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  textColor: 'inherit', // Placeholder value
};

const HoverBarThemeContext = createContext<HoverBarTheme>(baseHoverBarTheme);

export const HoverBarThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // This is where you'd dynamically integrate with the global theme, if necessary.
  return <HoverBarThemeContext.Provider value={baseHoverBarTheme}>{children}</HoverBarThemeContext.Provider>;
};

export const useHoverBarTheme = () => useContext(HoverBarThemeContext);
