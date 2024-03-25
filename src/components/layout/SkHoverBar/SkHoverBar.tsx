/* src/components/layout/SkHoverBar/SkHoverBar.tsx */

import React from "react";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { themeStore } from "../../../stores";
import { visibilityStore } from "../../../stores/SkVisibilityStore";
import { hoverBarStore } from "./stores/HoverBarStore";
/* import { UseHoverBarState } from "./state/HoverBarState"; */
import { useViewportWidth } from "../../../utils/useViewportWidth";
import {
  toggleHoverBarExpandMinimize,
  toggleMakeMenu,
  toggleMainMenu,
  toggleSettingsMenu,
  toggleProfileMenu,
  /*   toggleTheme, */
} from "./utils/HoverBarUtils";
import { SkUserSettings } from "../../features/SkUserSettings/SkUserSettings";
import { SkToolsMenu } from "../../features/SkToolsMenu/SkToolsMenu";
import { SkMakeCV } from "../../features/SkMakeCV/SkMakeCV";

/* --------- FUNCTIONS: ONCLICK LOGIC --------- */

const toggleUserSettings = () => visibilityStore.toggleUserSettingsVisible();

const toggleToolsMenu = () => visibilityStore.toggleToolsMenuVisible();

const toggleMakeCV = () => visibilityStore.toggleMakeCVVisible();

const onMakeButtonClickExpanded = () => {
  toggleMakeCV();
  console.log("Make expanded State Function Called");
};

const onMakeButtonClickCollapsed = () => {
  toggleHoverBarExpandMinimize();
  console.log("Make collapsed State Function Called");
};

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
  height: 100%;
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
  /*   background-color: rgba(0, 255, 0, 0); */
`;

const HoverBarButtonContainerCenterRight = styled(motion.div)`
  height: 100%;
  /*   background-color: rgba(0, 200, 200, 0); */
  align-items: center;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow: visible;
  /*   z-index: 1000; */
`;

const HoverBarButtonContainerFarRight = styled(motion.div)`
  height: 100%;
  background-color: rgba(200, 200, 0, 0);
  align-items: center;
  justify-content: flex-end;
  position: relative;
  display: flex;
  overflow: visible;
  /*   z-index: 1100; */
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
  /*   z-index: 900; */
  overflow: hidden;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(85%);
  }
`;

// Large Button
const LargeHoverBarButton = styled(BaseHoverBarButton)`
  height: 55px;
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
  height: 40px;
  border-radius: 8px;
  font-size: 16px;
  flex-basis: 40px;
  flex-grow: 0;
  /*   z-index: 1200; */
`;

// Small Button Text
const SmallHoverBarButtonText = styled(motion.span)`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2px 5px;
`;

/* --------- STYLES: MAIN BUTTON --------- */

// Make Button (Main)
const HoverBarButtonMake = styled(BaseHoverBarButton)`
  ${({ theme }) => `
    display: flex;
    height: 65px;
    background: ${theme.hoverBarButtonPrimaryBackground};
    order: 1;
    flex-basis: 100px;
    flex-grow: 0;
    justify-content: flex-end;
    border-radius: 15px;
  `}
`;

const HoverBarButtonMakeTextLeft = styled(motion.span)`
  /*   display: absolute; */
  /*   padding: 10px 15px; */
`;

const HoverBarButtonMakeTextRight = styled(motion.span)`
  display: flex;
  color: white;
`;

// Make Button (Inner-Left Container)
const HoverBarButtonMakeInnerLeftContainer = styled(motion.div)`
  display: flex;
  height: 65%;
  /*   background-color: rgba(255, 255, 255, 0.9); */
  background-image: url("/assets/SkHoverBar/ram314_blue_stencil-gray.svg");
  filter: brightness(110%);
  background-size: 100% 100%;
  background-position: center;
  align-items: center;
  justify-content: center;
  /*   margin-left: 20px; */
