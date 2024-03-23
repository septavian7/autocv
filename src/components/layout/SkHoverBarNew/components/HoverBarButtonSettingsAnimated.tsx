/* src/components/layout/SkHoverBarNew/components/HoverBarButtonSettingsAnimated.tsx */

import React from "react";
import { AnimatePresence } from "framer-motion";
import { SettingsButton, SettingsButtonText } from "./HoverBarButtonSettings";
import { hoverbarButtonAnimations } from "../animations/HoverBarButtonAnimations";

interface HoverBarButtonSettingsAnimatedProps {
  isExpanded: boolean;
  viewportWidth: number;
  toggleExpanded: () => void;
}

export const HoverBarButtonSettingsAnimated: React.FC<
  HoverBarButtonSettingsAnimatedProps
> = ({ isExpanded, viewportWidth, toggleExpanded }) => {
  return (
    <AnimatePresence mode="wait">
      <SettingsButton
        key="settingsButton"
        initial={hoverbarButtonAnimations.settingsButton.initial}
        animate={hoverbarButtonAnimations.settingsButton.animate(
          isExpanded,
          viewportWidth,
        )}
        exit={hoverbarButtonAnimations.settingsButton.exit}
        onClick={toggleExpanded}
        transition={hoverbarButtonAnimations.settingsButton.transition}
        $isExpanded={isExpanded}
        $viewportWidth={viewportWidth}
      >
        <SettingsButtonText>S</SettingsButtonText>
      </SettingsButton>
    </AnimatePresence>
  );
};
