/* src/components/templates/SkHoverWindow.tsx */

/* --------- IMPORTS --------- */

// React & Libraries
import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react-lite";

// Hooks
import { useTheme } from "@emotion/react";

// Styles
import { Container, HoverWindow } from "../../styles/SkHoverWindowStyles";

/* --------- SETUP --------- */

// Props Interface
interface SkHoverWindowProps {
  isVisible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

/* --------- COMPONENT DEFINITION --------- */

const SkHoverWindow: React.FC<SkHoverWindowProps> = observer(
  ({ isVisible, onClose, children }) => {
    // Theme can be utilized here for future enhancements
    const theme = useTheme();

    return isVisible
      ? ReactDOM.createPortal(
          <Container onClick={onClose}>
            <HoverWindow onClick={(e) => e.stopPropagation()}>
              {children}
            </HoverWindow>
          </Container>,
          document.body,
        )
      : null;
  },
);

/* --------- EXPORT --------- */

export default SkHoverWindow;
