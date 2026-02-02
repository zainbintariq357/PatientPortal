import React, { useState } from 'react';
import MessagesIcon from '../assets/icons/svgs/MessagesIcon';

import SELECT_OPTIONS from '../Constants';

import PrevIcon from '../assets/prevIcon.svg?react';
import NextIcon from '../assets/NextIcon.svg?react';
import MessageCard from '../components/Messages/MessageCard';

import MessageDetails from '../components/popup/MessageDetails';


const Messages = () => {

	const [messageType, setMessageType] = useState("active");
	const [messageDetail, setMessageDetail] = useState(false);
	const { activeMessages, resolvedMessages } = SELECT_OPTIONS;

	const showMessageDetail = (message) => {
		setMessageDetail(true);
	}

	return (
		<>
			<MessageDetails open={messageDetail} onClose={() => setMessageDetail(false)} />

			<div className='flex flex-col min-h-screen bg-gray-50'>
				<h2 className='text-2xl font-semibold mt-6 mb-4 pl-6'>Messages</h2>
				<div className="flex bg-gray-100 p-3 pl-6 gap-3">
					<button className={`${messageType == "active" ? 'bg-white' : ''} p-2 rounded-lg cursor-pointer flex items-center gap-1`} onClick={() => setMessageType("active")}>
						<MessagesIcon className={`${messageType == "active" ? 'text-blue-medium' : ''} inline-flex`} width={19.2} height={14.4} />
						<span className={`ml-1 ${messageType == "active" ? 'text-blue' : ''} font-medium text-sm md:text-base`}>Active Messages</span>
					</button>

					<button className={`${messageType == "resolved" ? 'bg-white' : ''} p-2 rounded-lg cursor-pointer flex items-center gap-1`} onClick={() => setMessageType("resolved")}	>
						<MessagesIcon className={`${messageType == "resolved" ? 'text-blue-medium' : 'text-text-light-gray'} inline-flex`} width={19.2} height={14.4} />
						<span className={`ml-1 ${messageType == "resolved" ? 'text-blue' : ''}  font-medium text-sm md:text-base`}>Resolved Messages</span>
					</button>
				</div>
				<div className='flex-1'>
					{
						(messageType == "active" ? activeMessages : resolvedMessages).map((item, _) => (
							<MessageCard key={item.id} message={item} CallMessageDetail={showMessageDetail} />
						))
					}
				</div>

				<div className="flex items-center justify-between mt-6 text-sm text-gray-60 mt-auto mb-6">

					<div className='pl-5 text-sm md:text-base'>
						Showing <span className="text-gray-text">1–6</span> of{" "}
						<span className="text-gray-text">6</span> messages
					</div>

					<div className="flex items-center gap-2 px-6">
						<button className="px-3 py-2 rounded border border-gray-300 hover:bg-gray-100 cursor-pointer">
							<PrevIcon className=" w-2 h-3" />
						</button>
						<button className="px-3 py-1 rounded border border-gray-300 cursor-pointer bg-blue text-white">
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


		</>

	)
}
export default Messages;