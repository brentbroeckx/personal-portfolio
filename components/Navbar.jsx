import React from "react";
import { useState } from "react";
import { NavLink } from "./NavLink";
import Link from 'next/link'

function Navbar() {
    const [open, setOpen] = useState(false);


    return (
		<nav className="bg-gray-700 min-h-[6vh] shadow-lg sticky-top">
			<div className="max-w-6xl mx-auto px-4 py-4">
				<div className="flex justify-between md:block">
					<div className="flex space-x-7 md:justify-between">
						<div className="flex items-center">
							<Link href="/" className="py-4 px-2">
								<span className="font-semibold text-white text-lg cursor-pointer">Brent Broeckx</span>
							</Link>
						</div>
						<div className="hidden md:flex items-center space-x-1 text-white h-[6vh]">
                            <NavLink href="/" exact className="py-2 px-2 font-semibold hover:text-orange-400">Home</NavLink>
                            <NavLink href="/#about" className="py-2 px-2 font-semibold hover:text-orange-400">Over mij</NavLink>
                            <NavLink href="/#skills" className="py-2 px-2 font-semibold hover:text-orange-400">Skills</NavLink>
                            <NavLink href="/#projects" className="py-2 px-2 font-semibold hover:text-orange-400">Projecten</NavLink>
                            <NavLink href="/#stage" className="py-2 px-2 font-semibold hover:text-orange-400">Stage</NavLink>
						</div>
                        <div className="hidden md:flex items-center">
                            <Link href="#footer">
                                <button className="text-black bg-orange-400 hover:bg-orange-500 rounded-lg p-2 font-bold ml-6">
                                            Contact
                                </button>
                            </Link>
                        </div>
					</div>
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={() => {setOpen(!open)}}>
						<svg className={`w-6 h-6  ${open ? 'text-orange-400' : 'text-gray-500'}`}
							x-show="!showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			<div className={`mobile-menu text-white pb-4 ${open ? '' : 'hidden'}`}>
                    <NavLink href="/" exact mobile={open.toString()} className="block text-sm px-2 py-4 transition duration-300 pl-6">Home</NavLink>
                    <NavLink href="#about" mobile={open.toString()} className="block text-sm px-2 py-4 transition duration-300 pl-6">Over mij</NavLink>
                    <NavLink href="#skills" mobile={open.toString()} className="block text-sm px-2 py-4 transition duration-300 pl-6">Skills</NavLink>
                    <NavLink href="#projects" mobile={open.toString()} className="block text-sm px-2 py-4 transition duration-300 pl-6">Projecten</NavLink>
                    <NavLink href="#stage" mobile={open.toString()} className="block text-sm px-2 py-4 transition duration-300 pl-6">Stage</NavLink>
                    <a href="#footer">
                        <button className="text-black bg-orange-400 hover:bg-orange-500 rounded-lg p-2 font-bold ml-6 mt-4">
                                    Contact
                        </button>
                    </a>
                    
			</div>

		</nav>
    );
}

export default Navbar;
