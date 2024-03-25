/* src/component/features/SkToolsMenu/SkToolsMenu.tsx */

/* --------- IMPORTS --------- */

// React & MobX
import React from "react";
import { observer } from "mobx-react-lite";

// Components
import SkHoverWindow from "../../templates/SkHoverWindow";

/* --------- SETUP --------- */

// Props Interface
interface SkToolsMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

/* --------- COMPONENT DEFINITION --------- */

const SkToolsMenu: React.FC<SkToolsMenuProps> = observer(
  ({ isVisible, onClose }) => {
    return isVisible ? (
      <SkHoverWindow isVisible={isVisible} onClose={onClose}>
        <div style={{ padding: "20px" }}>
          <h2
            style={{ fontSize: "24px", textAlign: "center", margin: "20px 0" }}
          >
            Simplified Tools Menu
          </h2>
          <p>This is a placeholder text for future tools menu components.</p>
          <button
            onClick={onClose}
            style={{ display: "block", margin: "20px auto" }}
          >
            Close Tools Menu
          </button>
        </div>
      </SkHoverWindow>
    ) : null;
  },
);

/* --------- EXPORT --------- */

export { SkToolsMenu };
