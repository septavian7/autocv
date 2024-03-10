/* SkThemeStore.tsx */

import { makeAutoObservable } from "mobx";
import { getThemeStyles } from "../styles/SkThemeStyles"; // Import the getThemeStyles function

class ThemeStore {
  theme: "light" | "dark" = "dark";

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
  }

  get colors() {
    // Use getThemeStyles to dynamically get the theme styles based on the current theme
    return getThemeStyles(this.theme);
  }
}

export const themeStore = new ThemeStore();
