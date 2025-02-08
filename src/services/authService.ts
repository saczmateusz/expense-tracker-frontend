import axios, { AxiosResponse } from 'axios';
import { LoginFormSchema } from '../sites/main/LoginPage/useLoginFormHook';
import { LoginResponse } from '../types/LoginResponse';

export const loginRequest = (
  body: LoginFormSchema
): Promise<AxiosResponse<LoginResponse>> => {
  return axios.post<LoginResponse>('http://localhost:3000/auth/login', body);
};
