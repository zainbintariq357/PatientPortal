// import './App.css'
import React from 'react';
import PlayStoreImg from '../../assets/playStore.svg?react';
import AppStoreImg from '../../assets/appStore.svg?react';


const Footer = () => {
	return (
    <>
      <div className="mt-auto gap-y-6">
        <div className="flex flex-row items-center justify-between mb-28">
          <p className="text-base text-primary">Get Our Mobile App</p>
          <div className="flex gap-1">
            <div className="w-[100px] h-[40px] cursor-pointer">
              <PlayStoreImg className="w-full h-full" />
            </div>
            <div className="w-[100px] h-[40px] cursor-pointer">
              <AppStoreImg className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <div className="w-3/4 h-px bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200"></div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="cursor-pointer hover:underline text-sm text-[#4B5563]">
            Privacy Policy
          </span>
          <span className="text-gray-400 text-sm">|</span>
          <span className="cursor-pointer hover:underline text-sm text-[#4B5563]">
            Terms of Service
          </span>
          <span className="text-gray-400 text-sm">|</span>
          <span className="cursor-pointer hover:underline text-sm text-[#4B5563]">
            Practice EHR
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
