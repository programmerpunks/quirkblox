import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

import { RoadMapData } from "../../assets/roadmap/content";

const RoadMap = () => {
  return (
    <div
      className="py-10 mb:max-sm:px-5 overflow-y-hidden items-center object-contain bg-white"
      id="ROADMAP"
      data-aos="fade-up"
    >
      <div className="w-full px-2 md:px-[20%] justify-center lg:w-[60%]">
        <div className="relative flex items-center h-10">
          <span className="font-poppins">{RoadMapData.number}</span>
          <div className="flex justify-center items-center w-40 h-[1px] bg-[#474747] top-1/2 transform -translate-y-1/2 left-full ml-1"></div>
        </div>

        <div className="font-poppins text-[55px]">{RoadMapData.title}</div>
      </div>
      <div className="absolute border-opacity-20 bg-[#e6e6e6] h-[100%]  sm:absolute sm:border-opacity-20  xl:h-[120%] border-[2px] left-[15%] sm:left-[50%]"></div>
      {RoadMapData.roadmap.map((itm, index) => {
        return index % 2 === 0 ? (
          <LeftCard
            key={itm.title}
            title={itm.title}
            description={itm.description}
            percentage={itm.percentage}
          />
        ) : (
          <RightCard
            key={itm.title}
            title={itm.title}
            description={itm.description}
            percentage={itm.percentage}
          />
        );
      })}
    </div>
  );
};
export default RoadMap;
