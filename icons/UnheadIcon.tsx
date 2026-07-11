const UnheadIcon = ({ size = 48, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			{...props}
		>
			<defs>
				<linearGradient
					id="modernGradient"
					x1="0%"
					y1="0%"
					x2="100%"
					y2="100%"
				>
					<stop offset="0%" stopColor="currentColor" />
					<stop offset="100%" stopColor="currentColor" />
				</linearGradient>
				<mask id="cutoutMask">
					<rect width="100%" height="100%" fill="white" />
					<path d="M12 32 L1 32 L15 15 Z" fill="black" />
				</mask>
			</defs>
			<path
				stroke="url(#modernGradient)"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="3"
				d="M6 4v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4"
				mask="url(#cutoutMask)"
				opacity="1"
				fill="transparent"
				pathLength={1}
				strokeDasharray="1px 1px"
				strokeDashoffset="0px"
			/>
		</svg>
	);
};
export default UnheadIcon;
