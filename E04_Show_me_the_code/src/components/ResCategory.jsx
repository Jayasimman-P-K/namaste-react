import ItemList from "./ItemList";
import { useState } from "react";

const ResCategory = ({ data, showItem, setShowIndex }) => {
  const toggleCurosel = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="">
          <div
            className="flex justify-between cursor-pointer"
            onClick={toggleCurosel}
          >
            <span className="font-bold text-xl">
              {data?.title} ({data?.itemCards.length})
            </span>
            <span>🔽</span>
          </div>
          {showItem && <ItemList items={data?.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default ResCategory;
// 🔼
