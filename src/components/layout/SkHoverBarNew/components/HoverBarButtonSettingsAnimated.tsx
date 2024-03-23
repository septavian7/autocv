/* src/components/layout/SkHoverBarNew/components/HoverBarButtonSettingsAnimated.tsx */

import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  HoverBarButtonSettings,
  HoverBarButtonSettingsText,
} from "./HoverBarButtonSettings";
import { HoverBarButtonAnimations } from "../animations/HoverBarButtonAnimations";

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
      <HoverBarButtonSettings
        key="settingsButton"
        initial={HoverBarButtonAnimations.HoverBarButtonSettings.initial}
        animate={HoverBarButtonAnimations.HoverBarButtonSettings.animate(
          isExpanded,
          viewportWidth,
        )}
        exit={HoverBarButtonAnimations.HoverBarButtonSettings.exit}
        onClick={toggleExpanded}
        transition={HoverBarButtonAnimations.HoverBarButtonSettings.transition}
        $isExpanded={isExpanded}
        $viewportWidth={viewportWidth}
      >
        <HoverBarButtonSettingsText>S</HoverBarButtonSettingsText>
      </HoverBarButtonSettings>
    </AnimatePresence>
  );
};
