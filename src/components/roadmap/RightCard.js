import RoadmapCard from "./RoadmapCard";

function RightCard({ description, percentage, title }) {
  return (
    <>
      <div
        className="flex sm:justify-end sm:w-full overflow-x-hidden"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
  >
        <div className="sm:pr-[3%] flex items-center pt-[5%]">
          <div className="flex items-center relative justify-center w-[70px] border-4 border-[#e6e6e6] rounded-full bg-[#f9f9fc] p-4">
            {percentage}
          </div>
        </div>
        <div className="sm:w-[45%] sm:flex sm:justify-start">
          <RoadmapCard description={description} title={title} />
        </div>
      </div>
    </>
  );
}

export default RightCard;
