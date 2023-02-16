import { useState, useEffect } from "react";
import { Car } from "../types/index";

export const useCars = () => {
  const [cars, setCarList] = useState<Array<Car>>([]);

  //Fetching data from json file
  const fetchCarList = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/cars.json", {
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

  const getCarById = (id:string) => cars.find(car => car.id === id);

  useEffect(() => {
    fetchCarList().then(setCarList);
  }, []);

  return { getCarsByType, getCarById };
};
