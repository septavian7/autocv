/* SkThemeStore.tsx */

// Import makeAutoObservable from mobx
import { makeAutoObservable } from "mobx";

// ThemeStore class
class ThemeStore {
  theme: "light" | "dark" = "light";

  // Constructor to make the store observable
  constructor() {
    makeAutoObservable(this);
  }

  // Function to toggle the theme
  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
  }

  // Main colors for dark and light themes for all components
  get colors() {
    console.log("SkThemeStore.tsx get colors");

    // Define the light and dark themes
    const themes = {

      // Light theme colors
      light: {

        // General
        text: '#000000', // Light theme text color
        background: 'radial-gradient(circle, rgba(255,255,255,0.975) 0%, rgba(255,255,255,0.875) 100%)', // Light theme general background color
        
        // Buttons
        buttonPrimaryTextColor: 'white', // Set primary text color to black
        buttonSecondaryTextColor: 'white', // Set secondary text color to black
        buttonPrimaryBackgroundColor: '#175AE2', // Primary color
        buttonSecondaryBackgroundColor: '#8b8b8b', // Secondary color
        hoverPrimaryBackgroundColor: '#0041C4', // Darker shade of primary color
        hoverSecondaryBackgroundColor: '#6a6a6a', // Darker shade of secondary color
        hoverTextColor: '#ffffff',
        
        // Hover Bar
        hoverBarBackground: 'radial-gradient(circle, rgba(255,255,255,0.975) 0%, rgba(255,255,255,0.875) 100%)', // Light theme hover bar background
        hoverBarBoxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Light theme hover bar box shadow
        hoverBarTextColor: '#000000', // Assuming black text for light theme
        },
        
      // Dark theme colors
      dark: {
        
        // General
        text: '#fafafa', // Dark theme text color
        background: 'radial-gradient(circle, rgba(55,55,55,0.975) 0%, rgba(55,55,55,0.875) 100%)', // Dark theme general background color

        // Buttons
        buttonPrimaryTextColor: 'white', // Set primary text color to black
        buttonSecondaryTextColor: 'white', // Set secondary text color to black
        buttonPrimaryBackgroundColor: '#175AE2', // Primary color
        buttonSecondaryBackgroundColor: 'black', // Secondary color
        hoverPrimaryBackgroundColor: '#0041C4', // Darker shade of primary color
        hoverSecondaryBackgroundColor: '#6a6a6a', // Darker shade of secondary color
        hoverTextColor: '#ffffff', // Hover text color

        // Hover Bar
        hoverBarBackground: 'radial-gradient(circle, rgba(55,55,55,0.975) 0%, rgba(55,55,55,0.875) 100%)', // Dark theme hover bar background
        hoverBarBoxShadow: '0 2px 4px rgba(255, 255, 255, 0.1)', // Dark theme hover bar box shadow
        hoverBarTextColor: '#FFFFFF', // Assuming white text for dark theme
    }
  };
    
  // Return the theme based on the current theme
  return themes[this.theme];

}
}

// Export the themeStore
export const themeStore = new ThemeStore();