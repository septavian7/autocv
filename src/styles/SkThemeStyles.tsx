/* src/styles/SkThemeStyles.tsx */

import { ThemeColors } from "../types/theme";

const themes: { [key: string]: ThemeColors } = {
  /* ----------------- LIGHT THEME ----------------- */
  light: {
    // General
    text: "#000000",

    // Hover Window
    hoverWindowBackground:
      "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.6) 100%)",

    // Menu Section Container
    menuSectionBackground: `#1c1c1ee2;`,

    // Button
    buttonPrimaryTextColor: "white",
    buttonSecondaryTextColor: "white",
    buttonPrimaryBackground:
      "linear-gradient(to right top, #175AE2ff, #175AE2ee)",
    buttonSecondaryBackground:
      "linear-gradient(to right top, #888888e2, #8b8b8be2)",
    hoverPrimaryBackground: "#0041C4",
    hoverSecondaryBackground: "#6a6a6a",
    hoverTextColor: "#ffffff",

    // Hover Bar
    hoverBarBackground:
      "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.6) 100%)",
    hoverBarBoxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    hoverBarTextColor: "#000000",
    hoverBarExpandedBackground:
      "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.7) 100%)",
    hoverBarExpandedBoxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
    hoverBarMinimizedBackground:
      "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.5) 100%)",
    hoverBarMinimizedBoxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",

    // Hover Bar Buttons
    hoverBarButtonOutline: "2px solid rgba(255,255,255,0.8)",
    hoverBarButtonPrimaryBackground:
      "linear-gradient(2deg, rgba(0,70,190,0.75) 0%, rgba(0,90,250,0.95) 30%)",
    hoverBarButtonSecondaryBackground:
      "linear-gradient(2deg, rgba(70,70,70,0.75) 0%, rgba(110,110,120,0.95) 30%)",
    //  "linear-gradient(2deg, rgba(120,120,120,0.6) 0%, rgba(190,190,200,0.95) 50%)",
    hoverBarButtonPrimaryBackgroundOnHover:
      "linear-gradient(2deg, rgba(9,9,121,1) 10%, rgba(0,212,255,1) 85%)",
    hoverBarButtonSecondaryBackgroundOnHover: "#6a6a6a",
    hoverBarButtonPrimaryTextColor: "white",
    hoverBarButtonSecondaryTextColor: "white",
    hoverBarButtonTextColorOnHover: "#ffffff",
  },

  /* ----------------- DARK THEME ----------------- */
  dark: {
    // General
    text: "#fafafa",

    // Hover Window
    hoverWindowBackground:
      "radial-gradient(circle, rgba(55,55,55,0.7) 0%, rgba(55,55,55,0.6) 100%)",

    // Menu Section Container
    menuSectionBackground: `#1c1c1ee2;`,

    // Button
    buttonPrimaryTextColor: "white",
    buttonSecondaryTextColor: "white",
    buttonPrimaryBackground:
      "linear-gradient(to right top, #175AE2ff, #175AE2ee)",
    buttonSecondaryBackground:
      "linear-gradient(to right top, #111111e2, #1c1c1ee2)",
    hoverPrimaryBackground: "#0041C4",
    hoverSecondaryBackground: "rgba(0,0,0,0.9)",
    hoverTextColor: "white",

    // Hover Bar
    hoverBarBackground:
      "radial-gradient(circle, rgba(55,55,55,0.7) 0%, rgba(55,55,55,0.8) 100%)",
    hoverBarBoxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    hoverBarTextColor: "#FFFFFF",
    hoverBarExpandedBackground:
      "radial-gradient(circle, rgba(55,55,55,0.8) 0%, rgba(55,55,55,0.9) 100%)",
    hoverBarExpandedBoxShadow: "0 4px 6px rgba(0, 0, 0, 0.7)",
    hoverBarMinimizedBackground:
      "radial-gradient(circle, rgba(55,55,55,0.6) 0%, rgba(55,55,55,0.7) 100%)",
    hoverBarMinimizedBoxShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",

    // Hover Bar Buttons
    hoverBarButtonOutline: "2px solid rgba(30,30,30,0.8)",
    hoverBarButtonPrimaryBackground:
      "linear-gradient(2deg, rgba(0,40,160,0.75) 0%, rgba(0,70,230,0.95) 30%)",
    hoverBarButtonSecondaryBackground:
      "linear-gradient(2deg, rgba(10,10,10,0.6) 0%, rgba(50,50,50,0.95) 60%)",
    hoverBarButtonPrimaryBackgroundOnHover:
      "linear-gradient(2deg, rgba(9,9,121,1) 10%, rgba(0,212,255,1) 85%)",
    hoverBarButtonSecondaryBackgroundOnHover: "rgba(0,0,0,0.9)",
    hoverBarButtonPrimaryTextColor: "white",
    hoverBarButtonSecondaryTextColor: "white",
    hoverBarButtonTextColorOnHover: "white",
  },
};

export const getThemeStyles = (theme: "light" | "dark") => themes[theme];
