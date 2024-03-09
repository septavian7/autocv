/* src/features/SkUserSettings/components/EmailInput.tsx */

import React from 'react';
import { observer } from "mobx-react-lite";
import { useSkUserStore } from '../../contexts/SkUserStoreContexts';

interface EmailInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput: React.FC<EmailInputProps> = observer(({ value, onChange }) => {
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
});

export default EmailInput;
