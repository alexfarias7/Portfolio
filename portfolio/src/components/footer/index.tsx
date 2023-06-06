import IconsFooter from './IconsFooter';

const Footer = () => {
	return (
		<footer className="shadow-[0px_-2px_4px_rgba(0,0,0,0.3)] mt-[80px] ">
			<div className="container-max flex py-[12px] justify-between text-blue0 font-popins items-center  sm:flex-col sm:gap-[8px] sm:justify-center">
				<div className="flex-col  sm:text-center">
					<p className="text-[14px] mb-4 sm:mb-[8px] ">
						<span className="text-[16px] ">&copy;</span> 2023. All Right
						Reserved
					</p>
					<p className="text-[12px]">Developed by Alex Farias</p>
				</div>

				<IconsFooter />
			</div>
		</footer>
	);
};

export default Footer;