`;

// Make Button (Inner-Right Container)
const HoverBarButtonMakeInnerRightContainer = styled(motion.div)`
  display: flex;
  height: 50%;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  font-size: 18px;
  margin-left: 5px;
  margin-top: 2.5px;
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
const HoverBarButtonMainMenuIcon = styled(motion.span)`
  width: 90%;
  height: 90%;
  background-image: url("/assets/SkHoverBar/space_dashboard_FILL0_wght400_GRAD0_opsz24.svg");
  filter: invert(100%);
  background-size: cover;
  background-position: center;
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
    background: ${theme.hoverBarButtonSecondaryBackground};
    order: 4;
    margin-right: 14px;
  `}
`;
const HoverBarButtonThemeIcon = styled(motion.span)`
  width: 100%;
  height: 100%;
  background-image: url("/assets/SkHoverBar/contrast_FILL0_wght400_GRAD0_opsz24.svg");
  filter: invert(100%);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

// Settings Button (Small)
const HoverBarButtonSettingsSmall = styled(SmallHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonSecondaryBackground};
    order: 3;
    margin-right: 14px;
  `}
`;
const HoverBarButtonSettingsIcon = styled(motion.span)`
  width: 100%;
  height: 100%;
  background-image: url("/assets/SkHoverBar/settings_FILL0_wght400_GRAD0_opsz24.svg");
  filter: invert(100%);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
// Profile Button (Small)
const HoverBarButtonProfileSmall = styled(SmallHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonSecondaryBackground};
    order: 3;
    margin-right: 14px;
  `}
`;
const HoverBarButtonProfileIcon = styled(motion.span)`
  width: 100%;
  height: 100%;
  background-image: url("/assets/SkHoverBar/account_circle_FILL0_wght400_GRAD0_opsz24.svg");
  filter: invert(100%);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
