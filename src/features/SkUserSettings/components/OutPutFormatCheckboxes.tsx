import React from 'react';
import { useSkUserStore } from '../../../contexts/SkUserStoreContexts';

const OutputFormatCheckboxes: React.FC = () => {
  const userStore = useSkUserStore();

  const handleOutputFormatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    userStore.setOutputFormat(name, checked);
  };

  return (
    <fieldset>
      <legend>Output Formats:</legend>
      {Object.entries(userStore.outputFormat).map(([format, isChecked]) => (
        <div key={format}>
          <label>
            <input
              type="checkbox"
              name={format}
              checked={isChecked as boolean}
              onChange={handleOutputFormatChange}
              disabled={format === "googleDoc"} // Google Doc is always checked and disabled
            />
            {format.toUpperCase()}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default OutputFormatCheckboxes;
