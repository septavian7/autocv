import React from 'react';
import { useSkUserStore } from '../../../contexts/SkUserStoreContexts';

const AiModelRadios: React.FC = () => {
  const userStore = useSkUserStore();

  const handleAiModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    userStore.setAiModel(event.target.value);
  };

  return (
    <fieldset>
      <legend>AI Model:</legend>
      <div>
        <label>
          <input
            type="radio"
            name="aiModel"
            value="gpt3.5"
            checked={userStore.aiModel === "gpt3.5"}
            onChange={handleAiModelChange}
          />
          GPT 3.5 Turbo (Good)
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="aiModel"
            value="gpt4"
            checked={userStore.aiModel === "gpt4"}
            onChange={handleAiModelChange}
          />
          GPT 4 (Best)
        </label>
      </div>
    </fieldset>
  );
};

export default AiModelRadios;
