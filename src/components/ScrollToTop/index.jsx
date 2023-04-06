import React from "react";
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const [isVisible, setisVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const scrolledHeight =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrolledHeight > heightToHidden) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  
  return (
    <>
      {isVisible && (
        <div className="my-20 hover:scale-110 duration-500 flex justify-end pr-10 fixed right-[-30px] md:right-7 bottom-1 md:bottom-5 hover:cursor-pointer">
          <div
            className="shadow-2xl bg-black p-0 md:p-2 rounded-full"
            onClick={goToBtn}
          >
            <MdKeyboardArrowUp size={30} color="white" />
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
