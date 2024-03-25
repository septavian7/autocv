/* src/components/layout/SkHoverBar/components/SkHoverBarButtonTools.tsx */

/* --------- IMPORTS --------- */

// React Core
import React from "react";

// MobX
import { observer } from "mobx-react-lite";

// Stores
import { visibilityStore } from "../../../../stores";

// Components
import SkButton from "../../../common/SkButton/SkButton";
import { SkToolsMenu } from "../../../features/SkToolsMenu/SkToolsMenu";

/* --------- COMPONENT --------- */

const SkHoverBarButtonTools = observer(() => {
  // Action to toggle the tools menu
  const toggleToolsMenu = () => visibilityStore.toggleToolsMenuVisible();

  return (
    <>
      <SkButton
        icon="spaceDashboard" // Icon for the tools menu
        onClick={toggleToolsMenu}
      />
      {visibilityStore.isToolsMenuVisible && (
        <SkToolsMenu
          isVisible={visibilityStore.isToolsMenuVisible}
          onClose={toggleToolsMenu}
        />
      )}
    </>
  );
});

/* --------- EXPORT --------- */

export default SkHoverBarButtonTools;
