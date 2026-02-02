import React from 'react';
import RecentActivity from '../components/Dashboard/RecentActivity.jsx';
import AccountBalance from '../components/Dashboard/AccountBalance.jsx';
import AppointmentMessagesSection from '../components/Dashboard/AppointmentMessagesSection.jsx';


const Dashboard = () => {

	return (
		<div className="min-h-screen bg-gray-50">
			<div className='mx-auto'>
				<div className='p-4'>
					<h3 className='text-xl md:text-2xl font-semibold text-blue'>Sarah Smith</h3>
					<p className='text-sm md:text-base text-gray'>Welcome to Plano Supreme Primary Care. Access your medical information and request appointments securely.</p>
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