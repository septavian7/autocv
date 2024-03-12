/* /src/components/layouts/SkHoverBar/SkHoverBar.tsx */

/* --------- IMPORT --------- */

// Plugins/Tools
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useTheme } from "@emotion/react";
// import styled from "@emotion/styled";
import { motion } from "framer-motion";
// Components
import SkButton from "../../common/SkButton/SkButton";
import SkIcon from "../../common/SkIcon/SkIcon";
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
        <SkButton
          icon={
            <SkIcon
              iconName="motionPhotosAuto"
              color="#175AE2"
              fontSize="large"
            />
          }
          onClick={toggleMinimize}
        />
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
          <SkButton
            icon={<SkIcon iconName="motionPhotosAuto" color="#175AE2" />}
            onClick={toggleMinimize}
          />
          <SkButton
            icon={<SkIcon iconName="contrast" />}
            onClick={toggleTheme}
          />
        </LeftAligned>
        <CenterAligned>
          <SkButton
            label="Make CV"
            icon={<SkIcon iconName="autoAwesome" />}
            onClick={toggleMakeCV}
            primary
          />
        </CenterAligned>
        <RightAligned>
          <SkButton
            icon={<SkIcon iconName="settings" />}
            onClick={toggleUserSettings}
          />
          <SkButton
            icon={<SkIcon iconName="spaceDashboard" />}
            onClick={toggleToolsMenu}
          />
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
