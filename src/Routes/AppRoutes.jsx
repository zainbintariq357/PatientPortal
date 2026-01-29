import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";

import Login from '../pages/Login';
import PatientActivationPortal from '../pages/PatientActivationPortal';
import Messages from "../pages/Messages";
import HealthRecord from "../pages/HealthRecord";
import Appointments from "../pages/Appointments";
import Settings from "../pages/Settings";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<Navigate to="/login" replace />} />
			<Route path="/activation" element={<PatientActivationPortal />} />
			<Route path="/dashboard" element={<DashboardLayout />} >
				<Route index element={<Dashboard />} />
				<Route path="messages" element={<Messages />} />
				<Route path="healthrecord" element={<HealthRecord />} />
				<Route path="settings" element={<Settings />} />
				<Route path="appointment" element={<Appointments />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
