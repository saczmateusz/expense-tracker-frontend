import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type Props<FormValues extends FieldValues> = {
  control: Control<FormValues>;
  name: Path<FormValues>;
  label: string;
  type?: string;
};

const TextField = <FormValues extends FieldValues>({
  control,
  name,
  label,
  type = 'text',
}: Props<FormValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className='w-full'>
          <label
            htmlFor={name}
            className='block text-sm font-medium text-gray-700'
          >
            {label}
          </label>
          <input
            {...field}
            type={type}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300 text-gray-900 invalid:border-red-500 invalid:text-red-600 focus:invalid:ring-red-500'
          />
          <p
            className={`mt-1 text-sm text-red-500${
              Boolean(error) ? '' : ' hidden'
            }`}
          >
            {error?.message}
          </p>
        </div>
      )}
    />
  );
};

export default TextField;
