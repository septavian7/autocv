/* src/components/layout/SkHoverBarNew/SkHoverBarNew.tsx */

import React from "react";
import { observer } from "mobx-react-lite";

// Importing modularized components
import { HoverBarButtons } from "./components/HoverBarButtons";
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
} from "./props/HoverBarContainerAnimationProps";

// Importing state management
import { UseHoverBarState } from "./state/HoverBarState";

const SkHoverBarNew: React.FC = observer(() => {
  const { isExpanded, viewportWidth, toggleExpanded } = UseHoverBarState();

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
            <HoverBarButtons
              isExpanded={isExpanded}
              viewportWidth={viewportWidth}
              toggleExpanded={toggleExpanded}
            />
          </HoverBarButtonContainerCenterRight>
          <HoverBarButtonContainerFarRight
            {...HoverBarButtonContainerFarRightAnimationProps}
            animate={HoverBarButtonContainerFarRightAnimationProps.animate(
              isExpanded,
            )}
          >
            <HoverBarButtons
              isExpanded={isExpanded}
              toggleExpanded={toggleExpanded}
              isMobile
            />
          </HoverBarButtonContainerFarRight>
        </HoverBarInnerContainerRight>
      </HoverBarOuterContainer>
    </HoverBarOuterOuterContainer>
  );
});

export default SkHoverBarNew;
