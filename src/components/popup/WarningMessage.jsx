
import WarningIcon from '../../assets/warning.svg?react';
import Cross from '../../assets/icons/svgs/Cross.jsx';

const WarningMessage = ({ ClosePopup }) => {
	return (
		<div className="flex bg-[var(--color-cream-yellow)] p-4 rounded-lg w-100">
			<WarningIcon className='w-5 h-5 text-[var(--color-warning)] mr-2' />
			<div className='flex flex-col'>
				<p className='text-[var(--color-deep-orange)]'>Warning</p>
				<p className='text-sm w-80'>Are you sure you want to cancel the appointment request?</p>
				<div className='flex gap-2 space-x-2 mt-4'>
					<button className='bg-[var(--color-white-gray)] px-10 py-1 bg-white rounded-full mr-2 text-[var(--color-gray-text)] cursor-pointer' onClick={ClosePopup}>No</button>
					<button className='bg-[var(--color-deep-orange)] px-10 text-white px-8 py-2 rounded-full mr-2 cursor-pointer' onClick={ClosePopup}>Yes</button>
				</div>
			</div>
			<div className='cursor-pointer' onClick={ClosePopup}>
				<Cross className="w-4 h-4 text-[var(--color-gray-text)] ml-auto cursor-pointer" />
			</div>
		</div>
	)
}

export default WarningMessage;