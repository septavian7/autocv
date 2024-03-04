/* SkHoverBar.tsx */

import React, { useState } from 'react'; // Import React with useState
import styled from '@emotion/styled'; // Import styled from Emotion
import { observer } from "mobx-react-lite"; // Import observer from mobx-react-lite
import { useThemeStore } from '../../contexts/SkThemeStoreContexts'; // Import useThemeStore from SkThemeStoreContexts
import { SkUserSettings } from '../../features/SkUserSettings/SkUserSettings'; // Adjust path as needed
import SkButton from '../../components/SkButton/SkButton'; // Import SkButton
import SettingsIcon from '@mui/icons-material/Settings'; // Import SettingsIcon from mui icons
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'; // Import AutoAwesomeIcon from mui icons
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'; // Import SpaceDashboardIcon from mui icons
import Contrast from '@mui/icons-material/Contrast'; // Import Contrast from mui icons
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto'; // Import MotionPhotosAutoIcon from mui icons

const SkHoverBar: React.FC = observer(() => { // Create a functional component SkHoverBar

  // const [isSettingsPanelVisible, setIsSettingsPanelVisible] = useState(false);
  const themeStore = useThemeStore(); // Accessing the theme store directly
  console.log("Current theme:", themeStore.theme); // Log the current theme for debugging
  console.log("Current theme colors:", themeStore.colors); // Log the current theme colors for debugging

  // Function to toggle the theme
  const toggleTheme = () => { // Create a function toggleTheme
    themeStore.toggleTheme(); // Call the toggleTheme function from the theme store
    console.log("Theme toggled"); // Log that the theme has been toggled
  };

  // Function to toggle the visibility of the settings panel
    const [isSettingsPanelVisible, setIsSettingsPanelVisible] = useState(false);
    const toggleSettingsPanel = () => {
      setIsSettingsPanelVisible(!isSettingsPanelVisible);
    };

  // Styled component for IconWrapper
  const IconWrapper = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 42px; // Adjust the size as needed
    height: 42px; // Adjust the size as needed
    background-color: white; // Set the background color to white
    border-radius: 4px; // Adjust for rounded corners
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Optional: add a subtle shadow
    padding-top: 2px; // Adjust the position of the icon
  `;

  // Styled component for SkHoverBarContainer
  const SkHoverBarContainer = styled.div(({ theme }) => `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Adjusted for alignment */
  z-index: 2147483650;
  background: ${theme.hoverBarBackground};
  color: ${theme.hoverBarTextColor};
  box-shadow: ${theme.hoverBarBoxShadow};

  @media (max-width: 600px) and (orientation: portrait) { /* Combining width and orientation */
    top: 0;
  }
  `);

  // Styled component for left-aligned items
  const LeftAligned = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px; /* Add some spacing */
  & > span {
    margin-left: 8px; /* Spacing between icon and text */
  }
  `;

  // Styled component for right-aligned items
  const RightAligned = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px; /* Add some spacing */
  gap: -0px; /* Gap between buttons */
  `;

  // Return the SkHoverBarContainer
  return (
    <SkHoverBarContainer>
      <LeftAligned>
        <IconWrapper>
          <MotionPhotosAutoIcon style={{ fontSize: 36, color: '#175AE2' }} />
        </IconWrapper>
        <span>AutoCV</span> {/* App Name */}
      </LeftAligned>
      <RightAligned>
        <SkButton icon={<SettingsIcon />} onClick={toggleSettingsPanel} />
        <SkButton icon={<Contrast />} onClick={toggleTheme} />
        <SkButton icon={<SpaceDashboardIcon />} onClick={() => {}} />
        <SkButton
          label="Make CV"
          icon={<AutoAwesomeIcon style={{ marginLeft: '8px' }} />}
          onClick={() => {}} // Adjust onClick functionality as needed
          primary={true}
        />
      </RightAligned>
      {isSettingsPanelVisible && (
                <SkUserSettings
                    isVisible={isSettingsPanelVisible}
                    onClose={() => setIsSettingsPanelVisible(false)}
                />
            )}
    </SkHoverBarContainer>
  );

});

export default SkHoverBar;
