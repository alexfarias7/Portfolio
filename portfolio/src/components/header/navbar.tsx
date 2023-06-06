import MenuNavbar from './MenuNavbar';
import MenuNavbarResponsive from './MenuNavbarResponsive';

const Navbar = () => {
	return (
		<nav aria-label="menu" className=" z-30">
			<MenuNavbar />
			<MenuNavbarResponsive />
		</nav>
	);
};

export default Navbar;
