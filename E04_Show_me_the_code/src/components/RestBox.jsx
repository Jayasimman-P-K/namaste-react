import React from "react";
import { IMG_URL } from "../utils/constants";

function RestBox({ name, costs, rating, cuisines, cloudinaryImageId }) {
  return (
    <div className="rest-box m-4 p-4 w-[250px] min-h-full hover:scale-105 transition-all">
      <div className="box-food-img ">
        <img
          className="rounded-lg h-56 w-full object-cover"
          src={IMG_URL + cloudinaryImageId}
        />
      </div>

      <div className="box-rest-text">
        <h2 className="font-bold text-lg py-4">{name}</h2>
        <h3>{costs}</h3>
        <h4>{rating} Stars</h4>
        {/* <h4>{cuisines?.join(", ")}</h4> */}
      </div>
    </div>
  );
}

export const RestBoxPromoted = () => {
  return (
    <div>
      <label>Promoted</label>
      <RestBox />
    </div>
  );
};

export default RestBox;
