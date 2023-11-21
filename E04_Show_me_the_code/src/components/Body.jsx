import React, { useEffect, useState } from "react";
import RestBox from "./RestBox";
import { Body_Info_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "../pages/Shimmer";
import { Link } from "react-router-dom";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);

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
  };

  const onlineStaus = useOnlineStatus();

  if (onlineStaus === false) {
    return <h1>OOPS!! there is no network connection</h1>;
  }

  return (
    <div className="body">
      <div className="search-box  flex justify-center">
        <div className="search m-4 p-4">
          <input className="border border-solid border-black" type="text" />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => console.log("btn clicked")}
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
            {listOfRestaurants?.map((res) => {
              return (
                <Link id={res?.info?.id} to={"/restaurants/" + res?.info.id}>
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
