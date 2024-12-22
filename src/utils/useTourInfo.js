import * as React from "react";
import { useState, useEffect } from "react";

const useTourInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("In fetchData useRestaurantMenu");
  };

  return resInfo;
};

export default useTourInfo;
