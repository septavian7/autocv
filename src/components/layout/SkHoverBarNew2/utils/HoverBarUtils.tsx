/* src/components/layout/SkHoverBarNew/utils/HoverBarUtils.tsx */

import { toggleHoverBarExpandMinimize } from "../state/HoverBarState";
import { themeStore } from "../../../../stores";

// Toggle hover bar expanded/minimized state
export { toggleHoverBarExpandMinimize };

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
