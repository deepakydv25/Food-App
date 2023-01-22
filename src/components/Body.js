import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2027489&lng=72.95860569999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <>
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
        ></input>
        <button search="search-btn">Submit</button>
      </div>
      <div className="restaurant-list">
        {allRestaurants.map((restaurant) => {
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
