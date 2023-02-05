// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, NON_VEG_IMG, VEG_IMG } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
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
          {/* <h1>Restuarant Id: {resId}</h1> */}
          <ul>
            <h1 className="text-2xl mb-2">{restaurant?.name}</h1>
            <div className="flex text-[rgb(171,167,167)]">
              <h3 className="px-1">{restaurant?.locality}, </h3>
              <h3 className="px-1">{restaurant?.area}, </h3>
              <h3 className="px-1">{restaurant?.city}</h3>
            </div>
            <div className="flex  text-[rgb(171,167,167)] mt-3">
              <h3 className="px-2">{restaurant?.avgRating} stars</h3>
              <h3 className="px-2">{restaurant?.costForTwoMsg}</h3>
            </div>
          </ul>
        </div>
      </div>

      <div>
        <h1 className="text-2xl">Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <div className="" key={item?.id}>
              <div className="mx-[300px] flex border-[2px] border-slate-500 bg-white py-[12px] mb-[12px] justify-between">
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
