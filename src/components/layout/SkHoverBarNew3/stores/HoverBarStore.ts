// src/components/layout/stores/HoverBarStore.ts

import { makeAutoObservable } from "mobx";

class HoverBarStore {
  isExpanded = true; // Initial state

  constructor() {
    makeAutoObservable(this);
  }

  toggleExpandMinimize = () => {
    this.isExpanded = !this.isExpanded;
  };

  // Additional actions related to expanded/collapsed state could go here
}

export const hoverBarStore = new HoverBarStore();
