/* src/components/layout/SkHoverBar/SkHoverBar.tsx */

// Plugins/Tools
import React from "react";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { observer } from "mobx-react-lite";

// Global Stores
import { themeStore } from "../../../stores";
import { visibilityStore } from "../../../stores/SkVisibilityStore";
import { hoverBarStore } from "./stores/HoverBarStore";
import { useViewportWidth } from "../../../utils/useViewportWidth";

// HoverBar Utils
import {
  toggleHoverBarExpandMinimize,
  toggleProfileMenu,
} from "./utils/HoverBarUtils";

// Feature Windows
import { SkUserSettings } from "../../features/SkUserSettings/SkUserSettings";
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

const toggleUserSettings = () => {
  visibilityStore.toggleUserSettingsVisible();
  console.log("User Settings Function Called");
};

const toggleToolsMenu = () => {
  visibilityStore.toggleToolsMenuVisible();
  console.log("Tools Menu Function Called");
};

const toggleMakeCV = () => {
  visibilityStore.toggleMakeCVVisible();
  console.log("Make CV Function Called");
};

const onMakeButtonClickExpanded = () => {
  toggleMakeCV();
  console.log("HoverBar expanded State Function Called");
};

const onMakeButtonClickCollapsed = () => {
  toggleHoverBarExpandMinimize();
  console.log("HoverBar collapsed State Function Called");
};

/* --------- STYLES: ICONS --------- */

const StyledRam314Icon = styled(Ram314Icon)`
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  overflow: visible;
`;

const StyledSpaceDashboardIcon = styled(SpaceDashboardIcon)`
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  /*   font-size: 48px; */
`;

const StyledContrastIcon = styled(ContrastIcon)`
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  min-height: 30px;
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  min-height: 30px;
`;

const StyledProfileIcon = styled(ProfileIcon)`
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  min-height: 30px;
`;

const StyledCollapseAllIcon = styled(CollapseAllIcon)`
  position: relative;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  min-height: 20px;
  transform: rotate(90deg);
`;

/* --------- STYLES: CONTAINERS --------- */

const HoverBarOuterOuterContainer = styled(motion.div)`
  height: 120px;
  width: 100vw;
  position: fixed;
  bottom: 104px;
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
  height: 100%;
  width: 100%;
  position: center;
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0);
`;

const HoverBarInnerContainerRight = styled(motion.div)`
  height: 100%;
  position: flex-end;
  display: flex;
  align-items: center;
  overflow: visible;
`;

const HoverBarButtonContainerCenterRight = styled(motion.div)`
  height: 100%;
  /*   background-color: rgba(0, 200, 200, 0); */
  align-items: center;
  position: flex-start;
  display: flex;
  flex-wrap: wrap;
  overflow: visible;
`;

const HoverBarButtonContainerFarRight = styled(motion.div)`
  height: 100%;
  background-color: rgba(200, 200, 0, 0);
  align-items: center;
  justify-content: flex-end;
  position: flex-end;
  display: flex;
  overflow: visible;
`;

const HoverBarButtonDynamicViewportContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 52px;
`;

/* --------- STYLES: BUTTONS (COMMON) --------- */

// Base Button
const BaseHoverBarButton = styled(motion.button)`
  ${({ theme }) => `
  /* color: white; */
  position: absolute;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${theme.hoverBarButtonOutline};
  overflow: hidden;
  font-family: "Avenir", sans-serif;
  transition: filter 0.3s ease; 

  &:hover {
    transition: all 0.3s ease;
    filter: brightness(70%);
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
  border-radius: 10px;
  flex-basis: 40px;
  flex-grow: 0;
  margin: 3px;
  `}
`;

// Button Icon
const HoverBarButtonIcon = styled(motion.span)`
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
    height: 55px;
    background: ${theme.hoverBarButtonPrimaryBackground};
/*     order: 1; */
    flex-basis: 110px;
    flex-grow: 0;
    justify-content: flex-end;
    border-radius: 15px;
    border: ${theme.hoverBarButtonOutline};
    z-index: 1000;
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
  height: 70%;
  width: 55px;
  align-items: center;
  justify-content: center;
  /*   background-color: rgba(255, 255, 255, 0.9); */
`;

// Make Button (Inner-Right Container)
const HoverBarButtonMakeInnerRightContainer = styled(motion.div)`
  display: flex;
  height: 50%;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  font-size: 18px;
  margin-left: 1px;
  margin-top: 2.5px;
`;

// Make Button (Icon)
const HoverBarButtonMakeIcon = styled(HoverBarButtonIcon)`
  filter: brightness(110%);
`;

/* --------- STYLES: BUTTONS --------- */

// Main Menu Button (Large)
const HoverBarButtonMainMenuLarge = styled(LargeHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonSecondaryBackground};
/*     order: 2; */
    margin-left: 27px;
    transform: translateX(50px);
  `}
