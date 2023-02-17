import { useState, useEffect } from "react";
import { DEVELOPMENT_ENDPOINT } from "../constant";
import { Car } from "../types/index";

export const useCars = () => {
  const [cars, setCarList] = useState<Array<Car>>([]);

  //Fetching data from json file
  const fetchCarList = async () => {
    try {
      const response = await fetch(`${DEVELOPMENT_ENDPOINT}/api/cars.json`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Unable to fetch data", error);
    }
  };

  //Filtering the list on bodayType
  const getCarsByType = (type: string): Car[] => {
    if (type === "all") {
      return cars;
    } else {
      return cars.filter((car) => car.bodyType === type);
    }
  };

  //Filtering car by it's ID
  const getCarById = (id: string): Car | undefined =>
    cars.find((car) => car.id === id);

  useEffect(() => {
    fetchCarList().then(setCarList);
  }, []);

  return { getCarsByType, getCarById };
};
