/* /src/components/layouts/SkHoverBar/SkHoverBar.tsx */

/* --------- IMPORT --------- */

// Plugins/Tools
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
// Components
import SkButton from "../../common/SkButton/SkButton";
import { IconName } from "../../common/SkIcon/SkIcon";
import { SkUserSettings } from "../../features/SkUserSettings/SkUserSettings";
import { SkToolsMenu } from "../../features/SkToolsMenu/SkToolsMenu";
import { SkMakeCV } from "../../features/SkMakeCV/SkMakeCV";
// Stores
import { themeStore } from "../../../stores/SkThemeStore";
// Styles
import {
  SkHoverBarContainer,
  LeftAligned,
  CenterAligned,
  RightAligned,
} from "../../../styles/SkHoverBarStyles";

/* --------- SETUP --------- */

const SkHoverBar = observer(() => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isUserSettingsVisible, setIsUserSettingsVisible] = useState(false);
  const [isToolsMenuVisible, setIsToolsMenuVisible] = useState(false);
  const [isMakeCVVisible, setIsMakeCVVisible] = useState(false);

  // Define toggle functions
  const toggleMinimize = () => setIsMinimized(!isMinimized);
  const toggleTheme = () => themeStore.toggleTheme();
  const toggleUserSettings = () =>
    setIsUserSettingsVisible(!isUserSettingsVisible);
  const toggleToolsMenu = () => setIsToolsMenuVisible(!isToolsMenuVisible);
  const toggleMakeCV = () => setIsMakeCVVisible(!isMakeCVVisible);

  const minimizeIcon: IconName = "motionPhotosAuto";
  const themeIcon: IconName = "contrast";
  const makeCVIcon: IconName = "autoAwesome";
  const settingsIcon: IconName = "settings";
  const toolsIcon: IconName = "spaceDashboard";

  /* --------- RENDER  --------- */

  // Render Minimized
  if (isMinimized) {
    return (
      <SkHoverBarContainer
        initial={false}
        animate={{
          width: "60px",
          height: "60px",
          borderRadius: "15px 0 0 15px",
          clipPath: "inset(0 -100% 0 0)",
          right: "0",
          left: "auto",
          justifyContent: "flex-start",
          padding: "0 8px",
        }}
        transition={{ duration: 0.5 }}
        onClick={toggleMinimize}
      >
        <SkButton icon={minimizeIcon} onClick={toggleMinimize} />
      </SkHoverBarContainer>
    );
  }

  // Render Expanded
  return (
    <>
      <SkHoverBarContainer
        initial={false}
        animate={{
          width: "calc(100% - 2%)",
          height: "60px",
          borderRadius: "15px",
          clipPath: "none",
          left: "1%",
          right: "1%",
          justifyContent: "space-between",
        }}
        transition={{ duration: 0.5 }}
      >
        <LeftAligned>
          <SkButton icon={minimizeIcon} onClick={toggleMinimize} />
          <SkButton icon={themeIcon} onClick={toggleTheme} />
        </LeftAligned>
        <CenterAligned>
          <SkButton
            label="Make CV"
            icon={makeCVIcon}
            onClick={toggleMakeCV}
            primary
          />
        </CenterAligned>
        <RightAligned>
          <SkButton icon={settingsIcon} onClick={toggleUserSettings} />
          <SkButton icon={toolsIcon} onClick={toggleToolsMenu} />
        </RightAligned>
      </SkHoverBarContainer>
      {isUserSettingsVisible && (
        <SkUserSettings
          isVisible={isUserSettingsVisible}
          onClose={toggleUserSettings}
        />
      )}
      {isToolsMenuVisible && (
        <SkToolsMenu isVisible={isToolsMenuVisible} onClose={toggleToolsMenu} />
      )}
      {isMakeCVVisible && (
        <SkMakeCV isVisible={isMakeCVVisible} onClose={toggleMakeCV} />
      )}
    </>
  );
});

export default SkHoverBar;
