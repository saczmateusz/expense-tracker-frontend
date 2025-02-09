import axios, { AxiosResponse } from 'axios';
import { LoginFormSchema } from '../sites/main/LoginPage/useLoginFormHook';
import { LoginResponse } from '../types/LoginResponse';
import { RegisterFormSchema } from '../sites/main/RegisterPage/useRegisterFormHook';
import { RegisterResponse } from '../types/RegisterResponse';

export const loginRequest = (
  body: LoginFormSchema
): Promise<AxiosResponse<LoginResponse>> => {
  return axios.post<LoginResponse>('http://localhost:3000/auth/login', body);
};

export const registerRequest = (
  body: RegisterFormSchema
): Promise<AxiosResponse<RegisterResponse>> => {
  return axios.post<RegisterResponse>(
    'http://localhost:3000/auth/register',
    body
  );
};
