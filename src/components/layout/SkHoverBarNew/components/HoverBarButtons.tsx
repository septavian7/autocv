/* src/components/layout/SkHoverBarNew/HoverBarButtons.tsx */

import React from "react";
import {
  HoverBarButtonMain,
  HoverBarButtonMainText,
} from "./HoverBarButtonMain";
import {
  HoverBarButtonMenu,
  HoverBarButtonMenuText,
} from "./HoverBarButtonMenu";
import {
  HoverBarButtonMinimize,
  HoverBarButtonMinimizeText,
} from "./HoverBarButtonMinimize";
import { HoverBarButtonSettingsAnimated } from "./HoverBarButtonSettingsAnimated";
import {
  HoverBarButtonMainAnimationProps,
  HoverBarButtonMenuAnimationProps,
  HoverBarButtonMinimizeAnimationProps,
} from "../props/HoverBarButtonAnimationProps";

interface HoverBarButtonsProps {
  isExpanded: boolean;
  viewportWidth: number;
  toggleExpanded: () => void;
}

interface HoverBarButtonSmProps {
  isExpanded: boolean;
  toggleExpanded: () => void;
}

export const HoverBarButtons: React.FC<HoverBarButtonsProps> = ({
  isExpanded,
  viewportWidth,
  toggleExpanded,
}) => {
  return (
    <>
      <HoverBarButtonMain
        onClick={toggleExpanded}
        {...HoverBarButtonMainAnimationProps}
        animate={HoverBarButtonMainAnimationProps.animate(isExpanded)}
        $isExpanded={isExpanded}
      >
        <HoverBarButtonMainText>X</HoverBarButtonMainText>
      </HoverBarButtonMain>
      <HoverBarButtonMenu
        onClick={toggleExpanded}
        {...HoverBarButtonMenuAnimationProps}
        animate={HoverBarButtonMenuAnimationProps.animate(isExpanded)}
        $isExpanded={isExpanded}
      >
        <HoverBarButtonMenuText>M</HoverBarButtonMenuText>
      </HoverBarButtonMenu>
      <HoverBarButtonSettingsAnimated
        isExpanded={isExpanded}
        viewportWidth={viewportWidth}
        toggleExpanded={toggleExpanded}
      />
    </>
  );
};

export const HoverBarButtonSm: React.FC<HoverBarButtonSmProps> = ({
  isExpanded,
  toggleExpanded,
}) => {
  return (
    <HoverBarButtonMinimize
      onClick={toggleExpanded}
      {...HoverBarButtonMinimizeAnimationProps}
      animate={HoverBarButtonMinimizeAnimationProps.animate(isExpanded)}
      $isExpanded={isExpanded}
    >
      <HoverBarButtonMinimizeText>X</HoverBarButtonMinimizeText>
    </HoverBarButtonMinimize>
  );
};
