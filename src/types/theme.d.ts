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
  hoverBarExpandedBackground?: string;
  hoverBarExpandedBoxShadow?: string;
  hoverBarMinimizedBackground?: string;
  hoverBarMinimizedBoxShadow?: string;

  // Hover Bar Buttons
  hoverBarButtonPrimaryTextColor: string;
  hoverBarButtonSecondaryTextColor: string;
  hoverBarButtonPrimaryBackground: string;
  hoverBarButtonSecondaryBackground: string;
  hoverBarButtonPrimaryBackgroundOnHover: string;
  hoverBarButtonSecondaryBackgroundOnHover: string;
  hoverBarButtonTextColorOnHover: string;
}

export interface Theme {
  light: ThemeColors;
  dark: ThemeColors;
}

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
  // New optional properties for expanded state
  hoverBarExpandedBackground?: string;
  hoverBarExpandedBoxShadow?: string;
  // New optional properties for minimized state
  hoverBarMinimizedBackground?: string;
  hoverBarMinimizedBoxShadow?: string;
}

export interface Theme {
  light: ThemeColors;
  dark: ThemeColors;
}