// Minimize Button (Small)
const HoverBarButtonMinimizeSmall = styled(SmallHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonPrimaryBackground};
    order: 0;
    margin-right: 20px;
  `}
`;
const HoverBarButtonMinimizeIcon = styled(motion.span)`
  width: 100%;
  height: 100%;
  background-image: url("/assets/SkHoverBar/right_panel_close_FILL0_wght400_GRAD0_opsz24.svg");
  filter: invert(100%);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
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
    transform: "translateX(100px)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transform: "translateX(0px)",
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

// Make Button Variants
const HoverBarButtonMakeVariants = {
  expanded: {
    /*     ...commonVariants.expanded, */
    width: "120px",
    opacity: 1,
    transform: "translateX(calc(0% + -50px))",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  collapsed: {
    /*     ...commonVariants.collapsed, */
    width: "65px",
    opacity: 0.3,
    transform: "translateX(calc(0% + -15px))",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// Make Button Variants (Inner-Left Container)

const HoverBarButtonMakeMainInnerLeftContainerVariants = {
  expanded: {
    ...commonVariants.expanded,
    width: "50%",
    transform: "translateX(0px)",
  },
  collapsed: {
    ...commonVariants.collapsed,
    width: "100%",
    transform: "translateX(3px)",
  },
};

// Make Button Variants (Inner-Right Container)
const HoverBarButtonMakeMainInnerRightContainerVariants = {
  expanded: {
    ...commonVariants.expanded,
    /*     opacity: 1, */
    width: "50%",
    transform: "translateX(0%)",
  },
  collapsed: {
    ...commonVariants.collapsed,
    /*     opacity: 1, */
    width: "0%",
    transform: "translateX(0%)",
  },
};

// HoverBarButtonMainMenuLarge Variants
const HoverBarButtonMainMenuLargeVariants = {
  expanded: {
    width: "55px",
    transform: "translateX(60px)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  collapsed: {
    width: "55px",
    transform: "translateX(50px)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// HoverBarButtonThemeSmall Variants
const HoverBarButtonThemeSmallVariants = {
  expanded: {
    width: "40px",
    transform: "translateX(-140px)",
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
    transform: "translateX(-92px)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  collapsed: {
    width: "40px",
    transform: "translateX(100px)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// HoverBarButtonProfileSmall Variants
const HoverBarButtonProfileSmallVariants = {
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

const SkHoverBar: React.FC = observer(() => {
  const { isExpanded } = hoverBarStore;
  const viewportWidth = useViewportWidth();
  const showSmallButtons = viewportWidth > 670;
  const toggleTheme = () => themeStore.toggleTheme();
  const makeButtonClickHandler = isExpanded
    ? onMakeButtonClickExpanded
    : onMakeButtonClickCollapsed;

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
            <HoverBarButtonMake
              initial={isExpanded ? false : "collapsed"}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={HoverBarButtonMakeVariants}
              onClick={makeButtonClickHandler}
            >
              <HoverBarButtonMakeInnerLeftContainer
                initial={isExpanded ? false : "collapsed"}
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={HoverBarButtonMakeMainInnerLeftContainerVariants}
              >
                <HoverBarButtonMakeTextLeft></HoverBarButtonMakeTextLeft>
              </HoverBarButtonMakeInnerLeftContainer>
              <HoverBarButtonMakeInnerRightContainer
                initial={isExpanded ? false : "collapsed"}
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={HoverBarButtonMakeMainInnerRightContainerVariants}
              >
                <HoverBarButtonMakeTextRight>Make</HoverBarButtonMakeTextRight>
              </HoverBarButtonMakeInnerRightContainer>
            </HoverBarButtonMake>
            <AnimatePresence>
              {visibilityStore.isMakeCVVisible && (
                <SkMakeCV
                  isVisible={visibilityStore.isMakeCVVisible}
                  onClose={toggleMakeCV}
                />
              )}
            </AnimatePresence>
            <HoverBarButtonMainMenuLarge
              onClick={toggleToolsMenu}
              initial={isExpanded ? false : "collapsed"}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={HoverBarButtonMainMenuLargeVariants}
            >
              <HoverBarButtonMainMenuIcon></HoverBarButtonMainMenuIcon>
            </HoverBarButtonMainMenuLarge>
            {visibilityStore.isToolsMenuVisible && (
              <SkToolsMenu
                isVisible={visibilityStore.isToolsMenuVisible}
                onClose={toggleToolsMenu}
              />
            )}
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
                    <HoverBarButtonThemeIcon></HoverBarButtonThemeIcon>
                  </HoverBarButtonThemeSmall>
                  {/* Settings Button */}
                  <HoverBarButtonSettingsSmall
                    initial={isExpanded ? false : "collapsed"}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={HoverBarButtonSettingsSmallVariants}
                    onClick={toggleUserSettings}
                  >
                    <HoverBarButtonSettingsIcon></HoverBarButtonSettingsIcon>
                  </HoverBarButtonSettingsSmall>
                  {visibilityStore.isUserSettingsVisible && (
                    <SkUserSettings
                      isVisible={visibilityStore.isUserSettingsVisible}
                      onClose={toggleUserSettings}
                    />
                  )}
                  {/* Profile Button */}
                  <HoverBarButtonProfileSmall
                    onClick={toggleProfileMenu}
                    initial={isExpanded ? false : "collapsed"}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={HoverBarButtonProfileSmallVariants}
                  >
                    <HoverBarButtonProfileIcon></HoverBarButtonProfileIcon>
                  </HoverBarButtonProfileSmall>
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
              <HoverBarButtonMinimizeIcon></HoverBarButtonMinimizeIcon>
            </HoverBarButtonMinimizeSmall>
          </HoverBarButtonContainerFarRight>
        </HoverBarInnerContainerRight>
      </HoverBarOuterContainer>
    </HoverBarOuterOuterContainer>
  );
});

export default SkHoverBar;
