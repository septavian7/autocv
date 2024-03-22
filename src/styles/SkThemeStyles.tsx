/* src/styles/SkThemeStyles.tsx */

import { ThemeColors } from "../types/theme"; // Assuming relative paths are correct

// Define light and dark themes
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
  },
};

export const getThemeStyles = (theme: "light" | "dark") => themes[theme];
