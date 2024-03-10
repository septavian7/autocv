/* src/features/SkUserSettings/components/PasswordInput.tsx */

import React from 'react';

interface PasswordInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        value={value}
        onChange={onChange}
        style={{
          marginLeft: '10px',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />
    </div>
  );
};

export default PasswordInput;
