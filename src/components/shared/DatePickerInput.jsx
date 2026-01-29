import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useWatch, Controller } from 'react-hook-form';
import CalenderIcon from '../../assets/calenderIcon.svg?react';
import CrossIcon from '../../assets/crossIcon.svg?react';
import Cross from '../../assets/icons/svgs/Cross';

const DatePickerInput = ({
  label = "",
  isOpened = false,
  name,
  rules,
  control,
  error,
  showAsterisks = true,
  wrapperClassName = '',
  datePickerClassName = '',
  labelClassName = '',
  placeholderText = 'mm/dd/yyyy',
  placeholder

}) => {
  const [isOpen, setIsOpen] = useState(isOpened);

  const value = useWatch({ control, name });
  const conditionalStyle =
    label && !error ? 'top-1/2' : label ? 'top-[41%]' : 'translate-y-1/2';

  const KeyDownFunc = e => {
    const allowededKeys = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab',
      'Escape',
      'Enter',
    ];

    if (e.ctrlKey || e.metaKey) return;
    if (allowededKeys.includes(e.key)) return;
    e.preventDefault();
  };

  return (
    <div className={`relative ${wrapperClassName}`}>
      {!value && placeholder && (
        <span
          className={`absolute left-4 ${conditionalStyle}  text-gray-400 pointer-events-none`}>
          {placeholder}
          {showAsterisks && <span className="text-red-500"> *</span>}
        </span>
      )}

      {label && (
        <h6
          className={`block font-medium text-text-gray mb-2.5 ${labelClassName}`}>
          {label}
          {rules && <span className="text-danger"> *</span>}
        </h6>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <div className="relative w-full">
            <DatePicker
              placeholderText={placeholderText}
              open={isOpen}
              onKeyDown={e => KeyDownFunc(e)}
              dateFormat="MM/dd/yyyy"
              selected={field.value}
              onInputClick={() => setIsOpen(true)}
              onChange={date => {
                field.onChange(date);
                setIsOpen(false);
              }}
              className={`w-full h-12 border border-white-gray rounded-lg px-4 focus:outline-none items-center ${datePickerClassName}`}
              wrapperClassName="w-full"
            />
            {field.value ? (
              <button
                onClick={() => {
                  field.onChange(null);
                  setIsOpen(false);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-1  pr-4 cursor-pointer opacity-70 hover:opacity-100">
                <Cross className="w-3 h-3" />
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(true)}
                className="absolute top-1/2 right-3 -translate-y-1/2 w-5 h-4 cursor-pointer opacity-70 hover:opacity-100">
                <CalenderIcon />
              </button>
            )}
          </div>
        )}
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};
export default DatePickerInput;
