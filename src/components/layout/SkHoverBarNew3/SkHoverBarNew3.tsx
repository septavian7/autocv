/* src/components/layout/SkHoverBarNew3/SkHoverBarNew3.tsx */

import React from "react";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useViewportWidth } from "../../../utils/useViewportWidth";
import { visibilityStore } from "../../../stores/SkVisibilityStore";
import { hoverBarStore } from "./stores/HoverBarStore";
import { UseHoverBarState } from "./state/HoverBarState";
import {
  toggleHoverBarExpandMinimize,
  toggleMakeMenu,
  toggleMainMenu,
  toggleSettingsMenu,
  toggleTheme,
} from "./utils/HoverBarUtils";

/* --------- STYLES: CONTAINERS --------- */

const HoverBarOuterOuterContainer = styled(motion.div)`
  height: 120px;
  width: 100vw;
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
   background:
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  filter: backdrop-filter: blur(10px);
`;

const HoverBarOuterContainer = styled(motion.div)`
  position: relative;
  /*   background-color: #808080; */
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50%;
  background-color: rgba(0, 0, 0, 0);
`;

const HoverBarInnerContainerRight = styled(motion.div)`
  height: 100%;
  position: flex-end;
  display: flex;
  align-items: center;
  /*   justify-content: center; */
  overflow: visible;
  /*   width: 50%; */
  background-color: rgba(0, 255, 0, 0);
`;

const HoverBarButtonContainerCenterRight = styled(motion.div)`
  height: 100%;
  background-color: rgba(0, 200, 200, 0);
  align-items: center;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow: visible;
`;

const HoverBarButtonContainerFarRight = styled(motion.div)`
  height: 100%;
  background-color: rgba(200, 200, 0, 0);
  align-items: center;
  justify-content: flex-end;
  position: relative;
  display: flex;
  overflow: hidden;
`;

const HoverBarButtonSmallContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px; // Adjust the gap as needed
  // Other styles to control positioning, like align-items, justify-content, etc.
`;

/* --------- STYLES: BUTTONS (COMMON) --------- */

// Base Button
const BaseHoverBarButton = styled(motion.button)`
  /*   background: ${({ theme }) => theme.hoverBarButtonPrimaryBackground}; */
  /* color: white; */
  position: absolute;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
  overflow: hidden;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(85%);
  }
`;

// Large Button
const LargeHoverBarButton = styled(BaseHoverBarButton)`
  height: 100%;
  border-radius: 15px;
  font-size: 16px;
  flex-basis: 65px;
  flex-grow: 0;
`;

// Large Button Text
const LargeHoverBarButtonText = styled(motion.span)`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 15px;
`;

// Small Button
const SmallHoverBarButton = styled(BaseHoverBarButton)`
  height: 66.7%;
  border-radius: 8px;
  font-size: 16px;
  flex-basis: 40px;
  flex-grow: 0;
`;

// Small Button Text
const SmallHoverBarButtonText = styled(motion.span)`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2px 5px;
`;

/* --------- STYLES: MAIN BUTTON --------- */

// Make Button (Main)
const HoverBarButtonMakeMain = styled(BaseHoverBarButton)`
  ${({ theme }) => `
    display: flex;
    height: 100%;
    background: ${theme.hoverBarButtonPrimaryBackground};
    order: 1;
    flex-basis: 100px;
    flex-grow: 0;
    justify-content: flex-end;
    border-radius: 15px;
    font-size: 16px;
  `}
`;

const HoverBarButtonMakeMainTextLeft = styled(motion.span)`
  /*   display: absolute; */
  /*   padding: 10px 15px; */
`;

const HoverBarButtonMakeMainTextRight = styled(motion.span)`
  display: flex;
  color: white;
`;

// Make Button (Inner-Left Container)

const HoverBarButtonMakeMainInnerLeftContainer = styled(motion.div)`
  display: flex;
  height: 69%;
  background-color: rgba(255, 255, 255, 0.9);
  align-items: center;
  justify-content: center;
  /*   margin-left: 20px; */
`;

// Make Button (Inner-Right Container)
const HoverBarButtonMakeMainInnerRightContainer = styled(motion.div)`
  display: flex;
  height: 50%;
  align-items: center;
  justify-content: center;
  /*   padding: 10px 15px; */
  /*   margin-right: 20px; */
