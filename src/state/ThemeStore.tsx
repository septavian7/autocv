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
}

export const themeStore = new ThemeStore();
