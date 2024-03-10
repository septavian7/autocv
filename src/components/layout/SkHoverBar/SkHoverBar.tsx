/* SkHoverBar.tsx */

/* --------- IMPORT --------- */

// Plugins/Tools
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { observer } from "mobx-react-lite";
// Icons
import SettingsIcon from '@mui/icons-material/Settings';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Contrast from '@mui/icons-material/Contrast';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import AccountCircle from '@mui/icons-material/AccountCircle'; // Import for UserLogin button
import BedtimeIcon from '@mui/icons-material/Bedtime';
// Components
import SkButton from '../../common/SkButton/SkButton';
import UserLogin from '../../features/UserLogin/SkUserLogin'; // Adjust path as necessary
import { SkUserSettings } from '../../features/SkUserSettings/SkUserSettings';
// Stores
import { visibilityStore } from '../../../stores/SkVisibilityStore'; // Adjust path as necessary
// Styles
import { useThemeStore } from '../../../contexts/SkThemeContext';
import { SkHoverBarContainer, IconWrapper, LeftAligned, RightAligned } from '../../../styles/SkHoverBarStyles';

/* --------- SETUP --------- */

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

  // Function to toggle the visibility of the hover bar
  const toggleHoverBarVisibility = () => {
    visibilityStore.toggleHoverBar(); // Call the action from the visibility store
    console.log("Hover bar visibility toggled");
  };

/* --------- RENDER --------- */

  return (
    <SkHoverBarContainer style={{ display: visibilityStore.hoverBarVisible ? 'flex' : 'none' }}>
      <LeftAligned>
        <IconWrapper>
          <MotionPhotosAutoIcon style={{ fontSize: 36, color: '#175AE2' }} />
        </IconWrapper>
        <SkButton
          icon={<BedtimeIcon />}
          onClick={toggleHoverBarVisibility} // Implement the onClick handler
        /> {/* Toggles visibility of Hover Bar */}
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