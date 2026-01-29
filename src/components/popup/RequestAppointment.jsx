import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import SELECT_OPTIONS from '../../Constants';
import Button from '../shared/Button';
import PopupWrapper from '../shared/PopupWrapper';
import SelectBox from '../shared/SelectBox';
import Switch from '../shared/Switch';
import DatePickerInput from '../shared/DatePickerInput';
import Checkbox from '../shared/Checkbox';
import TextArea from '../shared/TextArea';

const activeTabStyles = 'bg-white text-primary';
const inactiveTabStyles = 'text-black';
const tabs = {
  officeVisit: 'Office Visit',
  teleVisit: 'Tele Visit',
};
const preferredTimeOptions = [
  { label: 'Anytime', value: 'anytime' },
  { label: 'Morning', value: 'morning' },
  { label: 'Afternoon/Evening', value: 'afternoon/evening' },
];

const SectionTitle = ({ title, showSteric = true }) => (
  <p className="text-lg font-medium mt-10 mb-4 text-text-gray">
    {title} {showSteric && <span className="text-danger"> *</span>}
  </p>
);

function RequestAppointment({ open, onClose }) {
  const [activeTab, setActiveTab] = useState(tabs?.officeVisit); // teleVisit

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    defaultValues: {
      appointmentDate: '',
      reasonForVisit: '',
      preferredTime: [],
      flexibleWithDate: false,
      additionalNotes: '',
    },
  });

  const handleRequestAppointment = data => {
    console.log('Request Appointment Data: ', data);
    // do something here then close the modal
    // handleClose();
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
          className={`px-3 py-2.5 rounded-lg text-lg font-semibold ${activeTab === tab ? activeTabStyles : inactiveTabStyles
            }`}>
          {tab}
        </button>
      ))}
    </div>
  );

  if (!open) return null;

  return (
    <PopupWrapper
      title="Request Appointment"
      isOpen={open}
      onClose={handleClose}
      headerStyle="py-7"
      titleClassName="text-primary"
      modalStyle="max-w-200">
      <Tabs options={tabs} activeTab={activeTab} onTabClick={handleTabClick} />

      <div>
        <SectionTitle title="Appointment Date" />
        <DatePickerInput
          name={'appointmentDate'}
          control={control}
          rules={{
            required: 'Appointment Date is required',
          }}
          error={errors['appointmentDate']}
        />
      </div>

      <div>
        <SectionTitle title="Reason for Visit" />
        <SelectBox
          options={SELECT_OPTIONS.reasonForVisitOptions}
          label="Reason for Visit"
          id="reasonForVisit"
          control={control}
          name="reasonForVisit"
          register={register}
          rules={{
            required: 'Reason for Visit is required',
          }}
          error={errors['reasonForVisit']}
        />
      </div>

      <div>
        <SectionTitle title="Preferred Time" showSteric={false} />
        <Checkbox
          control={control}
          name="preferredTime"
          label="Preferred Time"
          options={preferredTimeOptions}
          multiple={true}
          wrapperClassName="ml-3"
        />
      </div>

      <div className="flex flex-row justify-between items-center p-5 mt-8 rounded-lg bg-[#F9FAFB]">
        <p className="text-lg font-medium text-text-dark-gray">
          Flexible with Date
        </p>
        <Switch control={control} name="flexibleWithDate" />
      </div>

      <TextArea
        label="Additional Notes"
        placeholder="Add any special requests or notes here..."
        name="additionalNotes"
        control={control}
        error={errors['additionalNotes']}
        textAreaClassName="h-32!"
        wrapperClassName="mt-8!"
      />

      <div className="flex justify-end gap-4 mt-12">
        <Button title="Cancel" onClick={handleClose} variant="secondary" />
        <Button
          title="Request Appointment"
          onClick={handleSubmit(handleRequestAppointment, onFormError)}
          disabled={isSubmitting || !isValid}
        />
      </div>
    </PopupWrapper>
  );
}
export default RequestAppointment;
