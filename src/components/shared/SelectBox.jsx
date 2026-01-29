import { useWatch } from 'react-hook-form';
import DropdownIcon from '../../assets/icons/svgs/DropdownIcon';

const SelectBox = ({
  placeholder,
  label,
  rules,
  name,
  control,
  register,
  error,
  className = '',
  wrapperClassName = '',
  showAsterisks = true,
  selectDefaultValue = '',
  labelClassName = '',
  placeHolder = true,
  disabled = false,
  options,
  ...rest
}) => {
  const value = useWatch({ control, name });

  return (
    <div className="relative">
      {(!value && placeHolder) && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {label}
          {showAsteriks && <span className="text-red-500"> *</span>}
        </span>
      )}

      {label && (
        <h6
          className={`block font-medium text-text-gray mb-2.5 ${labelClassName}`}>
          {label}
          {rules && <span className="text-danger"> *</span>}
        </h6>
      )}

      <select
        {...register(name, rules)}
        defaultValue=""
        className={`w-full h-12 border rounded-lg px-4 focus:outline-none appearance-none ${error ? 'border-red-500' : 'border-gray-300'
          } ${className}`}
        disabled={disabled}
        {...rest}>
        {selectDefaultValue && <option value="">{selectDefaultValue}</option>}

        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <span
        className="absolute top-2/3 right-3 -translate-y-1/2  pointer-events-none">
        <DropdownIcon width="15" height='14' />
      </span>


      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default SelectBox;
