import TextInput from "../shared/TextInput";
import { useForm } from "react-hook-form";
import DatePickerInput from "../shared/DatePickerInput";
import SelectBox from "../shared/SelectBox";
import SELECT_OPTIONS from "../../Constants";
import Switch from "../shared/Switch";
import VisaCard from '../../assets/icons/svgs/VisaCard';
import DeleteIcon from '../../assets/icons/svgs/DeleteIcon';

const SettingDashboard = () => {

	const { genderOptions, representsEmail, insurancesInfo, paymentMethods, maritalOptions, stateOptions, primaryContactOptions } = SELECT_OPTIONS;

	const { register, control, handleSubmit } = useForm({
		defaultValues: {
			accountNo: "",
			eStatement: false
		}
	});

	const maskedCardNumber = (cardNumber) => {
		if (!cardNumber) return "";
		const digitsOnly = cardNumber.replace(/\D/g, "");
		const last4Digit = digitsOnly.slice(-4);
		return `•••• •••• •••• ${last4Digit}`;
	}


	const InsuranceRow = ({ label, value, isFirst }) => {

		const padding = isFirst ? 'pl-4' : '';

		return (
			<div className={padding}>
				<p className="font-bold bg-[var(--color-light-gray)] py-2">
					<span className={padding}>
						{label}
					</span>
				</p>
				<p className="pt-2">
					<span className={padding}>
						{value}
					</span>
				</p>
			</div>
		)
	}

	const PaymentMethod = ({ cardNumber, expiryDate }) => {
		return (
			<div className="flex flex-col border border-light-gray p-4 rounded-lg">
				<div className="flex justify-between">
					<VisaCard className="text-blue" />
					<DeleteIcon className="cursor-pointer text-red" />
				</div>
				<p>{maskedCardNumber(cardNumber)}</p>
				<p>Expires {expiryDate} </p>
			</div>
		)
	}

	const updateDemographic = (data) => {
		console.log("Demographic Data: ", data);
	}

	const Card = ({ title, children }) => {
		return (
			<div className="bg-white m-4 rounded-lg shadow-sm px-4 py-4">
				<h4 className="text-lg font-medium py-4">{title}</h4>
				{children}
			</div>
		)
	}

	return (

		<>
			<form onSubmit={handleSubmit(updateDemographic)} className="flex flex-col bg-white m-4 rounded-lg shadow-sm">
				<div className="flex justify-between items-center p-4">
					<h3 className="text-base md:text-lg text-black font-medium">Demographic</h3>
					<button type="submit" className="text-white bg-blue rounded-full py-2 px-4 cursor-pointer text-sm  md:text-base" >Save Changes</button>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
					<div>
						<TextInput
							name={"account"}
							control={control}
							placeholderAsteric={false}
							disabled={false}
							register={register}
							label={"Account #"}
							labelClassName={"mb-1! text-base! font-normal"}
							inputClassName="border-light-gray! h-10!"
						/>
					</div>
					<div>
						<TextInput
							name={"fullName"}
							control={control}
							placeholderAsteric={false}
							disabled={false}
							label={"Full Name"}
							labelClassName={"mb-1! text-base! font-normal"}
							inputClassName="border-[var(--color-light-gray)]! h-10!"
						/>
					</div>
					<div>
						<DatePickerInput
							name={'birthDate'}
							control={control}
							label="Date of Birth"
							labelClassName="mb-0! text-base! font-normal"
							datePickerClassName="border-light-gray! h-10!"
						/>
					</div>
					<div>
						<SelectBox
							options={genderOptions}
							label="Gender"
							control={control}
							name="gender"
							register={register}
							labelClassName="mb-0! text-base! font-normal"
							selectClassName="h-10!"
						/>
					</div>

					<div>
						<TextInput
							name={"ssn"}
							control={control}
							placeholderAsteric={false}
							label={"SSN"}
							labelClassName={"mb-0! text-base! font-normal"}
							inputClassName="border-light-gray! h-10!"
						/>
					</div>

					<div>
						<SelectBox
							options={maritalOptions}
							label="Marital Status"
							control={control}
							name="maritalStatus"
							register={register}
							labelClassName="mb-0! font-normal"
							selectClassName="h-10!"
						/>
					</div>


					<div>
						<TextInput
							name={"address"}
							control={control}
							placeholderAsteric={false}
							disabled={false}
							label={"Address"}
							labelClassName={"mb-1! text-base! font-normal"}
							inputClassName="border-light-gray! h-10!"
						/>
					</div>


					<div className="flex gap-3">
						<div className="flex-1">
							<TextInput
								name={"city"}
								control={control}
								placeholderAsteric={false}
								disabled={false}
								label={"City"}
								labelClassName={"mb-1! text-base! font-normal"}
								inputClassName="border-light-gray! h-10!"
							/>
						</div>
						<div className="flex-1">
							<SelectBox
								options={stateOptions}
								label="State"
								control={control}
								name="state"
								register={register}
								placeholder={false}
								labelClassName="mb-0! font-normal"
								SelectClassName="border-light-gray! h-10!"
							/>
						</div>
					</div>

					<div>
						<TextInput
							name={"zipCode"}
							control={control}
							placeholderAsteric={false}
							disabled={false}
							label={"Zip Code"}
							labelClassName={"mb-1! text-base! font-normal"}
							inputClassName="border-light-gray! h-10!"
						/>
					</div>

					<div>
						<TextInput
							name={"cellPhone"}
							control={control}
							placeholderAsteric={false}
							disabledce={false}
							label={"Cell Phone"}
							labelClassName={"mb-1! text-base! font-normal"}
							inputClassName="border-light-gray! h-10!"
						/>
					</div>

					<div>
						<TextInput
							name={"homePhone"}
							control={control}
							placeholderAsteric={false}
							disabled={false}
							label={"Home Phone"}
							labelClassName={"mb-1! text-base! font-normal"}
							inputClassName="border-light-gray! h-10!"
						/>
					</div>

					<div>
						<TextInput
							name={"workPhone"}
							control={control}
							placeholderAsteric={false}
							disabled={false}
							label={"Work Phone"}
							labelClassName={"mb-1! text-base! font-normal"}
							inputClassName="border-light-gray! h-10!"
						/>
					</div>

					<div>
						<SelectBox
							options={primaryContactOptions}
							label="Primary Contact"
							control={control}
							name="primaryContact"
							register={register}
							placeholder={false}
							labelClassName="mb-0! font-normal"
							selectClassName="border-light-gray! h-10!"
						/>
					</div>

					<div>
						<TextInput
							name={"email"}
							control={control}
							placeholderAsteric={false}
							disabled={false}
							label={"Email"}
							labelClassName={"mb-1! text-base! font-normal"}
							inputClassName="border-light-gray! h-10!"
						/>
					</div>

					<div className="flex pt-0 md:pt-8">
						<Switch control={control} name="eStatement" />
						<span className="text-sm text-text-gray ml-5">
							E-Statement
						</span>
					</div>
				</div>
			</form>


			<Card title={"Insurance Plan"}>
				<div className="h-40 overflow-x-auto overflow-y-auto">
					{
						insurancesInfo.map((item, index) => (
							<div key={index} className="grid grid-flow-col auto-cols-fr min-w-max py-4">
								<InsuranceRow label={"Name"} value={item.name} isFirst={true} />
								<InsuranceRow label={"DOB"} value={item.dob} />
								<InsuranceRow label={"Gender"} value={item.gender} />
								<InsuranceRow label={"Relationship"} value={item.relationship} />
								<InsuranceRow label={"Plan"} value={item.plan} />
								<InsuranceRow label={"ID"} value={item.planId} />
								<InsuranceRow label={"Co-Pay"} value={item.copay} />
								<InsuranceRow label={"Effective Date"} value={item.effectiveDate} />
							</div>
						))
					}
				</div>
			</Card>


			<Card title={"Payment Methods"}>
				<div className="h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-4 px-4">
					{
						paymentMethods.map((item, index) => (
							<div key={index}>
								<PaymentMethod cardNumber={item.cardNumber} expiryDate={item.expiryDate} />
							</div>
						))
					}
				</div>
			</Card>


			<Card title={"My Representatives"}>
				<div className="grid grid-cols-1 md:grid-cols-2 py-4 gap-4 px-4 gap-2">
					<div className="border border-light-gray px-3 h-32 rounded-lg">
						<h3 className="font-medium py-2">Whom I Represent</h3>
						<div className="flex justify-between bg-gray-50 p-4 mt-2">
							<p className="font-medium">John Doe</p>
							<DeleteIcon className="cursor-pointer text-red" />
						</div>
					</div>

					<div className="border border-light-gray p-2 rounded-lg">
						<h3 className="font-medium py-2">Who Represents Me</h3>
						<div className="flex bg-gray-50 items-center rounded p-4">
							<p className="font-medium">Email</p>
							<input className="flex-1 border border-light-gray mx-3 outline-none p-2" />
							<button className="text-blue-medium text-sm cursor-pointer">Send Request</button>
						</div>
						<div className="bg-gray-50 h-20 overflow-y-auto mt-2 p-2">
							{
								representsEmail.map((item, index) => (
									<div key={index} className="flex justify-between">
										<p className="font-medium text-sm md:text-base">{item.label}</p>
										<button className="text-blue-medium cursor-pointer text-xs md:text-sm">Resend Email</button>
									</div>
								))
							}
						</div>
					</div>
				</div>
			</Card>

			<Card title={"Account Settings"}>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-14 p-4 items-center">
					<div>
						<TextInput
							name={"userId"}
							control={control}
							placeholderAsteric={false}
							disabled={false}
							register={register}
							label={"User ID"}
							labelClassName={"mb-1! text-base! font-normal"}
							inputClassName="border-[var(--color-light-gray)]! h-10!"
						/>
					</div>
					<div className="my-2 sm:mt-0">
						<TextInput
							name={"oldPassword"}
							control={control}
							placeholderAsteric={false}
							disabled={false}
							label={"Old Password"}
							labelClassName={"mb-1! text-base! font-normal"}
							inputClassName="border-light-gray! h-10!"
						/>
					</div>

					<div className="flex pt-0 md:pt-6 my-2 sm:mt-0">
						<Switch control={control} name="eStatement" />
						<span className="text-sm text-text-gray ml-5">
							Share Info By API
						</span>
					</div>

					<div className="my-2 sm:mt-0">
						<TextInput
							name={"newPassword"}
							control={control}
							placeholderAsteric={false}
							disabled={false}
							label={"New Password"}
							labelClassName={"mb-1! text-base! font-normal"}
							inputClassName="border-light-gray! h-10!"
						/>
					</div>

					<div className="my-2 sm:mt-0">
						<TextInput
							name={"confirmPassword"}
							control={control}
							placeholderAsteric={false}
							disabled={false}
							label={"Confirm Password"}
							labelClassName={"mb-1! text-base! font-normal"}
							inputClassName="border-light-gray! h-10!"
						/>
					</div>
					<div className="pt-0 md:pt-6">
						<button type="submit" className="text-white bg-blue rounded-full py-2 px-4 cursor-pointer mt-2 sm:mt-0" >Update Password</button>
					</div>
				</div>
			</Card>
		</>

	)
}
export default SettingDashboard