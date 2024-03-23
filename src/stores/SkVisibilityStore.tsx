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
  viewportWidth: number = window.innerWidth;

  // Constructor
  constructor() {
    makeAutoObservable(this);
    window.addEventListener("resize", this.handleResize);
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

  setViewportWidth = (width: number) => {
    this.viewportWidth = width;
  };

  handleResize = () => {
    this.setViewportWidth(window.innerWidth);
  };

  dispose() {
    window.removeEventListener("resize", this.handleResize);
  }
}

// Export
export const visibilityStore = new VisibilityStore();
