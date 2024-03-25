/* src/components/layout/SkHoverBar/SkHoverBar.tsx */

import React from "react";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { themeStore } from "../../../stores";
import { visibilityStore } from "../../../stores/SkVisibilityStore";
import { hoverBarStore } from "./stores/HoverBarStore";
import { useViewportWidth } from "../../../utils/useViewportWidth";
import {
  toggleHoverBarExpandMinimize,
  toggleProfileMenu,
  /*   toggleMakeMenu,
  toggleMainMenu,
  toggleSettingsMenu, */
  /*   toggleTheme, */
} from "./utils/HoverBarUtils";
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

/* --------- STYLES: ICONS --------- */

const StyledRam314Icon = styled(Ram314Icon)`
  position: absolute;
  align-items: center;
  justify-content: center;
  transform: scale(0.07) translateX(20px);
`;

const StyledSpaceDashboardIcon = styled(SpaceDashboardIcon)`
  position: relative;
  align-items: center;
  justify-content: center;
  transform: scale(1.8) translateX(0px) translateY(7.5px);
`;

const StyledContrastIcon = styled(ContrastIcon)`
  position: relative;
  align-items: center;
  justify-content: center;
  transform: scale(1.2) translateX(0px) translateY(5.5px);
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  position: relative;
  align-items: center;
  justify-content: center;
  transform: scale(1.2) translateX(0px) translateY(5.5px);
`;

const StyledProfileIcon = styled(ProfileIcon)`
  position: relative;
  align-items: center;
  justify-content: center;
  transform: scale(1.2) translateX(0px) translateY(5.5px);
`;

const StyledCollapseAllIcon = styled(CollapseAllIcon)`
  position: relative;
  align-items: center;
  justify-content: center;
  transform: scale(1) translateX(-1px) translateY(2.5px);
`;

/* --------- STYLES: CONTAINERS --------- */

const HoverBarOuterOuterContainer = styled(motion.div)`
  height: 120px;
  width: 100vw;
  position: fixed;
  bottom: 104px;
/*   left: 50%; */
/*   transform: translateX(-50%); */
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
  position: center;
  display: flex;
  /*   background-color: #808080; */
  border-radius: 10px;
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
  position: flex-start;
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
  position: flex-end;
  display: flex;
  overflow: visible;
  /*   z-index: 1100; */
`;

const HoverBarButtonSmallContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /*   position: flex-end; */
  margin-right: 52px;
  /*   gap: 8px; // Adjust the gap as needed */
  // Other styles to control positioning, like align-items, justify-content, etc.
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
  /*   z-index: 900; */
  overflow: hidden;
  /*   transition: filter 0.3s ease; */
  font-family: "Avenir", sans-serif;

  &:hover {
    transition: all 0.3s ease;
    /*     scale: 0.98; */
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
  z-index: 1200;
  `}
`;

// Large Button Text
/* const LargeHoverBarButtonText = styled(motion.span)`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 15px;
`; */

// Small Button
const SmallHoverBarButton = styled(BaseHoverBarButton)`
  ${({ theme }) => `
  height: 40px;
  width: 40px;
  display: flex;
  border-radius: 10px;
  flex-basis: 40px;
  flex-grow: 0;
/*   font-size: 16px; */
  margin: 3px;
  /*   z-index: 1200; */
  `}
`;

// Button Icon
const HoverBarButtonIcon = styled(motion.span)`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  filter: invert(100%);
`;

// Small Button Text
/* const SmallHoverBarButtonText = styled(motion.span)`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2px 5px;
`; */

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
  height: 70%;
  align-items: center;
  justify-content: center;
  /*   background-color: rgba(255, 255, 255, 0.9); */
  /*   background-image: url("/assets/icons/buttonicons/ram314_blue_stencil-gray.svg");
  filter: brightness(110%);
  background-size: 100% 100%;
  background-position: center; */
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
  margin-left: 1px;
  margin-top: 2.5px;
  /*   padding: 10px 15px; */
  /*   margin-right: 20px; */
`;

/* --------- STYLES: BUTTONS --------- */

// Main Menu Button (Large)
const HoverBarButtonMainMenuLarge = styled(LargeHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonSecondaryBackground};
/*     order: 2; */
    margin-left: 17px;
    transform: translateX(50px);
  `}
`;
const HoverBarButtonMainMenuIcon = styled(HoverBarButtonIcon)`
  /*   width: 90%;
  height: 90%; */
  /*   background-image: url("/assets/icons/buttonicons/space_dashboard_FILL0_wght400_GRAD0_opsz24.svg");
 */ /*   filter: invert(100%);
  background-size: cover;
  background-position: center; */
