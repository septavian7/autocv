/* src/components/layout/SkHoverBar/SkHoverBar.tsx */

// Plugins/Tools
import React, { useState } from "react";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { observer } from "mobx-react-lite";

// Global Stores
import { themeStore } from "../../../stores";
import { visibilityStore } from "../../../stores/SkVisibilityStore";
import { hoverBarStore } from "./stores/HoverBarStore";
import { useViewportWidth } from "../../../utils/useViewportWidth";

// Feature Windows
import { SkUserSettings } from "../../features/SkUserSettings/SkUserSettings";
import { SkUserLogin } from "../../features/SkUserLogin/SkUserLogin";
import { SkToolsMenu } from "../../features/SkToolsMenu/SkToolsMenu";
import { SkMakeCV } from "../../features/SkMakeCV/SkMakeCV";

// Icons
import { ReactComponent as Ram314Icon } from "../../../assets/icons/buttonicons/ram314_blue_stencil-gray.svg";
import { ReactComponent as SpaceDashboardIcon } from "../../../assets/icons/buttonicons/space_dashboard_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as ContrastIcon } from "../../../assets/icons/buttonicons/contrast_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/icons/buttonicons/settings_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/buttonicons/account_circle_FILL0_wght400_GRAD0_opsz24.svg";
import { ReactComponent as CollapseAllIcon } from "../../../assets/icons/buttonicons/collapse_all_FILL0_wght400_GRAD0_opsz24.svg";

/* --------- FUNCTIONS: ONCLICK LOGIC --------- */

// Toggle MakeCV
const toggleMakeWindow = () => {
  visibilityStore.toggleMakeCVVisible();
  console.log("Toggle Make Window Function Called");
};

// Toggle Main Menu
const toggleMainMenu = () => {
  visibilityStore.toggleToolsMenuVisible();
  console.log("Toggle Main Menu Function Called");
};

// Toggle Theme
const toggleTheme = () => themeStore.toggleTheme();

// Toggle User Settings
const toggleUserSettingsWindow = () => {
  visibilityStore.toggleUserSettingsVisible();
  console.log("Toggle User Settings Window Function Called");
};

// Toggle User Login
const toggleUserLoginWindow = () => {
  visibilityStore.toggleUserLoginVisible();
  console.log("Toggle User Login Window Function Called");
};

/* --------- STYLES: ICONS --------- */

const MakeButtonIcon = styled(Ram314Icon)`
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  overflow: visible;
`;

const MainMenuButtonIcon = styled(SpaceDashboardIcon)`
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 34px;
  min-height: 34px;
  /*   font-size: 48px; */
`;

const ThemeButtonIcon = styled(ContrastIcon)`
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  min-height: 30px;
`;

const SettingsButtonIcon = styled(SettingsIcon)`
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  min-height: 30px;
`;

const ProfileButtonIcon = styled(ProfileIcon)`
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  min-height: 30px;
`;

const CollapseButtonIcon = styled(CollapseAllIcon)`
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  min-height: 20px;
  /*   margin-left: 13px; */
  transform: rotate(90deg);
`;

const ExpandButtonIcon = styled(Ram314Icon)`
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 26px;
  min-height: 26px;
  /*   margin-right: 13px; */
  filter: invert(100%) brightness(110%);
`;

/* --------- STYLES: CONTAINERS --------- */

const HoverBarCommonContainer = styled(motion.div)`
  display: flex;
  overflow: visible;
  align-items: center;
`;

const HoverBarOuterOuterContainer = styled(HoverBarCommonContainer)`
  height: 110px;
  width: 100vw;
  position: fixed;
  bottom: 104px;
  justify-content: flex-end;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  filter: backdrop-filter: blur(10px);
`;

const HoverBarOuterContainer = styled(HoverBarCommonContainer)`
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
`;

const HoverBarInnerContainerRight = styled(HoverBarCommonContainer)`
  height: 100%;
  position: flex-end;
`;

