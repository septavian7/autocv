import React from 'react';
import { useSkUserStore } from '../../../contexts/SkUserStoreContexts';

const EmailInput: React.FC = () => {
  const userStore = useSkUserStore();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    userStore.setEmail(event.target.value);
  };

  return (
    <div>
      <label htmlFor="userEmail">User Email:</label>
      <input
        type="email"
        id="userEmail"
        name="email"
        value={userStore.email}
        onChange={handleEmailChange}
      />
    </div>
  );
};

export default EmailInput;
