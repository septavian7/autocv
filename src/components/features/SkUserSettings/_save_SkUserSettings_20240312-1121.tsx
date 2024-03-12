/* src/component/features/SkUserSettings/SkUserSettings.tsx */

/* --------- IMPORT --------- */

import React from 'react';
import { observer } from "mobx-react-lite";
import SkHoverWindow from '../../templates/SkHoverWindow';
import SkButton from '../../common/SkButton/SkButton';
import SkMenuItem from '../../common/SkMenuList/SkMenuItem';
import SkToggleSwitch from '../../common/SkToggle/SkToggleSwitch';
import { useSkUserStore } from '../../../contexts/SkUserContext';


/* --------- SETUP --------- */

interface SkUserSettingsProps {
  isVisible: boolean;
  onClose: () => void;
}

/* --------- RENDER --------- */

const SkUserSettings: React.FC<SkUserSettingsProps> = observer(({ isVisible, onClose }) => {
  const userStore = useSkUserStore();

  return isVisible ? (
    <SkHoverWindow isVisible={isVisible} onClose={onClose}>
      <h2 style={{ fontSize: '24px', textAlign: 'center', margin: '20px 0' }}>Settings</h2>
      {/* Display Group */}
      <div>
        <h3 style={{ fontSize: '20px', margin: '10px 0' }}>Display</h3>
        <SkMenuItem
          label="Auto-Hide AutoCV Hover Bar"
          iconName="visibility" // Replace with actual icon name
          iconColor="primary"
          iconFontSize="small"
          isChecked={userStore.autoHideHoverBar} // Example state managed in userStore
          onToggleChange={(checked) => userStore.setAutoHideHoverBar(checked)}
        />
      </div>

      {/* Output Format Group (Placeholder for future components) */}
      <div>
        <h3 style={{ fontSize: '20px', margin: '10px 0' }}>Output Format</h3>
        {/* Placeholder for future toggle switches or components */}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <SkButton onClick={onClose} label="Close" primary />
      </div>
    </SkHoverWindow>
  ) : null;
});

export { SkUserSettings };