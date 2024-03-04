/* SkUserStore.tsx */

import { makeAutoObservable } from "mobx";

class UserStore {
  email: string = '';
  outputFormat: { [key: string]: boolean } = {
    googleDoc: true,
    pdf: true,
    docx: false,
    txt: false,
  };
  aiModel: string = 'gpt3.5';

  constructor() {
    makeAutoObservable(this);
  }

  setEmail(email: string) {
    this.email = email;
  }

  setOutputFormat(format: string, value: boolean) {
    this.outputFormat[format] = value;
  }

  setAiModel(model: string) {
    this.aiModel = model;
  }

  // Additional logic for handling user settings/preferences
}

export const userStore = new UserStore();
