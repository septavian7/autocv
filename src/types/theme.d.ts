/* src/types/theme.d.ts */

export interface ThemeColors {
  // General
  text: string;
  background: string;

  // Button
  buttonPrimaryTextColor: string;
  buttonSecondaryTextColor: string;
  buttonPrimaryBackgroundColor: string;
  buttonSecondaryBackgroundColor: string;
  hoverPrimaryBackgroundColor: string;
  hoverSecondaryBackgroundColor: string;
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
