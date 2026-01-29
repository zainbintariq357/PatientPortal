import {Controller} from 'react-hook-form';

const Checkbox = ({
  control,
  name,
  label = 'Label not provided',
  options, // array of { label, value } for groups othwerwise boolean checkbox
  multiple = false, // true = multi-select
  defaultValue,
  rules,
  wrapperClassName = '',
}) => {
  if (!options) {
    // Single boolean checkbox
    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || false}
        rules={rules}
        render={({field}) => (
          <div className={wrapperClassName}>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                {...field}
                checked={field.value}
                className="w-4 h-4 text-primary rounded border-gray-300"
              />
              {label}
            </label>
          </div>
        )}
      />
    );
  }

  // Options provided → checkbox group
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || (multiple ? [] : '')}
      rules={rules}
      render={({field}) => {
        const value = field.value;

        return (
          <div className={`flex flex-row gap-10 ${wrapperClassName}`}>
            {options.map(opt => {
              const isChecked =
                multiple && value
                  ? value?.includes(opt.value)
                  : value === opt.value;

              return (
                <label key={opt.value} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    className="w-4 h-4 text-primary rounded border-gray-300"
                    onChange={() => {
                      if (multiple) {
                        let newValues;
                        if (isChecked) {
                          newValues = value.filter(v => v !== opt.value);
                        } else {
                          newValues = [...value, opt.value];
                        }
                        field.onChange(newValues);
                      } else {
                        field.onChange(opt.value);
                      }
                    }}
                  />
                  {opt.label}
                </label>
              );
            })}
          </div>
        );
      }}
    />
  );
};

export default Checkbox;
