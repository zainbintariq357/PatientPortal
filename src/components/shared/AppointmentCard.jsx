import ProfileIcon from '../../assets/profile.svg?react';
import AppointmentCalenderIcon from '../../assets/icons/svgs/AppointmentCalenderIcon';
import OfficeVisitIcon from '../../assets/icons/svgs/OfficeVisitIcon';
import TeleVisitIcon from '../../assets/icons/svgs/TeleVisitIcon';
import TimeIcon from '../../assets/icons/svgs/TimeIcon';

const AppointmentCard = ({ appointment, onCancelRequest }) => {
	const isTeleVisit = appointment.type === "Tele Visit";

	return (
		<>
			<div className="flex flex-col card gap-2 my-4 shadow-lg p-4 rounded-md" key={appointment.id} >
				<div className="flex justify-between">
					<div className="flex items-center gap-1">
						{
							isTeleVisit ? <TeleVisitIcon className="blue" /> : <OfficeVisitIcon className="text-[var(--color-text-light-gray)]" />
						}
						<p className='text-base'>{appointment.type}</p>
					</div>
					{
						appointment.name != "past" && (
							<button
								className='text-[var(--color-red)] font-medium cursor-pointer'
								onClick={() => {
									window.scrollTo({ top: 0, behavior: 'smooth' });
									onCancelRequest(appointment)
								}}>
								Cancel Request
							</button>
						)
					}
				</div>
				<p className='text-[var(--color-blue-medium)] font-medium text-base'>{appointment.detail}</p>
				<div className='flex items-center gap-1'>
					<AppointmentCalenderIcon width={14} height={16} />
					<time dateTime="">{appointment.date}</time>
					<TimeIcon className="ml-2" />
					<p>{appointment.time}</p>
				</div>
				<div className='flex  flex-row justify-between gap-2'>
					<div className='inline-flex gap-2'>
						<ProfileIcon /> {appointment.doctorName}
					</div>
					{
						appointment.name == "checkIn" && (
							<div>
								<button className='px-4 py-1 bg-blue-500 text-white text-base cursor-pointer rounded-full'>Check In</button>
							</div>
						)
					}
				</div>
			</div>
		</>
	)
}
export default AppointmentCard;