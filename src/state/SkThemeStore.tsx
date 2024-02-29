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
        buttonBackground: '#175AE2', // Light theme button background color
        text: '#000000', // Light theme text color
    };

    const darkTheme = {
        primary: '#121212', // Dark theme primary color
        secondary: '#333', // Dark theme secondary color
        buttonText: '#fafafa', // Dark theme button text color
        background: '#121212', // Dark theme general background color
        buttonBackground: '#333333', // Dark theme button background color
        text: '#fafafa', // Dark theme text color
    };

    return this.theme === "light" ? lightTheme : darkTheme;
  }
}

export const themeStore = new ThemeStore();