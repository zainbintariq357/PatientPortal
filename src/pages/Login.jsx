import React, { useState } from 'react';
import portal from '../assets/portal.jpg';
import PracticeEhrLogo from '../assets/practiceEhrLogo.svg?react';
import NewPatientRegistration from '../components/Login/NewPatientRegistration';
import ExistingPatientRegistration from '../components/Login/ExistingPatientRegistration';
import Footer from '../components/Footer/Footer';
import TextInput from '../components/shared/TextInput';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';


const Login = () => {

	const navigate = useNavigate();

	const [view, setView] = useState('login');
	const { handleSubmit, control, formState } = useForm({
		defaultValues: {
			email: "",
			password: ""
		}
	});

	const createAccount = (type) => {
		setView(type)
	}

	const onSubmit = (data) => {
		console.log("Login Data: ", data);
		navigate("/dashboard")
	}


	return (
		<>
			{
				view == "new" ? <NewPatientRegistration onBack={() => setView("login")} /> : view == "existing" ? <ExistingPatientRegistration onBack={() => setView("login")} /> :
					<div className="min-h-screen flex flex-col lg:flex-row p-4 lg:p-5 gap-6">
						<div className='hidded lg:block lg:w-2/3 rounded-lg overflow-hidden'>
							<img
								src={portal}
								alt='Patient Portal'
								className='w-full h-full object-cover rounded-lg'
							/>
						</div>
						<div className='w-full lg:w-1/3 flex flex-col'>
							<div className='w-[201px] mt-2'>
								<PracticeEhrLogo className="w-full h-full object-cover" />
							</div>
							<div className='flex flex-col'>
								<h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Patient Portal</h1>
								<p className='text-gray-600 text-base'> Welcome back! Log into your account</p>

								<form onSubmit={handleSubmit(onSubmit)} className='mt-6 space-y-4'>
									<TextInput
										name={"email"}
										placeholder={"Email Address"}
										control={control}
										rules={{
											required: "Email is required",
											pattern: {
												value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
												message: "Invalid email address"
											}
										}}
										error={formState.errors.email}
										length={25}
									/>

									<TextInput
										name={"password"}
										placeholder={"Password"}
										control={control}
										rules={{ required: "Password is required" }}
										error={formState.errors.password}
										length={25}
									/>

									<p className='text-right text-blue-500 text-sm mt-4 cursor-pointer font-normal'> Forgot Password? </p>

									<button type='submit' className='w-full h-12 rounded-full mt-2 bg-blue-600 text-white mt-6 cursor-pointer'> Login </button>

								</form>

								<div className='flex flex-col gap-4 mt-2 '>
									<p className="text-base text-center lg:text-left">
										New Registered?
									</p>
									<div className="flex flex-col sm:flex-row gap-3 w-full">
										<button
											className="w-full sm:w-auto border border-blue-600 px-6 py-2 font-semibold rounded-full text-blue-600 text-sm cursor-pointer"
											onClick={() => createAccount("existing")}
										>
											Create Existing Patient
										</button>

										<button
											className="w-full sm:w-auto border border-blue-600 px-6 py-2 font-semibold rounded-full text-blue-600 text-sm cursor-pointer"
											onClick={() => createAccount("new")}
										>
											Create New Patient
										</button>
									</div>
								</div>
							</div>
							<Footer />
						</div>
					</div>
			}
		</>
	)
}

export default Login;
