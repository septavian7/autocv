/* components/SkButton/SkButtonThemeContext.tsx */

import React, { createContext, useContext, ReactNode } from 'react';

interface ButtonTheme {
  // Assuming these properties are still relevant without direct global theme integration here
  padding: string;
  height: string;
  margin: string;
  borderRadius: string;
  fontSize: string;
  fontSizeMain: string;
  transition: string;
}

const defaultButtonTheme: ButtonTheme = {
  padding: '0 15px',
  height: '36px',
  margin: '0 10px',
  borderRadius: '4px',
  fontSize: '13px',
  fontSizeMain: '14px',
  transition: 'box-shadow 0.2s, background-color 0.2s',
};

const ButtonThemeContext = createContext<ButtonTheme>(defaultButtonTheme);

export const ButtonThemeProvider: React.FC<{ theme?: ButtonTheme; children: ReactNode }> = ({
  theme = defaultButtonTheme,
  children,
}) => {
  return <ButtonThemeContext.Provider value={theme}>{children}</ButtonThemeContext.Provider>;
};

export const useButtonTheme = () => useContext(ButtonThemeContext);
