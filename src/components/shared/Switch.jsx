import { Controller } from 'react-hook-form';

const Switch = ({ control, name, defaultValue = false, className = '' }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <button
          type="button"
          aria-pressed={field.value}
          onClick={() => field.onChange(!field.value)}
          className={`relative inline-flex h-7 min-w-12 items-center rounded-full duration-300 cursor-pointer
            ${field.value ? 'bg-primary' : 'bg-light-gray'} ${className}`}>
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300
              ${field.value ? 'translate-x-5' : 'translate-x-1'}`}
          />
        </button>
      )}
    />
  );
};

export default Switch;
