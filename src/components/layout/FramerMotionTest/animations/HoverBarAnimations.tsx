/* src/components/layout/FramerMotionTest/animations/HoverBarAnimations.tsx */

import React from "react";

export const hoverBarAnimations = {
  initial: false,
  animate: (isExpanded: boolean) => ({
    width: isExpanded ? "calc(100% - 0px)" : "calc(100% + 0px)",
  }),
  transition: { duration: 0.8, ease: "easeInOut" },
  innerContainerRight: {
    initial: false,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "calc(50% + 1px)" : "calc(0.1% + 60px)",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
