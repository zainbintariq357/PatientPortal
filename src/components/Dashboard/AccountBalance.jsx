import DollarIcon from '../../assets/dollarIcon.svg?react';
import BalanceDetailCard from './BalanaceDetailCard.jsx';

const AccountBalance = () => {
	return (
		<div className='bg-white rounded-lg p-4 shadow-sm'>
			<p className='text-[var(--color-black)] text-lg font-semibold'>Account Balance</p>
			<div className='flex flex-col'>
				<div className="flex flex-col sm:flex-row justify-between">
					<h3 className='text-2xl lg:text-3xl text-[var(--color-blue)] font-bold'>$1,234.56</h3>
					<div className='space-x-4 gap-4'>
						<button className="border text-[var(--color-blue)] rounded-full py-2 px-4 md:px-6 text-xs lg:text-base cursor-pointer" >Pay Online</button>
						<button className="border bg-[var(--color-blue)] text-white py-2 px-4 md:px-8 rounded-full text-xs lg:text-base cursor-pointer">View Statement</button>
					</div>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
					<BalanceDetailCard label={"Current"} value={"$250"} />
					<BalanceDetailCard label={"30+"} value={"$350"} />
					<BalanceDetailCard label={"60+"} value={"$450"} />
					<BalanceDetailCard label={"120+"} value={"$550"} />
				</div>
			</div>
		</div>
	)
}

export default AccountBalance;