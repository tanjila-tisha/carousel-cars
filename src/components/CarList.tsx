import React from "react";
import { View } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { getCarTypes } from "../util";
import CarCard from "./CarCard";
import CarouselButton from "./CarouselButton";
import DropDown from "./DropDown";

const CarList = (): JSX.Element => {
  const [filteredType, setFilteredType] = React.useState<string>("all");
  const [activeCard, setActiveCard] = React.useState<number>(0);
  const { getCarsByType } = useCars();
  const cars = getCarsByType(filteredType);

  const updateActiveCard = (index: number) => setActiveCard(index);

  return (
    <div className="wrapper">
      <DropDown
        options={getCarTypes()}
        selected={filteredType}
        onChange={setFilteredType}
        label="Filter cars by type"
      />
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translateX(-${activeCard * 25}%)` }}
        >
          {cars.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
      </div>
      <View className="buttons-wrapper">
        <div className="buttons">
          <CarouselButton
            type="mediacircled-previous-32"
            onClick={updateActiveCard}
            index={activeCard - 1}
            disabled={activeCard === 0}
          />
          <CarouselButton
            type="mediacircled-next-32"
            onClick={updateActiveCard}
            index={activeCard + 1}
            disabled={activeCard === cars.length - 1}
          />
        </div>
      </View>
      <div className="carousel-indicator">
        {cars.map((car, index) => (
          <div
            key={car.id}
            onClick={() => updateActiveCard(index)}
            className={
              index === activeCard
                ? "carousel-indicator-dot carousel-indicator-dot-active"
                : "carousel-indicator-dot"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CarList;
