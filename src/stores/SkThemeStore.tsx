/* src/stores/SkThemeStore.tsx */

// Imports
import { makeAutoObservable } from "mobx";
import { getThemeStyles } from "../styles/SkThemeStyles";

// Store Declaration
class ThemeStore {
  // State
  theme: "light" | "dark" = "dark";

  // Constructor
  constructor() {
    makeAutoObservable(this);
  }

  // Actions
  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
  }

  // Computed Values
  get colors() {
    return getThemeStyles(this.theme);
  }
}

// Export
export const themeStore = new ThemeStore();
