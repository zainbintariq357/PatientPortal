import { MapPin } from 'lucide-react';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import SELECT_OPTIONS from '../../Constants';
import Button from '../shared/Button';
import PopupWrapper from '../shared/PopupWrapper';
import SelectBox from '../shared/SelectBox';

const activeTabStyles = 'bg-white text-primary';
const inactiveTabStyles = 'text-black';
const tabs = {
  officeVisit: 'Office Visit',
  teleVisit: 'Tele Visit',
};

const SectionTitle = ({ title, showSteric = true, className = 'mt-10' }) => (
  <p className={`text-lg font-medium mb-4 text-text-gray ${className}`}>
    {title} {showSteric && <span className="text-danger"> *</span>}
  </p>
);

function ScheduleAppointment({ open, onClose }) {
  const [activeTab, setActiveTab] = useState(tabs?.officeVisit);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
    watch,
  } = useForm({
    defaultValues: {
      provider: '',
      location: '',
      reason: '',
    },
  });
  const selectedLocation = watch('location');

  const handleNext = data => {
    onClose(true)
    console.log('Next Data: ', data);
  };
  const onFormError = errors => {
    console.log('Form Errors: ', errors);
  };

  const handleClose = useCallback(() => {
    onClose();
    reset();
  }, [onClose, reset]);

  const handleTabClick = useCallback(tab => {
    setActiveTab(tab);
  }, []);

  const Tabs = ({ options, activeTab, onTabClick }) => (
    <div className="flex flex-row w-full gap-4 p-1 mt-8 bg-gray-200 rounded-lg">
      {Object.values(options).map(tab => (
        <button
          key={tab}
          onClick={() => onTabClick(tab)}
          className={`px-3 py-2.5 rounded-lg text-lg font-semibold cursor-pointer ${activeTab === tab ? activeTabStyles : inactiveTabStyles
            }`}>
          {tab}
        </button>
      ))}
    </div>
  );

  if (!open) return null;

  return (
    <PopupWrapper
      title="Schedule Appointment"
      isOpen={open}
      onClose={handleClose}
      headerStyle="py-7"
      titleClassName="text-primary">
      <Tabs options={tabs} activeTab={activeTab} onTabClick={handleTabClick} />

      <SelectBox
        options={SELECT_OPTIONS.providerOptions}
        label="Provider"
        id="provider"
        control={control}
        name="provider"
        register={register}
        rules={{
          required: 'Provider is required',
        }}
        error={errors['provider']}
        labelClassName="text-lg font-medium"
        wrapperClassName="mt-8"
        placeHolder={false}
      />

      <SelectBox
        options={SELECT_OPTIONS.locationOptions}
        label="Location"
        id="location"
        control={control}
        name="location"
        register={register}
        rules={{
          required: 'Location is required',
        }}
        error={errors['location']}
        labelClassName="text-lg font-medium"
        wrapperClassName="mt-8"
        placeHolder={false}
      />

      {!!selectedLocation && (
        <div className="flex flex-row justify-end items-center mt-6 gap-1.5 text-gray-500">
          <MapPin className="inline-block text-gray-500 h-5 w-4" />
          <span className="font-medium text-primary"> {selectedLocation}</span>
        </div>
      )}

      <>
        <SelectBox
          options={SELECT_OPTIONS.reasonForScheduleAppointmentOptions}
          label="Reason"
          id="reason"
          control={control}
          name="reason"
          register={register}
          rules={{
            required: 'Reason is required',
          }}
          error={errors['reason']}
          labelClassName="text-lg font-medium"
          wrapperClassName={selectedLocation ? 'mt-2' : 'mt-8'}
          placeHolder={false}
        />
      </>

      <div className="flex justify-end gap-4 mt-12">
        <Button title="Cancel" onClick={handleClose} variant="secondary" className='cursor-pointer' />
        <Button
          title="Next"
          onClick={handleSubmit(handleNext, onFormError)}
          disabled={isSubmitting || !isValid}
          className="min-w-28 cursor-pointer"
        />
      </div>
    </PopupWrapper>
  );
}
export default ScheduleAppointment;
