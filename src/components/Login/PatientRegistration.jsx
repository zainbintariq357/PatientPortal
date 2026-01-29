// import './App.css'

import React, { useState } from 'react';
import portal from '../../assets/portal.jpg';
import practiceEhrLogo from '../../assets/practiceEhrLogo.png';
import playStoreImg from '../../assets/playStore.png';
import appStoreImg from '../../assets/appStore.png';
import DatePicker from 'react-datepicker';
import InputBox from '../shared/InputBox.jsx';
import SelectBox from '../shared/SelectBox.jsx';
import SELECT_OPTIONS from '../../Constants/index.js';
import { isValidEmail } from '../../utils/index.js';

const PatientRegistration = ({ onBack }) => {
  const [patientInfo, setPatientInfo] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    cellId: '',
    email: '',
    address: '',
    gender: '',
  });
  const [errorInfo, setErrorInfo] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    cellId: '',
    email: '',
    address: '',
    gender: '',
  });

  const ChangePatientInfo = data => {
    if (data) {
      if (data.value !== null && data.value.length > 0) {
        setErrorInfo(prevError => ({
          ...prevError,
          [data.lable]: false,
        }));
      }

      setPatientInfo(prevInfo => ({
        ...prevInfo,
        [data.lable]: data.value,
      }));
    }
  };

  const RegisterUser = () => {
    Object.keys(patientInfo).forEach(item => {
      if (item === 'email') {
        if (patientInfo[item] == '') {
          setErrorInfo(prevError => ({
            ...prevError,
            [item]: 'Required',
          }));
        } else {
          const isValid = isValidEmail(patientInfo[item]);
          setErrorInfo(prevError => ({
            ...prevError,
            [item]: !isValid ? 'Invalid Email' : '',
          }));
        }
      } else if (patientInfo[item] === '') {
        setErrorInfo(prevError => ({
          ...prevError,
          [item]: 'Required',
        }));
      }
    });
  };

  return (
    <>
      <div className="min-h-screen flex p-5 gap-6">
        <div className="w-2/3 rounded-lg overflow-hidden">
          <img
            src={portal}
            alt="Patient Portal"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-1/3 flex flex-col">
          <div className="w-[201px] mt-2">
            <img
              src={practiceEhrLogo}
              alt="Practice EHR Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl mt-4">
              New Patient Registration
            </h1>
            <p className="text-gray-600 text-base mt-2"> Create Your Account</p>

            <div className="mt-6 space-y-4">
              <InputBox
                label="First Name"
                id="firstName"
                AlterInfo={ChangePatientInfo}
                value={patientInfo.firstName}
                error={errorInfo.firstName}
                maxLength={25}
              />

              <InputBox
                label="Last Name"
                id="lastName"
                AlterInfo={ChangePatientInfo}
                value={patientInfo.lastName}
                error={errorInfo.lastName}
                maxLength={25}
              />

              <DatePicker
                placeholderText="Date of Birth"
                className="w-full h-12 border border-gray-300 rounded-lg px-4 focus:outline-none items-center"
                wrapperClassName="w-full"
              />

              <span className="text-red-500">Required</span>

              <SelectBox
                placeholder="Gender"
                id="gender"
                options={SELECT_OPTIONS.genderOptions}
                AlterInfo={ChangePatientInfo}
                value={patientInfo.gender}
                error={errorInfo.gender}
              />

              <InputBox
                label="Cell#"
                id="cellId"
                AlterInfo={ChangePatientInfo}
                value={patientInfo.cellId}
                error={errorInfo.cellId}
                maxLength={20}
              />

              <InputBox
                label="Email"
                id="email"
                AlterInfo={ChangePatientInfo}
                value={patientInfo.email}
                error={errorInfo.email}
                maxLength={35}
              />

              <InputBox
                label="Address"
                id="address"
                AlterInfo={ChangePatientInfo}
                value={patientInfo.address}
                error={errorInfo.address}
                maxLength={100}
              />
            </div>

            <div className="flex justify-between items-center mt-8">
              <button
                className="border border-blue-600 px-6 py-2 font-semibold rounded-full text-blue-600 cursor-pointer"
                onClick={onBack}>
                {' '}
                Back{' '}
              </button>
              <button
                className="border border-blue-600 px-6 py-2 font-semibold rounded-full text-blue-600 cursor-pointer"
                onClick={RegisterUser}>
                {' '}
                Register{' '}
              </button>
            </div>

            <div className="flex flex-row items-center justify-between mt-6">
              <p className="text-base">Get Our Mobile App</p>

              <div className="flex gap-1">
                <div className="w-[100px] h-[40px] cursor-pointer">
                  <img
                    src={playStoreImg}
                    alt="Download from play Store"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[100px] h-[40px] cursor-pointer">
                  <img
                    src={appStoreImg}
                    alt="Download from App Store"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex justify-center mt-6">
              <div className="w-3/4 h-px bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200"></div>
            </div>

            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="cursor-pointer hover:underline text-sm">
                Privacy Policy
              </span>
              <span className="text-gray-400 text-sm">|</span>
              <span className="cursor-pointer hover:underline text-sm">
                Terms of Service
              </span>
              <span className="text-gray-400 text-sm">|</span>
              <span className="cursor-pointer hover:underline text-sm">
                Practice EHR
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientRegistration;
