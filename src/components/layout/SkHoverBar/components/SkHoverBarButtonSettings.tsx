/* src/components/layout/SkHoverBar/components/SkHoverBarButtonSettings.tsx */

/* --------- IMPORTS --------- */

// React & MobX
import React from "react";
import { observer } from "mobx-react-lite";

// Stores
import { visibilityStore } from "../../../../stores";

// Components
import SkButton from "../../../common/SkButton/SkButton";
import { SkUserSettings } from "../../../features/SkUserSettings/SkUserSettings";

/* --------- COMPONENT --------- */

const SkHoverBarButtonSettings = observer(() => {
  const toggleUserSettings = () => visibilityStore.toggleUserSettingsVisible();

  return (
    <>
      <SkButton
        icon="settings" // Icon for settings
        onClick={toggleUserSettings}
      />
      {visibilityStore.isUserSettingsVisible && (
        <SkUserSettings
          isVisible={visibilityStore.isUserSettingsVisible}
          onClose={toggleUserSettings}
        />
      )}
    </>
  );
});

/* --------- EXPORT --------- */

export default SkHoverBarButtonSettings;
