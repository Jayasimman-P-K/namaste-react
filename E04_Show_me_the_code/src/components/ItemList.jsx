import { IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
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
                <div className="absolute right-1/4  bottom-0 bg-black text-white px-6 p-2 rounded-lg hover:scale-105 hover:cursor-pointer">
                  <button className="">ADD</button>
                </div>
                <img
                  className="w-full p-3 rounded-3xl h-32 object-cover"
                  src={IMG_URL + item?.card?.info?.imageId}
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
