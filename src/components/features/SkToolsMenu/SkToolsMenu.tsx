/* src/component/features/SkToolsMenu/SkToolsMenu.tsx */

/* --------- IMPORT --------- */

import React from 'react';
import { observer } from "mobx-react-lite";
import SkHoverWindow from '../../templates/SkHoverWindow';

/* --------- SETUP --------- */

interface SkToolsMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

/* --------- RENDER --------- */

const SkToolsMenu: React.FC<SkToolsMenuProps> = observer(({ isVisible, onClose }) => {

  // Simply display a SkHoverWindow with some dummy text
  return isVisible ? (
    <SkHoverWindow isVisible={isVisible} onClose={onClose}>
      {/* Simplified content */}
      <div style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '24px', textAlign: 'center', margin: '20px 0' }}>Simplified Tools Menu</h2>
        <p>This is a placeholder text for future tools menu components.</p>
        <button onClick={onClose} style={{ display: 'block', margin: '20px auto' }}>Close Tools Menu</button>
      </div>
    </SkHoverWindow>
  ) : null;
});

export { SkToolsMenu };
