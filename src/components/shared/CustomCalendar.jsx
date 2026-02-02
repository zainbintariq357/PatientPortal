import { ChevronLeft, ChevronRight } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Controller } from 'react-hook-form';
import '../../utils/CustomCalendar.css';

const today = new Date();

const CustomCalendar = ({ control, name }) => {
	return (
		<Controller
			control={control}
			name={name}
			defaultValue={today}
			render={({ field: { onChange, value } }) => (
				<Calendar
					minDate={today}
					showNeighboringMonth={false}
					value={value}
					onChange={onChange}
					prev2Label={null}
					next2Label={null}
					navigationLabel={({ date }) => (
						<span className="text-white text-lg font-medium">
							{date.toLocaleDateString('en-US', {
								month: 'long',
								year: 'numeric',
							})}
						</span>
					)}
					prevLabel={<ChevronLeft className="text-white" />}
					nextLabel={<ChevronRight className="text-white" />}
					className="custom-calendar"
				/>
			)}
		/>
	);
};

export default CustomCalendar;
