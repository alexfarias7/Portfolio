import React, { ReactNode } from 'react';

interface IBtnIcon {
	text: string;
	icon: ReactNode;
	classStyle: string;
}

const BtnIcon = ({ classStyle, text, icon }: IBtnIcon) => {
	return (
		<button className={classStyle}>
			<span>{text}</span>
			<span> {icon}</span>
		</button>
	);
};
export default BtnIcon;
