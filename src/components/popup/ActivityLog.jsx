import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import DatePickerInput from '../shared/DatePickerInput';
import PopupWrapper from '../shared/PopupWrapper';
import SelectBox from '../shared/SelectBox';
import Button from '../shared/Button';

const pages = [
	{ label: 'Dashboard', value: 'dashboard' },
	{ label: 'Measurements', value: 'measurements' },
	{ label: 'Reports', value: 'reports' },
];

const actions = [
	{ label: 'Created', value: 'created' },
	{ label: 'Updated', value: 'updated' },
	{ label: 'Deleted', value: 'deleted' },
];

const labelClassName = 'text-sm! font-normal! text-text-gray!';
const selectCommonProps = {
	selectClassName: 'max-h-10! border-border!',
	labelClassName,
	selectDefaultValue: '- Select -',
};

function ActivityLog({ open, onClose }) {
	const {
		register,
		control,
		handleSubmit,
		reset,
		formState: { isSubmitting, isDirty },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			fromDate: null,
			toDate: null,
			page: '',
			action: '',
		},
	});

	const handleClose = useCallback(() => {
		onClose();
		reset();
	}, [onClose, reset]);

	const handleSearch = useCallback(
		data => {
			console.log('Search Data:', data);
			handleClose();
		},
		[handleClose],
	);

	return (
		<PopupWrapper
			title="Activity Log"
			isOpen={open}
			onClose={handleClose}
			titleClassName="text-xl!"
			modalStyle="w-256! pb-15">
			<div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4.5">
				<DatePickerInput
					label="From Date"
					name="fromDate"
					control={control}
					labelClassName={labelClassName}
					datePickerClassName="border-border! h-10!"
					wrapperClassName="flex-1"
				/>
				<DatePickerInput
					label="To Date"
					name="toDate"
					control={control}
					labelClassName={labelClassName}
					datePickerClassName="border-border! h-10!"
					wrapperClassName="flex-1"
				/>
				<SelectBox
					{...selectCommonProps}
					options={pages}
					name="page"
					label="Page"
					control={control}
					register={register}
					wrapperClassName="flex-1"
				/>
				<SelectBox
					{...selectCommonProps}
					options={actions}
					name="action"
					label="Action"
					control={control}
					register={register}
					wrapperClassName="flex-1"
				/>
			</div>
			<div className="flex justify-end">
				<Button
					title="Search"
					onClick={handleSubmit(handleSearch)}
					disabled={isSubmitting || !isDirty}
					className="mt-6 px-11!"
				/>
			</div>
			<div className="mt-6 border overflow-hidden border-border rounded-[10px] -mx-1!">
				<h5 className="font-semibold text-lg text-text-dark-gray pl-7 py-8">
					Log
				</h5>
				<div className="min-h-119.5 bg-gray-100 flex items-center justify-center">
					<p>table design/data here once table component is ready</p>
				</div>
			</div>
		</PopupWrapper>
	);
}

export default ActivityLog;
