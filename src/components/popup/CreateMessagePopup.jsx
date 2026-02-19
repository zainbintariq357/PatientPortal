import {useCallback, useRef} from 'react';
import {Controller, useForm} from 'react-hook-form';
import SELECT_OPTIONS from '../../Constants';
import Button from '../shared/Button';
import PopupWrapper from '../shared/PopupWrapper';
import SelectBox from '../shared/SelectBox';
import Switch from '../shared/Switch';
import TextArea from '../shared/TextArea';
import AttachmentIcon from '../../assets/icons/svgs/Attachment';
import Cross from '../../assets/icons/svgs/Cross';

function CreateMessagePopup({open, onClose}) {
  const inputRef = useRef(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: {isSubmitting, isValid},
  } = useForm({
    defaultValues: {
      messageType: '',
      messageText: '',
      urgent: false,
      attachments: [],
    },
  });

  const handleSendMessage = data => {
    console.log('Send Message Data: ', data);
    // do something here then close the modal
    handleClose();
  };
  const onFormError = errors => {
    console.log('Form Errors: ', errors);
  };
  const handleClose = useCallback(() => {
    onClose();
    reset();
  }, [onClose, reset]);

  if (!open) return null;

  return (
    <PopupWrapper
      title="Create Message"
      isOpen={open}
      onClose={handleClose}
      modalStyle="max-w-200">
      <div className="mt-3 flex items-stretch mt-12">
        <div className="w-[45%] min-w-50">
          <SelectBox
            options={SELECT_OPTIONS.messageTypeOptions}
            label="Message Type"
            id="messageType"
            control={control}
            name="messageType"
            register={register}
            labelClassName="text-sm"
          />
        </div>
        <div className="flex items-center ml-10 mt-7">
          <Switch control={control} name="urgent" />
          <span className="text-sm text-text-gray font-medium ml-5">
            Mark as Urgent
          </span>
        </div>
      </div>

      <TextArea
        label="Message"
        placeholder="Type your message..."
        name="messageText"
        control={control}
        showCharacterCount={true}
        maxCharacters={1000}
        wrapperClassName="mt-8"
        labelClassName="text-sm"
      />

      <p className="text-sm text-text-gray font-medium mt-8 mb-3">
        Attachments
      </p>
      <div className="flex flex-col items-center w-full">
        <Controller
          name="attachments"
          control={control}
          defaultValue={[]}
          render={({field}) => (
            <>
              {/* Hidden input */}
              <input
                type="file"
                multiple
                accept=".tif,.jpg,.bmp,.pdf"
                ref={inputRef}
                className="hidden"
                onChange={e => {
                  const files = Array.from(e.target.files);
                  field.onChange([...field.value, ...files]); // RHF state only
                }}
              />

              <div
                className="w-full border border-dashed border-border rounded-lg p-4 flex flex-col gap-4 cursor-pointer"
                onClick={() => inputRef.current.click()}
                onDragOver={e => e.preventDefault()}
                onDrop={e => {
                  e.preventDefault();
                  const droppedFiles = Array.from(e.dataTransfer.files);
                  field.onChange([...field.value, ...droppedFiles]);
                }}>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <AttachmentIcon className="w-4 h-4" color={'#9CA3AF'} />
                    <p className="text-[#4B5563] text-sm">
                      Attach files (TIF, JPG, BMP, PDF up to 10MB)
                    </p>
                  </div>
                </div>

                {/* Files preview */}
                {field.value.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {field.value.map((file, index) => (
                      <div
                        key={index}
                        className="min-w-30 flex justify-between items-center bg-gray-100 p-2 gap-2 rounded">
                        <p className="text-text-gray text-sm truncate">
                          {file.name}
                        </p>
                        <button
                          onClick={e => {
                            e.stopPropagation();
                            field.onChange(
                              field.value.filter((_, i) => i !== index),
                            );
                          }}>
                          <Cross className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        />
      </div>

      <div className="flex justify-end gap-4 mt-17">
        <Button title="Cancel" onClick={handleClose} variant="secondary" />
        <Button
          title="Send Message"
          onClick={handleSubmit(handleSendMessage, onFormError)}
          disabled={isSubmitting || !isValid}
        />
      </div>
    </PopupWrapper>
  );
}
export default CreateMessagePopup;
