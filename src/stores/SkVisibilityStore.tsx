import { makeAutoObservable } from "mobx";

class VisibilityStore {
  hoverBarVisible: boolean = true; // Default to visible

  constructor() {
    makeAutoObservable(this);
  }

  toggleHoverBar() {
    this.hoverBarVisible = !this.hoverBarVisible;
  }
}

export const visibilityStore = new VisibilityStore();
