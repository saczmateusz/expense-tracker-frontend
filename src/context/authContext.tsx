import * as React from 'react';
import { createContext } from 'react';
import { AuthType, useProvideAuth } from '../hooks/useProvideAuth';

export const AuthContext = createContext<AuthType | null>(null);

export const AuthProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return React.useContext(AuthContext);
}
