import Aos from "aos";
import React, { useEffect } from "react";
import Slider from "react-slick";

import { PartnerData } from "../../assets/partner/content";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <button
        className={className}
        style={{
          ...style,
          justifyContent: "center",
          marginRight: "25px",
          scale: "3",
          display: "block",
        }}
        onClick={onClick}
      ></button>
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        justifyContent: "center",
        marginLeft: "-25px",
        scale: "3",
      }}
      onClick={onClick}
    />
  );
}

const Partner = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div
        className="px-0 md:px-[20%] pt-20 overflow-x-hidden mt-10 bg-[#f9f9fc]" id="PARTNER"
        data-aos="fade-up"
      >
        <div className="w-full px-10 justify-center lg:w-[60%]">
          <div class="relative flex items-center h-10">
            <span className="font-poppins">{PartnerData.number}</span>
            <div class="flex justify-center items-center w-40 h-[1px] bg-[#474747] top-1/2 transform -translate-y-1/2 left-full ml-1"></div>
          </div>

          <div className="font-poppins text-[55px]">{PartnerData.title}</div>
          <div className="mt-4 text-[#474747]">{PartnerData.description}</div>
        </div>
        <div>
          <div className="overflow-x-hidden">
            <Slider {...settings} className="">
              {PartnerData.partners.map((itm, index) => (
                <div key={index}>
                  <img src={itm} key={index} alt="/" className="w-full" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
