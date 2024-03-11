/* src/styles/SkThemeStyles.tsx */

// Types for theme colors
type ThemeColors = {
    text: string;
    background: string;
    buttonPrimaryTextColor: string;
    buttonSecondaryTextColor: string;
    buttonPrimaryBackgroundColor: string;
    buttonSecondaryBackgroundColor: string;
    hoverPrimaryBackgroundColor: string;
    hoverSecondaryBackgroundColor: string;
    hoverTextColor: string;
    hoverBarBackground: string;
    hoverBarBoxShadow: string;
    hoverBarTextColor: string;
  };
  
// Define light and dark themes
const themes: { [key: string]: ThemeColors } = {
    
  // Light Themes
  light: {
    // General
    text: '#000000',
    
    // Hover Window
    background: 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.6) 100%)',
      
    // Button
    buttonPrimaryTextColor: 'white',
    buttonSecondaryTextColor: 'white',
    buttonPrimaryBackgroundColor: '#175AE2',
    buttonSecondaryBackgroundColor: '#8b8b8b',
    hoverPrimaryBackgroundColor: '#0041C4',
    hoverSecondaryBackgroundColor: '#6a6a6a',
    hoverTextColor: '#ffffff',

    // Hover Bar
    hoverBarBackground: 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.6) 100%)',
    hoverBarBoxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    hoverBarTextColor: '#000000',
    },

  // Dark Themes
  dark: {
    // General
    text: '#fafafa',

    // Hover Window
    background: 'radial-gradient(circle, rgba(55,55,55,0.7) 0%, rgba(55,55,55,0.6) 100%)',

    // Button
    buttonPrimaryTextColor: 'white',
    buttonSecondaryTextColor: 'white',
    buttonPrimaryBackgroundColor: '#175AE2',
    buttonSecondaryBackgroundColor: 'rgba(0,0,0,0.5)',
    hoverPrimaryBackgroundColor: '#0041C4',
    hoverSecondaryBackgroundColor: 'rgba(0,0,0,0.9)',
    hoverTextColor: 'white',

    // Hover Bar
    hoverBarBackground: 'radial-gradient(circle, rgba(55,55,55,0.7) 0%, rgba(55,55,55,0.8) 100%)',
    hoverBarBoxShadow: '0 2px 4px rgba(255, 255, 255, 1.0)',
    hoverBarTextColor: '#FFFFFF',
    },
  };
  
  export const getThemeStyles = (theme: "light" | "dark") => themes[theme];
  