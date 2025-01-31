import * as React from 'react';
import { createContext } from 'react';
import { useProvideAuth } from '../hooks/useProvideAuth';

export const AuthContext: React.Context<{
  // TODO: FIX MODELS
  user: any;
  signIn: any;
  signOut: any;
}> = createContext({
  user: null,
  signIn: null,
  signOut: null,
});

export const AuthProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
