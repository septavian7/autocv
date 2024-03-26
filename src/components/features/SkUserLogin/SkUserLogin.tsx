/* src/features/UserLogin/SkUserLogin.tsx */

/* --------- IMPORTS --------- */

// React & MobX
import React from "react";
import { observer } from "mobx-react-lite";

// Stores
import { userStore } from "../../../stores/SkUserStore";

// Components
import SkHoverWindow from "../../templates/SkHoverWindow";

/* --------- SETUP --------- */

// Component Props
interface SkUserLoginProps {
  isVisible: boolean;
  onClose: () => void;
}

/* --------- COMPONENT DEFINITION --------- */

const SkUserLogin: React.FC<SkUserLoginProps> = observer(
  ({ isVisible, onClose }) => {
    return isVisible ? (
      <SkHoverWindow isVisible={isVisible} onClose={onClose}>
        <div style={{ padding: "20px" }}>
          <h2
            style={{ fontSize: "24px", textAlign: "center", margin: "20px 0" }}
          >
            User Login
          </h2>
          {/* Placeholder for additional settings components */}
        </div>
      </SkHoverWindow>
    ) : null;
  },
);

/* --------- EXPORT --------- */

export { SkUserLogin };
