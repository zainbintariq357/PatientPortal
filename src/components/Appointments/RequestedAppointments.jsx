import AppointmentCard from '../shared/AppointmentCard.jsx';

const RequestedAppointments = ({ appointmentsData, onCancelRequest }) => {

	return (
		<div className='m-6'>
			{
				appointmentsData.map((appointment) => (
					<AppointmentCard appointment={appointment} onCancelRequest={onCancelRequest} />
				))
			}
		</div>
	)
}

export default RequestedAppointments;