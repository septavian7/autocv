// src/components/layout/stores/HoverBarStore.ts

import { makeAutoObservable } from "mobx";

class HoverBarStore {
  isExpanded = true;

  constructor() {
    makeAutoObservable(this);
  }

  toggleExpandMinimize = () => {
    this.isExpanded = !this.isExpanded;
  };
}

export const hoverBarStore = new HoverBarStore();
