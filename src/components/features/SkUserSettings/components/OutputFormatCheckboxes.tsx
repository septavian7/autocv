/* src/components/features/SkUserSettings/Components/OutputFormatCheckboxes.tsx */

/* --------- IMPORTS --------- */

import React from "react";
import { observer } from "mobx-react-lite";
import { useSkUserStore } from "../../../../contexts/SkUserContext";

/* --------- COMPONENT DEFINITION --------- */

const OutputFormatCheckboxes: React.FC = observer(() => {
  const userStore = useSkUserStore();

  const handleOutputFormatChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, checked } = event.target;
    userStore.setOutputFormat(name, checked);
  };

  const formatLabels: { [key: string]: string } = {
    googleDoc: "Google Doc",
    pdf: "PDF",
    docx: "Microsoft Word (.docx)",
    txt: "Text (.txt)",
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
              disabled={format === "googleDoc"}
            />
            {formatLabels[format] || format.toUpperCase()}
          </label>
        </div>
      ))}
    </fieldset>
  );
});

/* --------- EXPORT --------- */

export default OutputFormatCheckboxes;
