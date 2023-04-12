import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiMenu3Line } from "react-icons/ri";

import { NavbarData } from "../../assets/navbar/content";
const logo = require("../../assets/navbar/images/quirkBloxLogo.svg").default;

const Navbar = ({
  connection,
  disconnect,
  getTokens,
  logout,
  readContract,
  wallet,
}) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className=" flex justify-between z-50 fixed w-full p-5 md:px-20 bg-white">
        <a className="flex justify-start hover:scale-110 duration-500 w-[40%] md:w-[5%]" href="/">
          <img src={logo} alt="/" />
        </a>
        <div className="flex justify-center py-3">
          <div className="items-center hidden md:flex">
            {NavbarData.map((nav) => {
              return (
                <a
                  href={
                    window.location.pathname !== "/"
                      ? `/${nav.tag}`
                      : `${nav.tag}`
                  }
                  key={nav.title}
                  className="flex px-4 hover:text-[#1A1A1A] hover:scale-110 duration-500 hover:opacity-100 opacity-60 font-poppins text-[#474747] cursor-pointer"
                >
                  {nav.title}
                </a>
              );
            })}
          </div>
          <div className="py-2 ml-3 hidden md:flex items-center justify-center ">
            <button
              onClick={async () => {
                logout
                  ? (async function () {
                      await disconnect();
                    })()
                  : (async function () {
                      await connection();
                      await readContract();
                      await getTokens();
                    })();
              }}
              className={`flex border-[1px] border-black p-1 hover:scale-125 duration-700 rounded-lg px-2 justify-center  text-black bg-transparent cursor-pointer ${
                logout ? "hover:before:content-['Disconnect:']" : ""
              }`}
            >
              <p
                className={`h-[12px] w-[12px] border ${
                  logout ? "bg-green-600" : "bg-red-600"
                }  rounded-full flex items-center`}
              ></p>
              {wallet}
            </button>
          </div>
          <div
            onClick={handleNav}
            className="md:hidden cursor-pointer flex justify-center items-center"
          >
            <RiMenu3Line size={30} />
          </div>
        </div>
      </div>

      <div className="">
        {nav && (
          <header className="text-black h-screen flex w-full  lg:hidden items-center z-50 justify-between fixed ">
            <div className="fixed left-0 top-0 w-full z-60 backdrop-blur-[80px] ease-in-out duration-500">
              <div className="flex justify-between items-center m-5">
                <span className=" text-black ">
                  <img src={logo} alt="/" className="w-40" />
                </span>
                <div onClick={handleNav} className="flex justify-end  m-5">
                  <RxCross2 size={30} />
                </div>
              </div>
              <ul className="p-6 py-4 text-lg font-extrabold  font-poppins">
                {NavbarData.map((nav) => {
                  return (
                    <a
                      href={
                        window.location.pathname !== "/"
                          ? `/${nav.tag}`
                          : `${nav.tag}`
                      }
                      onClick={handleNav}
                      key={nav.title}
                      className="flex my-4 px-4 hover:text-[#1A1A1A] hover:scale-110 duration-500 hover:opacity-100 opacity-60 font-poppins text-[#474747] cursor-pointer"
                    >
                      {nav.title}
                    </a>
                  );
                })}
              </ul>
              <div className="py-6 flex items-center justify-center ">
            <button
              onClick={async () => {
                logout
                  ? (async function () {
                      await disconnect();
                    })()
                  : (async function () {
                      await connection();
                      await readContract();
                      await getTokens();
                    })();
              }}
              className={`flex border-[1px] border-black p-1 hover:scale-125 duration-700 rounded-lg px-2 justify-center  text-black bg-transparent cursor-pointer ${
                logout ? "hover:before:content-['Disconnect:']" : ""
              }`}
            >
              <p
                className={`h-[12px] w-[12px] border ${
                  logout ? "bg-green-600" : "bg-red-600"
                }  rounded-full flex items-center`}
              ></p>
              {wallet}
            </button>
          </div>
            </div>
            
          </header>
        )}
      </div>
    </>
  );
};

export default Navbar;
