import { useState } from 'react';
import MessageProviderIcon from '../../assets/messageProviderIcon.svg?react';
import AppointmentIcon from '../../assets/icons/svgs/AppointmentIcon';
import CalenderIcon from '../../assets/icons/svgs/CalenderIcon';
import RequestAppointment from '../popup/RequestAppointment';
import CreateMessagePopup from '../popup/CreateMessagePopup';

const AppointmentMessagesSection = () => {

	const [requestedAppointments, setRequestedAppointments] = useState(false)
	const [createMessage, setCreateMessage] = useState(false)

	const appoitmentList = [
		{
			id: '1',
			type: "office visit",
			subType: "General Check-up",
			date: "March 12,2025",
			time: "09:00 AM",
		},
		{
			id: '2',
			type: "Tele Visit",
			subType: "Back Pain",
			date: "March 12,2025",
			time: "09:00 AM",
		}
	]

	const openPopup = (type) => {
		if (type === "Request Appointment") {
			setRequestedAppointments(true);
		} else if (type === "Message Provider") {
			setCreateMessage(true);
		}
	}

	const CardSection = ({ title, detail }) => {
		return (
			<div
				className='flex w-full lg:w-1/2 flex-col items-start bg-white gap-1 p-4 rounded cursor-pointer'
				onClick={() => openPopup(title)}
			>
				<div className='inline-flex p-3 rounded bg-[var(--color-gray-50)] rounded-full'>
					{
						title == "Message Provider" ? <MessageProviderIcon className="text-blue" /> : <AppointmentIcon className="text-green" />
					}
				</div>
				<span className='text-base font-medium text-black'>{title}</span>
				<span className='text-sm text-gray-text'>{detail}</span>
			</div>
		)
	}

	const AppointmentDetail = ({ type, detail, date, time }) => {
		return (
			<article className='flex flex-col md:flex-row justify-between space-y-6'>
				<div className='flex space-x-4 items-center'>
					<div className='bg-gray-50 py-2 px-2 rounded-lg'>
						{
							type === "Tele Visit" ? <CalenderIcon className="text-green" /> : <CalenderIcon className="text-brand-blue" />
						}
					</div>
					<div className='flex flex-col'>
						<span className='text-base text-black'>{type}</span>
						<span className='text-blue'>{detail}</span>
					</div>
				</div>

				<div className='flex flex-col pl-10 pb-2 md:pl-0 md:pb-0'>
					<div className='flex flex-row justify-start md:justify-between space-x-4'>
						<p className='text-sm'>{date}</p>
						<p className='text-sm'>{time}</p>
					</div>
					<p className='text-red-500 text-base text-appointment-cancel font-medium'>Cancel Request</p>
				</div>
			</article>
		)
	}

	return (
		<>
			<RequestAppointment open={requestedAppointments} onClose={() => setRequestedAppointments(false)} />
			<CreateMessagePopup open={createMessage} onClose={() => setCreateMessage(false)} />

			<section className='flex flex-col bg-white gap-4 p-4 rounded'>
				<div className='flex justify-between'>
					<span className='text-xl'>Requested Appointments</span>
					<button className='text-blue text-sm'>View All</button>
				</div>

				<div className='flex flex-col'>
					{
						appoitmentList.map((appointment) => (
							<AppointmentDetail key={appointment.id} type={appointment.type} detail={appointment.subType} date={appointment.date} time={appointment.time} />
						))
					}
				</div>
			</section>

			<div className='flex flex-col lg:flex-row justify-between gap-4 space-x-4 p-2'>
				<CardSection title="Request Appointment" detail="Schedule your next appointment" />
				<CardSection title="Message Provider" detail="Get in touch with your provider" />
			</div>
		</>
	)
}

export default AppointmentMessagesSection;