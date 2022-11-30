import { IconHamburger } from "../assets/images/icon-hamburger";

import logo from "../assets/images/logo.svg";

export const Navbar = () => (
	<nav className="absolute py-7 md:py-12 px-6 z-10 w-full bg-gradient-to-b from-black-65 md:from-black to-transparent">
		<div className="max-w-6xl md:px-6 mx-auto flex items-center justify-between">
			<img src={logo} alt="crowdfund image alt" />

			<IconHamburger className="cursor-pointer md:hidden" />

			<div className="hidden md:flex text-white text-sm space-x-8">
				<p className="cursor-pointer">About</p>
				<p className="cursor-pointer">Discover</p>
				<p className="cursor-pointer">Get Started</p>
			</div>
		</div>
	</nav>
);
