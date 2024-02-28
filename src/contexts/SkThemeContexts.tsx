/* contexts/SkThemeContexts.tsx */

import React, { createContext, useContext, ReactNode } from 'react';

type Color = 'blue' | '#175AE2' | 'gray' | '#8b8b8b' | 'white' | '#FFFFFF';

interface Theme {
  colors: {
    primary: Color; // Now using the Color type
    secondary: Color;
    buttonText: Color;
  };
}

const defaultTheme: Theme = {
  colors: {
    primary: '#175AE2', // Specific color values
    secondary: '#8b8b8b',
    buttonText: 'white',
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme = defaultTheme, children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
