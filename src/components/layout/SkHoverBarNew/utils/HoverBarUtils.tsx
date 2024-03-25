/* src/components/layout/SkHoverBarNew/utils/HoverBarUtils.tsx */

import { hoverBarStore } from "../stores/HoverBarStore";
import { themeStore } from "../../../../stores";

// Toggle hover bar expanded/minimized state
export const toggleHoverBarExpandMinimize = () => {
  hoverBarStore.toggleExpandMinimize();
};

// Toggle make workflow
export const toggleMakeMenu = () => {
  console.log("Toggle make");
};

// Toggle main menu window
export const toggleMainMenu = () => {
  console.log("Toggle menu");
};

// Toggle settings window
export const toggleSettingsMenu = () => {
  console.log("Toggle settings");
};

// Toggle Theme
export const toggleTheme = () => {
  themeStore.toggleTheme();
};
