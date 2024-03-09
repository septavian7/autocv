// SkUserSettings.tsx

import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import SkHoverWindow from '../../templates/SkHoverWindow';
import SkButton from '../../components/SkButton/SkButton'; // Ensure path is correct
import OutputFormatCheckboxes from './components/OutputFormatCheckboxes';
import AiModelRadios from './components/AiModelRadios';

interface SkUserSettingsProps {
  isVisible: boolean;
  onClose: () => void;
}

const SkUserSettings: React.FC<SkUserSettingsProps> = observer(({ isVisible, onClose }) => {
  const [isUserLoginVisible, setIsUserLoginVisible] = useState(false);

  // Handler to toggle UserLogin visibility
  const toggleUserLogin = () => setIsUserLoginVisible(!isUserLoginVisible);

  return isVisible ? (
    <SkHoverWindow isVisible={isVisible} onClose={onClose}>
      <h2>User Settings</h2>
      <OutputFormatCheckboxes />
      <AiModelRadios />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={onClose} style={{ marginRight: '10px' }}>Close</button>
      </div>
    </SkHoverWindow>
  ) : null;
});

export { SkUserSettings };
