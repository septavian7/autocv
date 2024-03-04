/* EmailInput.tsx */

import React from 'react';
import { observer } from "mobx-react-lite";
import { useSkUserStore } from '../../../contexts/SkUserStoreContexts';

const EmailInput: React.FC = observer(() => { // Wrapped with observer
  const userStore = useSkUserStore();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    userStore.setEmail(event.target.value);
  };

  return (
    <div>
      <label htmlFor="userEmail">Email:</label>
      <input
        type="email"
        id="userEmail"
        name="email"
        value={userStore.email}
        onChange={handleEmailChange}
      />
    </div>
  );
});

export default EmailInput;
