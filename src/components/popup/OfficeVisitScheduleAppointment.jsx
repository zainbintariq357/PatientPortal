import { useCallback } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Controller, useForm } from 'react-hook-form';
import Button from '../shared/Button';
import PopupWrapper from '../shared/PopupWrapper';

import CustomCalendar from '../shared/CustomCalendar';

const availableTimeSlots = [
    '08:15 AM',
    '09:00 AM',
    '10:30 AM',
    '11:15 AM',
    '01:00 PM',
    '02:30 PM',
    '03:15 PM',
    '04:00 PM',
];

function OfficeVisitScheduleAppointment({ open, onClose }) {
    const {
        control,
        handleSubmit,
        reset,
        formState: { isSubmitting, isValid, errors },
    } = useForm({
        defaultValues: {
            appointmentDate: new Date(),
            selectedTime: '',
        },
    });

    const handleDone = data => {
        console.log('Done Data: ', data);
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
            title="Office visit Schedule Appointment"
            isOpen={open}
            onClose={handleClose}
            modalStyle="max-w-192 max-h-160!"
            titleClassName="text-xl font-medium">
            <div className="flex flex-row gap-8 w-full min-h-93 mt-6">
                <div className="w-1/2 bg-red-100 flex">
                    <CustomCalendar control={control} name="appointmentDate" />
                </div>
                <div className="w-1/2 pb-6">
                    <p className="text-text-gray pb-4.5 ">
                        What time works best? (EST Time Zone)
                    </p>
                    <div className="max-h-85 overflow-y-scroll">
                        <Controller
                            control={control}
                            name="selectedTime"
                            rules={{
                                validate: value => value !== '' || 'Please select a time slot',
                            }}
                            errors={errors['selectedTime']}
                            render={({ field: { onChange, value } }) => (
                                <div className="flex flex-col gap-4.5">
                                    {availableTimeSlots.map(time => (
                                        <button
                                            key={time}
                                            type="button"
                                            className={`w-full px-4.5 py-4 border rounded-sm flex justify-self-start ${value === time ? 'border-primary' : 'border-border'}`}
                                            onClick={() => onChange(time)}>
                                            <p className="text-text-dark-gray text-sm">{time}</p>
                                        </button>
                                    ))}
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-4 mt-8">
                <Button
                    title="Done"
                    onClick={handleSubmit(handleDone, onFormError)}
                    disabled={isSubmitting || !isValid}
                    className="min-w-28 py-3"
                />
            </div>
        </PopupWrapper>
    );
}
export default OfficeVisitScheduleAppointment;
