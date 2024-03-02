/* SkThemeStore.tsx */

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
    console.log("SkThemeStore.tsx get colors");
    const themes = {
      light: {
      primary: '#175AE2',
      secondary: '#8b8b8b',
      buttonText: 'white',
      background: '#FFFFFF', // Light theme general background color
      buttonBackground: '#175AE2', // Light theme button background color
      hoverBarBackground: 'radial-gradient(circle, rgba(255,255,255,0.975) 0%, rgba(255,255,255,0.875) 100%)',
      hoverBarBoxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      hoverBarTextColor: '#000000', // Assuming black text for light theme
      text: '#000000', // Light theme text color
    },
  dark: {
      primary: '#121212', // Dark theme primary color
      secondary: '#333', // Dark theme secondary color
      buttonText: '#fafafa', // Dark theme button text color
      background: '#121212', // Dark theme general background color
      buttonBackground: '#333333', // Dark theme button background color
      hoverBarBackground: 'radial-gradient(circle, rgba(23,23,23,0.975) 0%, rgba(35,35,35,0.875) 10%)',
      hoverBarBoxShadow: '0 2px 4px rgba(255, 255, 255, 0.1)',
      hoverBarTextColor: '#FFFFFF', // Assuming white text for dark theme
      text: '#fafafa', // Dark theme text color
    }
  };
    return themes[this.theme];

}
}
export const themeStore = new ThemeStore();