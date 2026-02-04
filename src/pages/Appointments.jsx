import React, { useRef, useState } from 'react';
import ReloadIcon from '../assets/reloadIcon.svg?react';
import RequestedAppointments from '../components/Appointments/RequestedAppointments';
import SELECT_OPTIONS from '../Constants';
import PrevIcon from '../assets/prevIcon.svg?react';
import NextIcon from '../assets/nextIcon.svg?react';
import RequestAppointment from '../components/popup/RequestAppointment';
import OfficeVisitScheduleAppointment from '../components/popup/OfficeVisitScheduleAppointment';
import ScheduleAppointment from '../components/popup/ScheduleAppointment';
import Toast from '../components/toast/Toast';

const Appointments = () => {

	const [appointmentType, setAppointmentType] = useState('Requested');

	const [isRequestedAppointments, setIsRequestedAppointments] = useState(false);
	const [isTeleVisitAppointments, setIsTeleVisitAppointments] = useState(false);
	const [isScheduleAppointments, setIsScheduleAppointments] = useState(false);
	const [warning, setWarning] = useState(false);
	const [selectedAppointment, setSelectedAppointment] = useState(null);
	const { requestedAppointmentsData, upCommingAppointmentsData, pastAppointmentsData } = SELECT_OPTIONS;

	const warningRef = useRef();

	const spanclass = 'inline-flex items-center justify-center rounded-full text-sm w-6 h-6';
	const buttonclass = ' px-4 py-2 rounded-lg inline-flex items-center gap-1 cursor-pointer';

	const tabs = [
		{ title: 'Requested', count: 8 },
		{ title: 'Upcoming', count: 10 },
		{ title: 'Past', count: 10 },
	];

	const onCancelRequest = (data) => {
		setWarning(true);
		setSelectedAppointment(data);
		console.log("the selected appointment is", data);
		warningRef.current?.scrollIntoView({ behavior: 'smooth' });

	}

	const ShowCalenderPopup = (show) => {
		if (show) {
			setIsScheduleAppointments(false);
			setIsTeleVisitAppointments(true);
		} else {
			setIsScheduleAppointments(false);
		}
	}


	return (
		<div className='min-h-screen relative flex flex-col' ref={warningRef}>
			{
				warning && <div className='fixed sm:static md:absolute top-6 left-2/5 transform -translate-x-1/2 z-50 '>
					<Toast message='Are you sure you want to cancel the appointment request?' type="Warning" onClose={() => setWarning(false)} />
				</div>
			}

			<RequestAppointment open={isRequestedAppointments} onClose={() => setIsRequestedAppointments(false)} />

			<ScheduleAppointment open={isScheduleAppointments} onClose={(show) => ShowCalenderPopup(show)} />

			<OfficeVisitScheduleAppointment open={isTeleVisitAppointments} onClose={() => setIsTeleVisitAppointments(false)} />

			<div className="flex gap-2 justify-between bg-[var(--color-light-gray)] items-center p-4 border-b border-gray-300 p-4 mt-12 overflow-x-auto scrollbar-hide">
				<div>
					{
						tabs.map(({ title, index }) => (
							<button
								key={index}
								className={` ${buttonclass} ${appointmentType === title ? ' font-bold text-blue bg-white text-xs sm:text-sm md:text-base ' : ''}`}
								onClick={() => setAppointmentType(title)}> {title}
								<span className={` ${spanclass} ${appointmentType === title ? ' bg-light-blue' : 'bg-white'} text-xs sm:text-sm md:text-base`}>8</span>
							</button>
						))
					}
				</div>
				<div className='flex flex-row sm:items-center gap-5'>
					<div className='flex items-center '>
						<ReloadIcon className="w-4 h-4 cursor-pointer" />
					</div>
					<button className=" w-full sm:w-auto px-4 py-2 bg-blue-500 text-white cursor-pointer rounded-full text-xs sm:text-sm md:text-base" onClick={() => setIsRequestedAppointments(true)}> Request Appointment </button>
					<button className=" w-full sm:w-auto px-4 py-2 bg-blue-500 text-white cursor-pointer rounded-full text-xs sm:text-sm md:text-base" onClick={() => setIsScheduleAppointments(true)}>  Schedule Appointment </button>
				</div>
			</div>

			<div className='flex-1'>
				<RequestedAppointments onCancelRequest={onCancelRequest} appointmentsData={appointmentType == "Requested" ? requestedAppointmentsData : appointmentType == "Upcoming" ? upCommingAppointmentsData : pastAppointmentsData} />
			</div>


			<div className="flex items-center justify-between mt-6 text-sm text-gray-60 mt-auto mb-6">

				<div className='pl-5'>
					Showing <span className="text-gray-text">1–6</span> of{" "}
					<span className="text-gray-text">6</span> messages
				</div>

				<div className="flex items-center gap-2 px-6">
					<button className="px-3 py-2 rounded border border-gray-300 hover:bg-gray-100 cursor-pointer">
						<PrevIcon className=" w-2 h-3" />
					</button>
					<button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 cursor-pointer">
						1
					</button>
					<button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 cursor-pointer">
						2
					</button>
					<button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 cursor-pointer">
						3
					</button>

					<span className="px-2 cursor-pointer">…</span>

					<button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 cursor-pointer">
						8
					</button>
					<button className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 cursor-pointer">
						9
					</button>
					<button className="px-3 py-2 rounded border border-gray-300 hover:bg-gray-100 cursor-pointer">
						<NextIcon className=" w-2 h-3" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Appointments;