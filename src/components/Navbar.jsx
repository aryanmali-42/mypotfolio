import React, { useState } from "react";
import pic from "../../public1/codeimg.jpg";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const navItems = [
		{
			id: 1,
			text: "Home",
		},
		{
			id: 2,
			text: "About",
		},
		{
			id: 3,
			text: "Potfolio",
		},
		{
			id: 4,
			text: "Experience",
		},
		{
			id: 5,
			text: "Contact",
		},
	];
	return (
		<div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 right-0 left-0 z-50 bg-white ">
			<div className="flex justify-between items-center h-16 ">
				<div className="flex space-x-2">
					<img src={pic} className="h-12 w-12 rounded-full" alt="" />
					<h1 className="font-semibold text-xl cursor-pointer">
						Aryan<span className="text-green-500 text-2xl">CK</span>
						<p className="text-sm">Web Developer</p>
					</h1>
				</div>
				{/* DeskTop NavBAr */}
				<div>
					<ul class="hidden md:flex space-x-8">
						{navItems.map(({ id, text }) => (
							<li
								className="hover:scale-105 duration-200 cursor-pointer"
								key={id}
							>
								<Link
									to={text}
									smooth={true}
									duration={500}
									offset={-70}
									activeClass="active"
								>
									{" "}
									{text}
								</Link>
							</li>
						))}
					</ul>
					<div onClick={() => setMenu(!menu)} class="md:hidden">
						{menu ? <IoMdClose size={34} /> : <CiMenuFries size={34} />}
					</div>
				</div>
			</div>
			{/* MObile Nav Bar */}
			{menu && (
				<div>
					<ul class="md:hidden flex flex-col items-center justify-center h-screen space-y-3 text-xl bg-white">
						{navItems.map(({ id, text }) => (
							<li
								class="hover:scale-105 font-semibold  duration-200 cursor-pointer"
								key={id}
							>
								<Link
									onClick={() => setMenu(!menu)}
									to={text}
									smooth={true}
									duration={500}
									offset={-70}
									activeClass="active"
								>
									{" "}
									{text}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Navbar;
