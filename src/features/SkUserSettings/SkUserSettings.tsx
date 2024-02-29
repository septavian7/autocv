/*
---
filepath:       src/features/SkUserSettings/SkUserSettings.tsx
---
# Sub-Modules

## User Login

### State 1 — Buttons to open OAuth user login windows

### State 2 — Displays imported user email, first name, last name, and logout button

## User Wokrflow Settings

### Output Formats

#### State 1 — (not displayed until user is logged in)

#### State 2 - Shows Fieldset (Checkboxes)

- "Google Doc" (Checked, Disabled)
- "PDF" (Checked)
- "Docx"
- "txt"

### AI Models

#### State 1 — (not displayed until user is logged in)

#### State 2 - Shows Fieldset (Radio)

- "GPT 3.5 Turbo (Good) (Checked)
- "GPT 4"

## Dark/Light Theme Settings

### State 1 — (not displayed until user is logged in)

### State 2 - Shows Dark/Light Theme Switch

- ["Dark"] vs ["Light"] (Checked)

## Module Control Buttons

### State 1 — "Close" and "Save" buttons

### State 2 — "Close" and "Save" buttons

*/

/* SkUserSettings.tsx */

import React from 'react';
import { observer } from "mobx-react-lite";
import { useThemeStore } from '../../contexts/SkThemeStoreContexts';
import SkButton from '../../components/SkButton/SkButton';
import EmailInput from './components/EmailInput';
import OutputFormatCheckboxes from './components/OutPutFormatCheckboxes';
import AiModelRadios from './components/AiModelRadios';

interface SkUserSettingsProps {
  onClose: () => void;
}

const SkUserSettings: React.FC<SkUserSettingsProps> = observer(({ onClose }) => {
  const themeStore = useThemeStore();

  const handleSave = () => {
    console.log("Saving user settings...");
  };

  // Use passed onClose prop for the Close button
  return (
    <div style={{ backgroundColor: themeStore.colors.background, color: themeStore.colors.text }}>
      <h2>User Settings</h2>
      <form>
        <EmailInput />
        <OutputFormatCheckboxes />
        <AiModelRadios />
        <div className="button-container" style={{ textAlign: 'center' }}>
          <SkButton label="Close" onClick={onClose} /> {/* Modified to use onClose */}
          <SkButton label="Save" onClick={handleSave} />
        </div>
      </form>
    </div>
  );
});