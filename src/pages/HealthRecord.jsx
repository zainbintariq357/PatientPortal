import React, { useState } from "react";
import HealthRecordDashboard from "../components/HealthRecord/HealthRecordDashboard";
import SendCCDA from "../components/popup/SendCCDA";


const HealthRecord = () => {

	const [transmitCDAOpen, setTransmitCDAOpen] = useState(false);

	const showCCDA = (type) => {
		setTransmitCDAOpen(true);
	}


	return (
		<>
			<SendCCDA open={transmitCDAOpen} onClose={() => setTransmitCDAOpen(false)} />

			<div className="bg-gray-50 min-h-screen py-6">
				<div className="text-right px-4 space-x-4">
					<button type="button" className="text-blue border rounded-full  py-2 md:py-2.5 px-4 cursor-pointer border-blue text-sm md:text-base" onClick={() => showCCDA("View")} >View C-CDA</button>
					<button type="button" className="text-blue border rounded-full  py-2 md:py-2.5 px-4 cursor-pointer border-blue text-sm md:text-base" onClick={() => showCCDA("Download")}>Download C-CDA</button>
					<button type="button" className="text-blue border rounded-full  py-2 md:py-2.5 px-4 cursor-pointer border-blue text-sm md:text-base" onClick={() => showCCDA("Transmit")}>Transmit C-CDA</button>
				</div>
				<HealthRecordDashboard />
			</div>
		</>
	)
}

export default HealthRecord;