import { zodResolver } from '@hookform/resolvers/zod';
import {
  Control,
  useForm,
  UseFormHandleSubmit,
  UseFormReset,
} from 'react-hook-form';
import { z } from 'zod';

interface RegisterFormHookProps {
  control: Control<RegisterFormSchema>;
  handleSubmit: UseFormHandleSubmit<RegisterFormSchema>;
  reset: UseFormReset<RegisterFormSchema>;
}

export const registerFormSchema = z
  .object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;

export const useRegisterFormHook = (): RegisterFormHookProps => {
  const { control, handleSubmit, reset } = useForm<RegisterFormSchema>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(registerFormSchema),
  });

  return {
    control,
    handleSubmit,
    reset,
  };
};
