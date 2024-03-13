/* src/component/features/SkMakeCV/SkMakeCV.tsx */

/* --------- IMPORT --------- */

import React from "react";
import { observer } from "mobx-react-lite";
import SkHoverWindow from "../../templates/SkHoverWindow";

/* --------- SETUP --------- */

interface SkMakeCVProps {
  isVisible: boolean;
  onClose: () => void;
}

/* --------- RENDER --------- */

const SkMakeCV: React.FC<SkMakeCVProps> = observer(({ isVisible, onClose }) => {
  return isVisible ? (
    <SkHoverWindow isVisible={isVisible} onClose={onClose}>
      <div style={{ padding: "20px" }}>
        <h2 style={{ fontSize: "24px", textAlign: "center", margin: "20px 0" }}>
          Simplified Make CV
        </h2>
        <p>This is a placeholder text for future Make CV components.</p>
        <button
          onClick={onClose}
          style={{ display: "block", margin: "20px auto" }}
        >
          Close Make CV
        </button>
      </div>
    </SkHoverWindow>
  ) : null;
});

export { SkMakeCV };
