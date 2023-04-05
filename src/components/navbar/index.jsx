import React from "react";
import {RiMenu3Line} from 'react-icons/ri'

import { NavbarData } from "../../assets/navbar/content";
const logo = require("../../assets/navbar/images/quirkBloxLogo.svg").default;

const Navbar = () => {
  return (
    <>
      <div className=" flex justify-between z-50 fixed w-full p-5 md:px-20 bg-white">
        <a className="flex justify-start w-[20%] md:w-[5%]" href="#LANDING">
          <img src={logo} alt="/" />
        </a>
        <div className="flex justify-center py-3">
          <div className="items-center hidden md:flex">
            {NavbarData.map((nav) => {
              return (
                <a
                  href={nav.tag}
                  className="flex px-4 hover:text-[#1A1A1A] hover:opacity-100 opacity-60 font-poppins text-[#474747] cursor-pointer"
                >
                  {nav.title}
                </a>
              );
            })}
          </div>
          <div className="py-2 ml-3 border rounded-lg">
            <div className="px-10 w-full">Connect</div>
          </div>
          <div className="md:hidden cursor-pointer border flex justify-center items-center">
            <RiMenu3Line size={30} />
          </div>
        </div>
      </div>

      <div className=""></div>
    </>
  );
};

export default Navbar;
