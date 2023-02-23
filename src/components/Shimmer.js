export const CarouselShimmer = () => {
  return (
    <div>
      <span className="text-white">Looking for great food near you...</span>
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div className="h-[150px] w-[954px] bg-gray-100 ml-[300px] mt-3">
            <div className="h-[20px] w-[20px] m-3 bg-gray-200"></div>
            <div className="h-[23px] w-[250px] m-3 bg-gray-200"></div>
            <div className="h-[20px] w-[50px] m-3 bg-gray-200"></div>
          </div>
        ))}
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap mx-[144px]">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div key={index} className="h-[300px] w-64 m-5 bg-gray-100">
            <div className="h-[150px] m-3 bg-gray-200"></div>
            <div className="h-[15px] m-3 bg-gray-200"></div>
            <div className="h-[15px] m-3 w-36  bg-gray-200"></div>
            <div className="h-[15px] mx-3 my-5 bg-gray-200"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
