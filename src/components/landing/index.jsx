import React from "react";

import { LandingData } from "../../content/landing";
import { SocialLinks } from "../../assets/socialLinks/content";

const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-metalic-img h-[100vh]">
      <div className="flex flex-col justify-center w-full px-4 lg:w-[35%]">
        <div className="justify-start font-poppins font-extrabold text-[#1A1A1A] text-4xl md:text-5xl lg:text-7xl">
          {LandingData.titles[0]}
        </div>
        <div className="justify-start font-poppins text-[#1A1A1A] font-extrabold text-4xl md:text-5xl lg:text-7xl">
          {LandingData.chains}
        </div>
        <div className="text-2xl md:text-3xl  mt-4 text-[#474747]">
          {LandingData.description}
        </div>
        <div className="text-white py-4 cursor-pointer mt-10 w-[50%] md:w-1/4 font-poppins bg-black flex justify-center rounded-lg  hover:bg-white hover:text-black hover:border border-black">
          {LandingData.buttonTitle}
        </div>
      </div>
      <div className="hidden md:block index-2 absolute bottom-[30px] right-[60px]">
        {SocialLinks.map((lnk) => {
          return (
            <div className="my-10 hover:scale-150 hover:opacity-100 duration-500 opacity-50">
              <a
                href={lnk.link}
                rel="noreferrer"
                target="_blank"
                key={lnk.title}
                className="my-10 opacity-50"
              >
                {React.cloneElement(lnk.icon, { size: "24px" })}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Landing;
