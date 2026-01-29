import React from 'react';
import { useWatch, Controller } from 'react-hook-form';

const TextInput = ({
  label = '',
  type = 'text',
  name,
  placeholder,
  control,
  rules,
  error,
  length,
  placeholderAsteric = true,
  inputClassName = '',
  labelClassName = '',
  wrapperClassName = '',
  disabled = false,
  ...rest
}) => {
  const value = useWatch({ control, name });

  return (
    <div className={`flex flex-col relative ${wrapperClassName}`}>
      {!value && (
        <span
          className={`absolute left-4 ${label ? 'top-1/2' : 'translate-y-1/2'} text-gray-400 pointer-events-none`}>
          {placeholder}
          {placeholderAsteric && <span className="text-red-500"> *</span>}
        </span>
      )}

      {
        label && (
          <h6
            className={`block font-medium text-text-gray mb-2.5 ${labelClassName}`}>
            {label}
            {rules && <span className="text-danger"> *</span>}
          </h6>
        )
      }

      {/* min-h-[75px] */}

      <Controller
        name={name}
        control={control}
        rules={rules}
        disabled={disabled}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            className={`w-full h-12 border border-white-gray rounded-lg px-4 focus:outline-none items-center ${inputClassName}`}
            maxLength={length}
          />
        )}
      />

      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div >
  );
};
export default TextInput;
