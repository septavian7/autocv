/* src/component/features/SkMakeCV/SkMakeCV.tsx */

// React & MobX
import React from "react";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";

// Components
import SkHoverWindow from "../../templates/SkHoverWindow";
import MenuItem from "../../common/SkMenuItem/SkMenuItem"; // Import SkMenuItem

/* --------- SETUP --------- */

// Props Interface
interface SkMakeCVProps {
  isVisible: boolean;
  onClose: () => void;
}

/* --------- COMPONENT DEFINITION --------- */

// Menu Section Styles
export const MenuSection = styled.div`
  ${({ theme }) => `
    /* background: ${theme.menuSectionBackground}; */
    /* color: ${theme.text}; */
    background-color: #1c1c1ee2;
    color: #fff;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    overflow: hidden;
  `}
`;

// Item Container
export const ItemContainer = styled.div`
  ${({ theme }) => `
  padding: 10px;
  border-bottom: 1px solid #2c2c2e;
  `}
`;

const SkMakeCV: React.FC<SkMakeCVProps> = observer(({ isVisible, onClose }) => {
  // Functionality for "1-Click Mode" (you'll need to define what it does)
  const handleOneClickMode = () => {
    console.log("1-Click Mode activated");
    // Implement the functionality for 1-Click Mode here
  };

  return isVisible ? (
    <SkHoverWindow isVisible={isVisible} onClose={onClose}>
      <div style={{ padding: "0px" }}>
        <h2 style={{ fontSize: "24px", textAlign: "center", margin: "20px 0" }}>
          Simplified Make CV
        </h2>
        <MenuSection>
          <MenuItem
            iconName="motionPhotosAuto"
            label="1-Click Mode"
            onClick={handleOneClickMode}
            iconColor="#FFF"
            iconFontSize="default"
          />
        </MenuSection>
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

/* --------- EXPORT --------- */

export { SkMakeCV };