const HoverBarButtonContainerCenterRight = styled(HoverBarCommonContainer)`
  position: flex-start;
  height: 55px;
  justify-content: flex-start;
  flex-wrap: wrap;
  /*   z-index: 1000; */
  /*   background-color: rgba(0, 200, 200, 0.3); */
`;

const HoverBarButtonContainerFarRight = styled(HoverBarCommonContainer)`
  position: flex-end;
  height: 55px;
  justify-content: flex-end;
  /*   background-color: rgba(200, 200, 0, 0.6); */
`;

const HoverBarButtonDynamicViewportContainer = styled(HoverBarCommonContainer)`
  position: flex-end;
  justify-content: flex-end;
  margin-right: 54px;
  display: flex;
`;
/* --------- STYLES: BUTTONS (COMMON) --------- */

// Base Button
const BaseHoverBarButton = styled(motion.button)`
  ${({ theme }) => `
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: white; */
  cursor: pointer;
  border: ${theme.hoverBarButtonOutline};
  overflow: hidden;
  font-family: "Avenir", sans-serif;
  transition: filter 0.3s ease; 

  @media (hover: hover) {
    &:hover {
      transition: all 0.3s ease;
      filter: brightness(70%);
    }
  }
  `}
`;

// Large Button
const LargeHoverBarButton = styled(BaseHoverBarButton)`
  ${({ theme }) => `
  height: 55px;
  width: 55px;
  border-radius: 15px;
  font-size: 16px;
  flex-basis: 55px;
  flex-grow: 0;
  `}
`;

// Small Button
const SmallHoverBarButton = styled(BaseHoverBarButton)`
  ${({ theme }) => `
  height: 40px;
  width: 40px;
  display: flex;
  border-radius: 12px;
  flex-basis: 40px;
  flex-grow: 0;
  margin: 3px;
  `}
`;

// Button Icon Container
const HoverBarButtonIconContainer = styled(motion.span)`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  filter: invert(100%);
`;

/* --------- STYLES: MAKE BUTTON --------- */

// Make Button
const HoverBarButtonMake = styled(BaseHoverBarButton)`
  ${({ theme }) => `
    display: flex;
    width: 114px;
/*     flex-basis: 110px; */
/*     flex-grow: 0; */
    height: 55px;
    background: ${theme.hoverBarButtonPrimaryBackground};
/*     order: 1; */
    justify-content: space-evenly;
    border-radius: 18px;
    border: ${theme.hoverBarButtonOutline};
    transform: translateX(-55px);
  `}
`;

// Make Button (Text Right)
const HoverBarButtonMakeTextRight = styled(motion.span)`
  display: flex;
  color: white;
`;

// Make Button (Inner-Left Container)
const HoverBarButtonMakeInnerLeftContainer = styled(motion.div)`
  display: flex;
  width: 45px;
  align-items: center;
  justify-content: flex-start;
  /*   background-color: rgba(255, 255, 255, 0.9); */
  /*   transform: translateX(-2px); */
`;

// Make Button (Inner-Right Container)
const HoverBarButtonMakeInnerRightContainer = styled(motion.div)`
  display: flex;
  width: 45px;
  align-items: center;
  justify-content: flex-end;
  overflow: visible;
  font-size: 18px;
  margin-top: 2px;
  margin-left: 3px;
  /*   transform: translateX(2px); */
`;

// Make Button (Icon)
const HoverBarButtonMakeIcon = styled(HoverBarButtonIconContainer)`
  filter: brightness(110%);
`;

/* --------- STYLES: BUTTONS --------- */

// Main Menu Button (Large)
const HoverBarButtonMainMenu = styled(SmallHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonSecondaryBackground};
/*     order: 2; */
    transform: translateX(62px);
  `}
`;

// Theme Button
const HoverBarButtonTheme = styled(SmallHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonSecondaryBackground};
/*     order: 4; */
    position: relative;
  `}
`;

// Settings Button
const HoverBarButtonSettings = styled(SmallHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonSecondaryBackground};
/*     order: 3; */
    position: relative;
  `}
`;

// Profile Button
const HoverBarButtonProfile = styled(SmallHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonSecondaryBackground};
/*     order: 3; */
    margin-right: 14px;
    position: relative;
  `}
`;

