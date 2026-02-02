
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextInput from './TextInput';
import SelectBox from './SelectBox';
import OTPVerification from '../Login/OTPVerification';
import DatePickerInput from './DatePickerInput';


const PatientRegistrationForm = ({ type, title, subtitle, fields, LoadPrevious }) => {

	const [showOtp, setShowOtp] = useState(false);

	const { register, control, handleSubmit, formState, watch } = useForm({
		defaultValues: fields.reduce((acc, field) => {
			acc[field.name] = field.defaultValue ?? "";
			return acc;
		}, {})
	});

	const onSubmit = (data) => {
		console.log("Patient Registration Data: ", data);
		setShowOtp(true);
	}

	if (showOtp) {
		return <OTPVerification OTPCallback={() => setShowOtp(false)} />
	}

	const newpassword = watch("newPassword");

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='mt-6 space-y-4'>
			<h1 className='font-bold text-3xl mt-4'>{title}</h1>
			<p className='text-gray-600 text-base mt-2'>{subtitle}</p>

			{
				fields.map((field) => {

					let rules = { ...field.rules };

					if (field.name == "confirmPassword") {
						rules = {
							...rules,
							validate: (value) => (
								value === newpassword || "Password does not match	"
							)
						}
					}

					if (field.type == "Select") {
						return (
							<SelectBox
								name={field.name}
								register={register}
								placeholder={field.label}
								control={control}
								rules={rules}
								options={field.options}
								error={formState.errors[field.name]}
								selectClassName={field.className}
							/>
						)
					}

					if (field.type == "DatePicker") {
						return (
							<DatePickerInput
								name={field.name}
								placeholder={field.label}
								control={control}
								rules={rules}
								error={formState.errors[field.name]}
								datePickerClassName={field.className}
								placeholderText={field.label}
							/>
						)
					}

					return (
						<TextInput
							name={field.name}
							control={control}
							placeholder={field.label}
							register={register}
							rules={rules}
							error={formState.errors[field.name]}
							length={field.length}
							inputClassName={field.className}
						/>
					)
				})
			}
			{
				type == "activation" ?
					<div className='flex'>
						<button type='submit' className='border w-full border-blue-600 px-6 py-2 text-xl font-semibold rounded-full font-semibold text-blue-600 bg-blue-500 text-white cursor-pointer w-2/5'> Proceed </button>
					</div>
					:
					<div className='flex justify-between items-center mt-8'>
						<button type='button' className='border border-blue-600 px-6 py-2 text-sm font-semibold rounded-full text-blue-600 cursor-pointer w-1/5' onClick={() => LoadPrevious()} > Back </button>
						<button type='submit' className='border border-blue-600 px-6 py-2 text-xl font-semibold rounded-full font-semibold text-blue-600 bg-blue-500 text-white cursor-pointer w-2/5'> Register </button>
					</div>

			}


		</form>
	)
}


export default PatientRegistrationForm;