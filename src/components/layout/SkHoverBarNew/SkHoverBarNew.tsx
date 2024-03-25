/* src/components/layout/SkHoverBarNew/SkHoverBarNew.tsx */

import React from "react";
import { observer } from "mobx-react-lite";
import { hoverBarStore } from "./stores/HoverBarStore";

// Importing modularized components
// import { HoverBarButtons } from "./components/HoverBarButtons";
import {
  MainButton,
  LargeButton,
  SmallButton,
} from "./components/HoverBarButtons";
import {
  HoverBarOuterOuterContainer,
  HoverBarOuterContainer,
  HoverBarInnerContainerRight,
  HoverBarButtonContainerCenterRight,
  HoverBarButtonContainerFarRight,
} from "./components/HoverBarContainers";

// Importing animation props
import {
  HoverBarContainerAnimationProps,
  HoverBarInnerContainerRightAnimationProps,
  HoverBarButtonContainerCenterRightAnimationProps,
  HoverBarButtonContainerFarRightAnimationProps,
} from "./animations/HoverBarContainerAnimations";

// Importing state management
import { UseHoverBarState } from "./state/HoverBarState";

const SkHoverBarNew: React.FC = observer(() => {
  const { viewportWidth, toggleExpanded } = UseHoverBarState();
  const { isExpanded } = hoverBarStore;

  return (
    <HoverBarOuterOuterContainer>
      <HoverBarOuterContainer
        {...HoverBarContainerAnimationProps}
        animate={HoverBarContainerAnimationProps.animate(isExpanded)}
      >
        <HoverBarInnerContainerRight
          {...HoverBarInnerContainerRightAnimationProps}
          animate={HoverBarInnerContainerRightAnimationProps.animate(
            isExpanded,
          )}
        >
          <HoverBarButtonContainerCenterRight
            {...HoverBarButtonContainerCenterRightAnimationProps}
            animate={HoverBarButtonContainerCenterRightAnimationProps.animate(
              isExpanded,
            )}
          >
            {/* <HoverBarButtons
              isExpanded={isExpanded}
              viewportWidth={viewportWidth}
              setIsExpanded={toggleExpanded}
            /> */}
            <MainButton
              isExpanded={isExpanded}
              toggleExpanded={toggleExpanded}
            />
            <LargeButton
              isExpanded={isExpanded}
              viewportWidth={viewportWidth}
              buttonType="menu"
            />
            <LargeButton
              isExpanded={isExpanded}
              viewportWidth={viewportWidth}
              buttonType="settings"
            />
          </HoverBarButtonContainerCenterRight>
          <HoverBarButtonContainerFarRight
            {...HoverBarButtonContainerFarRightAnimationProps}
            animate={HoverBarButtonContainerFarRightAnimationProps.animate(
              isExpanded,
            )}
          >
            {/* <HoverBarButtons
              isExpanded={isExpanded}
              setIsExpanded={toggleExpanded}
              isMobile
            /> */}
            <SmallButton
              isExpanded={isExpanded}
              buttonType="theme"
              viewportWidth={viewportWidth}
            />
            <SmallButton isExpanded={isExpanded} buttonType="minimize" />
          </HoverBarButtonContainerFarRight>
        </HoverBarInnerContainerRight>
      </HoverBarOuterContainer>
    </HoverBarOuterOuterContainer>
  );
});

export default SkHoverBarNew;
