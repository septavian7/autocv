/* src/component/fetures/SkUserSettings/SkUserSettings.tsx */

/* --------- IMPORT --------- */

import React, { useState } from 'react';
import { observer } from "mobx-react-lite";
import SkHoverWindow from '../../templates/SkHoverWindow';
import SkButton from '../../common/SkButton/SkButton';
import OutputFormatCheckboxes from './components/OutputFormatCheckboxes';
import AiModelRadios from './components/AiModelRadios';
// import { Title, SettingsContainer } from '../../../styles/SkGlobalStyles'; // Import styled components

/* --------- SETUP --------- */

interface SkUserSettingsProps {
  isVisible: boolean;
  onClose: () => void;
}

const SkUserSettings: React.FC<SkUserSettingsProps> = observer(({ isVisible, onClose }) => {
  const [isUserLoginVisible, setIsUserLoginVisible] = useState(false);

  // Handler to toggle UserLogin visibility
  const toggleUserLogin = () => setIsUserLoginVisible(!isUserLoginVisible);

/* --------- RENDER --------- */

  return isVisible ? (
    <SkHoverWindow isVisible={isVisible} onClose={onClose}>
          User Settings
          <OutputFormatCheckboxes />
          <AiModelRadios />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button onClick={onClose} style={{ marginRight: '10px' }}>Close</button>
          </div>
    </SkHoverWindow>
  ) : null;
});

export { SkUserSettings };
