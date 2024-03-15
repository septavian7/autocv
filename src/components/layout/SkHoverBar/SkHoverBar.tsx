import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import SkButton from "../../common/SkButton/SkButton";
import { SkUserSettings } from "../../features/SkUserSettings/SkUserSettings";
import { SkToolsMenu } from "../../features/SkToolsMenu/SkToolsMenu";
import { SkMakeCV } from "../../features/SkMakeCV/SkMakeCV";
import { themeStore } from "../../../stores/SkThemeStore";
import { motion } from "framer-motion";

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

  // Framer Motion animation variants
  const animationVariants = {
    expanded: {
      width: "90vw",
      x: "calc(50vw - 45vw)", // Center the hover bar by adjusting its X position based on its width
      transition: { type: "tween", duration: 0.5 },
    },
    minimized: {
      width: "60px",
      x: "calc(100vw - 60px)", // Moves the hover bar to stick out 60px from the right edge
      transition: { type: "tween", duration: 0.5 },
    },
  };

  return (
    <>
      <motion.div
        initial="expanded"
        animate={isMinimized ? "minimized" : "expanded"}
        variants={animationVariants}
        transition={{ type: "tween", duration: 0.5 }}
        style={{
          position: "fixed",
          bottom: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1100,
          background: "#fff", // Example background color, replace with your theme or style
          // Add other necessary styles here
        }}
        onClick={toggleMinimize}
      >
        <SkButton icon={"motionPhotosAuto"} onClick={toggleMinimize} />
        {!isMinimized && (
          <>
            <SkButton
              label="Make CV"
              icon={"autoAwesome"}
              onClick={toggleMakeCV}
              primary
            />
            <SkButton icon={"settings"} onClick={toggleUserSettings} />
            <SkButton icon={"spaceDashboard"} onClick={toggleToolsMenu} />
          </>
        )}
      </motion.div>
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
