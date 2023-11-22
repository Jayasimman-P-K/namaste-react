import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import Shimmer from "../pages/Shimmer";
import { IMG_URL } from "../utils/constants";
import ResCategory from "./ResCategory";
import { useState } from "react";

const ResMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    cloudinaryImageId,
    areaName,
    city,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => {
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  //   console.log(categories);

  return (
    <div className="text-center mt-36">
      <div className="">
        <h1 className="my-6 text-xl font-bold">{name}</h1>
        <h2 className="text-base font-bold">
          {cuisines.join(", ")} - {costForTwoMessage}
        </h2>
        {categories?.map((Category, index) => (
          <ResCategory
            key={Category?.card?.card?.title}
            data={Category?.card?.card}
            showItem={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
