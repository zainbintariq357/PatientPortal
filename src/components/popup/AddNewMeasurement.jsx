import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../shared/Button';
import DatePickerInput from '../shared/DatePickerInput';
import PopupWrapper from '../shared/PopupWrapper';
import SelectBox from '../shared/SelectBox';
import TextArea from '../shared/TextArea';
import TextInput from '../shared/TextInput';

const measurementTypes = [
  { label: 'Blood Pressure', value: 'blood_pressure' },
  { label: 'Heart Rate', value: 'heart_rate' },
  { label: 'Respiratory Rate', value: 'respiratory_rate' },
  { label: 'Body Temperature', value: 'temperature' },
  { label: 'Oxygen Saturation (SpO₂)', value: 'spo2' },
  { label: 'Blood Glucose', value: 'blood_glucose' },
  { label: 'Weight', value: 'weight' },
  { label: 'Height', value: 'height' },
  { label: 'BMI', value: 'bmi' },
];

const units = [
  { label: 'Kilogram per Square Meter (kg/m²)', value: 'kg/m2' },
  { label: 'Kilogram per Meter (kg/m)', value: 'kg/m' },
  { label: 'Body Surface Area (m²)', value: 'm2' },
];

const labelClassName = 'text-sm! font-normal! text-text-gray!';
const selectCommonProps = {
  showAsteriks: false,
  selectClassName: 'max-h-10! border-border!',
  labelClassName,
  selectDefaultValue: '- Select -',
};

function AddNewMeasurement({ open, onClose }) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      measurementType: '',
      value: '',
      unit: '',
      dateAndTime: '',
      notes: '',
    },
  });

  const handleClose = useCallback(() => {
    onClose();
    reset();
  }, [onClose, reset]);

  const saveMeasurement = useCallback(
    data => {
      console.log('Save Measurement Data:', data);
      handleClose();
    },
    [handleClose],
  );

  return (
    <PopupWrapper
      title="Add New Measurement"
      isOpen={open}
      onClose={handleClose}
      titleClassName="text-primary"
      modalStyle="w-120!">
      <form onSubmit={handleSubmit(saveMeasurement)}>
        {/* Measurement Type */}
        <SelectBox
          {...selectCommonProps}
          options={measurementTypes}
          name="measurementType"
          label="Measurement Type"
          control={control}
          register={register}
          rules={{ required: 'Measurement Type is required' }}
          error={errors.measurementType}
          wrapperClassName="mt-6"
        />

        {/* Measurement Value */}
        <TextInput
          label="Value"
          name="value"
          control={control}
          register={register}
          rules={{ required: 'Value is required' }}
          error={errors.value}
          placeholder="Enter measurement value"
          placeholderAsteric={false}
          wrapperClassName="mt-4"
          labelClassName={labelClassName}
          inputClassName="h-10.5! border-border!"
        />

        {/* Unit */}
        <SelectBox
          {...selectCommonProps}
          options={units}
          name="unit"
          label="Unit"
          control={control}
          register={register}
          rules={{ required: 'Measurement Unit is required' }}
          error={errors.unit}
          wrapperClassName="mt-6"
        />

        {/* Date & Time */}
        <DatePickerInput
          label="Date & Time"
          name="dateAndTime"
          control={control}
          rules={{ required: 'Date & Time is required' }}
          wrapperClassName="mt-6"
          labelClassName={labelClassName}
          datePickerClassName="border-border!"
        />

        {/* Notes */}
        <TextArea
          label="Notes"
          name="notes"
          control={control}
          placeholder="Add any additional notes"
          wrapperClassName="mt-6"
          textAreaClassName="h-24!"
          labelClassName={labelClassName}
        />

        <hr className="my-5 -mx-6 border-border" />

        {/* Actions */}
        <div className="mt-5 ml-2 flex justify-end gap-3">
          <Button
            title="Cancel"
            type="button"
            variant="secondary"
            onClick={handleClose}
            className="flex items-center px-3.5! rounded-md border-border! text-text-dark-gray!"
          />
          <Button
            title="Save Measurement"
            type="submit"
            disabled={isSubmitting || !isValid}
          />
        </div>
      </form>
    </PopupWrapper>
  );
}

export default AddNewMeasurement;
