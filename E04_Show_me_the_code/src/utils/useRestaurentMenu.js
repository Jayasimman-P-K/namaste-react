import { useState, useEffect } from "react";
import { Body_Info_URL, NewMenu_URL } from "./constants";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(NewMenu_URL + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurentMenu;
