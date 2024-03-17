/* src/stores/SkVisibilityStore.tsx */

import { makeAutoObservable } from "mobx";

// Define the visibility store
class VisibilityStore {
  hoverBarVisible: boolean = true; // Default to visible
  userSettingsVisible: boolean = false; // Initial state
  isUserSettingsVisible: boolean = false;
  isToolsMenuVisible: boolean = false;
  isMakeCVVisible: boolean = false;

  // Constructor
  constructor() {
    makeAutoObservable(this);
  }

  /* ----------------- METHODS ----------------- */

  toggleUserSettingsVisible() {
    this.userSettingsVisible = !this.userSettingsVisible;
  }

  toggleToolsMenuVisible = () => {
    this.isToolsMenuVisible = !this.isToolsMenuVisible;
  };

  toggleMakeCVVisible = () => {
    this.isMakeCVVisible = !this.isMakeCVVisible;
  };

  toggleHoverBar() {
    this.hoverBarVisible = !this.hoverBarVisible;
  }
}

export const visibilityStore = new VisibilityStore();
