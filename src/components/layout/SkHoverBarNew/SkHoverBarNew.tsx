/* src/components/layout/SkHoverBarNew/SkHoverBarNew.tsx */

import React from "react";
import { observer } from "mobx-react-lite";

// Importing modularized components
import {
  ToggleButton,
  ToggleButtonText,
} from "./components/HoverBarButtonMain";
import { MenuButton, MenuButtonText } from "./components/HoverBarButtonMenu";
import {
  ToggleButtonSm,
  ToggleButtonSmText,
} from "./components/HoverBarButtonMinimize";
import { HoverBarButtonSettingsAnimated } from "./components/HoverBarButtonSettingsAnimated";
import {
  OuterContainer,
  HoverbarContainer,
  InnerContainerRight,
  ButtonContainerCenterRight,
  ButtonContainerRight,
} from "./components/HoverBarContainers";

// Importing animation configurations
import { hoverBarContainerAnimations } from "./animations/HoverBarContainerAnimations";
import { hoverbarButtonAnimations } from "./animations/HoverBarButtonAnimations";

// Importing state management
import { useHoverBarState } from "./HoverBarState";

const SkHoverBarNew: React.FC = observer(() => {
  const { isExpanded, viewportWidth, toggleExpanded } = useHoverBarState();

  return (
    <OuterContainer>
      <HoverbarContainer
        initial={hoverBarContainerAnimations.initial}
        animate={hoverBarContainerAnimations.animate(isExpanded)}
        transition={hoverBarContainerAnimations.transition}
      >
        <InnerContainerRight
          initial={hoverBarContainerAnimations.innerContainerRight.initial}
          animate={hoverBarContainerAnimations.innerContainerRight.animate(
            isExpanded,
          )}
          transition={
            hoverBarContainerAnimations.innerContainerRight.transition
          }
        >
          <ButtonContainerCenterRight
            initial={
              hoverBarContainerAnimations.buttonContainerCenterRight.initial
            }
            animate={hoverBarContainerAnimations.buttonContainerCenterRight.animate(
              isExpanded,
            )}
            transition={
              hoverBarContainerAnimations.buttonContainerCenterRight.transition
            }
          >
            <ToggleButton
              onClick={toggleExpanded}
              initial={hoverbarButtonAnimations.toggleButton.initial}
              animate={hoverbarButtonAnimations.toggleButton.animate(
                isExpanded,
              )}
              transition={hoverbarButtonAnimations.toggleButton.transition}
              $isExpanded={isExpanded}
            >
              <ToggleButtonText>X</ToggleButtonText>
            </ToggleButton>
            <MenuButton
              onClick={toggleExpanded}
              initial={hoverbarButtonAnimations.menuButton.initial}
              animate={hoverbarButtonAnimations.menuButton.animate(isExpanded)}
              transition={hoverbarButtonAnimations.menuButton.transition}
              $isExpanded={isExpanded}
            >
              <MenuButtonText>M</MenuButtonText>
            </MenuButton>
            <HoverBarButtonSettingsAnimated
              isExpanded={isExpanded}
              viewportWidth={viewportWidth}
              toggleExpanded={toggleExpanded}
            />
          </ButtonContainerCenterRight>
          <ButtonContainerRight
            initial={hoverBarContainerAnimations.buttonContainerRight.initial}
            animate={hoverBarContainerAnimations.buttonContainerRight.animate(
              isExpanded,
            )}
            transition={
              hoverBarContainerAnimations.buttonContainerRight.transition
            }
          >
            <ToggleButtonSm
              onClick={toggleExpanded}
              initial={hoverbarButtonAnimations.toggleButtonSm.initial}
              animate={hoverbarButtonAnimations.toggleButtonSm.animate(
                isExpanded,
              )}
              transition={hoverbarButtonAnimations.toggleButtonSm.transition}
              $isExpanded={isExpanded}
            >
              <ToggleButtonSmText>X</ToggleButtonSmText>
            </ToggleButtonSm>
          </ButtonContainerRight>
        </InnerContainerRight>
      </HoverbarContainer>
    </OuterContainer>
  );
});

export default SkHoverBarNew;
