import React from "react";
import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-gray-800 dark:bg-gray-800 px-10 pt-3 sticky top-0 z-30">
            <div className="flex flex-wrap text-white justify-between bg-gray-800 items-center mx-auto">
                <a href="https://flowbite.com" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Brent Broeckx
                    </span>
                    </a>
                    <button
                    data-collapse-toggle="mobile-menu"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    >
                    <span className="sr-only">Open main menu</span>
                    <div className="space-y-2 z-50" onClick={() => {setOpen(!open)}}>
                        <span className={`block w-8 h-0.5 bg-white transition duration-300 ease-in-out ${open ? 'translate-y-2.5 scale-75 rotate-45' : ''}`}></span>
                        <span className={`block h-0.5 bg-white transition duration-300 ease-in-out ${open ? ' w-8 -rotate-45 scale-75' : 'w-5'}`}></span>
                        </div>
                    </button>
                <div className={`${open ? '-translate-x-0': '-translate-x-full'} z-40 absolute top-10 left-0 transition duration-300 ease-in-out w-full text-white bg-gray-800 dark:text-white md:block md:w-auto`} id="mobile-menu">
                <ul className="flex flex-col mt-4 text-center md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                    <a
                        href="#"
                        className="block py-2 pr-4 pl-3 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                        aria-current="page"
                    >
                        Home
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        About
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Projects
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Traineeship
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="block py-2 pr-4 pl-3  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                        Contact
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
