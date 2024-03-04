// SkUserStoreContexts.tsx

import React, { createContext, useContext } from 'react';
import { userStore } from '../stores/SkUserStore'; // Ensure this path is correct

const SkUserStoreContext = createContext(userStore);

export const SkUserStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <SkUserStoreContext.Provider value={userStore}>{children}</SkUserStoreContext.Provider>;
};

export const useSkUserStore = () => useContext(SkUserStoreContext);
