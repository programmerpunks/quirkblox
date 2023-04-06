import RoadmapCard from "./RoadmapCard";

const LeftCard = ({ description, percentage, title }) => {
  return (
    <>
      <div
        className="flex mb:max-sm:flex-row-reverse mb:max-sm:justify-end overflow-x-hidden sm:justify-start sm:w-full"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="sm:w-[45%] sm:flex sm:justify-end">
          <RoadmapCard description={description} title={title} />
        </div>
        <div className="sm:pl-[3.3%] items-center flex">
          <div className="flex items-center relative justify-center w-[70px]  border-4 border-[#e6e6e6] rounded-full bg-[#f9f9fc] p-4">
            {percentage}
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftCard;
  