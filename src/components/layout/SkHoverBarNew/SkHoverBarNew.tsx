/* src/components/layout/SkHoverBarNew/SkHoverBarNew.tsx */

import React from "react";
import { observer } from "mobx-react-lite";

// Importing modularized components
import {
  HoverBarButtons,
  HoverBarButtonSm,
} from "./components/HoverBarButtons";
import {
  OuterContainer,
  HoverbarContainer,
  InnerContainerRight,
  ButtonContainerCenterRight,
  ButtonContainerRight,
} from "./components/HoverBarContainers";

// Importing animation props
import {
  hoverbarContainerAnimationProps,
  innerContainerRightAnimationProps,
  buttonContainerCenterRightAnimationProps,
  buttonContainerRightAnimationProps,
} from "./props/HoverBarContainerAnimationProps";

// Importing state management
import { useHoverBarState } from "./state/HoverBarState";

const SkHoverBarNew: React.FC = observer(() => {
  const { isExpanded, viewportWidth, toggleExpanded } = useHoverBarState();

  return (
    <OuterContainer>
      <HoverbarContainer
        {...hoverbarContainerAnimationProps}
        animate={hoverbarContainerAnimationProps.animate(isExpanded)}
      >
        <InnerContainerRight
          {...innerContainerRightAnimationProps}
          animate={innerContainerRightAnimationProps.animate(isExpanded)}
        >
          <ButtonContainerCenterRight
            {...buttonContainerCenterRightAnimationProps}
            animate={buttonContainerCenterRightAnimationProps.animate(
              isExpanded,
            )}
          >
            <HoverBarButtons
              isExpanded={isExpanded}
              viewportWidth={viewportWidth}
              toggleExpanded={toggleExpanded}
            />
          </ButtonContainerCenterRight>
          <ButtonContainerRight
            {...buttonContainerRightAnimationProps}
            animate={buttonContainerRightAnimationProps.animate(isExpanded)}
          >
            <HoverBarButtonSm
              isExpanded={isExpanded}
              toggleExpanded={toggleExpanded}
            />
          </ButtonContainerRight>
        </InnerContainerRight>
      </HoverbarContainer>
    </OuterContainer>
  );
});

export default SkHoverBarNew;
