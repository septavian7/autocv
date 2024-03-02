// src/layout/SkHoverBar/SkHoverBar.tsx

import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import { useThemeStore } from '../../contexts/SkThemeStoreContexts';
import SkButton from '../../components/SkButton/SkButton';
import styled from '@emotion/styled';
import { Theme } from '../../types/theme'; // Adjust the import path to where your Theme interface is defined

const SkHoverBar: React.FC = observer(() => {
  const [isSettingsPanelVisible, setIsSettingsPanelVisible] = useState(false);
  const themeStore = useThemeStore(); // Accessing the theme store directly
  console.log("Current theme:", themeStore.theme); // Log the current theme for debugging
  console.log("Current theme colors:", themeStore.colors); // Log the current theme colors for debugging

  // Function to toggle the theme
  const toggleTheme = () => {
    themeStore.toggleTheme();
    console.log("Theme toggled");
  };

  return (
    <SkHoverBarContainer>
      <SkButton label="Settings" onClick={() => setIsSettingsPanelVisible(!isSettingsPanelVisible)} />
      <SkButton label="Toggle Theme" onClick={toggleTheme} />
    </SkHoverBarContainer>
  );
});

const SkHoverBarContainer = styled.div(({ theme }) => `
  & *, & *::before, & *::after {
    box-sizing: border-box; /* Ensures padding and border are included in element's total width and height */
    margin: 0; /* Resets margin */
    padding: 0; /* Resets padding */
    font-family: inherit; /* Inherits font-family from the component */
    font-size: 100%; /* Resets font size to default */
    line-height: 1; /* Resets line height to default */
  }

  /* Component's specific styles */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2147483650; /* High z-index to ensure it stays on top */
  background: ${theme.hoverBarBackground}; /* Uses theme's hover bar background */
  color: ${theme.hoverBarTextColor}; /* Uses theme's hover bar text color */
  box-shadow: ${theme.hoverBarBoxShadow}; /* Uses theme's hover bar box shadow */
`);

export default SkHoverBar;
