const MessagesIcon = ({ className, width, height }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 20 15" fill="none">
			<path
				d="M1.8 0C0.80625 0 0 0.80625 0 1.8C0 2.36625 0.26625 2.89875 0.72 3.24L8.88 9.36C9.3075 9.67875 9.8925 9.67875 10.32 9.36L18.48 3.24C18.9338 2.89875 19.2 2.36625 19.2 1.8C19.2 0.80625 18.3938 0 17.4 0H1.8ZM0 4.2V12C0 13.3237 1.07625 14.4 2.4 14.4H16.8C18.1238 14.4 19.2 13.3237 19.2 12V4.2L11.04 10.32C10.185 10.9612 9.015 10.9612 8.16 10.32L0 4.2Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default MessagesIcon;
