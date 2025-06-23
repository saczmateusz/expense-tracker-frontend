import { zodResolver } from '@hookform/resolvers/zod';
import {
  Control,
  useForm,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormReset,
} from 'react-hook-form';
import { z } from 'zod';

interface ExpenseFormHookProps {
  control: Control<ExpenseFormSchema>;
  handleSubmit: UseFormHandleSubmit<ExpenseFormSchema>;
  reset: UseFormReset<ExpenseFormSchema>;
  getValues: UseFormGetValues<ExpenseFormSchema>;
}

export const CategoryEnum = z.enum([
  'Groceries',
  'Takeout',
  'Bills',
  'Fuel',
  'Car',
  'Sports',
  'Entertainment',
  'Travel',
  'Gifts',
  'Clothing',
  'Home',
  'Cosmetics',
  'Healthcare',
  'Services',
  'Other',
]);
type CategoryEnum = z.infer<typeof CategoryEnum>;

export const CurrencyEnum = z.enum(['PLN']);
type CurrencyEnum = z.infer<typeof CurrencyEnum>;

export const expenseFormSchema = z.object({
  description: z.string().min(1),
  category: CategoryEnum,
  value: z.preprocess(
    (val) => (typeof val === 'string' ? parseFloat(val) : val),
    z.number().positive()
  ),
  currency: CurrencyEnum,
  dateCreated:
    // z.string().datetime({ precision: 3 }),
    z.preprocess(
      (val) => (typeof val === 'string' ? new Date(val) : val),
      z.date()
    ),
});

export type ExpenseFormSchema = z.infer<typeof expenseFormSchema>;

export const useExpenseFormHook = (): ExpenseFormHookProps => {
  const { control, handleSubmit, reset, getValues } =
    useForm<ExpenseFormSchema>({
      defaultValues: {
        // description: '',
        category: CategoryEnum.Enum.Groceries,
        // value: 0,
        currency: CurrencyEnum.Enum.PLN,
        dateCreated: new Date(Date.now()),
      },
      resolver: zodResolver(expenseFormSchema),
    });

  return {
    control,
    handleSubmit,
    reset,
    getValues,
  };
};
