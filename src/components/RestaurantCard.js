import { IMG_CDN_URL } from "../config";
import { AiFillStar } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
  ribbon,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className=" h-80 w-64 pl-5 pr-7 pb-14 pt-5 hover:shadow-[0.5px_0.5px_3px_0.2px_rgb(128,128,128)]">
      <div className="">
        {ribbon?.[0].type && (
          <div className="absolute  bg-[rgb(58,60,65)] text-white  font-medium text-xs py-1 px-2">
            {ribbon?.[0]?.type}
          </div>
        )}

        <img className="w-full" src={IMG_CDN_URL + cloudinaryImageId} />
        <div className="flex flex-col my-3">
          <span className="font-medium">{name}</span>
          <span className="text-[rgb(104,107,120)] text-[12px]">
            {cuisines.join(", ")}
          </span>
        </div>
        <div className="flex space-x-[15px] items-center text-[10px] text-[rgb(83,86,101)] font-semibold pb-1">
          <div
            className={`flex text-white items-center p-[2px] ${
              +avgRating >= 4 ? "bg-[#48c479]" : " bg-[#db7c38]"
            }`}
          >
            <span>
              <AiFillStar />
            </span>
            <span>{avgRating}</span>
          </div>
          <div>•</div>
          <span className="">{slaString}</span>

          <div>•</div>
          <span className="">{costForTwoString}</span>
        </div>
        <div className="flex items-center text-red-500 mt-3 pt-3 font-semibold border-t-2">
          <span>
            <TbDiscount2 />
          </span>
          <span className="ml-1 text-xs">
            {aggregatedDiscountInfo?.shortDescriptionList?.[0]?.meta}
          </span>
        </div>
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
