/* AiModelRadios.tsx */

import React from 'react';
import { observer } from "mobx-react-lite";
import { useSkUserStore } from '../../../../contexts/SkUserContext';

const AiModelRadios: React.FC = observer(() => {
  const userStore = useSkUserStore();

  const handleAiModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    userStore.setAiModel(event.target.value);
  };

  // AI model options with labels
  const aiModelOptions = {
    "gpt3.5": "GPT 3.5 Turbo (Good)",
    "gpt4": "GPT 4 (Best)"
  };

  return (
    <fieldset>
      <legend>AI Model:</legend>
      {Object.entries(aiModelOptions).map(([value, label]) => (
        <div key={value} style={{ marginBottom: '6px' }}> {/* Apply consistent margin for spacing */}
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="radio"
              name="aiModel"
              value={value}
              checked={userStore.aiModel === value}
              onChange={handleAiModelChange}
              style={{ marginRight: '8px' }} // Margin right for spacing between radio button and label
            />
            {label}
          </label>
        </div>
      ))}
    </fieldset>
  );
});

export default AiModelRadios;
