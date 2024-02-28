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
    };

    const darkTheme = {
      primary: '#121212', // Example dark theme primary color
      secondary: '#333', // Example dark theme secondary color
      buttonText: '#fafafa', // Example dark theme button text color
    };

    return this.theme === "light" ? lightTheme : darkTheme;
  }
}

export const themeStore = new ThemeStore();