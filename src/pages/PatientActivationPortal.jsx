// import './App.css'
import React from 'react';
import portal from '../assets/portal.jpg';
import PracticeEhrLogo from '../assets/practiceEhrLogo.svg?react';
import PatientRegistrationForm from '../components/shared/PatientRegistrationForm';
import Footer from '../components/Footer/Footer';
import SELECT_OPTIONS from '../Constants';

const PatientActivationPortal = () => {

	return (
		<>
			<div className="min-h-screen  flex flex-col lg:flex-row p-5 gap-6">
				<div className='w-full lg:w-2/3 rounded-lg overflow-hidden'>
					<img
						src={portal}
						alt='Patient Portal'
						className='w-full h-full object-cover rounded-lg'
					/>
				</div>
				<div className='w-full lg:w-1/3 flex flex-col'>
					<div className='w-[201px] mt-2'>
						<PracticeEhrLogo className="w-full h-full" />
					</div>

					<div className='flex flex-col mb-2'>
						<PatientRegistrationForm
							type="activation"
							title={"Welcome to Our Patient Portal"}
							subtitle={"Your health journey begins here. Access your medical records, schedule appointments, and manage your healthcare needs securely."}
							fields={SELECT_OPTIONS.activationFieldData}
						/>
					</div>
					<Footer />


				</div>
			</div>
		</>
	)
}

export default PatientActivationPortal;
