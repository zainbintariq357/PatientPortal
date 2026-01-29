
import DollarIcon from '../../assets/icons/svgs/DollarIcon';


const BalanceDetailCard = ({ label, value }) => (
	<div className='flex bg-gray-100 rounded items-center gap-3 p-5'>
		<div className='bg-[var(--color-light-blue)] p-3 rounded-full'>
			<DollarIcon />
		</div>

		<div className='flex flex-col'>
			<span className='text-[10px] text-[var(--color-gray-text)]'>{label}</span>
			<span className='text-[17px] font-semibold text-[var(--color-black)]'>{value}</span>
		</div>
	</div>

)
export default BalanceDetailCard;