`;

// Settings Button (Large)
/* const HoverBarButtonSettingsLarge = styled(LargeHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonSecondaryBackground};
    order: 3;
    margin: 18px;
  `}
`; */

// Theme Button (Small)
const HoverBarButtonThemeSmall = styled(SmallHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonSecondaryBackground};
/*     order: 4; */
/*     margin-right: 14px; */
    position: relative;
  `}
`;
const HoverBarButtonThemeIcon = styled(HoverBarButtonIcon)`
  /*   width: 100%;
  height: 100%; */
/*   background-image: url("/assets/icons/buttonicons/contrast_FILL0_wght400_GRAD0_opsz24.svg");
 */  /*   filter: invert(100%);
/*   background-size: contain;
  background-position: center;
  background-repeat: no-repeat; */ */
`;

// Settings Button (Small)
const HoverBarButtonSettingsSmall = styled(SmallHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonSecondaryBackground};
/*     order: 3; */
/*     margin-right: 14px; */
    position: relative;
  `}
`;
const HoverBarButtonSettingsIcon = styled(HoverBarButtonIcon)`
  /*   width: 100%;
  height: 100%; */
  /*   background-image: url("/assets/icons/buttonicons/settings_FILL0_wght400_GRAD0_opsz24.svg");
 */ /*   filter: invert(100%);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; */
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
const HoverBarButtonProfileIcon = styled(HoverBarButtonIcon)`
  /*   width: 100%;
  height: 100%; */
  /*   background-image: url("/assets/icons/buttonicons/account_circle_FILL0_wght400_GRAD0_opsz24.svg");
 */ /*   filter: invert(100%);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; */
`;
// Minimize Button (Small)
const HoverBarButtonMinimizeSmall = styled(SmallHoverBarButton)`
  ${({ theme }) => `
    background: ${theme.hoverBarButtonPrimaryBackground};
/*     order: 0; */
    margin-right: 20px;
