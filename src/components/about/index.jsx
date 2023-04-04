import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import { AboutData } from "../../assets/about/content";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div className="bg-[#f9f9fc] px-0 md:px-[20%] pt-20 overflow-x-hidden">
        <div className="w-full px-10 justify-center lg:w-[60%]">
          <div class="relative flex items-center h-10">
            <span className="font-poppins">{AboutData.number}</span>
            <div class="flex justify-center items-center w-40 h-[1px] bg-[#474747] top-1/2 transform -translate-y-1/2 left-full ml-1"></div>
          </div>

          <div className="font-poppins text-[55px]">{AboutData.title}</div>
          <div className="mt-4 text-[#474747]">{AboutData.description}</div>
        </div>
        <div className="flex flex-col lg:flex-row p-1 lg:p-10 w-full">
          <img
            src={AboutData.image}
            alt="/"
            className="w-full lg:w-[50%]"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
          <div
            className="flex flex-col px-4 items-center w-full justify-center"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="text-2xl font-bold font-poppins ">
              {AboutData.series}
            </div>
            <div className="pt-10">{AboutData.seriesDetails1}</div>
            <div className="pt-10">{AboutData.seriesDetails2}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
