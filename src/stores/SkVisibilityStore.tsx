/* src/stores/SkVisibilityStore.tsx */

// Imports
import { makeAutoObservable } from "mobx";

// Store Declaration
class VisibilityStore {
  // State
  hoverBarVisible: boolean = true;
  isUserSettingsVisible: boolean = false;
  isUserLoginVisible: boolean = false;
  isToolsMenuVisible: boolean = false;
  isMakeCVVisible: boolean = false;
  viewportWidth: number = window.innerWidth;

  // Constructor
  constructor() {
    makeAutoObservable(this);
  }

  // Actions
  toggleUserSettingsVisible() {
    this.isUserSettingsVisible = !this.isUserSettingsVisible;
  }

  toggleUserLoginVisible() {
    this.isUserLoginVisible = !this.isUserLoginVisible;
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

  setViewportWidth = (width: number) => {
    this.viewportWidth = width;
  };

  handleResize = () => {
    if (window.visualViewport) {
      this.setViewportWidth(window.visualViewport.width);
    } else {
      this.setViewportWidth(window.innerWidth);
    }
  };
}

// Export
export const visibilityStore = new VisibilityStore();