`;

/* --------- STYLES: BUTTONS --------- */

// Main Menu Button (Large)
const HoverBarButtonMainMenuLarge = styled(LargeHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonSecondaryBackground};
    order: 2;
    margin: 18px;
  `}
`;
// Settings Button (Large)
const HoverBarButtonSettingsLarge = styled(LargeHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonSecondaryBackground};
    order: 3;
    margin: 18px;
  `}
`;

// Theme Button (Small)
const HoverBarButtonThemeSmall = styled(SmallHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonPrimaryBackground};
    order: 4;
    margin-right: 14px;
  `}
`;
// Minimize Button (Small)
const HoverBarButtonSettingsSmall = styled(SmallHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonPrimaryBackground};
    order: 3;
    margin-right: 14px;
  `}
`;
// Minimize Button (Small)
const HoverBarButtonMinimizeSmall = styled(SmallHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonPrimaryBackground};
    order: 0;
    margin-right: 20px;
  `}
`;

/* --------- STYLES: FRAMER-MOTION --------- */

// Common Variants
const commonVariants = {
  expanded: { transition: { duration: 0.5, ease: "easeInOut" } },
  collapsed: { transition: { duration: 0.5, ease: "easeInOut" } },
};

// Define animation variants for showing/hiding buttons
const buttonVisibilityVariants = {
  hidden: {
    opacity: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// HoverBarButtonContainerCenterRight Variants
const HoverBarButtonContainerCenterRightVariants = {
  expanded: {
    ...commonVariants.expanded,
    width: "calc(50% + 0px)", // Merging with existing styles
    // Add transform if needed
  },
  collapsed: {
    ...commonVariants.collapsed,
    width: "calc(100% + 0px)", // Merging with existing styles
    // Add transform if needed
  },
};
// HoverBarButtonContainerFarRight Variants
const HoverBarButtonContainerFarRightVariants = {
  expanded: {
    ...commonVariants.expanded,
    width: "calc(50% + 0px)", // Retain this for potential future dynamic changes
    // Any additional specific animations for the expanded state
  },
  collapsed: {
    ...commonVariants.collapsed,
    width: "calc(0% + 0px)", // Even if it's the same for now, it allows for easy adjustments later
    // Any additional specific animations for the collapsed state
  },
};

// HoverBarButtonMakeMain Variants
const HoverBarButtonMakeMainVariants = {
  expanded: {
    ...commonVariants.expanded,
    width: "100px",
    transform: "translateX(calc(0% + -50px))",
  },
  collapsed: {
    ...commonVariants.collapsed,
    width: "65px",
    transform: "translateX(calc(0% + -15px))",
  },
};

// Make Button (Inner-Left Container)

const HoverBarButtonMakeMainInnerLeftContainerVariants = {
  expanded: {
    ...commonVariants.expanded,
    width: "40%",
    transform: "translateX(0%)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  collapsed: {
    ...commonVariants.collapsed,

    width: "100%",
    transform: "translateX(0%)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// Make Button (Inner-Right Container)
const HoverBarButtonMakeMainInnerRightContainerVariants = {
  expanded: {
    ...commonVariants.expanded,
    opacity: 1,
    width: "60%",
    transform: "translateX(0%)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  collapsed: {
    ...commonVariants.collapsed,
    opacity: 0,
    width: "0%",
    transform: "translateX(0%)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// HoverBarButtonMainMenuLarge Variants
const HoverBarButtonMainMenuLargeVariants = {
  expanded: {
    width: "65px",
    transform: "translateX(40px)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  collapsed: {
    width: "65px",
    transform: "translateX(50px)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// HoverBarButtonThemeSmall Variants
const HoverBarButtonThemeSmallVariants = {
  expanded: {
    width: "40px",
    transform: "translateX(-92px)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  collapsed: {
    width: "40px",
    transform: "translateX(100px)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// HoverBarButtonSettingsSmall Variants
const HoverBarButtonSettingsSmallVariants = {
  expanded: {
    width: "40px",
    transform: "translateX(-44px)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  collapsed: {
    width: "40px",
    transform: "translateX(100px)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// HoverBarButtonMinimizeSmall Variants
const HoverBarButtonMinimizeSmallVariants = {
  expanded: {
    width: "40px",
    transform: "translateX(10px)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  collapsed: {
    width: "40px",
    transform: "translateX(100px)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

/* --------- COMPONENT --------- */

const SkHoverBarNew3: React.FC = observer(() => {
  const { isExpanded } = hoverBarStore;
  const viewportWidth = useViewportWidth();
  const showSmallButtons = viewportWidth > 550; // Visibility threshold

  // Decide which variant to use based on `isExpanded`
  const currentVariant = isExpanded ? "expanded" : "collapsed";

  return (
    <HoverBarOuterOuterContainer>
      <HoverBarOuterContainer
        initial={false}
        animate={{
          width: isExpanded ? "calc(100% - 0px)" : "calc(100% + 0px)",
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <HoverBarInnerContainerRight
          initial={false}
          animate={{
            width: isExpanded ? "calc(50% + 0px)" : "calc(0% + 60px)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <HoverBarButtonContainerCenterRight
            initial={isExpanded ? false : "collapsed"}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={HoverBarButtonContainerCenterRightVariants}
          >
            <HoverBarButtonMakeMain
              initial={isExpanded ? false : "collapsed"}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={HoverBarButtonMakeMainVariants}
              onClick={toggleHoverBarExpandMinimize}
            >
              <HoverBarButtonMakeMainInnerLeftContainer
                initial={isExpanded ? false : "collapsed"}
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={HoverBarButtonMakeMainInnerLeftContainerVariants}
              >
                <HoverBarButtonMakeMainTextLeft>
                  X
                </HoverBarButtonMakeMainTextLeft>
              </HoverBarButtonMakeMainInnerLeftContainer>
              <HoverBarButtonMakeMainInnerRightContainer
                initial={isExpanded ? false : "collapsed"}
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={HoverBarButtonMakeMainInnerRightContainerVariants}
              >
                <HoverBarButtonMakeMainTextRight>
                  Make
                </HoverBarButtonMakeMainTextRight>
              </HoverBarButtonMakeMainInnerRightContainer>
            </HoverBarButtonMakeMain>
            <HoverBarButtonMainMenuLarge
              onClick={toggleMainMenu}
              initial={isExpanded ? false : "collapsed"}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={HoverBarButtonMainMenuLargeVariants}
            >
              <LargeHoverBarButtonText>M</LargeHoverBarButtonText>
            </HoverBarButtonMainMenuLarge>
          </HoverBarButtonContainerCenterRight>
          <HoverBarButtonContainerFarRight
            initial={isExpanded ? false : "collapsed"}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={HoverBarButtonContainerFarRightVariants}
          >
            <AnimatePresence>
              {showSmallButtons && (
                <HoverBarButtonSmallContainer
                  initial="visible"
                  animate="visible"
                  exit="hidden"
                  variants={buttonVisibilityVariants}
                >
                  {/* Theme Button */}
                  <HoverBarButtonThemeSmall
                    onClick={toggleTheme}
                    initial={isExpanded ? false : "collapsed"}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={HoverBarButtonThemeSmallVariants}
                  >
                    <SmallHoverBarButtonText>T</SmallHoverBarButtonText>
                  </HoverBarButtonThemeSmall>

                  {/* Settings Button */}
                  <HoverBarButtonSettingsSmall
                    onClick={toggleSettingsMenu}
                    initial={isExpanded ? false : "collapsed"}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={HoverBarButtonSettingsSmallVariants}
                  >
                    <SmallHoverBarButtonText>S</SmallHoverBarButtonText>
                  </HoverBarButtonSettingsSmall>
                </HoverBarButtonSmallContainer>
              )}
            </AnimatePresence>
            {/* Minimize Button (Always visible) */}
            <HoverBarButtonMinimizeSmall
              onClick={toggleHoverBarExpandMinimize}
              initial={isExpanded ? false : "collapsed"}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={HoverBarButtonMinimizeSmallVariants}
            >
              <SmallHoverBarButtonText>X</SmallHoverBarButtonText>
            </HoverBarButtonMinimizeSmall>
          </HoverBarButtonContainerFarRight>
        </HoverBarInnerContainerRight>
      </HoverBarOuterContainer>
    </HoverBarOuterOuterContainer>
  );
});

export default SkHoverBarNew3;
