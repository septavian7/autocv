/* state/ThemeStore.ts */

import { makeAutoObservable } from "mobx";

class ThemeStore {
  theme: "light" | "dark" = "light";

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
  }

  get colors() {
    const lightTheme = {
        primary: '#175AE2',
        secondary: '#8b8b8b',
        buttonText: 'white',
        background: '#FFFFFF', // Light theme general background color
        hoverBarBackground: 'radial-gradient(circle, rgba(255,255,255,0.975) 0%, rgba(255,255,255,0.875) 100%)', // Specific for SkHoverBar in light theme
        buttonBackground: '#175AE2', // Light theme button background color
        text: '#000000', // Light theme text color
    };

    const darkTheme = {
        primary: '#121212', // Dark theme primary color
        secondary: '#333', // Dark theme secondary color
        buttonText: '#fafafa', // Dark theme button text color
        background: '#121212', // Dark theme general background color
        hoverBarBackground: 'radial-gradient(circle, rgba(23,23,23,0.975) 0%, rgba(35,35,35,0.875) 100%)', // Specific for SkHoverBar in dark theme
        buttonBackground: '#333333', // Dark theme button background color
        text: '#fafafa', // Dark theme text color
    };

    return this.theme === "light" ? lightTheme : darkTheme;
  }
}

export const themeStore = new ThemeStore();