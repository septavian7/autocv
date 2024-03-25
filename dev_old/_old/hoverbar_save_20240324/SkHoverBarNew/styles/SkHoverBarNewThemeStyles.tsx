/* src/components/layout/SkHoverBarNew/styles/SkHoverBarThemeStyles.tsx */

interface HoverBarThemeColors {
  // General
  text: string;

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

const hoverBarThemes: { [key: string]: HoverBarThemeColors } = {
  /* ... */
};

export const getHoverBarThemeStyles = (theme: "light" | "dark") =>
  hoverBarThemes[theme];
