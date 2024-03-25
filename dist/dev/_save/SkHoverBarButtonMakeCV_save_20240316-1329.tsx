/* src/components/layout/SkHoverBar/components/SkHoverBarButtonMakeCV.tsx */

/* --------- IMPORTS --------- */

// React and MobX
import React from "react";
import { observer } from "mobx-react-lite";

// Hooks
import { useTheme } from "@emotion/react";

// Stores
import { visibilityStore } from "../../../../stores";

// Components
import SkButton from "../../../common/SkButton/SkButton";
import { SkMakeCV } from "../../../features/SkMakeCV/SkMakeCV";

/* --------- COMPONENT --------- */

const SkHoverBarButtonMakeCV = observer(() => {
  const theme = useTheme(); // This may not be used in the current implementation but is setup for theme usage.
  const toggleMakeCV = () => visibilityStore.toggleMakeCVVisible();

  return (
    <>
      <SkButton
        label="Make"
        icon="ramStencilCircleWhite"
        onClick={toggleMakeCV}
        primary
      />
      {visibilityStore.isMakeCVVisible && (
        <SkMakeCV
          isVisible={visibilityStore.isMakeCVVisible}
          onClose={toggleMakeCV}
        />
      )}
    </>
  );
});

/* --------- EXPORT --------- */

export default SkHoverBarButtonMakeCV;
