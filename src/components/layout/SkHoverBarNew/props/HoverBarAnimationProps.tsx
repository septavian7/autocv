/* src/components/layout/SkHoverBarNew/props/HoverBarAnimationProps.tsx */

import { Transition, Variant } from "framer-motion";
import { HoverBarButtonAnimations } from "../animations/HoverBarButtonAnimations";
import { HoverBarContainerAnimations } from "../animations/HoverBarContainerAnimations";

export type HoverBarAnimationProps = {
  initial?: boolean | Variant;
  animate?: Variant;
  transition?: Transition;
  exit?: Variant;
  $isExpanded?: boolean;
  $viewportWidth?: number;
};

export const HoverBarButtonMainAnimationProps = {
  initial: HoverBarButtonAnimations.hoverBarButtonMain.initial,
  animate: (isExpanded: boolean) =>
    HoverBarButtonAnimations.hoverBarButtonMain.animate(isExpanded),
  transition: HoverBarButtonAnimations.hoverBarButtonMain.transition,
};

export const HoverBarButtonMenuAnimationProps = {
  initial: HoverBarButtonAnimations.HoverBarButtonMenu.initial,
  animate: (isExpanded: boolean) =>
    HoverBarButtonAnimations.HoverBarButtonMenu.animate(isExpanded),
  transition: HoverBarButtonAnimations.HoverBarButtonMenu.transition,
};

export const HoverBarButtonMinimizeAnimationProps = {
  initial: HoverBarButtonAnimations.HoverBarButtonMinimize.initial,
  animate: (isExpanded: boolean) =>
    HoverBarButtonAnimations.HoverBarButtonMinimize.animate(isExpanded),
  transition: HoverBarButtonAnimations.HoverBarButtonMinimize.transition,
};

export const HoverBarContainerAnimationProps = {
  initial: HoverBarContainerAnimations.initial,
  animate: (isExpanded: boolean) =>
    HoverBarContainerAnimations.animate(isExpanded),
  transition: HoverBarContainerAnimations.transition,
};

export const HoverBarInnerContainerRightAnimationProps = {
  initial: HoverBarContainerAnimations.HoverBarInnerContainerRight.initial,
  animate: (isExpanded: boolean) =>
    HoverBarContainerAnimations.HoverBarInnerContainerRight.animate(isExpanded),
  transition:
    HoverBarContainerAnimations.HoverBarInnerContainerRight.transition,
};

export const HoverBarButtonContainerCenterRightAnimationProps = {
  initial:
    HoverBarContainerAnimations.HoverBarButtonContainerCenterRight.initial,
  animate: (isExpanded: boolean) =>
    HoverBarContainerAnimations.HoverBarButtonContainerCenterRight.animate(
      isExpanded,
    ),
  transition:
    HoverBarContainerAnimations.HoverBarButtonContainerCenterRight.transition,
};

export const HoverBarButtonContainerFarRightAnimationProps = {
  initial: HoverBarContainerAnimations.HoverBarButtonContainerRight.initial,
  animate: (isExpanded: boolean) =>
    HoverBarContainerAnimations.HoverBarButtonContainerRight.animate(
      isExpanded,
    ),
  transition:
    HoverBarContainerAnimations.HoverBarButtonContainerRight.transition,
};