/*     position: flex-end; */
  `}
`;
const HoverBarButtonMinimizeIcon = styled(HoverBarButtonIcon)`
  width: 80%;
  height: 80%;
  /*   background-image: url("/assets/icons/buttonicons/collapse_all_FILL0_wght400_GRAD0_opsz24.svg");
 */ /*   filter: invert(100%);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; */
  transform: rotate(90deg);
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
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transform: "translateX(0px)",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

// HoverBarButtonContainerCenterRight Variants
const HoverBarButtonContainerCenterRightVariants = {
  expanded: {
    ...commonVariants.expanded,
    width: "calc(50% + 0px)",
  },
  collapsed: {
    ...commonVariants.collapsed,
    width: "calc(100% + 0px)",
  },
};
// HoverBarButtonContainerFarRight Variants
const HoverBarButtonContainerFarRightVariants = {
  expanded: {
    ...commonVariants.expanded,
    width: "calc(50% + 0px)",
    transform: "translateX(0px)",
  },
  collapsed: {
    ...commonVariants.collapsed,
    width: "calc(0% + 0px)",
    transform: "translateX(200px)",
  },
};

// Make Button Variants
const HoverBarButtonMakeVariants = {
  expanded: {
    /*     ...commonVariants.expanded, */
    width: "110px",
    opacity: 1,
    transform: "translateX(-50px)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  collapsed: {
    /*     ...commonVariants.collapsed, */
    width: "55px",
    opacity: 0.3,
    transform: "translateX(calc(-15px)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// Make Button Variants (Inner-Left Container)
const HoverBarButtonMakeMainInnerLeftContainerVariants = {
  expanded: {
    ...commonVariants.expanded,
    width: "50%",
    /*     transform: "translateX(0px)", */
  },
  collapsed: {
    ...commonVariants.collapsed,
    width: "100%",
    /*     transform: "translateX(3px)", */
  },
};

// Make Button Variants (Inner-Right Container)
const HoverBarButtonMakeMainInnerRightContainerVariants = {
  expanded: {
    ...commonVariants.expanded,
    width: "50%",
    /*     opacity: 1, */
    /*     transform: "translateX(0%)", */
  },
  collapsed: {
    ...commonVariants.collapsed,
    width: "0%",
    /*     opacity: 1, */
    /*     transform: "translateX(0%)", */
  },
};

// HoverBarButtonMainMenuLarge Variants
/* const HoverBarButtonMainMenuLargeVariants = {
  expanded: {
    ...commonVariants.expanded, */
/*     width: "55px", */
/*     transform: "translateX(50px)", */
/*     transition: { duration: 0.5, ease: "easeInOut" }, */
/*   },
  collapsed: {
    ...commonVariants.collapsed, */
/*     width: "55px", */
/*     transform: "translateX(50px)", */
/*     transition: { duration: 0.5, ease: "easeInOut" },
  },
}; */

// HoverBarButtonThemeSmall Variants
/* const HoverBarButtonThemeSmallVariants = {
  expanded: {
    ...commonVariants.expanded, */
/*     width: "40px", */
/*     transform: "translateX(-140px)", */
/*     transition: { duration: 0.5, ease: "easeInOut" }, */
/*   },
  collapsed: {
    ...commonVariants.collapsed, */
/*     width: "40px", */
/*     transform: "translateX(100px)", */
/*     transition: { duration: 0.5, ease: "easeInOut" }, */
/*   },
}; */

// HoverBarButtonSettingsSmall Variants
/* const HoverBarButtonSettingsSmallVariants = {
  expanded: {
    ...commonVariants.expanded, */
/*     width: "40px", */
/*     transform: "translateX(-92px)", */
/*     transition: { duration: 0.5, ease: "easeInOut" }, */
/*   },
  collapsed: {
    ...commonVariants.collapsed, */
/*     width: "40px", */
/*     transform: "translateX(100px)", */
/*     transition: { duration: 0.5, ease: "easeInOut" }, */
/*   },
}; */

// HoverBarButtonProfileSmall Variants
/* const HoverBarButtonProfileSmallVariants = {
  expanded: {
    ...commonVariants.expanded, */
/*     width: "40px", */
/*     transform: "translateX(-44px)", */
/*     transition: { duration: 0.5, ease: "easeInOut" }, */
/*   }, */
/*   collapsed: {
    ...commonVariants.collapsed, */
/*     width: "40px", */
/*     transform: "translateX(100px)", */
/*     transition: { duration: 0.5, ease: "easeInOut" }, */
/*   },
}; */

// HoverBarButtonMinimizeSmall Variants
/* const HoverBarButtonMinimizeSmallVariants = {
  expanded: {
    ...commonVariants.expanded, */
/*     width: "40px", */
/*     transform: "translateX(10px)", */
/*     transition: { duration: 0.5, ease: "easeInOut" }, */
/*   },
  collapsed: {
    ...commonVariants.collapsed, */
/*     width: "40px", */
/*     transform: "translateX(100px)", */
/*     transition: { duration: 0.5, ease: "easeInOut" }, */
/*   },
}; */

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
        transition={{ duration: 0.5, ease: "easeInOut" }}
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
                {/* Icon */}
                <StyledRam314Icon />
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
              variants={commonVariants}
              /*               variants={HoverBarButtonMainMenuLargeVariants} */
            >
              <HoverBarButtonMainMenuIcon>
                {/* Icon */}
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
                <HoverBarButtonSmallContainer
                  initial="visible"
                  animate="visible"
                  exit="hidden"
                  variants={buttonVisibilityVariants}
                >
                  {/* Theme Button */}
                  <HoverBarButtonThemeSmall
                    initial={isExpanded ? false : "collapsed"}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    /*                     variants={HoverBarButtonThemeSmallVariants} */
                    variants={commonVariants}
                    onClick={toggleTheme}
                  >
                    <HoverBarButtonThemeIcon>
                      {/* Icon */}
                      <StyledContrastIcon />
                    </HoverBarButtonThemeIcon>
                  </HoverBarButtonThemeSmall>
                  {/* Settings Button */}
                  <HoverBarButtonSettingsSmall
                    initial={isExpanded ? false : "collapsed"}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    /*                     variants={HoverBarButtonSettingsSmallVariants} */
                    variants={commonVariants}
                    onClick={toggleUserSettings}
                  >
                    <HoverBarButtonSettingsIcon>
                      {/* Icon */}
                      <StyledSettingsIcon />
                    </HoverBarButtonSettingsIcon>
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
                    /*                     variants={HoverBarButtonProfileSmallVariants} */
                  >
                    <HoverBarButtonProfileIcon>
                      {/* Icon */}
                      <StyledProfileIcon />
                    </HoverBarButtonProfileIcon>
                  </HoverBarButtonProfileSmall>
                </HoverBarButtonSmallContainer>
              )}
            </AnimatePresence>
            {/* Minimize Button (Always visible) */}
            <HoverBarButtonMinimizeSmall
              onClick={toggleHoverBarExpandMinimize}
              initial={isExpanded ? false : "collapsed"}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={commonVariants}
              /*               variants={HoverBarButtonMinimizeSmallVariants} */
            >
              <HoverBarButtonMinimizeIcon>
                {/* Icon */}
                <StyledCollapseAllIcon />
              </HoverBarButtonMinimizeIcon>
            </HoverBarButtonMinimizeSmall>
          </HoverBarButtonContainerFarRight>
        </HoverBarInnerContainerRight>
      </HoverBarOuterContainer>
    </HoverBarOuterOuterContainer>
  );
});

export default SkHoverBar;
