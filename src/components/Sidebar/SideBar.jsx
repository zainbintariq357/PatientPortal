import React, {useEffect, useState} from 'react';
import DashboardEhrLogo from '../../assets/dashboardEhrLogo.svg?react';
import LogoutIcon from '../../assets/icons/svgs/LogoutIcon';

import {NavLink, useNavigate} from 'react-router-dom';
import DashboardIcon from '../../assets/icons/svgs/DashboardIcon';
import MessagesIcon from '../../assets/icons/svgs/MessagesIcon';
import AppointmentIcon from '../../assets/icons/svgs/AppointmentIcon';
import HealthRecordIcon from '../../assets/icons/svgs/HealthRecordIcon';
import Setting from '../../assets/icons/svgs/SettingIcon';

const SideBar = ({isOpenSideBar, isOpenSideBarHandler}) => {
  const [isOpen, setIsOpen] = useState(isOpenSideBar);
  const navigate = useNavigate();

  const sideBarLinks = [
    {name: 'Dashboard', href: '/dashboard', icon: DashboardIcon},
    {name: 'Messages', href: '/dashboard/messages', icon: MessagesIcon},
    {
      name: 'Appointments',
      href: '/dashboard/appointment',
      icon: AppointmentIcon,
    },
    {
      name: 'Health Records',
      href: '/dashboard/healthrecord',
      icon: HealthRecordIcon,
    },
    {name: 'Settings', href: '/dashboard/settings', icon: Setting},
  ];

  const changeSideBarWidth = () => {
    isOpenSideBarHandler(!isOpen);
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    navigate('/login');
  };

  useEffect(() => {
    setIsOpen(isOpenSideBar);
  }, [isOpenSideBar]);

  return (
    <>
      <div
        className={`min-h-screen relative flex flex-col bg-[var(--color-sidebar-blue)] gap-8 transition-all duration-500   ${isOpen ? 'w-[275px]' : 'w-[72px]'}`}>
        <div className="p-4 mb-6">
          {isOpen && (
            <DashboardEhrLogo className="w-[240px] h-full object-contain" />
          )}
        </div>

        <button
          onClick={() => changeSideBarWidth()}
          className="absolute bottom-6 -right-4 md:-right-2 w-6 h-6
							rounded-full
							bg-white border border-gray-300
							shadow-sm cursor-pointer
							hover:bg-gray-100
							transition"
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={isOpen ? 'rotate-0' : 'rotate-180'}
            aria-hidden="true">
            <path d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="flex flex-col gap-3 mt-3">
          {sideBarLinks.map(link => {
            return (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/dashboard'}
                className={({isActive}) =>
                  `flex items-center block px-4 gap-3 py-2 mx-2 srounded-md text-sm font-medium 
										${!isOpen ? 'justify-center' : ''}    
										${
                      isActive
                        ? 'bg-[var(--color-light-blue)] text-[var(--color-blue)]'
                        : 'text-gray-700 hover:bg-[var(--color-light-blue)]'
                    }`
                }>
                <link.icon className="inline-block border-0 mr- w-5 h-5 shrink-0" />
                {isOpen && link.name}
              </NavLink>
            );
          })}
        </div>

        <div className="mt-8 p-4">
          <hr className="my-3 border-gray-300" />
          <button
            onClick={() => handleLogOut()}
            className={`flex items-center gap-3 py-2 text-sm font-medium text-[var(--color-red)] rounded-md cursor-pointer mt-4 ${isOpen ? `w-full px-4` : 'm-auto'}`}>
            <LogoutIcon className="inline-block border-0 mr-2 w-5 h-5 shrink-0" />
            {isOpen && 'Logout'}
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
