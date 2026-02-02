import MessageProviderIcon from '../../assets/messageProviderIcon.svg?react';
import AppointmentIcon from '../../assets/icons/svgs/AppointmentIcon';
import CalenderIcon from '../../assets/icons/svgs/CalenderIcon';
import CommentFillIcon from '../../assets/icons/svgs/CommentFillIcon';

const RequestAppointment = () => {
	return (
		<>
			<section className='flex flex-col bg-white gap-4 p-4 rounded'>
				<div className='flex justify-between'>
					<span className='text-xl'>Requested Appointments</span>
					<button className='text-blue text-sm'>View All</button>
				</div>
				<div className='flex flex-col'>
					<article className='flex flex-col md:flex-row justify-between space-y-6'>
						<div className='flex space-x-4 items-center'>
							<div className='bg-gray-50 py-2 px-2 rounded-lg'>
								<CalenderIcon className="text-brand-blue" />
							</div>
							<div className='flex flex-col'>
								<span className='text-base text-black'>Office Visit</span>
								<span className='text-blue'>General Check-up</span>
							</div>
						</div>

						<div className='flex flex-col pl-10 pb-2 md:pl-0 md:pb-0'>
							<div className='flex flex-row justify-start md:justify-between space-x-4'>
								<p className='text-sm'>March 12,2025</p>
								<p className='text-sm'>09:00 AM</p>
							</div>
							<p className='text-red-500 text-base text-appointment-cancel font-medium'>Cancel Request</p>
						</div>
					</article>


					<article className='flex flex-col md:flex-row justify-between'>
						<div className='flex space-x-4 items-center'>
							<div className='bg-gray-50 py-2 px-2 rounded-lg'>
								<CalenderIcon className="text-text-green" />
							</div>
							<div className='flex flex-col'>
								<span>Tele Visit</span>
								<span className='text-blue'>Back Pain</span>
							</div>
						</div>

						<div className='flex flex-col pl-10 py-2 md:pl-0 md:py-0'>
							<div className='flex flex-row justify-start md:justify-between space-x-4'>
								<p className='text-sm'>March 12,2025</p>
								<p className='text-sm'>09:00 AM</p>
							</div>
							<p className='text-red-500 text-base text-appointment-cancel font-medium' >Cancel Request</p>
						</div>
					</article>
				</div>
			</section>

			<div className='flex flex-col lg:flex-row justify-between gap-4 space-x-4 p-2'>
				<div className='flex w-full lg:w-1/2 flex-col items-start bg-white gap-1 p-4 rounded'>
					<div className='inline-flex p-3 rounded bg-gray-50 rounded-full'>
						<AppointmentIcon className="text-text-green" />
					</div>
					<span className='text-base font-medium text-black'>Request Appointment</span>
					<span className='text-sm text-gray-text'>Schedule your next appointment</span>
				</div>

				<div className='flex w-full lg:w-1/2 flex-col items-start bg-white gap-1 p-4 rounded'>
					<div className='inline-flex bg-light-blue p-3  rounded-full'>
						<CommentFillIcon className="text-blue" />
					</div>
					<span className='text-base font-medium text-black'>Message Provider</span>
					<span className='text-sm text-gray-text'>Get in touch with your provider</span>
				</div>
			</div>
		</>
	)
}

export default RequestAppointment;