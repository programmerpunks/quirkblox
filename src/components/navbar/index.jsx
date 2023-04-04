import React from "react";

const logo = require("../../assets/navbar/images/quirkBloxLogo.svg").default;

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between fixed w-full  p-5">
        <div className="flex justify-start w-[5%]">
          <img src={logo} alt="/" />
        </div>
        <div className="flex justify-center py-3">
          <div className="items-center flex">
            <div className="flex px-4">About</div>
            <div className="flex px-4">About</div>
            <div className="flex px-4">About</div>
            <div className="flex px-4">About</div>
            <div className="flex px-4">About</div>
            <div className="flex px-4">About</div>
            <div className="flex px-4">About</div>
          </div>
          <div className="py-2 ml-3 border rounded-lg">
            <div className="px-10 w-full">Connect</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
