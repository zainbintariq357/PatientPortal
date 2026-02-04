import { Outlet } from "react-router";
import SideBar from "../components/Sidebar/SideBar";
import { useState } from "react";

const DashboardLayout = () => {

	const [openSideBar, setOpenSideBar] = useState(true);

	const handleSideBar = (isOpen) => {
		setOpenSideBar(isOpen)
	}

	return (
		<div className="h-screen flex relative">
			{
				openSideBar &&
				<div className="fixed inset-0 bg-black opacity-50 z-50 md:hidden" onClick={() => setOpenSideBar(false)}></div>
			}

			<aside
				className={`
					fixed sm:static z-50 transition-transform duration-300  md:translate-x-0 
					${openSideBar ? "w-[275px] translate-x-0" : "w-[72px] translate-x-0 md:-translate-x-full"}`
				}
			>
				<SideBar
					isOpenSideBar={openSideBar}
					isOpenSideBarHandler={handleSideBar}
				/>
			</aside>
			<div className="flex-1 overflow-y-auto ">
				<Outlet />
			</div>
		</div>
	)
}

export default DashboardLayout;
