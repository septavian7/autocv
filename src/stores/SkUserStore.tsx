/* src/stores/SkUserStore.tsx */

import { makeAutoObservable } from "mobx";

class UserStore {
  email: string = '';
  firstName: string = '';
  lastName: string = '';

  outputFormat: { [key: string]: boolean } = {
    googleDoc: true,
    pdf: true,
    docx: false,
    txt: false,
  };
  aiModel: string = 'gpt3.5';

  setOutputFormat(format: string, value: boolean) {
    this.outputFormat[format] = value;
  }

  setAiModel(model: string) {
    this.aiModel = model;
  }

   constructor() {
    makeAutoObservable(this);
  }

  setEmail(email: string) {
    this.email = email;
  }

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
  }
}

export const userStore = new UserStore();
