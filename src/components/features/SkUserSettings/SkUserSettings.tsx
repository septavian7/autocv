/* src/component/features/SkUserSettings/SkUserSettings.tsx */

/* --------- IMPORTS --------- */

// React & MobX
import React from "react";
import { observer } from "mobx-react-lite";

// Components
import SkHoverWindow from "../../templates/SkHoverWindow";
import SkMenuItemAutoHide from "./components/SkMenuItemAutoHide";

/* --------- SETUP --------- */

// Props Interface
interface SkUserSettingsProps {
  isVisible: boolean;
  onClose: () => void;
}

/* --------- COMPONENT DEFINITION --------- */

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
          <SkMenuItemAutoHide />
          {/* Placeholder for additional settings components */}
        </div>
      </SkHoverWindow>
    ) : null;
  },
);

/* --------- EXPORT --------- */

export { SkUserSettings };
