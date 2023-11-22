import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useState } from "react";

const ItemList = ({ items, addBtn, reducerFunc }) => {
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(reducerFunc(item));
    // setAddBtn(addBtn === "ADD" ? "REMOVE" : "ADD");
  };

  return (
    <div>
      {items?.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                {item?.card?.info?.isVeg === 1 ? (
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/color-glass/48/vegetarian-food-symbol.png"
                    alt="vegetarian-food-symbol"
                  />
                ) : (
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/color-glass/48/non-vegetarian-food-symbol.png"
                    alt="non-vegetarian-food-symbol"
                  />
                )}
                <h2 className="text-lg text-gray-700">
                  {item?.card?.info?.name}
                </h2>
                <h3>
                  ₹
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </h3>
              </div>
              <div>
                <p className="text-xs text-gray-400">
                  {item?.card?.info?.description}
                </p>
              </div>
            </div>
            <div className="w-3/12">
              <div className="relative">
                <img
                  className="w-full p-3 rounded-3xl h-32 object-cover"
                  src={IMG_URL + item?.card?.info?.imageId}
                  alt=""
                />
                <div
                  onClick={() => {
                    addItemToCart(item);
                  }}
                  className="absolute cursor-pointer bottom-0 my-0 mx-11 rounded-lg bg-white hover:bg-green-50 hover:scale-105 p-2 px-5 border-green-400 border-2 hover:shadow-md"
                >
                  <button className="">{addBtn}</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
