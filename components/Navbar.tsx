import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Pastikan Anda memiliki heroicons yang diinstall

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full sticky z-[10000] top-0 h-[12vh] bg-white shadow-md">
      <div className="flex items-center justify-between w-[90%] lg:w-[80%] mx-auto h-full">
        <h1 className="text-[25px] font-bold cursor-pointer text-black">
          EKA
          <span className="text-[#875300]">WAY</span>
        </h1>

        {/* Hamburger Icon */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <XMarkIcon className="w-8 h-8 text-black cursor-pointer" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-black cursor-pointer" />
          )}
        </div>

        {/* Menu Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex space-y-4 lg:space-y-0 lg:space-x-6 absolute lg:relative bg-white lg:bg-transparent top-[12vh] left-0 lg:top-0 w-full lg:w-auto p-6 lg:p-0`}
        >
          <Link href="/" className="text-black block lg:inline">
            Home
          </Link>
          <Link href="/about" className="text-black block lg:inline">
            About
          </Link>
          <Link href="/education" className="text-black block lg:inline">
            Organisation
          </Link>
          <Link href="/experience" className="text-black block lg:inline">
            Experience
          </Link>
          <Link href="/skills" className="text-black block lg:inline">
            Skills
          </Link>
          <Link href="/contact" className="text-black block lg:inline">
            Contact
          </Link>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
