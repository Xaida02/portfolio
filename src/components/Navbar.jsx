import React, { useState } from "react";
import { FaNetworkWired } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu((prev) => !prev);
  };

  return (
    <nav className="font-bold absolute w-full px-4 py-6 top-0 left-0 items-center flex justify-between shadow-xl z-[500] bg-gradient-to-t from-[#1a1a1a] to-[#101010]">
      <div>
        <div className="relative group flex items-center justify-center">
          <img
            src="./assets/logo.png"
            className="cursor-pointer w-[165px] h-[50px] object-cover relative contrast-125 z-[5]"
            alt="logo"
          />
          <div className="absolute w-full h-1/2 filter blur-2xl bg-gradient-to-r from-redOrange to-jumpBlue rounded-2xl opacity-5 group-hover:opacity-50 transition duration-300 top-0 left-0 "></div>
        </div>
      </div>
      {/* Navlinks desktop */}
      <div className="sm:flex hidden">
        <a
          className="p-2 mx-2 text-redOrange z-[2]  hover:text-[#0b0b0b] hover:blue-text-shadow transition-colors text-xl relative flex justify-center items-center navlinks"
          href="#projects"
        >
          <FaNetworkWired className="mr-2" />
          Projects
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[#0b0b0b] h-0.5 bg-redOrange2 transition-all duration-300 content-[''] w-[115%] z-[-2] blur-[1.89px] invisible nav-bg"></span>
        </a>
        <a
          className="p-2 mx-2 text-redOrange z-[2] hover:text-[#0b0b0b] hover:blue-text-shadow transition-colors text-xl relative flex justify-center items-center navlinks"
          href="#skills"
        >
          <BsGearFill className="mr-2" />
          Skills
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[#0b0b0b] h-0.5 bg-redOrange2 transition-all duration-300 content-[''] w-[115%] z-[-2] blur-[1.89px] invisible nav-bg"></span>
        </a>
        <a
          className="p-2 mx-2 text-redOrange z-[2] hover:text-[#0b0b0b] hover:blue-text-shadow transition-colors text-xl relative flex justify-center items-center navlinks"
          href="#contact"
        >
          <MdEmail className="mr-2" />
          Contact
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[#0b0b0b] h-0.5 bg-redOrange2 transition-all duration-300 content-[''] w-[115%] z-[-2] blur-[1.89px] invisible nav-bg"></span>
        </a>
      </div>
      {/* Hamburger icon / Close icon */}
      <div
        className="sm:hidden flex p-2 text-redOrange z-[2] first:hover:text-[#0b0b0b] hover:blue-text-shadow transition-colors text-xl relative justify-center items-center cursor-pointer rounded-md navlinks"
        onClick={toggleSubmenu}
      >
        <div className="toggle-btn duration-500 flex items-center justify-center flex-col gap-2">
          <div
            className={`${
              showSubmenu ? "translate-y-[11.5px] rotate-45" : ""
            } rounded-full bg-redOrange w-[30px] h-[3.5px] duration-500`}
          ></div>
          <div
            className={`${
              showSubmenu ? "opacity-0 scale-[0.5]" : ""
            } rounded-full bg-redOrange w-[30px] h-[3.5px] duration-500`}
          ></div>
          <div
            className={`${
              showSubmenu ? "-translate-y-[11.5px] -rotate-45" : ""
            } rounded-full bg-redOrange w-[30px] h-[3.5px] duration-500`}
          ></div>
        </div>
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[#0b0b0b] h-0.5 bg-redOrange2 transition-all duration-300 content-[''] w-[115%] z-[-2] blur-[1.89px] invisible nav-bg rounded-md"></span>
      </div>
      {/* Navlinks sidebar for mobile */}
      <div
        className={`absolute sm:hidden top-[100%] flex flex-col p-4 justify-center gap-2 shadow-md rounded-md duration-700 ${
          showSubmenu ? "right-0 bg-[#1a1a1a]" : "-right-full opacity-75"
        }`}
      >
        <a
          className="p-2 mx-2 text-redOrange z-[2] hover:text-[#0b0b0b] hover:blue-text-shadow transition-colors text-xl relative flex justify-start items-center hover:scale-105 duration-[500ms]  navlinks"
          href="#projects"
        >
          <FaNetworkWired className="mr-2" />
          Projects
          <span className="absolute top-0 right-0  transform text-[#0b0b0b] h-full bg-redOrange2 transition-all duration-300 content-[''] w-0.5 z-[-2] blur-[1.89px] invisible nav-bg"></span>
        </a>
        <a
          className="p-2 mx-2 text-redOrange z-[2] hover:text-[#0b0b0b] hover:blue-text-shadow transition-colors text-xl relative flex justify-start items-center hover:scale-105 duration-[500ms]  navlinks"
          href="#skills"
        >
          <BsGearFill className="mr-2" />
          Skills
          <span className="absolute top-0 right-0  transform text-[#0b0b0b] h-full bg-redOrange2 transition-all duration-300 content-[''] w-0.5 z-[-2] blur-[1.89px] invisible nav-bg"></span>
        </a>
        <a
          className="p-2 mx-2 text-redOrange z-[2] hover:text-[#0b0b0b] hover:blue-text-shadow transition-colors text-xl relative flex justify-start items-center hover:scale-105 duration-[500ms]  navlinks"
          href="#contact"
        >
          <MdEmail className="mr-2" />
          Contact
          <span className="absolute top-0 right-0  transform text-[#0b0b0b] h-full bg-redOrange2 transition-all duration-300 content-[''] w-0.5 z-[-2] blur-[1.89px] invisible nav-bg"></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
