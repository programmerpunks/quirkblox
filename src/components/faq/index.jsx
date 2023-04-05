import Aos from "aos";
import React, { useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Slider from "react-slick";

import { FaqData } from "../../assets/faq/content";

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

const FAQ = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div
        className="px-0 md:px-[20%] pt-20 overflow-x-hidden mt-10 "
        data-aos="fade-up"
      >
        <div className="w-full px-10 justify-center lg:w-[60%]">
          <div class="relative flex items-center h-10">
            <span className="font-poppins">{FaqData.number}</span>
            <div class="flex justify-center items-center w-40 h-[1px] bg-[#474747] top-1/2 transform -translate-y-1/2 left-full ml-1"></div>
          </div>

          <div className="font-poppins text-[55px]">{FaqData.title}</div>
          <div className="mt-4 text-[#474747]">{FaqData.description}</div>
        </div>
        <div className="flex md:flex-row flex-col w-full overflow-x-hidden">
          <div className="flex flex-col md:w-[50%] w-full mt-20 px-4">
            {FaqData.faqSection.map((faq) => {
              return (
                <details>
                  <summary className="flex items-center">
                    <div className="accordion-item flex w-full flex-wrap">
                      <div className="leading-[30px] cursor-pointer w-full">
                        <div
                          className="flex mb-4 justify-between"
                          data-aos="fade-right"
                          data-aos-offset="300"
                          data-aos-easing="ease-in-sine"
                        >
                          <div className="flex p-2  w-full items-center justify-start rounded-[4px]">
                            <span className="text-[16px]">{faq.summary}</span>
                          </div>
                          <div className="flex items-center md:mr-10">
                            <RiArrowDropDownLine size={30} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </summary>
                  <div
                    className="mt-4 leading-normal text-[#474747] mb-14 w-full my-3 text-md p-2"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    {faq.details}
                  </div>
                </details>
              );
            })}
          </div>
          <div
            className="md:w-[50%] w-full overflow-x-hidden"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Slider {...settings} className="">
              {FaqData.images.map((itm, index) => (
                <div key={index} className="p-10">
                  <img
                    src={itm}
                    key={index}
                    alt="/"
                    className="w-full  rounded-xl"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
