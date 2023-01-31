import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-details">
        <img
          className="restaurant-menu-img"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        />
        {/* <h1>Restuarant Id: {resId}</h1> */}
        <ul>
          <h1 className="restaurant-menu-name">{restaurant?.name}</h1>
          <h3 className="restaurant-menu-locality">{restaurant?.locality}, </h3>
          <h3 className="restaurant-menu-area">{restaurant?.area}, </h3>
          <h3 className="restaurant-menu-city">{restaurant?.city}</h3>
          <h3 className="restaurant-menu-rating">
            {restaurant?.avgRating} stars
          </h3>
          <h3 className="restaurant-menu-cost">{restaurant?.costForTwoMsg}</h3>
        </ul>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <div className="restaurant-menu-card" key={item?.id}>
              <div className="restaurant-menu-card-details">
                <li className="restaurant-menu-card-details-veg">
                  {item?.attributes?.vegClassifier}
                </li>
                <li className="restaurant-menu-card-details-name">
                  {item?.name}
                </li>
                <li className="restaurant-menu-card-details-price">
                  ₹{item?.price}
                </li>
                <li className="restaurant-menu-card-details-desc">
                  {item?.description}
                </li>
              </div>
              <img
                className="restaurant-menu-card-img"
                src={IMG_CDN_URL + item?.cloudinaryImageId}
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
