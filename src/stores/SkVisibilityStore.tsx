/* src/stores/SkVisibilityStore.tsx */

// Imports
import { makeAutoObservable } from "mobx";

// Store Declaration
class VisibilityStore {
  // State
  hoverBarVisible: boolean = true;
  isUserSettingsVisible: boolean = false;
  isToolsMenuVisible: boolean = false;
  isMakeCVVisible: boolean = false;

  // Constructor
  constructor() {
    makeAutoObservable(this);
  }

  // Actions
  toggleUserSettingsVisible() {
    this.isUserSettingsVisible = !this.isUserSettingsVisible;
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

// Export
export const visibilityStore = new VisibilityStore();
