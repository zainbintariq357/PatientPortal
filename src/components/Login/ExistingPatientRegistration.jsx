import React from 'react';
import portal from '../../assets/portal.jpg';
import PracticeEhrLogo from '../../assets/practiceEhrLogo.svg?react';
import Footer from '../Footer/Footer.jsx';
import PatientRegistrationForm from '../shared/PatientRegistrationForm.jsx';

import SELECT_OPTIONS from '../../Constants/index.js';



const ExistingPatientRegistration = ({ onBack }) => {

	return (
		<>
			<div className="min-h-screen flex flex-col lg:flex-row p-5 gap-6">
				<div className=' w-full lg:w-2/3 rounded-lg overflow-hidden'>
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
							title={"Exisiting Patient Registration"}
							subtitle={"Create Your Account"}
							fields={SELECT_OPTIONS.existingPatientFields}
							LoadPrevious={onBack}
						/>
					</div>
					<Footer />

				</div>
			</div>
		</>
	)
}

export default ExistingPatientRegistration;
