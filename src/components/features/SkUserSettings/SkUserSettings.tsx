/* src/component/features/SkUserSettings/SkUserSettings.tsx */

/* --------- IMPORT --------- */

import React from 'react';
import { observer } from "mobx-react-lite";
import SkHoverWindow from '../../templates/SkHoverWindow';

/* --------- SETUP --------- */

interface SkUserSettingsProps {
  isVisible: boolean;
  onClose: () => void;
}

/* --------- RENDER --------- */

const SkUserSettings: React.FC<SkUserSettingsProps> = observer(({ isVisible, onClose }) => {

  // Simply display a SkHoverWindow with some dummy text
  return isVisible ? (
    <SkHoverWindow isVisible={isVisible} onClose={onClose}>
      {/* Simplified content */}
      <div style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '24px', textAlign: 'center', margin: '20px 0' }}>Simplified User Settings</h2>
        <p>This is a placeholder text for future settings components.</p>
        <button onClick={onClose} style={{ display: 'block', margin: '20px auto' }}>Close Settings</button>
      </div>
    </SkHoverWindow>
  ) : null;
});

export { SkUserSettings };
