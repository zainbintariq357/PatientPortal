import React from 'react';
import RecentActivity from '../components/Dashboard/RecentActivity.jsx';
import AccountBalance from '../components/Dashboard/AccountBalance.jsx';
import AppointmentMessagesSection from '../components/Dashboard/AppointmentMessagesSection.jsx';

import ProfileIcon from '../assets/profile.svg?react';
import ReloadIcon from '../assets/icons/svgs/ReloadIcon.jsx';


const Dashboard = () => {

	return (
		<div className="min-h-screen bg-gray-50">
			<div className=' flex flex-col'>
				<div className='flex flex-row justify-between p-4'>
					<div>
						<h3 className='text-xl md:text-2xl font-semibold text-blue'>Sarah Smith</h3>
						<p className='text-xs md:text-base text-gray'>Welcome to Plano Supreme Primary Care. Access your medical information and request appointments securely.</p>
					</div>
					<div className='flex flex-col bg-white border-light-gray border rounded-lg px-4 py-2'>
						<span className='text-xs ms:text-sm font-medium text-brand-blue'>Patient Access</span>
						<div className='flex justify-between gap-4 items-center pt-2'>
							<div className='flex items-center max-w-[110px]'>
								<ProfileIcon className="w-10 h-10 shrink-0" />
								<span className='text-xs sm:text-sm font-medium ml-2 break-words'>Sara smith</span>
							</div>
							<button aria-label='Swicth Patient' className='cursor-pointer'>
								<ReloadIcon className="text-blue w-4 h-4" />
							</button>

							<div className='flex items-center max-w-[120px]'>
								<ProfileIcon className="w-10 h-10 shrink-0" /> <span className='text-xs sm:text-sm font-medium ml-2 break-words'>Emma smith</span>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col space-y-4 p-4">
					<AccountBalance />

					<RecentActivity />

					<AppointmentMessagesSection />
				</div>
			</div>

		</div>
	)
}

export default Dashboard;