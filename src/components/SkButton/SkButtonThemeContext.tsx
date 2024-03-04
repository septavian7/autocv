/* SkButtonThemeContext.tsx */

import React, { createContext, useContext, ReactNode } from 'react'; // Import React, createContext, useContext, and ReactNode

// Define the ButtonTheme interface
interface ButtonTheme {
  padding: string;
  height: string;
  margin: string;
  borderRadius: string;
  fontSize: string;
  transition: string;
  iconSize: string;
}

// Define the defaultButtonTheme
const defaultButtonTheme: ButtonTheme = {
  padding: '0 15px',
  height: '36px',
  margin: '0 6px', // Margin between buttons
  borderRadius: '4px',
  fontSize: '13px',
  transition: 'box-shadow 0.2s, background-color 0.2s',
  iconSize: '20px',
};

// Create the ButtonThemeContext
const ButtonThemeContext = createContext<ButtonTheme>(defaultButtonTheme);

// Create the ButtonThemeProvider
export const ButtonThemeProvider: React.FC<{ theme?: ButtonTheme; children: ReactNode }> = ({
  theme = defaultButtonTheme,
  children,
}) => {
  return <ButtonThemeContext.Provider value={theme}>{children}</ButtonThemeContext.Provider>;
};

// Create the useButtonTheme hook
export const useButtonTheme = () => useContext(ButtonThemeContext);``