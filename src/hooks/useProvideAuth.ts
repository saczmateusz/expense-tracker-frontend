import { useState } from 'react';
import { LoginFormSchema } from '../sites/main/LoginPage/useLoginFormHook';
import { loginRequest } from '../services/authService';
import { AxiosResponse } from 'axios';
import { LoginResponse } from '../types/LoginResponse';

export type AuthType = {
  token: string | undefined;
  signIn: (body: LoginFormSchema, callback: any, errorHandler: any) => void;
  signOut: (callback: any) => void;
};

export const useProvideAuth = (): AuthType => {
  const [token, setToken] = useState<string>();

  const signIn = (
    body: LoginFormSchema,
    callback: any,
    errorHandler: any
  ): void => {
    loginRequest(body).then((response: AxiosResponse<LoginResponse>) => {
      setToken(response.data.token);
      callback();
    }, errorHandler);
  };

  const signOut = (callback: any): void => {
    setToken(undefined);
    callback();
  };

  return {
    token,
    signIn,
    signOut,
  };
};
