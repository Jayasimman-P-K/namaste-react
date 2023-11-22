import React, { useEffect, useState } from "react";
import RestBox from "./RestBox";
import { Body_Info_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "../pages/Shimmer";
import { Link } from "react-router-dom";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    swiggyAPI();
  }, []);

  const swiggyAPI = async () => {
    const response = await fetch(Body_Info_URL);
    const data = await response.json();
    // console.log(data?.data?.cards[2]?.card?.card);
    setListOfRestaurants(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStaus = useOnlineStatus();

  if (onlineStaus === false) {
    return <h1>OOPS!! there is no network connection</h1>;
  }

  return (
    <div className="body mt-32">
      <div className="search-box  flex justify-center">
        <div className="search m-4 p-4">
          <input
            onChange={(e) => {
              const filteredRestaurant = listOfRestaurants.filter(
                (res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()) ||
                  res.info.cuisines
                    .join(", ")
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
              setSearchText(e.target.value);
            }}
            className="rounded-md ring-1 ring-inset ring-green-200 focus:ring-2 focus:ring-green-500 placeholder:italic py-1.5 pl-4 pr-20 text-gray-900 placeholder:text-gray-400 focus:outline-none"
            type="text"
            placeholder="McDonald's..."
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {listOfRestaurants === null ? (
        <Shimmer />
      ) : (
        <div className="rest-container flex justify-center">
          <div className="grid grid-cols-4 gap-4">
            {filteredRestaurants?.map((res) => {
              return (
                <Link key={res?.info?.id} to={"/restaurants/" + res?.info.id}>
                  <RestBox
                    name={res?.info?.name}
                    rating={res?.info?.avgRatingString}
                    costs={res?.info?.costForTwo}
                    cuisines={res?.info?.cuisines}
                    cloudinaryImageId={res?.info?.cloudinaryImageId}
                  />
                </Link>
              );
              // if (res && res?.info && res?.info?.id) {

              // }
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
