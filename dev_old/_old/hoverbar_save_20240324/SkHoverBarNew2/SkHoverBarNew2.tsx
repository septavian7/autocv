/* src/components/layout/SkHoverBarNew2/SkHoverBarNew2.tsx */

import React from "react";
import { observer } from "mobx-react-lite";

// Import Containers
import HoverBarContainers from "./components/HoverBarContainers";

// Import Buttons
// Import(s) from "./components/HoverBarButtons";
import HoverBarButtonTest from "./components/HoverBarButtons"; // Import the test button component

// Importing state management, if needed

const SkHoverBarNew2: React.FC = observer(() => {
  const {
    HoverBarOuterOuterContainer,
    HoverBarOuterContainer,
    HoverBarInnerContainerRight,
    HoverBarButtonContainerCenterRight,
    HoverBarButtonContainerFarRight,
  } = HoverBarContainers;

  // Use hover bar state, if needed

  return (
    <HoverBarOuterOuterContainer>
      <HoverBarOuterContainer>
        <HoverBarInnerContainerRight>
          <HoverBarButtonContainerCenterRight>
            <HoverBarButtonTest />
            {/*             <HoverBarButtonMainMake />
            <HoverBarButtonLargeMenu />
            <HoverBarButtonLargeSettings /> */}
          </HoverBarButtonContainerCenterRight>
          <HoverBarButtonContainerFarRight>
            {/*             <HoverBarButtonSmallSettings />
            <HoverBarButtonSmallTheme />
            <HoverBarButtonSmallMinimize /> */}
          </HoverBarButtonContainerFarRight>
        </HoverBarInnerContainerRight>
      </HoverBarOuterContainer>
    </HoverBarOuterOuterContainer>
  );
});

export default SkHoverBarNew2;
