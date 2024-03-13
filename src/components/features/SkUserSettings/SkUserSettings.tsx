/* src/component/features/SkUserSettings/SkUserSettings.tsx */

/* --------- IMPORT --------- */

import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import SkHoverWindow from "../../templates/SkHoverWindow";
import SkMenuItemAutoHide from "./components/SkMenuItemAutoHide";

/* --------- SETUP --------- */

interface SkUserSettingsProps {
  isVisible: boolean;
  onClose: () => void;
}

/* --------- RENDER --------- */

const SkUserSettings: React.FC<SkUserSettingsProps> = observer(
  ({ isVisible, onClose }) => {
    return isVisible ? (
      <SkHoverWindow isVisible={isVisible} onClose={onClose}>
        <div style={{ padding: "20px" }}>
          <h2
            style={{ fontSize: "24px", textAlign: "center", margin: "20px 0" }}
          >
            User Settings
          </h2>
          {/* SkMenuItemAutoHide used without toggle functionality */}
          <SkMenuItemAutoHide />
          {/* Additional settings components */}
        </div>
      </SkHoverWindow>
    ) : null;
  },
);

export { SkUserSettings };