// Expand/Collapse Button
const HoverBarButtonExpandCollapse = styled(SmallHoverBarButton)`
  ${({ theme }) => `
  position: fixed;
  display: flex-end;
    background: ${theme.hoverBarButtonPrimaryBackground};
/*     order: 0; */
    margin-right: 20px;
  `}
`;

/* --------- STYLES: FRAMER-MOTION --------- */

// Common Variants
const commonVariants = {
  expanded: { transition: { duration: 0.5, ease: "easeInOut" } },
  collapsed: { transition: { duration: 0.5, ease: "easeInOut" } },
};

// Dynamic Viewport Visibility Variants
const buttonDynamicViewportVariants = {
  visible: {
    ...commonVariants.expanded,
    opacity: 1,
    transform: "translateX(0px)",
  },
  hidden: {
    ...commonVariants.collapsed,
    opacity: 0,
    transform: "translateX(200px)",
  },
};

// HoverBarInnerContainerRight Variants
const HoverBarContainerInnerRightVariants = {
  expanded: {
    ...commonVariants.expanded,
    width: "50%",
  },
  collapsed: {
    ...commonVariants.collapsed,
    width: "0%",
  },
};

// HoverBarButtonContainerCenterRight Variants
const HoverBarButtonContainerCenterRightVariants = {
  expanded: {
    ...commonVariants.expanded,
    width: "50%",
    transform: "translateX(0px)",
  },
  collapsed: {
    ...commonVariants.collapsed,
    width: "0%",
    transform: "translateX(240px)",
  },
};

// HoverBarButtonContainerFarRight Variants
const HoverBarButtonContainerFarRightVariants = {
  expanded: {
    ...commonVariants.expanded,
    width: "50%",
    transform: "translateX(0px)",
  },
  collapsed: {
    ...commonVariants.collapsed,
    width: "50%",
    transform: "translateX(240px)",
  },
};

// Expand/Collapse Button Variants
const HoverBarButtonExpandCollapseVariants = {
  expanded: {
    ...commonVariants.expanded,
    /*     transform: "scale(1)", */
    opacity: 1,
  },
  collapsed: {
    ...commonVariants.collapsed,
    /*     transform: "scale(1.4)", */
    opacity: 0.4,
  },
};

// Collapse Icon Variants
const HoverBarCollapseIconVariants = {
  expanded: {
    display: "flex",
    /*     opacity: 1, */
    /*     ...commonVariants.expanded, */
  },
  collapsed: {
    display: "none",
    /*     opacity: 0, */
    /*     ...commonVariants.collapsed, */
  },
};

// Expand Icon Variants
const HoverBarExpandIconVariants = {
  expanded: {
    display: "none",
    /*     ...commonVariants.expanded, */
    /*     opacity: 0, */
  },
  collapsed: {
    display: "flex",
    /*     ...commonVariants.collapsed, */
    /*     opacity: 1, */
  },
};

/* --------- COMPONENT --------- */

