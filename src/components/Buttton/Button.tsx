import React, { FC } from 'react';

type ButtonProps = {
	name?: string;
	style: React.CSSProperties;
	icon?: React.ReactNode;
	onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ name, style, icon, onClick }) => {
	return (
		<button
			style={style}
			onClick={onClick}
		>
			{name}

			{icon}
		</button>
	);
};

export default Button;
