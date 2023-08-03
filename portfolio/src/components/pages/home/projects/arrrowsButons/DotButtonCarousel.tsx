import React from 'react';

type DotButtonPropType = {
	selected: boolean;
	onClick: () => void;
};

export const DotButtonCaurosel: React.FC<DotButtonPropType> = (props) => {
	const { selected, onClick } = props;

	return (
		<button
			className={'embla__dot w-12 flex  items-center my-3  emblaButtons'.concat(
				selected ? ' after:bg-purple6' : ''
			)}
			type="button"
			onClick={onClick}
		/>
	);
};
