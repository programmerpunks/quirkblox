const RoadmapCard = ({ description, title }) => {
  return (
    <div className="px-5 flex flex-wrap py-5 my-2 md:mx-5 md:my-5 bg-[#e6e6e6] rounded-lg mb:w-64 sm:w-80 xl:w-96">
      <h1 className="uppercase pb-2 text-lg font-poppins xl:text-[32px]">{title}</h1>
      <div className="flex justify-center flex-wrap">{description}</div>
    </div>
  )
}
export default RoadmapCard
