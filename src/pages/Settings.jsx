
import { useState } from "react";
import SettingDashboard from "../components/Setting/SettingDashboard";
import ActivityLog from "../components/popup/ActivityLog";

const Settings = () => {

	const [isActivityLog, setIsActivityLog] = useState(false)

	return (
		<>
			<ActivityLog open={isActivityLog} onClose={() => setIsActivityLog(false)} />
			<div className="bg-gray-50 min-h-screen py-6">
				<div className="text-right px-4">
					<button className="text-blue border rounded-full  py-2 md:py-2.5 px-4 cursor-pointer border-blue text-sm md:text-base" onClick={() => setIsActivityLog(true)} >Activity Log</button>
				</div>
				<SettingDashboard /> 
			</div>
		</>

	)
}

export default Settings;