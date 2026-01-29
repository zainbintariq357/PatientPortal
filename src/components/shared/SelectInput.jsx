import {useWatch} from 'react-hook-form';
import DropdownIcon from '../../assets/dropdownIcon.svg?react';

const SelectInput = ({
  rules,
  name,
  placeholder,
  control,
  register,
  error,
  options,
  ...rest
}) => {
  const value = useWatch({control, name});
  const showAsteriks = !value;

  return (
    <div className="flex-flex-col gap-1">
      <div className="relative">
        {!value && (
          <span className="absolute left-4 translate-y-1/2 text-gray-400 pointer-events-none">
            {placeholder}
            {showAsteriks && <span className="text-red-500"> *</span>}
          </span>
        )}

        <select
          defaultValue=""
          {...register(name, rules)}
          className={`w-full h-12 border border-[var(--color-white-gray)] rounded-lg px-4 focus:outline-none items-center appearance-none`}
          {...rest}>
          <option value="" disabled className="bg-gray-300" hidden></option>
          {options.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                {item.label == '-Select-' ? '' : item.label}
              </option>
            );
          })}
        </select>

        <DropdownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-4 pointer-events-none opacity-70" />
      </div>

      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default SelectInput;
