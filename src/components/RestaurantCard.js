import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
}) => {
  return (
    <div className="flex flex-wrap h-80 w-64 pl-5 pr-7 pb-14 pt-5 hover:shadow-[0.5px_0.5px_3px_0.2px_rgb(128,128,128)]">
      <img className="w-full" src={IMG_CDN_URL + cloudinaryImageId} />
      <div className="flex flex-col my-3">
        <span className="font-medium">{name}</span>
        <span className="text-[rgb(104,107,120)] text-[12px]">
          {cuisines.join(", ")}
        </span>
      </div>
      <div className="flex items-center text-[10px] text-[rgb(83,86,101)] ">
        <span className="mr-[29px]">{avgRating}*</span>
        <span className="mr-[27px]">{slaString}</span>
        <span className="">{costForTwoString}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;

/**
 * 
 * <div className="bg-blue-500">
        <ul className="">
          <li>
            <span>{name}</span>
          </li>
          <li>
            <span className="bg-yellow-500">{cuisines.join(",")}</span>
          </li>
          <li>
            <span>{avgRating} *</span>
          </li>
          <li>
            <span>{slaString}</span>
          </li>
          <li>
            <span>{costForTwoString}</span>
          </li>
        </ul>
      </div>
 */
