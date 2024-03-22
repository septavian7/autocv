/* src/features/SkUserSettings/components/EmailInput.tsx */

/* --------- IMPORTS --------- */

import React from "react";
import { observer } from "mobx-react-lite";

/* --------- PROPS INTERFACE --------- */

interface EmailInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/* --------- COMPONENT DEFINITION --------- */

const EmailInput: React.FC<EmailInputProps> = observer(
  ({ value, onChange }) => {
    return (
      <div>
        <label htmlFor="userEmail">Email:</label>
        <input
          type="email"
          id="userEmail"
          name="email"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  },
);

/* --------- EXPORT --------- */

export default EmailInput;
