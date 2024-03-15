/* src/stores/SkThemeStore.tsx */

import { makeAutoObservable } from "mobx";
import { getThemeStyles } from "../styles/SkThemeStyles";

class ThemeStore {
  theme: "light" | "dark" = "dark";

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
  }

  get colors() {
    return getThemeStyles(this.theme);
  }
}

export const themeStore = new ThemeStore();
