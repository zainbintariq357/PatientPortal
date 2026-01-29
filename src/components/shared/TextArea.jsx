import {Controller} from 'react-hook-form';

function TextArea({
  label,
  placeholder = 'Type your message...',
  name,
  control,
  rules,
  error,
  showCharacterCount = false,
  maxCharacters = 1000,
  wrapperClassName = '',
  labelClassName = '',
  textAreaClassName = '',
  textAreaProps = {},
}) {
  return (
    <div className={`w-full ${wrapperClassName}`}>
      {label && (
        <span
          className={`block mb-2 font-medium text-gray-700 ${labelClassName}`}>
          {label}
          {rules && <span className="text-danger"> *</span>}
        </span>
      )}
      <div className="relative w-full">
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({field}) => (
            <>
              <textarea
                {...field}
                className={`w-full h-54 px-3 py-2 m-0 pb-10 border border-border rounded-lg resize-none focus:outline-none focus:ring-primary focus:border-primary ${textAreaClassName}`}
                placeholder={placeholder}
                maxLength={maxCharacters}
                {...textAreaProps}
              />
              {/* character counter */}
              {showCharacterCount && (
                <div className="absolute bottom-2 right-5 text-sm text-text-light-gray">
                  {field.value?.length || 0} / {maxCharacters}
                </div>
              )}
            </>
          )}
        />
        {error && <span className="text-danger text-sm">{error.message}</span>}
      </div>
    </div>
  );
}

export default TextArea;
