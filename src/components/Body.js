import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/Helper";
import Carousel from "./Carousel";
import { SWIGGY_URL } from "../config";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [fillteredRestaurants, setFillteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFillteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <Carousel />
      </div>
      <div className="shadow-lg pb-1">
        <div className="pl-2 my-5 mx-[144px] flex justify-center">
          <input
            type="search"
            className="placeholder:italic bg-white border border-slate-300 rounded-full py-1 pl-9 pr-[300px] shadow-sm focus:outline-none focus:border-orange focus:ring-orange focus:ring-1"
            placeholder="Search Restaurant..."
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            className="bg-orange border border-white rounded-full py-1 px-5 ml-7 text-cyan-50 hover:bg-white hover:text-orange hover:border-orange"
            search="search-btn"
            onClick={() => {
              const data = filterData(searchInput, allRestaurants);
              setFillteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap py-4 mx-[144px]">
        {fillteredRestaurants.map((restaurant) => {
          return (
            <div className="m-5">
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Body;
