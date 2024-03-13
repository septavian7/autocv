/* OutputFormatCheckboxes.tsx */

import React from "react";
import { observer } from "mobx-react-lite";
import { useSkUserStore } from "../../../../contexts/SkUserContext";

// Define a mapping from format name to display label
const formatLabels: { [key: string]: string } = {
  googleDoc: "Google Doc",
  pdf: "PDF",
  docx: "Microsoft Word (.docx)",
  txt: "Text (.txt)",
};

const OutputFormatCheckboxes: React.FC = observer(() => {
  // Wrapped with observer
  const userStore = useSkUserStore();

  const handleOutputFormatChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, checked } = event.target;
    userStore.setOutputFormat(name, checked);
  };

  return (
    <fieldset>
      <legend>Output Formats:</legend>
      {Object.entries(userStore.outputFormat).map(([format, isChecked]) => (
        <div key={format} style={{ marginBottom: "6px" }}>
          <label style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              name={format}
              checked={isChecked as boolean}
              onChange={handleOutputFormatChange}
              disabled={format === "googleDoc"}
              style={{ marginRight: "8px" }}
            />
            <span>{formatLabels[format] || format.toUpperCase()}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
});

export default OutputFormatCheckboxes;
