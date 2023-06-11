import { ReactNode } from 'react';

interface IArrowButton {
	icon: ReactNode;
	showSkill: boolean;
	setShowSkill: React.Dispatch<React.SetStateAction<boolean>>;
}

const ArrowButton = ({ icon, showSkill, setShowSkill }: IArrowButton) => {
	function classNames(...classes: string[]) {
		return classes.filter(Boolean).join(' ');
	}
	return (
		<button
			type="button"
			className={classNames(
				showSkill ? '-rotate-180' : 'rotate-0',
				'p-[10px]  transition-transform ease-in-out duration-500 '
			)}
			onClick={() => setShowSkill((prevState) => !prevState)}
		>
			{icon}
		</button>
	);
};

export default ArrowButton;
