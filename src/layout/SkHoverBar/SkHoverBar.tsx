/* SkHoverBar.tsx */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { observer } from "mobx-react-lite";
import { useThemeStore } from '../../contexts/SkThemeStoreContexts';
import { SkUserSettings } from '../../features/SkUserSettings/SkUserSettings';
import SkButton from '../../components/SkButton/SkButton';
import SettingsIcon from '@mui/icons-material/Settings';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Contrast from '@mui/icons-material/Contrast';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import AccountCircle from '@mui/icons-material/AccountCircle'; // Import for UserLogin button
import UserLogin from '../../features/UserLogin/UserLogin'; // Adjust path as necessary

const SkHoverBar = observer(() => {
  // const [isSettingsPanelVisible, setIsSettingsPanelVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isUserLoginVisible, setIsUserLoginVisible] = useState(false);
  const themeStore = useThemeStore();
  console.log("Current theme:", themeStore.theme); // Log the current theme for debugging
  console.log("Current theme colors:", themeStore.colors); // Log the current theme colors for debugging

  // Function to toggle the theme
  const toggleTheme = () => {
    themeStore.toggleTheme();
    console.log("Theme toggled");
  };

  // Styled component for SkHoverBarContainer
  const SkHoverBarContainer = styled.div(({ theme }) => `
    position: fixed;
    top: 5px; /* Slightly away from the top */
    left: 1%; /* margin from the left */
    right: 1%; /* margin from the right */
    height: 52px; /* Height is kept the same */
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2147483650;
    background: ${theme.hoverBarBackground};
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-radius: 15px; /* Rounded edges */
    color: ${theme.hoverBarTextColor};
    box-shadow: ${theme.hoverBarBoxShadow};
    padding: 0 3%; /* Adding padding to the sides */

    @media (max-width: 600px) and (orientation: portrait) {
      top: 5px;
      left: 5%;
      right: 5%;
    }
  `);


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

  return (
    <SkHoverBarContainer>
      <LeftAligned>
        <IconWrapper>
          <MotionPhotosAutoIcon style={{ fontSize: 36, color: '#175AE2' }} />
        </IconWrapper>
        <span>AutoCV</span>
      </LeftAligned>
      <RightAligned>
      <SkButton icon={<SettingsIcon />} onClick={() => setIsSettingsVisible(!isSettingsVisible)} />
      <SkButton icon={<AccountCircle />} onClick={() => setIsUserLoginVisible(!isUserLoginVisible)} />
        <SkButton icon={<Contrast />} onClick={toggleTheme} />
        <SkButton icon={<SpaceDashboardIcon />} onClick={() => {}} /> {/* No action on click */}
        <SkButton label="Make CV" icon={<AutoAwesomeIcon style={{ marginLeft: '8px' }} />} onClick={() => {}} primary={true} />
      </RightAligned>
      {/* Conditional Rendering for SkUserSettings and UserLogin within SkHoverWindow */}
      {isSettingsVisible && <SkUserSettings isVisible={isSettingsVisible} onClose={() => setIsSettingsVisible(false)} />}
      {isUserLoginVisible && <UserLogin isVisible={isUserLoginVisible} onClose={() => setIsUserLoginVisible(false)} />}
    </SkHoverBarContainer>
  );
});

export default SkHoverBar;
