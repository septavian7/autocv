/* src/components/features/SkUserSettings/Components/AiModelRadios.tsx */

/* --------- IMPORTS --------- */

import React from "react";
import { observer } from "mobx-react-lite";
import { useSkUserStore } from "../../../../contexts/SkUserContext";

/* --------- COMPONENT DEFINITION --------- */

const AiModelRadios: React.FC = observer(() => {
  const userStore = useSkUserStore();

  const handleAiModelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    userStore.setAiModel(event.target.value);
  };

  const aiModelOptions = {
    "gpt3.5": "GPT 3.5 Turbo (Good)",
    gpt4: "GPT 4 (Best)",
  };

  return (
    <fieldset>
      <legend>AI Model:</legend>
      {Object.entries(aiModelOptions).map(([value, label]) => (
        <div key={value}>
          <label>
            <input
              type="radio"
              name="aiModel"
              value={value}
              checked={userStore.aiModel === value}
              onChange={handleAiModelChange}
            />
            {label}
          </label>
        </div>
      ))}
    </fieldset>
  );
});

/* --------- EXPORT --------- */

export default AiModelRadios;
