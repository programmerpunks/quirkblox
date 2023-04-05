import Aos from "aos";
import React, { useEffect } from "react";

import { FooterData } from "../../assets/footer/content";
import { SocialLinks } from "../../assets/socialLinks/content";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row px-0 md:px-[20%] pt-20 overflow-x-hidden mt-10 bg-[#f9f9fc] py-5 md:py-20" id="COMMUNITY">
        <div
          className="w-full px-10 justify-center lg:w-[50%]"
          data-aos="fade-up"
        >
          <div class="relative flex items-center h-10">
            <div className="mr-4 text-[16px]">{FooterData.title}</div>
            <div class="flex justify-center items-center w-20 h-[1px] bg-[#474747] top-1/2 transform -translate-y-1/2 left-full ml-1"></div>
          </div>

          <div className="mt-4 font-poppins text-[50px] ">
            {FooterData.description}
          </div>
        </div>
        <div
          className="w-full mt-6 md:mt-0 flex px-10 items-center justify-center lg:w-[50%] mb-1 md:mb-0"
          data-aos="fade-up"
        >
          {SocialLinks.map((lnk) => {
            return (
              <div className="mx-4 md:mx-10 hover:scale-150 hover:opacity-100 duration-500 opacity-50">
                <a
                  href={lnk.link}
                  rel="noreferrer"
                  target="_blank"
                  key={lnk.title}
                  className=""
                >
                  {React.cloneElement(lnk.icon, { size: "42px" })}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap bg-black text-white justify-center items-center w-full h-[10vh]">
        <span className="font-poppins mx-1">{FooterData.made}</span>
        <span className="mx-1">{FooterData.rights}</span>
        <span className="mx-1">{FooterData.reserved}</span>
      </div>
    </>
  );
};

export default Footer;
