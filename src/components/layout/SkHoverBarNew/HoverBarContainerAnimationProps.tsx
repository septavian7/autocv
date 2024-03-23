/* src/components/layout/SkHoverBarNew/HoverBarContainerAnimationProps.tsx */

import { hoverBarContainerAnimations } from "./animations/HoverBarContainerAnimations";

export const hoverbarContainerAnimationProps = {
  initial: hoverBarContainerAnimations.initial,
  animate: (isExpanded: boolean) =>
    hoverBarContainerAnimations.animate(isExpanded),
  transition: hoverBarContainerAnimations.transition,
};

export const innerContainerRightAnimationProps = {
  initial: hoverBarContainerAnimations.innerContainerRight.initial,
  animate: (isExpanded: boolean) =>
    hoverBarContainerAnimations.innerContainerRight.animate(isExpanded),
  transition: hoverBarContainerAnimations.innerContainerRight.transition,
};

export const buttonContainerCenterRightAnimationProps = {
  initial: hoverBarContainerAnimations.buttonContainerCenterRight.initial,
  animate: (isExpanded: boolean) =>
    hoverBarContainerAnimations.buttonContainerCenterRight.animate(isExpanded),
  transition: hoverBarContainerAnimations.buttonContainerCenterRight.transition,
};

export const buttonContainerRightAnimationProps = {
  initial: hoverBarContainerAnimations.buttonContainerRight.initial,
  animate: (isExpanded: boolean) =>
    hoverBarContainerAnimations.buttonContainerRight.animate(isExpanded),
  transition: hoverBarContainerAnimations.buttonContainerRight.transition,
};
