/* src/components/layout/SkHoverBar/SkHoverBar.tsx */

/* --------- IMPORTS --------- */

// React and Libraries
import React from "react";
import { observer } from "mobx-react-lite";
import { useTheme } from "@emotion/react";

// Stores
import { themeStore, visibilityStore } from "../../../stores";

// Button Components
import SkHoverBarButtonMakeCV from "./components/SkHoverBarButtonMakeCV";
import SkHoverBarButtonTheme from "./components/SkHoverBarButtonTheme";
import SkHoverBarButtonSettings from "./components/SkHoverBarButtonSettings";
import SkHoverBarButtonTools from "./components/SkHoverBarButtonTools";
import SkHoverBarButtonMinimize from "./components/SkHoverBarButtonMinimize";

// Styles
import {
  SkHoverBarContainer,
  SkPsuedoHoverBar,
  LeftAligned,
  CenterAligned,
  RightAligned,
} from "../../../styles/SkHoverBarStyles";

/* --------- COMPONENT DEFINITION --------- */

const SkHoverBar = observer(() => {
  const theme = useTheme(); // Utilize theme here if needed for future implementation

  return (
    <>
      {/*       <SkPsuedoHoverBar /> */}
      <SkHoverBarContainer minimized={!visibilityStore.hoverBarVisible}>
        <LeftAligned>
          {/* Potential place for additional left-aligned buttons */}
        </LeftAligned>
        <CenterAligned>
          <SkHoverBarButtonMinimize />
          <SkHoverBarButtonTheme />
          <SkHoverBarButtonMakeCV />
          <SkHoverBarButtonSettings />
          <SkHoverBarButtonTools />
        </CenterAligned>
        <RightAligned>
          {/* Potential place for additional right-aligned buttons */}
        </RightAligned>
      </SkHoverBarContainer>
    </>
  );
});

/* --------- EXPORT --------- */

export default SkHoverBar;