const SkHoverBar: React.FC = observer(() => {
  /* const { isExpanded } = hoverBarStore; */
  const viewportWidth = useViewportWidth();
  const showSmallButtons = viewportWidth > 670;
  const { isExpanded } = hoverBarStore;

  return (
    <HoverBarOuterOuterContainer>
      <HoverBarOuterContainer
        initial={isExpanded ? false : "collapsed"}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={commonVariants}
      >
        <HoverBarInnerContainerRight
          initial={isExpanded ? false : "collapsed"}
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={HoverBarContainerInnerRightVariants}
        >
          <HoverBarButtonContainerCenterRight
            initial={isExpanded ? false : "collapsed"}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={HoverBarButtonContainerCenterRightVariants}
          >
            {/* Make Button */}
            <HoverBarButtonMake
              initial={isExpanded ? false : "collapsed"}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={commonVariants}
              onClick={toggleMakeWindow}
            >
              <HoverBarButtonMakeInnerLeftContainer
                initial={isExpanded ? false : "collapsed"}
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={commonVariants}
              >
                {/* Icon */}
                <HoverBarButtonMakeIcon>
                  <MakeButtonIcon />
                </HoverBarButtonMakeIcon>
              </HoverBarButtonMakeInnerLeftContainer>
              <HoverBarButtonMakeInnerRightContainer
                initial={isExpanded ? false : "collapsed"}
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={commonVariants}
              >
                <HoverBarButtonMakeTextRight>Make</HoverBarButtonMakeTextRight>
              </HoverBarButtonMakeInnerRightContainer>
            </HoverBarButtonMake>
            <AnimatePresence>
              {visibilityStore.isMakeCVVisible && (
                <SkMakeCV
                  isVisible={visibilityStore.isMakeCVVisible}
                  onClose={toggleMakeWindow}
                />
              )}
            </AnimatePresence>
            {/* Main Menu Button */}
            <HoverBarButtonMainMenu
              initial={isExpanded ? false : "collapsed"}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={commonVariants}
              onClick={toggleMainMenu}
            >
              {/* Icon */}
              <HoverBarButtonIconContainer>
                <MainMenuButtonIcon />
              </HoverBarButtonIconContainer>
            </HoverBarButtonMainMenu>
            {visibilityStore.isToolsMenuVisible && (
              <SkToolsMenu
                isVisible={visibilityStore.isToolsMenuVisible}
                onClose={toggleMainMenu}
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
                <HoverBarButtonDynamicViewportContainer
                  initial="visible"
                  animate="visible"
                  exit="hidden"
                  variants={buttonDynamicViewportVariants}
                >
                  {/* Theme Button */}
                  <HoverBarButtonTheme
                    initial={isExpanded ? false : "collapsed"}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={commonVariants}
                    onClick={toggleTheme}
                  >
                    {/* Icon */}
                    <HoverBarButtonIconContainer>
                      <ThemeButtonIcon />
                    </HoverBarButtonIconContainer>
                  </HoverBarButtonTheme>
                  {/* Settings Button */}
                  <HoverBarButtonSettings
                    initial={isExpanded ? false : "collapsed"}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={commonVariants}
                    onClick={toggleUserSettingsWindow}
                  >
                    {/* Icon */}
                    <HoverBarButtonIconContainer>
                      <SettingsButtonIcon />
                    </HoverBarButtonIconContainer>
                  </HoverBarButtonSettings>
                  {visibilityStore.isUserSettingsVisible && (
                    <SkUserSettings
                      isVisible={visibilityStore.isUserSettingsVisible}
                      onClose={toggleUserSettingsWindow}
                    />
                  )}
                  {/* Profile Button */}
                  <HoverBarButtonProfile
                    initial={isExpanded ? false : "collapsed"}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={commonVariants}
                    onClick={toggleUserLoginWindow}
                  >
                    {/* Icon */}
                    <HoverBarButtonIconContainer>
                      <ProfileButtonIcon />
                    </HoverBarButtonIconContainer>
                  </HoverBarButtonProfile>
                  {visibilityStore.isUserLoginVisible && (
                    <SkUserLogin
                      isVisible={visibilityStore.isUserLoginVisible}
                      onClose={toggleUserLoginWindow}
                    />
                  )}
                </HoverBarButtonDynamicViewportContainer>
              )}
            </AnimatePresence>
          </HoverBarButtonContainerFarRight>
        </HoverBarInnerContainerRight>
        {/* Minimize Button (Visible when expanded) */}
        <HoverBarButtonExpandCollapse
          onClick={hoverBarStore.toggleExpandMinimize}
        >
          {/* Conditional rendering based on `isExpanded` state from the store */}
          {isExpanded ? (
            <HoverBarButtonIconContainer>
              <CollapseButtonIcon />
            </HoverBarButtonIconContainer>
          ) : (
            <HoverBarButtonIconContainer>
              <ExpandButtonIcon />
            </HoverBarButtonIconContainer>
          )}
        </HoverBarButtonExpandCollapse>
      </HoverBarOuterContainer>
    </HoverBarOuterOuterContainer>
  );
});

export default SkHoverBar;

// HoverBarButtonExpandCollapseVariants
