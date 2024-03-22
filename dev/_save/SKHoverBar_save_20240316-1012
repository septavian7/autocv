/* src/components/layouts/SkHoverBar/SkHoverBar.tsx */

/* --------- IMPORT --------- */

import React from "react";
import { observer } from "mobx-react-lite";
import { useTheme } from "@emotion/react";
import { themeStore, visibilityStore } from "../../../stores";
import SkButton from "../../common/SkButton/SkButton";
import { SkUserSettings } from "../../features/SkUserSettings/SkUserSettings";
import { SkToolsMenu } from "../../features/SkToolsMenu/SkToolsMenu";
import { SkMakeCV } from "../../features/SkMakeCV/SkMakeCV";
import {
  SkHoverBarContainer,
  SkPsuedoHoverBar,
  LeftAligned,
  CenterAligned,
  RightAligned,
} from "../../../styles/SkHoverBarStyles";

/* ------ SETUP/RENDER ------ */

const SkHoverBar = observer(() => {
  const theme = useTheme();

  // No need for local state, using MobX store state directly
  const toggleMinimize = () => visibilityStore.toggleHoverBar();
  const toggleTheme = () => themeStore.toggleTheme();
  const toggleUserSettings = () => visibilityStore.toggleUserSettingsVisible();
  const toggleToolsMenu = () => visibilityStore.toggleToolsMenuVisible();
  const toggleMakeCV = () => visibilityStore.toggleMakeCVVisible();

  return (
    <>
      <SkPsuedoHoverBar />
      <SkHoverBarContainer minimized={!visibilityStore.hoverBarVisible}>
        <LeftAligned>
          <SkButton icon="motionPhotosAuto" onClick={toggleMinimize} />
          {visibilityStore.hoverBarVisible && (
            <>
              <CenterAligned>
                <SkButton
                  label="Make CV"
                  icon="autoAwesome"
                  onClick={toggleMakeCV}
                  primary
                />
              </CenterAligned>
              <RightAligned>
                <SkButton icon="settings" onClick={toggleUserSettings} />
                <SkButton icon="spaceDashboard" onClick={toggleToolsMenu} />
              </RightAligned>
            </>
          )}
        </LeftAligned>
      </SkHoverBarContainer>
      {visibilityStore.isUserSettingsVisible && (
        <SkUserSettings
          isVisible={visibilityStore.isUserSettingsVisible}
          onClose={toggleUserSettings}
        />
      )}
      {visibilityStore.isToolsMenuVisible && (
        <SkToolsMenu
          isVisible={visibilityStore.isToolsMenuVisible}
          onClose={toggleToolsMenu}
        />
      )}
      {visibilityStore.isMakeCVVisible && (
        <SkMakeCV
          isVisible={visibilityStore.isMakeCVVisible}
          onClose={toggleMakeCV}
        />
      )}
    </>
  );
});

export default SkHoverBar;
