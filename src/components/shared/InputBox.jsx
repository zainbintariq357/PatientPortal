import React from "react";
import { useWatch } from 'react-hook-form';

const InputBox = ({
	label,
	type = "text",
	name,
	control,
	register,
	rules,
	error,
	className = "",
	...rest
}) => {

	const value = useWatch({ control, name })
	const showAsteriks = !value;

	return (
		<div className="flex flex-col gap-1 relative">

			{
				!value && (
					<span className="absolute left-4 translate-y-1/2 text-gray-400 pointer-events-none">
						{label}
						{
							showAsteriks && (
								<span className="text-red-500"> {" "}*</span>
							)
						}
					</span>
				)
			}
			<input
				type={type}
				{...register(name, rules)}
				className={`w-full h-20 border border-[var(--color-white-gray)] rounded-lg px-4 focus:outline-none items-center `}
				{...rest}
			/>

			{
				error && <span className="text-red-500 text-sm">{error.message}</span>
			}

		</div >

	);

}
export default InputBox;
