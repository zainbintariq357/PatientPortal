import React, { useEffect, useRef, useState } from 'react';
import Regex from '../../Constants/regex';

const OTP_LENGTH = 4;

const OTPVerification = ({ OTPCallback }) => {

	const VerifyByOTP = () => {
		console.log("OTP data is", otpInfo);
	}

	const [otpInfo, setOtpInfo] = useState(Array(OTP_LENGTH).fill(""));
	const otpRef = useRef([]);

	useEffect(() => {
		otpInfo && otpRef.current[0]?.focus();
	}, []);

	const handleOTPChange = (e, index) => {
		let optValue = e.target.value;

		if (!Regex.onlyDigit.test(optValue)) return;

		const newOtpData = [...otpInfo]
		newOtpData[index] = optValue;

		setOtpInfo(newOtpData);

		if (optValue && index < OTP_LENGTH - 1) {
			otpRef.current[index + 1]?.focus()
		}
	}


	const handleKeyDown = (e, index) => {
		if (e.key !== "Backspace") return;

		if (otpInfo[index]) {
			const optInfoCopy = [...otpInfo];
			optInfoCopy[index] = "";
			setOtpInfo(optInfoCopy);
			if (index > 0) {
				otpRef.current[index - 1]?.focus();
			}
			return;
		}

		if (index > 0) {
			otpRef.current[index - 1]?.focus();
		}

	}

	const handlePasteOTP = (e) => {
		const otpData = e.clipboardData.getData("text").slice(0, OTP_LENGTH)

		if (!Regex.onlyDigits.test(otpData)) return;

		const newOtpData = otpData.split("");

		newOtpData.forEach((value, key) => {
			otpRef.current[key].value = value
			otpRef.current[key]?.focus();
		});
		setOtpInfo(newOtpData);
	}


	return (
		<>
			<div classNam e='flex flex-col items-center justify-center mt-6 space-y-4'>
				<p className='font-semibold text-center text-lg'>Verify Email</p>
				<div className='flex space-x-2' onPaste={handlePasteOTP} >
					{
						otpInfo.map((_, id) => (
							<input
								key={id}
								value={otpInfo[id]}
								ref={(e) => otpRef.current[id] = e}
								className='border rounded w-28 h-19 text-center border-gray-300 focus:outline-none text-lg font-medium'
								onChange={(e) => handleOTPChange(e, id)}
								onKeyDown={(e) => handleKeyDown(e, id)}
								type='text'
								inputMode='numeric'
								maxLength={1}
							/>
						))
					}
				</div>
				<p className='text-gray-300 text-base'> Enter the OTP that was sent to your email </p>

				<div className='flex justify-between items-center space-x-4'>
					<button className='border border-blue-600 px-6 py-2 text-sm font-semibold rounded-full text-blue-600 cursor-pointer' onClick={OTPCallback}> Back </button>
					<button className='border border-blue-600 px-6 py-2 text-xl font-semibold rounded-full font-semibold text-blue-600 bg-blue-500 text-white cursor-pointer' onClick={VerifyByOTP}> Verify </button>
				</div>
			</div>
		</>
	)
}

export default OTPVerification;
