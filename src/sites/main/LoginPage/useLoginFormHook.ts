import { zodResolver } from '@hookform/resolvers/zod';
import {
  Control,
  useForm,
  UseFormHandleSubmit,
  UseFormReset,
} from 'react-hook-form';
import { z } from 'zod';

interface LoginFormHookProps {
  control: Control<LoginFormSchema>;
  handleSubmit: UseFormHandleSubmit<LoginFormSchema>;
  reset: UseFormReset<LoginFormSchema>;
}

export const loginFormSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;

export const useLoginFormHook = (): LoginFormHookProps => {
  const { control, handleSubmit, reset } = useForm<LoginFormSchema>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(loginFormSchema),
  });

  return {
    control,
    handleSubmit,
    reset,
  };
};
