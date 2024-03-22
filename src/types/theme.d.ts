/* src/types/theme.d.ts */

export interface ThemeColors {
  // General
  text: string;
  hoverWindowBackground: string;

  // Menu Section Container
  menuSectionBackground: string;

  // Button
  buttonPrimaryTextColor: string;
  buttonSecondaryTextColor: string;
  buttonPrimaryBackground: string;
  buttonSecondaryBackground: string;
  hoverPrimaryBackground: string;
  hoverSecondaryBackground: string;
  hoverTextColor: string;

  // Hover Bar
  hoverBarBackground: string;
  hoverBarBoxShadow: string;
  hoverBarTextColor: string;
}

export interface Theme {
  light: ThemeColors;
  dark: ThemeColors;
}
