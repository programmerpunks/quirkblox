import Aos from "aos";
import React, { useEffect } from "react";

import { TeamData } from "../../assets/team/content";

const Team = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div
        className="px-0 md:px-[20%] pt-20 overflow-x-hidden"
        data-aos="fade-up"
      >
        <div className="w-full px-10 justify-center lg:w-[60%]">
          <div class="relative flex items-center h-10">
            <span className="font-poppins">{TeamData.number}</span>
            <div class="flex justify-center items-center w-40 h-[1px] bg-[#474747] top-1/2 transform -translate-y-1/2 left-full ml-1"></div>
          </div>

          <div className="font-poppins text-[55px]">{TeamData.title}</div>
          <div className="mt-4 text-[#474747]">{TeamData.description}</div>
        </div>
        <div className="flex flex-wrap ">
          {TeamData.Members.map((member) => {
            return (
              <div
                className="flex flex-col m-4 w-full md:w-1/3 lg:w-1/4 bg-[#f9f9fc]"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <img src={member.image} alt="" className="bg-white m-4" />
                <div className="flex mt-2 w-full flex-wrap justify-between px-6">
                  <div className="font-poppins text-2xl">{member.title}</div>
                  <a
                    href={member.link}
                    rel="noreferrer"
                    target="_blank"
                    key={member.title}
                  >
                    {member.icon}
                  </a>
                </div>
                <div class="flex justify-center items-center  h-[1px] bg-[#474747] top-1/2 transform -translate-y-1/2 left-full mx-[6%]"></div>

                <div className="flex w-full my-2 justify-center text-lg opacity-60">
                  {member.stack}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
