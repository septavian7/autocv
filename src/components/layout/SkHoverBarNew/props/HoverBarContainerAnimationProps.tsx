/* src/components/layout/SkHoverBarNew/HoverBarContainerAnimationProps.tsx */

import { HoverBarContainerAnimations } from "../animations/HoverBarContainerAnimations";

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
