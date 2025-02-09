import { AxiosError } from 'axios';

type ErrorResponse = {
  message: string;
};

export type CustomAxiosError = AxiosError<ErrorResponse>;
