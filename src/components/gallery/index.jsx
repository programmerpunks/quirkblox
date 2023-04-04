import Aos from "aos";
import React, { useEffect } from "react";

import { GalleryData } from "../../assets/gallery/content";

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div
        className="bg-[#f9f9fc] px-0 md:px-[20%] pt-20 overflow-x-hidden"
        data-aos="fade-up"
      >
        <div className="w-full px-10 justify-center lg:w-[60%]">
          <div class="relative flex items-center h-10">
            <span className="font-poppins">{GalleryData.number}</span>
            <div class="flex justify-center items-center w-40 h-[1px] bg-[#474747] top-1/2 transform -translate-y-1/2 left-full ml-1"></div>
          </div>

          <div className="font-poppins text-[55px]">{GalleryData.title}</div>
          <div className="mt-4 text-[#474747]">{GalleryData.description}</div>
          <div className="hover:text-white py-4 cursor-pointer mt-10 w-[50%] md:w-1/4 font-poppins hover:bg-black flex justify-center rounded-lg  bg-white text-black border border-black">
          {GalleryData.btnTitlte}
        </div>
        </div>
        <div
          className="flex flex-wrap  p-1 lg:p-10 w-full"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          {GalleryData.gallery.map((pic) => {
            return (
              <img src={pic} alt="/" className="w-full md:w-1/2 lg:w-1/3" />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
