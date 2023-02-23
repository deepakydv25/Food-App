// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, NON_VEG_IMG, VEG_IMG } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer, { MenuShimmer } from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div>
      <div className="bg-[rgb(24,23,23)] px-5 text-white flex h-[245px]">
        <div className="mx-[144px] flex my-10">
          <div className="table-cell align-top w-[254px] max-w-[254px] mr-[50px]">
            <img
              className="h-[165px]"
              src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            />
          </div>

          <ul>
            <h1 className="text-[32px]">{restaurant?.name}</h1>
            <span className=" px-1 text-[rgb(171,167,167)]">
              {restaurant?.cuisines.join(", ")}
            </span>
            <div className="flex text-[rgb(171,167,167)] mt-1">
              <h3 className="px-1">{restaurant?.locality}, </h3>
              <h3 className="px-1">{restaurant?.area}, </h3>
              <h3 className="px-1">{restaurant?.city}</h3>
            </div>
            <div className="flex  text-[rgb(171,167,167)] mt-7">
              <div className="flex flex-col mr-7  pr-5 border-r-[1px]">
                <span className="font-bold text-white">
                  * {restaurant?.avgRatingString}
                </span>
                <span className="text-[12px]">
                  {restaurant?.totalRatingsString}
                </span>
              </div>
              <div className="flex flex-col mr-7 pr-5 border-r-[1px]">
                <span className="font-bold text-white">
                  {restaurant?.sla?.slaString}
                </span>
                <span className="text-[12px]">Delivery Time</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white">
                  {restaurant?.costForTwoMsg}
                </span>
                <span className="text-[12px]">Cost for two</span>
              </div>
            </div>
          </ul>
        </div>
        <div className="mt-[50px] ml-[10px]">
          <div className="">
            <span className=" bg-[rgb(24,23,23)] absolute border border-[rgb(24,23,23)] w-[80px] font-bold text-[20px] pb-1">
              OFFER
            </span>
            <div className="pl-2 pt-[15px]">
              <div className="border w-[298px] h-[150px] pl-1">
                <div className="flex flex-col p-7">
                  <span className="text-white">FREE DELIVERY</span>
                  <span className="text-white">
                    20% off up to ₹120 | Use FEDERALCC Above ₹249
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-2xl">Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <div className="" key={item?.id}>
              <div className="mx-[300px] flex border-b-2 bg-white py-[12px] mb-[12px] justify-between">
                <div className="mx-5">
                  <li className="text-[12px]">
                    <div className="w-9">
                      {item?.attributes?.vegClassifier != "NONVEG" ? (
                        <img src={VEG_IMG} />
                      ) : (
                        <img src={NON_VEG_IMG} />
                      )}
                    </div>
                  </li>
                  <li className="text-2xl my-1">{item?.name}</li>
                  <li className="text-[rgb(47,47,47)]">₹{item?.price / 100}</li>
                  <li className="text-[rgb(134,133,133)] my-2">
                    {item?.description}
                  </li>
                </div>
                <img
                  className="w-[137px] mr-5"
                  src={IMG_CDN_URL + item?.cloudinaryImageId}
                />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
