import {Info} from 'lucide-react';
import {useForm} from 'react-hook-form';
import {InfoIcon} from '../../assets/icons/svgs';
import Button from '../shared/Button';
import DatePickerInput from '../shared/DatePickerInput';
import PopupWrapper from '../shared/PopupWrapper';
import SelectBox from '../shared/SelectBox';
import TextArea from '../shared/TextArea';
import TextInput from '../shared/TextInput';

const toOptions = [
  {label: 'Ahmad', value: 'ahmad'},
  {label: 'Sajid', value: 'sajid'},
  {label: 'Saad', value: 'saad'},
];

const dateFields = [
  {label: 'From Date', name: 'fromDate'},
  {label: 'To Date', name: 'toDate'},
];

const titleClassName = 'mt-6 mb-2.5 mr-2 text-sm flex text-text-light-gray';
const labelClassName = 'text-sm! font-normal! text-text-light-gray!';

function SendCCDA({open, onClose}) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: {isSubmitting, isValid, errors},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      fromDate: '',
      toDate: '',
      from: '',
      to: '',
      subject: '',
      message: '',
    },
  });

  const handleCCDA = data => {
    console.log('Send C-CDA Data:', data);
    onClose();
    reset();
  };

  const handleClose = () => {
    onClose();
    reset();
  };

  return (
    <PopupWrapper
      title="Send C-CDA"
      isOpen={open}
      onClose={handleClose}
      modalStyle="w-200!">
      <form onSubmit={handleSubmit(handleCCDA)}>
        {/* Date Filter */}
        <div className="mt-6 rounded-xl border border-border bg-[#F9FAFB] px-6 pt-5 pb-2">
          <h5 className="font-semibold text-text-gray">Date Filter</h5>

          <div className="mt-4 flex gap-6">
            {dateFields.map(({label, name}) => (
              <div key={name} className="flex-1">
                <DatePickerInput
                  label={label}
                  name={name}
                  control={control}
                  datePickerClassName="border-border! h-11!"
                  labelClassName="font-normal! text-text-light-gray text-sm!"
                />
              </div>
            ))}
          </div>

          <div className="mt-3 flex gap-1">
            <InfoIcon />
            <p className="text-sm text-text-light-gray">
              This will filter the data based on Encounter date and other data
              categories dates like Medication, Lab, Problem List etc.
            </p>
          </div>
        </div>

        {/* From */}
        <span className={titleClassName}>
          From <Info className="ml-1 h-5 w-3.5" />
        </span>
        <TextInput
          name="from"
          control={control}
          register={register}
          placeholder="Enter Sender"
          placeholderAsteric={false}
          inputClassName="h-11! border-border!"
        />

        {/* To */}
        <div className="flex gap-3 mt-6">
          <div className="flex-1">
            <SelectBox
              label="To"
              options={toOptions}
              name="to"
              control={control}
              register={register}
              showAsteriks={false}
              className="max-h-11! border-border!"
              labelClassName={labelClassName}
            />
          </div>

          <Button
            title="Address Book"
            type="button"
            variant="secondary"
            className="self-end"
          />
        </div>

        {/* Subject */}
        <TextInput
          label="Subject"
          name="subject"
          control={control}
          register={register}
          rules={{required: 'Subject is required'}}
          error={errors.subject}
          placeholder="Enter Subject"
          placeholderAsteric={false}
          wrapperClassName="mt-6"
          labelClassName={labelClassName}
          inputClassName="h-11! border-border!"
        />

        {/* Message */}
        <TextArea
          label="Message"
          name="message"
          control={control}
          rules={{required: 'Message is required'}}
          error={errors.message}
          placeholder="Enter your message"
          wrapperClassName="mt-6!"
          textAreaClassName="h-32!"
          labelClassName={labelClassName}
        />

        {/* Actions */}
        <div className="mt-5 ml-2 flex gap-3">
          <Button
            title="Cancel"
            type="button"
            variant="secondary"
            onClick={handleClose}
          />
          <Button
            title="Send C-CDA"
            type="submit"
            disabled={isSubmitting || !isValid}
          />
        </div>
      </form>
    </PopupWrapper>
  );
}

export default SendCCDA;