`;
const HoverBarButtonMainMenuIcon = styled(HoverBarButtonIcon)`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

// Theme Button (Small)
const HoverBarButtonThemeSmall = styled(SmallHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonSecondaryBackground};
/*     order: 4; */
    position: relative;
  `}
`;

// Settings Button (Small)
const HoverBarButtonSettingsSmall = styled(SmallHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonSecondaryBackground};
/*     order: 3; */
    position: relative;
  `}
`;

// Profile Button (Small)
const HoverBarButtonProfileSmall = styled(SmallHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonSecondaryBackground};
/*     order: 3; */
    margin-right: 14px;
    position: relative;
  `}
`;

// Minimize Button (Small)
const HoverBarButtonMinimizeSmall = styled(SmallHoverBarButton)`
  ${({ theme }) => `
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
const HoverBarInnerContainerRightVariants = {
  expanded: {
    ...commonVariants.expanded,
    width: "calc(50% + 0px)",
  },
  collapsed: {
    ...commonVariants.collapsed,
    width: "calc(0% + 60px)",
  },
};

// HoverBarButtonContainerCenterRight Variants
const HoverBarButtonContainerCenterRightVariants = {
  expanded: {
    ...commonVariants.expanded,
    width: "50%",
  },
  collapsed: {
    ...commonVariants.collapsed,
    width: "100%",
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
    width: "0%",
    transform: "translateX(280px)",
  },
};

// Make Button Variants
const HoverBarButtonMakeVariants = {
  expanded: {
    ...commonVariants.expanded,
    width: "120px",
    opacity: 1,
    transform: "translateX(-50px)",
  },
  collapsed: {
    ...commonVariants.collapsed,
    width: "55px",
    opacity: 0.4,
    transform: "translateX(calc(-15px)",
  },
};

// Make Button Variants (Inner-Right Container)
const HoverBarButtonMakeMainInnerRightContainerVariants = {
  expanded: {
    ...commonVariants.expanded,
    width: "55px",
  },
  collapsed: {
    ...commonVariants.collapsed,
    width: "0px",
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
          variants={HoverBarInnerContainerRightVariants}
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
              variants={HoverBarButtonMakeVariants}
              onClick={makeButtonClickHandler}
            >
              <HoverBarButtonMakeInnerLeftContainer
                initial={isExpanded ? false : "collapsed"}
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={commonVariants}
              >
                {/* Icon */}
                <HoverBarButtonMakeIcon>
                  <StyledRam314Icon />
                </HoverBarButtonMakeIcon>
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
            {/* Main Menu Button */}
            <HoverBarButtonMainMenuLarge
              onClick={toggleToolsMenu}
              initial={isExpanded ? false : "collapsed"}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={commonVariants}
            >
              {/* Icon */}
              <HoverBarButtonMainMenuIcon>
                <StyledSpaceDashboardIcon />
              </HoverBarButtonMainMenuIcon>
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
                <HoverBarButtonDynamicViewportContainer
                  initial="visible"
                  animate="visible"
                  exit="hidden"
                  variants={buttonDynamicViewportVariants}
                >
                  {/* Theme Button */}
                  <HoverBarButtonThemeSmall
                    initial={isExpanded ? false : "collapsed"}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={commonVariants}
                    onClick={toggleTheme}
                  >
                    {/* Icon */}
                    <HoverBarButtonIcon>
                      <StyledContrastIcon />
                    </HoverBarButtonIcon>
                  </HoverBarButtonThemeSmall>
                  {/* Settings Button */}
                  <HoverBarButtonSettingsSmall
                    initial={isExpanded ? false : "collapsed"}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={commonVariants}
                    onClick={toggleUserSettings}
                  >
                    {/* Icon */}
                    <HoverBarButtonIcon>
                      <StyledSettingsIcon />
                    </HoverBarButtonIcon>
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
                    variants={commonVariants}
                  >
                    {/* Icon */}
                    <HoverBarButtonIcon>
                      <StyledProfileIcon />
                    </HoverBarButtonIcon>
                  </HoverBarButtonProfileSmall>
                </HoverBarButtonDynamicViewportContainer>
              )}
            </AnimatePresence>
            {/* Minimize Button (Always visible) */}
            <HoverBarButtonMinimizeSmall
              onClick={toggleHoverBarExpandMinimize}
              initial={isExpanded ? false : "collapsed"}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={commonVariants}
            >
              {/* Icon */}
              <HoverBarButtonIcon>
                <StyledCollapseAllIcon />
              </HoverBarButtonIcon>
            </HoverBarButtonMinimizeSmall>
          </HoverBarButtonContainerFarRight>
        </HoverBarInnerContainerRight>
      </HoverBarOuterContainer>
    </HoverBarOuterOuterContainer>
  );
});

export default SkHoverBar;
