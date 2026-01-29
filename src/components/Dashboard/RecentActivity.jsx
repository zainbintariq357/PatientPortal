
import CalenderIcon from '../../assets/icons/svgs/CalenderIcon';
import MessageIcon from '../../assets/messageIcon.svg?react';
import ReminderIcon from '../../assets/icons/svgs/ReminderIcon.jsx';
import LabIcon from '../../assets/icons/svgs/LabIcon.jsx';
import AppointmentCalenderIcon from '../../assets/icons/svgs/AppointmentCalenderIcon';
import CommentIcon from '../../assets/icons/svgs/CommentIcon';

const RecentActivity = () => {

	const RecentActivities = [
		{
			type: "lab",
			label: "Lab Results Updated",
			detail: "Blood work results are now available",
			time: "2h ago"
		},
		{
			type: "message",
			label: "Message from Dr. Johnson",
			detail: "Follow-up about your last visit",
			time: "5h ago"
		},
		{
			type: "appointment",
			label: "Appointment Confirmed",
			detail: "Annual check-up with Dr. Smith",
			time: "1d ago"
		},

		{
			type: "lab",
			label: "Lab Results Updated",
			detail: "Blood work results are now available",
			time: "2h ago"
		},
		{
			type: "message",
			label: "Message from Dr. Johnson",
			detail: "Follow-up about your last visit",
			time: "5h ago"
		},
		{
			type: "appointment",
			label: "Appointment Confirmed",
			detail: "Annual check-up with Dr. Smith",
			time: "1d ago"
		}
	]

	const ReminderItems = [
		{
			label: "Refill Medication",
		},
		{
			label: "Schedule Annual Check-up",
		},
		{
			label: "Refill Medication",
		},
		{
			label: "Schedule Annual Check-up",
		}
	]

	return (
		<div className='flex flex-col lg:flex-row  gap-3'>

			<section className='flex flex-col overflow-y-auto h-75 w-full lg:w-2/3 bg-white rounded pt-4 pl-4'>
				<header className='text-xl ml-2'>Recent Activity</header>
				{
					RecentActivities.map((activity, index) => {
						return (
							<article key={index} className='flex flex-row items-center gap-4 pl-4 py-3'>
								<div className='bg-[var(--color-gray-50)] py-2 px-2 rounded-lg'>
									{
										activity.type === "lab" ? <LabIcon className="text-[var(--color-blue)]" /> : activity.type === "message" ? <CommentIcon className="text-[var(--color-text-green)]" /> : <CalenderIcon className="text-[var(--color-brand-blue)]" />
									}
								</div>
								<div className='flex flex-col'>
									<h3 className='text-base text-[var(--color-black)]'>{activity.label}</h3>
									<p className='text-[var(--color-text-light-gray)] text-sm' >{activity.detail}</p>
									<p className='text-[var(--color-gray-text)] text-xs'>{activity.time}</p>
								</div>
							</article>
						)
					})
				}
			</section>

			<div className='w-full lg:w-1/3 flex flex-col gap-3 rounded'>
				<article className="bg-white p-3 rounded flex flex-col gap-2 min-h-[9rem]">
					<header className="flex justify-between items-center">
						<h3 className='text-lg font-medium'>Next Appointment</h3>
						<AppointmentCalenderIcon className="text-[var(--color-blue)]" width={17} height={20} />
					</header>
					<div>
						<time
							dateTime="2025-03-15"
							className='text-2xl font-semibold text-[var(--color-blue)]'
						>
							March 15, 2025

						</time>
						<p className='text-base'>10:30 AM with Dr. Smith</p>
					</div>
				</article>


				<section className='flex flex-col bg-white p-3 w-full rounded gap-6 min-h-[9rem] h-[120px] overflow-y-auto'>
					<header className='text-lg font-medium'>Reminder</header>
					<div className='flex flex-col gap-3'>

						{
							ReminderItems.map((item, index) => {
								return (
									<article key={index} className='flex justify-between items-center'>
										<div className='flex items-center space-x-3' >
											<ReminderIcon className="text-[var(--color-text-green)]" />
											<p className='text-base'>{item.label}</p>
										</div>
										<button className='text-base text-[var(--color-blue)] font-medium'>Resolve</button>
									</article>
								)
							})
						}
					</div>
				</section>
			</div>
		</div>
	)
}

export default RecentActivity;