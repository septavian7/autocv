/* src/stores/SkUserStore.tsx */

// Imports
import { makeAutoObservable } from "mobx";

// Store Declaration
class UserStore {
  // State
  email: string = "";
  firstName: string = "";
  lastName: string = "";
  outputFormat: { [key: string]: boolean } = {
    googleDoc: true,
    pdf: true,
    docx: false,
    txt: false,
  };
  aiModel: string = "gpt3.5";
  autoHideHoverBar: boolean = false;

  // Constructor
  constructor() {
    makeAutoObservable(this);
  }

  // Actions
  setOutputFormat(format: string, value: boolean) {
    this.outputFormat[format] = value;
  }

  setAiModel(model: string) {
    this.aiModel = model;
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

  setAutoHideHoverBar = (value: boolean) => {
    this.autoHideHoverBar = value;
  };
}

// Export
export const userStore = new UserStore();
