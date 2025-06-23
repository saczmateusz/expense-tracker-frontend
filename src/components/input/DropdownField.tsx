import { Select } from '@headlessui/react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type Props<FormValues extends FieldValues> = {
  control: Control<FormValues>;
  name: Path<FormValues>;
  label: string;
  options: Array<string>;
};

const DropdownField = <FormValues extends FieldValues>({
  control,
  name,
  label,
  options,
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
          <div className='relative'>
            <Select
              {...field}
              // className={clsx(
              //   'mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              //   'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
              //   // Make the text of each option black on Windows
              //   '*:text-black'
              // )}
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300 text-gray-900 invalid:border-red-500 invalid:text-red-600 focus:invalid:ring-red-500'
            >
              {options.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            {/* <ChevronDownIcon
              className='group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60'
              aria-hidden='true'
            /> */}
          </div>
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

export default DropdownField;
