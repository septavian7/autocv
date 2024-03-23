/* src/components/layout/FramerMotionTest/animations/ButtonAnimations.tsx */

import React from "react";

export const buttonAnimations = {
  toggleButton: {
    initial: false,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "100px" : "60px",
      transform: isExpanded
        ? "translateX(calc(0% + -50px))"
        : "translateX(calc(0% + -10px))",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  menuButton: {
    initial: false,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "60px" : "60px",
      transform: isExpanded ? "translateX(50px)" : "translateX(60px)",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  settingsButton: {
    initial: {
      width: "60px",
      transform: "translate(115px)",
      opacity: 1,
    },
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "60px" : "60px",
      transform: isExpanded ? "translateX(115px)" : "translateX(60px)",
      opacity: 1,
    }),
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  toggleButtonSm: {
    initial: false,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "40px" : "40px",
      transform: isExpanded ? "translateX(10px)" : "translateX(100px)",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  buttonContainerCenterRight: {
    initial: false,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "calc(75% + 0px)" : "calc(99.9% + 0px)",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  buttonContainerRight: {
    initial: false,
    animate: (isExpanded: boolean) => ({
      width: isExpanded ? "calc(25% + 0px)" : "calc(0.1% + 0px)",
      transform: isExpanded ? "translateX(0px)" : "translateX(0px)",
    }),
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
