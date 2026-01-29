
import SettingDashboard from "../components/Setting/SettingDashboard";

const Settings = () => {
	return (
		<div className="bg-gray-50 min-h-screen py-6">
			<div className="text-right px-4">
				<button className="text-blue border rounded-full  py-2 md:py-2.5 px-4 cursor-pointer border-[var(--color-blue)] text-sm md:text-base ">Activity Log</button>
			</div>
			<SettingDashboard />
		</div>
	)
}

export default Settings;